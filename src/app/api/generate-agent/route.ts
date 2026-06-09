import { NextResponse } from "next/server";
import OpenAI from "openai";

import {
  agentRecommendationSchema,
  generateAgentRequestSchema,
  getFallbackAgentRecommendation,
  type AgentRecommendation,
} from "@/lib/agent-recommendation";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";

const responseCopy = {
  es: {
    invalid: "Cuéntanos brevemente qué quieres automatizar.",
    rateLimited: "Demasiadas solicitudes. Espera un momento e inténtalo de nuevo.",
  },
  en: {
    invalid: "Briefly describe what you want to automate.",
    rateLimited: "Too many requests. Please wait a moment and try again.",
  },
} as const;

const responseFormat = {
  type: "json_schema" as const,
  name: "agent_recommendation",
  strict: true,
  schema: {
    type: "object",
    additionalProperties: false,
    required: [
      "agentName",
      "summary",
      "workflow",
      "channels",
      "recommendedIntegrations",
      "estimatedSetup",
      "nextStep",
      "ctaLabel",
      "ctaHref",
    ],
    properties: {
      agentName: { type: "string", minLength: 2, maxLength: 90 },
      summary: { type: "string", minLength: 10, maxLength: 700 },
      workflow: {
        type: "array",
        minItems: 3,
        maxItems: 6,
        items: { type: "string", minLength: 2, maxLength: 140 },
      },
      channels: {
        type: "array",
        minItems: 1,
        maxItems: 6,
        items: { type: "string", minLength: 2, maxLength: 80 },
      },
      recommendedIntegrations: {
        type: "array",
        minItems: 1,
        maxItems: 6,
        items: { type: "string", minLength: 2, maxLength: 80 },
      },
      estimatedSetup: { type: "string", minLength: 2, maxLength: 80 },
      nextStep: { type: "string", minLength: 10, maxLength: 300 },
      ctaLabel: { type: "string", minLength: 2, maxLength: 60 },
      ctaHref: { type: "string", minLength: 1, maxLength: 80 },
    },
  },
};

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = generateAgentRequestSchema.safeParse(body);
  const locale = parsed.success ? parsed.data.locale : "es";
  const copy = responseCopy[locale];
  const ip = getClientIp(request);

  // TODO: Replace this in-memory limiter with Upstash/Vercel KV for production multi-region enforcement.
  if (isRateLimited(`generate-agent:${ip}`, { limit: 20, windowMs: 60_000 })) {
    return NextResponse.json({ error: copy.rateLimited }, { status: 429 });
  }

  if (!parsed.success) {
    return NextResponse.json(
      { error: copy.invalid, issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const fallback = getFallbackAgentRecommendation(parsed.data.locale, parsed.data.userIdea);

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ ok: true, source: "fallback", recommendation: fallback });
  }

  try {
    const recommendation = await generateWithOpenAI(parsed.data, fallback);
    return NextResponse.json({ ok: true, source: "openai", recommendation });
  } catch (error) {
    logGenerateError(error);
    return NextResponse.json({ ok: true, source: "fallback", recommendation: fallback });
  }
}

async function generateWithOpenAI(
  data: { locale: "es" | "en"; userIdea: string; businessType?: string; contactIntent?: string },
  fallback: AgentRecommendation,
) {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const model = process.env.OPENAI_MODEL || "gpt-5.5";
  const localeInstruction =
    data.locale === "es"
      ? "Responde en español profesional, natural y nativo para AiVantage. No suenes traducido. Evita Spanglish. Usa términos como reservar una demo, clientes potenciales, agentes de IA, atención al cliente y automatización de procesos cuando encajen."
      : "Respond in clear professional SaaS English for AiVantage.";

  const response = await client.responses.create({
    model,
    instructions: [
      "You are the AiVantage AI builder API.",
      localeInstruction,
      "Do not make unsupported claims.",
      "Do not promise exact prices.",
      "Do not claim integrations are active unless the visitor asks for a proposal.",
      "Always recommend booking a demo for detailed implementation.",
      "Return only structured JSON matching the schema.",
    ].join("\n"),
    input: [
      {
        role: "user",
        content: [
          `Locale: ${data.locale}`,
          `User idea: ${data.userIdea}`,
          data.businessType ? `Business type: ${data.businessType}` : "Business type: not provided",
          data.contactIntent ? `Contact intent: ${data.contactIntent}` : "Contact intent: not provided",
          `Fallback reference: ${JSON.stringify(fallback)}`,
        ].join("\n"),
      },
    ],
    text: {
      format: responseFormat,
      verbosity: "low",
    },
  });

  const json = JSON.parse(response.output_text) as unknown;
  const result = agentRecommendationSchema.safeParse(json);

  if (!result.success) {
    throw new Error("OpenAI response did not match the recommendation schema.");
  }

  return normalizeCta(result.data, data.locale);
}

function normalizeCta(recommendation: AgentRecommendation, locale: "es" | "en") {
  return {
    ...recommendation,
    ctaLabel: locale === "es" ? "Reservar una demo" : "Book a demo",
    ctaHref: locale === "es" ? "/reservar-demo" : "/en/book-demo",
  } satisfies AgentRecommendation;
}

function logGenerateError(error: unknown) {
  const message = error instanceof Error ? error.message : "Unknown error";

  if (process.env.NODE_ENV === "production") {
    console.error(`Generate-agent fallback used: ${message}`);
    return;
  }

  console.error("Generate-agent fallback used:", error);
}
