"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { demoSchema, type DemoFormValues } from "@/lib/schemas";

const teamSizes = ["1-10", "11-50", "51-250", "251-1,000", "1,000+"];
const useCases = [
  "Customer support",
  "Sales qualification",
  "Voice intake",
  "Internal operations",
  "Multiple workflows",
];
const timelines = ["This month", "Next 30-60 days", "This quarter", "Exploring options"];

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      teamSize: "",
      useCase: "",
      timeline: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: DemoFormValues) {
    setStatus("idle");
    try {
      const response = await fetch("/api/book-demo", {
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
        <Label htmlFor="demo-website">Website</Label>
        <Input
          id="demo-website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="demo-name" label="Name" error={errors.name?.message}>
          <Input
            id="demo-name"
            placeholder="Alex Morgan"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby="demo-name-error"
            {...register("name")}
          />
        </Field>
        <Field id="demo-email" label="Business email" error={errors.email?.message}>
          <Input
            id="demo-email"
            type="email"
            placeholder="alex@company.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby="demo-email-error"
            {...register("email")}
          />
        </Field>
        <Field id="demo-company" label="Company" error={errors.company?.message}>
          <Input
            id="demo-company"
            placeholder="Company name"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby="demo-company-error"
            {...register("company")}
          />
        </Field>
        <Field id="demo-team-size" label="Team size" error={errors.teamSize?.message}>
          <Select
            id="demo-team-size"
            aria-invalid={Boolean(errors.teamSize)}
            aria-describedby="demo-team-size-error"
            {...register("teamSize")}
            defaultValue=""
          >
            <option value="" disabled>
              Select team size
            </option>
            {teamSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </Select>
        </Field>
        <Field
          id="demo-use-case"
          label="Primary use case"
          error={errors.useCase?.message}
        >
          <Select
            id="demo-use-case"
            aria-invalid={Boolean(errors.useCase)}
            aria-describedby="demo-use-case-error"
            {...register("useCase")}
            defaultValue=""
          >
            <option value="" disabled>
              Select use case
            </option>
            {useCases.map((useCase) => (
              <option key={useCase} value={useCase}>
                {useCase}
              </option>
            ))}
          </Select>
        </Field>
        <Field id="demo-timeline" label="Timeline" error={errors.timeline?.message}>
          <Select
            id="demo-timeline"
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby="demo-timeline-error"
            {...register("timeline")}
            defaultValue=""
          >
            <option value="" disabled>
              Select timeline
            </option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </Select>
        </Field>
      </div>
      <div className="mt-5">
        <Field
          id="demo-message"
          label="What would make this demo useful?"
          error={errors.message?.message}
        >
          <Textarea
            id="demo-message"
            placeholder="Share the systems, channels, or workflows you want to discuss."
            aria-invalid={Boolean(errors.message)}
            aria-describedby="demo-message-error"
            {...register("message")}
          />
        </Field>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="min-h-5 text-sm text-slate-400" aria-live="polite">
          {status === "success" ? (
            <span className="inline-flex items-center gap-2 text-emerald-200">
              <CheckCircle2 className="size-4" aria-hidden="true" />
              Demo request received. We will send next steps shortly.
            </span>
          ) : null}
          {status === "error" ? (
            <span className="text-rose-200">Something went wrong. Please try again.</span>
          ) : null}
        </p>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <CalendarCheck className="size-4" aria-hidden="true" />
          )}
          Request Demo
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
