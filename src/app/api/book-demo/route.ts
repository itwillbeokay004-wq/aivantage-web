import { NextResponse } from "next/server";

import {
  EmailConfigurationError,
  EmailDeliveryError,
  hasHoneypotValue,
  sendDemoRequestEmail,
} from "@/lib/email";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { createDemoSchema } from "@/lib/schemas";

const responseCopy = {
  es: {
    invalid: "Revisa los campos e inténtalo de nuevo.",
    received:
      "Gracias. Hemos recibido tu solicitud de demo. Nos pondremos en contacto contigo para coordinar los siguientes pasos.",
    notConfigured: "El servicio de email no está configurado.",
    delivery: "No se ha podido enviar el email ahora mismo. Inténtalo de nuevo más tarde.",
    unexpected: "Ha ocurrido un error inesperado. Inténtalo de nuevo más tarde.",
  },
  en: {
    invalid: "Invalid demo request.",
    received: "Demo request received. We will send next steps shortly.",
    notConfigured: "Email service is not configured.",
    delivery: "Email could not be sent right now. Please try again later.",
    unexpected: "Unexpected email error. Please try again later.",
  },
} as const;

export async function POST(request: Request) {
  // TODO: Add IP/user-agent based rate limiting before production launch.
  const body: unknown = await request.json().catch(() => null);
  const locale = getBodyLocale(body);
  const copy = responseCopy[locale];
  const result = createDemoSchema(locale).safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: copy.invalid, issues: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  if (hasHoneypotValue(result.data.website)) {
    return NextResponse.json({
      ok: true,
      message: copy.received,
    });
  }

  try {
    await sendDemoRequestEmail(result.data);
  } catch (error) {
    if (error instanceof EmailConfigurationError) {
      logEmailError("Demo email configuration error", error);
      return NextResponse.json({ error: copy.notConfigured }, { status: 500 });
    }

    if (error instanceof EmailDeliveryError) {
      logEmailError("Demo email delivery error", error);
      return NextResponse.json({ error: copy.delivery }, { status: 502 });
    }

    logEmailError("Unexpected demo email error", error);
    return NextResponse.json({ error: copy.unexpected }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    message: copy.received,
  });
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

function logEmailError(context: string, error: unknown) {
  const message = error instanceof Error ? error.message : "Unknown error";

  if (process.env.NODE_ENV === "production") {
    console.error(`${context}: ${message}`);
    return;
  }

  console.error(`${context}:`, error);
}
