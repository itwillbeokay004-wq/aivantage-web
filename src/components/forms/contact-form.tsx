"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormValues } from "@/lib/schemas";

const interests = {
  es: [
    "Automatización de soporte",
    "Automatización de ventas",
    "Agentes de voz",
    "Flujos internos",
    "Estrategia de IA",
  ],
  en: [
    "Support automation",
    "Sales automation",
    "Voice agents",
    "Internal workflows",
    "AI strategy",
  ],
} as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { locale } = useLocale();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-panel rounded-lg p-5 sm:p-6">
      <div
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <Label htmlFor="contact-website">
          {locale === "es" ? "Sitio web" : "Website"}
        </Label>
        <Input
          id="contact-website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="contact-name"
          label={locale === "es" ? "Nombre" : "Name"}
          error={errors.name?.message}
        >
          <Input
            id="contact-name"
            placeholder="Jordan Lee"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby="contact-name-error"
            {...register("name")}
          />
        </Field>
        <Field
          id="contact-email"
          label={locale === "es" ? "Email de trabajo" : "Business email"}
          error={errors.email?.message}
        >
          <Input
            id="contact-email"
            type="email"
            placeholder="jordan@company.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby="contact-email-error"
            {...register("email")}
          />
        </Field>
        <Field
          id="contact-company"
          label={locale === "es" ? "Empresa" : "Company"}
          error={errors.company?.message}
        >
          <Input
            id="contact-company"
            placeholder="Northstar Group"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby="contact-company-error"
            {...register("company")}
          />
        </Field>
        <Field
          id="contact-interest"
          label={locale === "es" ? "Interés" : "Interest"}
          error={errors.interest?.message}
        >
          <Select
            id="contact-interest"
            aria-invalid={Boolean(errors.interest)}
            aria-describedby="contact-interest-error"
            {...register("interest")}
            defaultValue=""
          >
            <option value="" disabled>
              {locale === "es" ? "Selecciona un área" : "Select an area"}
            </option>
            {interests[locale].map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </Select>
        </Field>
      </div>
      <div className="mt-5">
        <Field
          id="contact-message"
          label={
            locale === "es"
              ? "¿En qué deberíamos ayudar?"
              : "What should we help with?"
          }
          error={errors.message?.message}
        >
          <Textarea
            id="contact-message"
            placeholder={
              locale === "es"
                ? "Cuéntanos sobre el proceso, conversación o flujo que quieres automatizar."
                : "Tell us about the process, conversation, or workflow you want to automate."
            }
            aria-invalid={Boolean(errors.message)}
            aria-describedby="contact-message-error"
            {...register("message")}
          />
        </Field>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="min-h-5 text-sm text-slate-400" aria-live="polite">
          {status === "success" ? (
            <span className="inline-flex items-center gap-2 text-emerald-200">
              <CheckCircle2 className="size-4" aria-hidden="true" />
              {locale === "es"
                ? "Gracias. Responderemos en un día hábil."
                : "Thanks. We will respond within one business day."}
            </span>
          ) : null}
          {status === "error" ? (
            <span className="text-rose-200">
              {locale === "es"
                ? "Algo salió mal. Inténtalo de nuevo."
                : "Something went wrong. Please try again."}
            </span>
          ) : null}
        </p>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="size-4" aria-hidden="true" />
          )}
          {locale === "es" ? "Enviar mensaje" : "Send Message"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      <p id={`${id}-error`} className="min-h-5 text-xs text-rose-200">
        {error ?? ""}
      </p>
    </div>
  );
}
