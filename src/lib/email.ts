import { Resend } from "resend";

import { siteConfig } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import type { ContactFormValues, DemoFormValues } from "@/lib/schemas";

type EmailField = {
  label: string;
  value: string;
};

type LeadEmailOptions = {
  locale: Locale;
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
  const copy = emailCopy[data.locale];

  await sendLeadEmail({
    locale: data.locale,
    subject:
      data.locale === "es"
        ? "Nuevo mensaje desde AiVantage"
        : "New message from AiVantage",
    confirmationSubject:
      data.locale === "es"
        ? "Hemos recibido tu mensaje para AiVantage"
        : "We received your AiVantage message",
    intro:
      data.locale === "es"
        ? "Se ha recibido una nueva solicitud de contacto en aivantage.es."
        : "A new contact form request was submitted on aivantage.es.",
    confirmationIntro:
      data.locale === "es"
        ? "Gracias por contactar con AiVantage. Hemos recibido tu mensaje y lo revisaremos pronto."
        : "Thanks for contacting AiVantage. We received your message and will review it shortly.",
    userEmail: data.email,
    userName: data.name,
    fields: compactFields([
      { label: copy.name, value: data.name },
      { label: copy.email, value: data.email },
      { label: copy.phone, value: data.phone },
      { label: copy.company, value: data.company },
      { label: copy.message, value: data.message },
    ]),
  });
}

export async function sendDemoRequestEmail(data: DemoFormValues) {
  const copy = emailCopy[data.locale];

  await sendLeadEmail({
    locale: data.locale,
    subject:
      data.locale === "es"
        ? "Nueva solicitud de demo — AiVantage"
        : "New demo request — AiVantage",
    confirmationSubject:
      data.locale === "es"
        ? "Hemos recibido tu solicitud de demo"
        : "We received your demo request",
    intro:
      data.locale === "es"
        ? "Se ha recibido una nueva solicitud de demo en aivantage.es."
        : "A new demo request was submitted on aivantage.es.",
    confirmationIntro:
      data.locale === "es"
        ? "Gracias por solicitar una demo de AiVantage. Hemos recibido tu solicitud y nos pondremos en contacto contigo para coordinar los siguientes pasos."
        : "Thanks for requesting an AiVantage demo. We received your request and will send next steps shortly.",
    userEmail: data.email,
    userName: data.name,
    fields: compactFields([
      { label: copy.name, value: data.name },
      { label: copy.email, value: data.email },
      { label: copy.phone, value: data.phone },
      { label: copy.company, value: data.company },
      { label: copy.businessWebsite, value: data.businessWebsite },
      { label: copy.industry, value: data.industry },
      { label: copy.automationGoal, value: data.automationGoal },
      { label: copy.preferredContactMethod, value: data.preferredContactMethod },
      { label: copy.preferredDateTime, value: data.preferredDateTime },
      { label: copy.sourceIdea, value: data.sourceIdea },
      { label: copy.generatedAgentName, value: data.generatedAgentName },
    ]),
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
  const sourceLabel = options.locale === "es" ? "Fuente" : "Source";

  return [
    options.intro,
    "",
    ...options.fields.map((field) => `${field.label}: ${field.value}`),
    "",
    `${sourceLabel}: ${siteConfig.domain}`,
  ].join("\n");
}

function buildConfirmationText(options: LeadEmailOptions) {
  const copy = confirmationCopy[options.locale];

  return [
    `${copy.greeting} ${options.userName},`,
    "",
    options.confirmationIntro,
    "",
    copy.received,
    "",
    ...options.fields
      .filter((field) => field.label !== emailCopy[options.locale].email)
      .map((field) => `${field.label}: ${field.value}`),
    "",
    "AiVantage",
    siteConfig.domain,
  ].join("\n");
}

function buildLeadHtml(options: LeadEmailOptions) {
  const sourceLabel = options.locale === "es" ? "Fuente" : "Source";

  return emailShell(`
    <p>${escapeHtml(options.intro)}</p>
    ${fieldsTable(options.fields)}
    <p style="color:#64748b;font-size:13px;">${sourceLabel}: ${escapeHtml(siteConfig.domain)}</p>
  `);
}

function buildConfirmationHtml(options: LeadEmailOptions) {
  const copy = confirmationCopy[options.locale];

  return emailShell(`
    <p>${copy.greeting} ${escapeHtml(options.userName)},</p>
    <p>${escapeHtml(options.confirmationIntro)}</p>
    <p>${copy.received}</p>
    ${fieldsTable(
      options.fields.filter((field) => field.label !== emailCopy[options.locale].email),
    )}
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

const emailCopy = {
  es: {
    name: "Nombre",
    email: "Email",
    phone: "Teléfono",
    company: "Empresa",
    message: "Mensaje",
    businessWebsite: "Sitio web",
    industry: "Industria",
    automationGoal: "Qué quiere automatizar",
    preferredContactMethod: "Método de contacto preferido",
    preferredDateTime: "Fecha y hora preferidas",
    sourceIdea: "Idea generada",
    generatedAgentName: "Agente generado",
  },
  en: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    message: "Message",
    businessWebsite: "Website",
    industry: "Industry",
    automationGoal: "What they want to automate",
    preferredContactMethod: "Preferred contact method",
    preferredDateTime: "Preferred date/time",
    sourceIdea: "Generated idea",
    generatedAgentName: "Generated agent",
  },
} as const satisfies Record<Locale, Record<string, string>>;

const confirmationCopy = {
  es: {
    greeting: "Hola",
    received: "Esto es lo que hemos recibido:",
  },
  en: {
    greeting: "Hi",
    received: "Here is what we received:",
  },
} as const satisfies Record<Locale, { greeting: string; received: string }>;

function compactFields(fields: readonly { label: string; value: string }[]) {
  return fields.filter((field) => field.value.trim().length > 0);
}
