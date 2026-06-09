"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createContactSchema, type ContactFormValues } from "@/lib/schemas";

const formCopy = {
  es: {
    labels: {
      name: "Nombre",
      email: "Email",
      phone: "Teléfono, opcional",
      company: "Empresa, opcional",
      message: "Mensaje",
      honeypot: "Sitio web",
    },
    placeholders: {
      name: "Laura García",
      email: "laura@empresa.com",
      phone: "+34 600 000 000",
      company: "Nombre de empresa",
      message: "Cuéntanos qué proceso, conversación o tarea quieres automatizar.",
    },
    fallbackSuccess:
      "Gracias. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.",
    fallbackError: "Algo salió mal. Inténtalo de nuevo.",
    submit: "Enviar mensaje",
  },
  en: {
    labels: {
      name: "Name",
      email: "Business email",
      phone: "Phone, optional",
      company: "Company, optional",
      message: "What should we help with?",
      honeypot: "Website",
    },
    placeholders: {
      name: "Jordan Lee",
      email: "jordan@company.com",
      phone: "+1 555 000 0000",
      company: "Northstar Group",
      message: "Tell us about the process, conversation, or workflow you want to automate.",
    },
    fallbackSuccess: "Thanks. We received your message and will contact you soon.",
    fallbackError: "Something went wrong. Please try again.",
    submit: "Send Message",
  },
} as const;

type ApiResponse = {
  message?: string;
  error?: string;
};

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const { locale } = useLocale();
  const copy = formCopy[locale];
  const schema = useMemo(() => createContactSchema(locale), [locale]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      locale,
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    setStatusMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });
      const payload = (await response.json().catch(() => null)) as ApiResponse | null;

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(payload?.error ?? copy.fallbackError);
        return;
      }

      setStatus("success");
      setStatusMessage(payload?.message ?? copy.fallbackSuccess);
      reset();
    } catch {
      setStatus("error");
      setStatusMessage(copy.fallbackError);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="premium-form-panel relative rounded-[1.7rem] p-5 sm:p-7"
    >
      <div
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <Label htmlFor="contact-website">{copy.labels.honeypot}</Label>
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
          label={copy.labels.name}
          error={errors.name?.message}
        >
          <Input
            id="contact-name"
            placeholder={copy.placeholders.name}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby="contact-name-error"
            {...register("name")}
          />
        </Field>
        <Field
          id="contact-email"
          label={copy.labels.email}
          error={errors.email?.message}
        >
          <Input
            id="contact-email"
            type="email"
            placeholder={copy.placeholders.email}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby="contact-email-error"
            {...register("email")}
          />
        </Field>
        <Field
          id="contact-phone"
          label={copy.labels.phone}
          error={errors.phone?.message}
        >
          <Input
            id="contact-phone"
            type="tel"
            placeholder={copy.placeholders.phone}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby="contact-phone-error"
            {...register("phone")}
          />
        </Field>
        <Field
          id="contact-company"
          label={copy.labels.company}
          error={errors.company?.message}
        >
          <Input
            id="contact-company"
            placeholder={copy.placeholders.company}
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby="contact-company-error"
            {...register("company")}
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field
          id="contact-message"
          label={copy.labels.message}
          error={errors.message?.message}
        >
          <Textarea
            id="contact-message"
            placeholder={copy.placeholders.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby="contact-message-error"
            {...register("message")}
          />
        </Field>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="min-h-5 text-sm text-slate-400" aria-live="polite">
          {status === "success" ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-emerald-100">
              <CheckCircle2 className="size-4" aria-hidden="true" />
              {statusMessage || copy.fallbackSuccess}
            </span>
          ) : null}
          {status === "error" ? (
            <span className="inline-flex rounded-full border border-rose-300/20 bg-rose-400/10 px-3 py-1.5 text-rose-100">
              {statusMessage || copy.fallbackError}
            </span>
          ) : null}
        </p>
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="size-4" aria-hidden="true" />
          )}
          {copy.submit}
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
      <Label htmlFor={id} className="text-[0.82rem] font-semibold text-slate-200">
        {label}
      </Label>
      {children}
      <p id={`${id}-error`} className="min-h-5 text-xs font-medium text-rose-200">
        {error ?? ""}
      </p>
    </div>
  );
}
