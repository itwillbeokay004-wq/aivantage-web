import { NextResponse } from "next/server";

import {
  EmailConfigurationError,
  EmailDeliveryError,
  hasHoneypotValue,
  sendDemoRequestEmail,
} from "@/lib/email";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { storeDemoLead } from "@/lib/lead-storage";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";
import { createDemoSchema } from "@/lib/schemas";

const responseCopy = {
  es: {
    invalid: "Revisa los campos e inténtalo de nuevo.",
    received:
      "Gracias. Hemos recibido tu solicitud de demo. Te contactaremos para coordinar los siguientes pasos.",
    rateLimited: "Demasiadas solicitudes. Espera un momento e inténtalo de nuevo.",
    delivery: "No pudimos enviar el email ahora mismo. Prueba de nuevo más tarde.",
    unexpected: "Ha ocurrido un error inesperado. Inténtalo de nuevo más tarde.",
  },
  en: {
    invalid: "Please check the fields and try again.",
    received: "Thanks. We received your demo request and will contact you to coordinate next steps.",
    rateLimited: "Too many requests. Please wait a moment and try again.",
    delivery: "We could not send the email right now. Please try again later.",
    unexpected: "Something unexpected happened. Please try again later.",
  },
} as const;

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const locale = getBodyLocale(body);
  const copy = responseCopy[locale];
  const ip = getClientIp(request);

  // TODO: Replace this in-memory limiter with Upstash/Vercel KV for production multi-region enforcement.
  if (isRateLimited(`book-demo:${ip}`, { limit: 8, windowMs: 60_000 })) {
    return NextResponse.json({ error: copy.rateLimited }, { status: 429 });
  }

  const result = createDemoSchema(locale).safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: copy.invalid, issues: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  if (hasHoneypotValue(result.data.website)) {
    return NextResponse.json({ ok: true, message: copy.received });
  }

  try {
    await storeDemoLead(result.data);
  } catch (error) {
    logSafeError("Demo lead storage error", error);
  }

  try {
    await sendDemoRequestEmail(result.data);
  } catch (error) {
    if (error instanceof EmailConfigurationError) {
      logSafeError("Demo email not configured", error);
      return NextResponse.json({ ok: true, emailConfigured: false, message: copy.received });
    }

    if (error instanceof EmailDeliveryError) {
      logSafeError("Demo email delivery error", error);
      return NextResponse.json({ error: copy.delivery }, { status: 502 });
    }

    logSafeError("Unexpected demo email error", error);
    return NextResponse.json({ error: copy.unexpected }, { status: 500 });
  }

  return NextResponse.json({ ok: true, emailConfigured: true, message: copy.received });
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

function logSafeError(context: string, error: unknown) {
  const message = error instanceof Error ? error.message : "Unknown error";

  if (process.env.NODE_ENV === "production") {
    console.error(`${context}: ${message}`);
    return;
  }

  console.error(`${context}:`, error);
}
