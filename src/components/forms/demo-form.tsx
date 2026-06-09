"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createDemoSchema, type DemoFormValues } from "@/lib/schemas";

const industries = {
  es: [
    "Inmobiliarias",
    "Gestión de propiedades",
    "Servicios locales",
    "Clínicas y consultas",
    "Despachos legales",
    "E-commerce",
    "Educación",
    "Servicios para el hogar",
    "Otra",
  ],
  en: [
    "Real Estate",
    "Property Management",
    "Local Services",
    "Healthcare Offices",
    "Legal Offices",
    "E-commerce",
    "Education",
    "Home Services",
    "Other",
  ],
} as const;

const preferredContactMethods = {
  es: ["Email", "Teléfono", "WhatsApp", "Videollamada"],
  en: ["Email", "Phone", "WhatsApp", "Video call"],
} as const;

const formCopy = {
  es: {
    labels: {
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      company: "Empresa",
      businessWebsite: "Sitio web, opcional",
      industry: "Industria, opcional",
      automationGoal: "¿Qué quieres automatizar?",
      preferredContactMethod: "Método de contacto preferido",
      preferredDateTime: "Fecha y hora preferidas, opcional",
      honeypot: "No rellenes este campo",
    },
    placeholders: {
      name: "Laura García",
      email: "laura@empresa.com",
      phone: "+34 600 000 000",
      company: "Nombre de empresa",
      businessWebsite: "https://tuempresa.com",
      industry: "Selecciona industria",
      automationGoal:
        "Por ejemplo: responder preguntas frecuentes, cualificar clientes potenciales o gestionar llamadas perdidas.",
      preferredContactMethod: "Selecciona método",
      preferredDateTime: "Por ejemplo: martes por la mañana",
    },
    fallbackSuccess:
      "Gracias. Hemos recibido tu solicitud de demo. Te contactaremos para coordinar los siguientes pasos.",
    fallbackError: "Algo salió mal. Inténtalo de nuevo.",
    submit: "Solicitar demo",
    generatedIdea: "Idea generada",
  },
  en: {
    labels: {
      name: "Name",
      email: "Business email",
      phone: "Phone",
      company: "Company",
      businessWebsite: "Website, optional",
      industry: "Industry, optional",
      automationGoal: "What do you want to automate?",
      preferredContactMethod: "Preferred contact method",
      preferredDateTime: "Preferred date/time, optional",
      honeypot: "Do not fill out this field",
    },
    placeholders: {
      name: "Alex Morgan",
      email: "alex@company.com",
      phone: "+1 555 000 0000",
      company: "Company name",
      businessWebsite: "https://company.com",
      industry: "Select industry",
      automationGoal:
        "For example: answer FAQs, qualify sales opportunities, or handle missed calls.",
      preferredContactMethod: "Select method",
      preferredDateTime: "For example: Tuesday morning",
    },
    fallbackSuccess:
      "Thanks. We received your demo request and will contact you to coordinate next steps.",
    fallbackError: "Something went wrong. Please try again.",
    submit: "Request Demo",
    generatedIdea: "Generated idea",
  },
} as const;

