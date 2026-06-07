import { NextResponse } from "next/server";

import { chatRequestSchema } from "@/lib/schemas";

const SYSTEM_INSTRUCTION =
  "You are the AiVantage website assistant. Help visitors understand AiVantage services, AI agents, automation use cases, pricing direction, and demo booking. Do not make unsupported claims. Encourage booking a demo for detailed recommendations.";

const FALLBACK_REPLY =
  "I can help with general AiVantage guidance: website chatbots, AI phone assistants, lead qualification, support automation, and demo planning. For detailed recommendations, please book a demo so the team can review your workflow.";

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
  const result = chatRequestSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid chat request", issues: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      ok: true,
      mode: "fallback",
      reply: FALLBACK_REPLY,
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
          { role: "system", content: SYSTEM_INSTRUCTION },
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
        reply: FALLBACK_REPLY,
      });
    }

    const data = (await response.json()) as OpenAIChatResponse;
    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json({
        ok: true,
        mode: "fallback",
        reply: FALLBACK_REPLY,
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
      reply: FALLBACK_REPLY,
    });
  }
}
