import { z } from "zod";

import { defaultLocale, type Locale } from "@/lib/i18n";

const localeSchema = z.enum(["es", "en"]).default(defaultLocale);

const validationCopy = {
  es: {
    required: "Este campo es obligatorio.",
    name: "Introduce un nombre válido.",
    email: "Introduce un email válido.",
    phone: "Introduce un teléfono válido.",
    message: "Cuéntanos brevemente qué necesitas.",
    tooLong: "El texto es demasiado largo.",
  },
  en: {
    required: "This field is required.",
    name: "Enter your name.",
    email: "Enter a valid business email.",
    phone: "Enter a valid phone number.",
    message: "Share a little more detail.",
    tooLong: "This is too long.",
  },
} as const;

const honeypot = z.string().trim().max(200).optional().default("");
const phonePattern = /^[+()\d\s.-]{7,24}$/;

const textValue = (value: unknown) => (typeof value === "string" ? value.trim() : "");

function requiredText(locale: Locale, max = 120) {
  const copy = validationCopy[locale];

  return z
    .preprocess(textValue, z.string())
    .pipe(z.string().min(1, copy.required).max(max, copy.tooLong));
}

function optionalText(locale: Locale, max = 120) {
  const copy = validationCopy[locale];

  return z
    .preprocess(textValue, z.string())
    .pipe(z.string().max(max, copy.tooLong))
    .default("");
}

function nameField(locale: Locale) {
  const copy = validationCopy[locale];

  return requiredText(locale, 80).refine((value) => value.length >= 2, copy.name);
}

function emailField(locale: Locale) {
  const copy = validationCopy[locale];

  return requiredText(locale, 120).refine((value) => z.string().email().safeParse(value).success, {
    message: copy.email,
  });
}

function requiredPhoneField(locale: Locale) {
  const copy = validationCopy[locale];

  return requiredText(locale, 40).refine((value) => phonePattern.test(value), copy.phone);
}

function optionalPhoneField(locale: Locale) {
  const copy = validationCopy[locale];

  return optionalText(locale, 40).refine(
    (value) => value.length === 0 || phonePattern.test(value),
    copy.phone,
  );
}

function messageField(locale: Locale) {
  const copy = validationCopy[locale];

  return requiredText(locale, 1200).refine((value) => value.length >= 12, copy.message);
}

const chatContent = z
  .string()
  .trim()
  .min(1, "Enter a message.")
  .max(700, "Message must be 700 characters or fewer.");

export function createContactSchema(locale: Locale = defaultLocale) {
  return z.object({
    locale: localeSchema.default(locale),
    name: nameField(locale),
    email: emailField(locale),
    phone: optionalPhoneField(locale),
    company: optionalText(locale, 100),
    message: messageField(locale),
    website: honeypot,
  });
}

export function createDemoSchema(locale: Locale = defaultLocale) {
  return z.object({
    locale: localeSchema.default(locale),
    name: nameField(locale),
    email: emailField(locale),
    phone: requiredPhoneField(locale),
    company: requiredText(locale, 100),
    businessWebsite: requiredText(locale, 160),
    industry: requiredText(locale, 100),
    automationGoal: messageField(locale),
    preferredContactMethod: requiredText(locale, 40),
    preferredDateTime: optionalText(locale, 120),
    website: honeypot,
  });
}

export const contactSchema = createContactSchema(defaultLocale);
export const demoSchema = createDemoSchema(defaultLocale);

export const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: chatContent,
});

export const chatRequestSchema = z.object({
  message: chatContent,
  history: z.array(chatMessageSchema).max(8).optional().default([]),
});

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>;
export type DemoFormValues = z.infer<ReturnType<typeof createDemoSchema>>;
export type ChatMessageValues = z.infer<typeof chatMessageSchema>;
export type ChatRequestValues = z.infer<typeof chatRequestSchema>;