type ApiResponse = {
  message?: string;
  error?: string;
};

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [generatedContext, setGeneratedContext] = useState<{
    idea: string;
    agentName: string;
  } | null>(null);
  const { locale } = useLocale();
  const copy = formCopy[locale];
  const schema = useMemo(() => createDemoSchema(locale), [locale]);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      locale,
      name: "",
      email: "",
      phone: "",
      company: "",
      businessWebsite: "",
      industry: "",
      automationGoal: "",
      preferredContactMethod: "",
      preferredDateTime: "",
      sourceIdea: "",
      generatedAgentName: "",
      website: "",
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sourceIdea = params.get("idea")?.trim() ?? "";
    const generatedAgentName = params.get("agent")?.trim() ?? "";

    if (!sourceIdea && !generatedAgentName) {
      return;
    }

    setGeneratedContext({ idea: sourceIdea, agentName: generatedAgentName });
    setValue("sourceIdea", sourceIdea);
    setValue("generatedAgentName", generatedAgentName);

    if (sourceIdea) {
      setValue("automationGoal", sourceIdea, { shouldValidate: true });
    }
  }, [setValue]);

  async function onSubmit(values: DemoFormValues) {
    setStatus("idle");
    setStatusMessage("");
    try {
      const response = await fetch("/api/book-demo", {
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
        <Label htmlFor="demo-website">{copy.labels.honeypot}</Label>
        <Input
          id="demo-website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>
      <input type="hidden" {...register("sourceIdea")} />
      <input type="hidden" {...register("generatedAgentName")} />
      {generatedContext ? (
        <div className="relative mb-6 overflow-hidden rounded-[1.35rem] border border-cyan-300/20 bg-cyan-300/[0.07] p-4 shadow-[0_18px_50px_rgba(8,47,73,0.2)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
            {copy.generatedIdea}
          </p>
          {generatedContext.agentName ? (
            <p className="mt-2 text-base font-semibold text-white">
              {generatedContext.agentName}
            </p>
          ) : null}
          {generatedContext.idea ? (
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {generatedContext.idea}
            </p>
          ) : null}
        </div>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="demo-name"
          label={copy.labels.name}
          error={errors.name?.message}
        >
          <Input
            id="demo-name"
            placeholder={copy.placeholders.name}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby="demo-name-error"
            {...register("name")}
          />
        </Field>
        <Field
          id="demo-email"
          label={copy.labels.email}
          error={errors.email?.message}
        >
          <Input
            id="demo-email"
            type="email"
            placeholder={copy.placeholders.email}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby="demo-email-error"
            {...register("email")}
          />
        </Field>
        <Field
          id="demo-phone"
          label={copy.labels.phone}
          error={errors.phone?.message}
        >
          <Input
            id="demo-phone"
            type="tel"
            placeholder={copy.placeholders.phone}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby="demo-phone-error"
            {...register("phone")}
          />
        </Field>
        <Field
          id="demo-company"
          label={copy.labels.company}
          error={errors.company?.message}
        >
          <Input
            id="demo-company"
            placeholder={copy.placeholders.company}
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby="demo-company-error"
            {...register("company")}
          />
        </Field>
        <Field
          id="demo-business-website"
          label={copy.labels.businessWebsite}
          error={errors.businessWebsite?.message}
        >
          <Input
            id="demo-business-website"
            type="url"
            placeholder={copy.placeholders.businessWebsite}
            autoComplete="url"
            aria-invalid={Boolean(errors.businessWebsite)}
            aria-describedby="demo-business-website-error"
            {...register("businessWebsite")}
          />
        </Field>
        <Field
          id="demo-industry"
          label={copy.labels.industry}
          error={errors.industry?.message}
        >
          <Select
            id="demo-industry"
            aria-invalid={Boolean(errors.industry)}
            aria-describedby="demo-industry-error"
            {...register("industry")}
            defaultValue=""
          >
            <option value="" disabled>
              {copy.placeholders.industry}
            </option>
            {industries[locale].map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </Select>
        </Field>
        <Field
          id="demo-preferred-contact-method"
          label={copy.labels.preferredContactMethod}
          error={errors.preferredContactMethod?.message}
        >
          <Select
            id="demo-preferred-contact-method"
            aria-invalid={Boolean(errors.preferredContactMethod)}
            aria-describedby="demo-preferred-contact-method-error"
            {...register("preferredContactMethod")}
            defaultValue=""
          >
            <option value="" disabled>
              {copy.placeholders.preferredContactMethod}
            </option>
            {preferredContactMethods[locale].map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </Select>
        </Field>
        <Field
          id="demo-preferred-date-time"
          label={copy.labels.preferredDateTime}
          error={errors.preferredDateTime?.message}
        >
          <Input
            id="demo-preferred-date-time"
            placeholder={copy.placeholders.preferredDateTime}
            aria-invalid={Boolean(errors.preferredDateTime)}
            aria-describedby="demo-preferred-date-time-error"
            {...register("preferredDateTime")}
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field
          id="demo-automation-goal"
          label={copy.labels.automationGoal}
          error={errors.automationGoal?.message}
        >
          <Textarea
            id="demo-automation-goal"
            placeholder={copy.placeholders.automationGoal}
            aria-invalid={Boolean(errors.automationGoal)}
            aria-describedby="demo-automation-goal-error"
            {...register("automationGoal")}
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
            <CalendarCheck className="size-4" aria-hidden="true" />
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
