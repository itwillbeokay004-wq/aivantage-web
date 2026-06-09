import { NextResponse } from "next/server";

import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { createChatRequestSchema } from "@/lib/schemas";

const chatCopy = {
  es: {
    invalid: "Solicitud de chat no válida.",
    systemInstruction:
      "Eres el asistente del sitio web de AiVantage. Ayuda a visitantes a entender los servicios de AiVantage, agentes de IA, casos de uso de automatización, orientación general de precios y reserva de demos. No hagas afirmaciones sin respaldo. Recomienda reservar una demo para recomendaciones detalladas.",
    fallbackReply:
      "Puedo ayudarte con información general sobre AiVantage: chatbots para sitios web, asistentes telefónicos con IA, cualificación de clientes potenciales, automatización de atención al cliente y planificación de demos. Para recomendaciones detalladas, reserva una demo para que el equipo revise tu proceso.",
  },
  en: {
    invalid: "Invalid chat request.",
    systemInstruction:
      "You are the AiVantage website assistant. Help visitors understand AiVantage services, AI agents, automation use cases, pricing direction, and demo booking. Do not make unsupported claims. Encourage booking a demo for detailed recommendations.",
    fallbackReply:
      "I can help with general AiVantage guidance: website chatbots, AI phone assistants, lead qualification, support automation, and demo planning. For detailed recommendations, please book a demo so the team can review your workflow.",
  },
} as const;

type OpenAIChatResponse = {
  choices?: Array<{
    message?: {
      content?: string | null;
    };
  }>;
  error?: {
    message?: string;
  };
};

export async function POST(request: Request) {
  // TODO: Add IP/session rate limits, bot detection, and per-origin throttling before production launch.
  // TODO: Add monitoring for repeated abuse patterns and unusually long conversations.
  const body: unknown = await request.json().catch(() => null);
  const bodyLocale = getBodyLocale(body);
  const result = createChatRequestSchema(bodyLocale).safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: chatCopy[bodyLocale].invalid, issues: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const copy = chatCopy[result.data.locale];
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      ok: true,
      mode: "fallback",
      reply: copy.fallbackReply,
    });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_CHAT_MODEL ?? "gpt-4o-mini",
        temperature: 0.4,
        max_tokens: 220,
        messages: [
          { role: "system", content: copy.systemInstruction },
          ...result.data.history.map((message) => ({
            role: message.role,
            content: message.content,
          })),
          { role: "user", content: result.data.message },
        ],
      }),
      signal: AbortSignal.timeout(12000),
    });

    if (!response.ok) {
      const errorBody = (await response.json().catch(() => null)) as
        | OpenAIChatResponse
        | null;
      console.error(
        "OpenAI chat request failed:",
        errorBody?.error?.message ?? response.statusText,
      );

      return NextResponse.json({
        ok: true,
        mode: "fallback",
        reply: copy.fallbackReply,
      });
    }

    const data = (await response.json()) as OpenAIChatResponse;
    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json({
        ok: true,
        mode: "fallback",
        reply: copy.fallbackReply,
      });
    }

    return NextResponse.json({
      ok: true,
      mode: "ai",
      reply: reply.slice(0, 1200),
    });
  } catch (error) {
    console.error("OpenAI chat route error:", error);

    return NextResponse.json({
      ok: true,
      mode: "fallback",
      reply: copy.fallbackReply,
    });
  }
}

function getBodyLocale(body: unknown): Locale {
  if (body && typeof body === "object" && "locale" in body) {
    const locale = body.locale;

    if (typeof locale === "string" && isLocale(locale)) {
      return locale;
    }
  }

  return defaultLocale;
}
