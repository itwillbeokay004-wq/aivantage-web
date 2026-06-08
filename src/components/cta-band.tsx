"use client";

import { ArrowRight } from "lucide-react";

import { TrackedLink } from "@/components/analytics";
import { useLocale } from "@/components/locale-provider";
import { Button } from "@/components/ui/button";
import { ctaLabelsByLocale } from "@/data/site";

export function CtaBand({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const { locale } = useLocale();
  const ctaLabels = ctaLabelsByLocale[locale];
  const fallbackTitle =
    locale === "es"
      ? "¿Listo para construir tu ventaja con IA?"
      : "Ready to build your AI advantage?";
  const fallbackDescription =
    locale === "es"
      ? "Solicita una sesión y mapearemos el primer agente de IA que tu negocio debería lanzar."
      : "Book a working session and we will map the first agent your business should launch.";

  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="container py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {title ?? fallbackTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              {description ?? fallbackDescription}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <TrackedLink href="/book-demo" eventProperties={{ location: "cta_band" }}>
                {ctaLabels.bookDemo}
                <ArrowRight className="size-4" />
              </TrackedLink>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <TrackedLink href="/use-cases" eventProperties={{ location: "cta_band" }}>
                {ctaLabels.seeUseCases}
              </TrackedLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
