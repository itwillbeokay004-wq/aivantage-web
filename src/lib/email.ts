import { Resend } from "resend";

import { siteConfig } from "@/data/site";
import type { ContactFormValues, DemoFormValues } from "@/lib/schemas";

type EmailField = {
  label: string;
  value: string;
};

type LeadEmailOptions = {
  subject: string;
  confirmationSubject: string;
  intro: string;
  confirmationIntro: string;
  fields: readonly EmailField[];
  userEmail: string;
  userName: string;
};

export class EmailConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EmailConfigurationError";
  }
}

export class EmailDeliveryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EmailDeliveryError";
  }
}

let resend: Resend | null = null;

export function hasHoneypotValue(value: string | undefined) {
  return Boolean(value?.trim());
}

export async function sendContactRequestEmail(data: ContactFormValues) {
  await sendLeadEmail({
    subject: `New AiVantage contact request from ${data.name}`,
    confirmationSubject: "We received your AiVantage message",
    intro: "A new contact form request was submitted on aivantage.es.",
    confirmationIntro:
      "Thanks for contacting AiVantage. We received your message and will review it shortly.",
    userEmail: data.email,
    userName: data.name,
    fields: [
      { label: "Name", value: data.name },
      { label: "Email", value: data.email },
      { label: "Company", value: data.company },
      { label: "Interest", value: data.interest },
      { label: "Message", value: data.message },
    ],
  });
}

export async function sendDemoRequestEmail(data: DemoFormValues) {
  await sendLeadEmail({
    subject: `New AiVantage demo request from ${data.name}`,
    confirmationSubject: "We received your AiVantage demo request",
    intro: "A new demo request was submitted on aivantage.es.",
    confirmationIntro:
      "Thanks for requesting an AiVantage demo. We received your request and will send next steps shortly.",
    userEmail: data.email,
    userName: data.name,
    fields: [
      { label: "Name", value: data.name },
      { label: "Email", value: data.email },
      { label: "Company", value: data.company },
      { label: "Team size", value: data.teamSize },
      { label: "Primary use case", value: data.useCase },
      { label: "Timeline", value: data.timeline },
      { label: "Message", value: data.message },
    ],
  });
}

async function sendLeadEmail(options: LeadEmailOptions) {
  const { apiKey, fromEmail, toEmail } = getEmailConfig();
  const client = getResendClient(apiKey);

  await Promise.all([
    sendEmail(client, {
      from: fromEmail,
      to: toEmail,
      replyTo: options.userEmail,
      subject: `[${siteConfig.name}] ${options.subject}`,
      text: buildLeadText(options),
      html: buildLeadHtml(options),
    }),
    sendEmail(client, {
      from: fromEmail,
      to: options.userEmail,
      subject: options.confirmationSubject,
      text: buildConfirmationText(options),
      html: buildConfirmationHtml(options),
    }),
  ]);
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey) {
    throw new EmailConfigurationError("Missing RESEND_API_KEY.");
  }

  if (!fromEmail) {
    throw new EmailConfigurationError("Missing CONTACT_FROM_EMAIL.");
  }

  if (!toEmail) {
    throw new EmailConfigurationError("Missing CONTACT_TO_EMAIL.");
  }

  return { apiKey, fromEmail, toEmail };
}

function getResendClient(apiKey: string) {
  if (!resend) {
    resend = new Resend(apiKey);
  }

  return resend;
}

async function sendEmail(
  client: Resend,
  payload: {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
    replyTo?: string;
  },
) {
  const { error } = await client.emails.send(payload);

  if (error) {
    throw new EmailDeliveryError(error.message || "Resend rejected the email.");
  }
}

function buildLeadText(options: LeadEmailOptions) {
  return [
    options.intro,
    "",
    ...options.fields.map((field) => `${field.label}: ${field.value}`),
    "",
    `Source: ${siteConfig.domain}`,
  ].join("\n");
}

function buildConfirmationText(options: LeadEmailOptions) {
  return [
    `Hi ${options.userName},`,
    "",
    options.confirmationIntro,
    "",
    "Here is what we received:",
    "",
    ...options.fields
      .filter((field) => field.label !== "Email")
      .map((field) => `${field.label}: ${field.value}`),
    "",
    "AiVantage",
    siteConfig.domain,
  ].join("\n");
}

function buildLeadHtml(options: LeadEmailOptions) {
  return emailShell(`
    <p>${escapeHtml(options.intro)}</p>
    ${fieldsTable(options.fields)}
    <p style="color:#64748b;font-size:13px;">Source: ${escapeHtml(siteConfig.domain)}</p>
  `);
}

function buildConfirmationHtml(options: LeadEmailOptions) {
  return emailShell(`
    <p>Hi ${escapeHtml(options.userName)},</p>
    <p>${escapeHtml(options.confirmationIntro)}</p>
    <p>Here is what we received:</p>
    ${fieldsTable(options.fields.filter((field) => field.label !== "Email"))}
    <p style="margin-top:24px;">AiVantage<br />${escapeHtml(siteConfig.domain)}</p>
  `);
}

function fieldsTable(fields: readonly EmailField[]) {
  return `
    <table style="border-collapse:collapse;margin:20px 0;width:100%;">
      <tbody>
        ${fields
          .map(
            (field) => `
              <tr>
                <td style="border:1px solid #dbeafe;color:#0f172a;font-weight:700;padding:10px;vertical-align:top;width:34%;">
                  ${escapeHtml(field.label)}
                </td>
                <td style="border:1px solid #dbeafe;color:#334155;padding:10px;white-space:pre-wrap;">
                  ${escapeHtml(field.value)}
                </td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function emailShell(content: string) {
  return `
    <div style="background:#f8fafc;font-family:Inter,Arial,sans-serif;padding:24px;">
      <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;margin:0 auto;max-width:640px;padding:28px;">
        <h1 style="color:#020617;font-size:22px;line-height:1.3;margin:0 0 16px;">
          ${escapeHtml(siteConfig.name)}
        </h1>
        <div style="color:#334155;font-size:15px;line-height:1.7;">
          ${content}
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
