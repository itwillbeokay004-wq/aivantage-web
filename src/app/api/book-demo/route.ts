import { NextResponse } from "next/server";

import {
  EmailConfigurationError,
  EmailDeliveryError,
  hasHoneypotValue,
  sendDemoRequestEmail,
} from "@/lib/email";
import { demoSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  // TODO: Add IP/user-agent based rate limiting before production launch.
  const body: unknown = await request.json().catch(() => null);
  const result = demoSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid demo request", issues: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  if (hasHoneypotValue(result.data.website)) {
    return NextResponse.json({
      ok: true,
      message: "Demo request received.",
    });
  }

  try {
    await sendDemoRequestEmail(result.data);
  } catch (error) {
    if (error instanceof EmailConfigurationError) {
      console.error("Demo email configuration error:", error.message);
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    if (error instanceof EmailDeliveryError) {
      console.error("Demo email delivery error:", error.message);
      return NextResponse.json(
        { error: "Email could not be sent right now. Please try again later." },
        { status: 502 },
      );
    }

    console.error("Unexpected demo email error:", error);
    return NextResponse.json(
      { error: "Unexpected email error. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Demo request sent. Please check your inbox for confirmation.",
  });
}
