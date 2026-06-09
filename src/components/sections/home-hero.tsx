"use client";

import { HomeProductMockup } from "@/components/sections/home-product-mockup";
import { useLocale } from "@/components/locale-provider";
import { CtaButton } from "@/components/ui/cta-button";
import { ctaLabelsByLocale } from "@/data/site";

export function HomeHero() {
  const { locale } = useLocale();
  const ctaLabels = ctaLabelsByLocale[locale];

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 signal-grid opacity-20" />
      <div className="container relative py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
              {locale === "es"
                ? "Implementación de agentes de IA"
                : "AI agent implementation"}
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {locale === "es"
                ? "Agentes de IA para atención, ventas y operaciones."
                : "AI agents for support, sales, and operations."}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg lg:mx-0">
              {locale === "es"
                ? "Diseñamos, conectamos y mejoramos agentes de IA que responden preguntas, cualifican clientes potenciales, reservan citas y activan procesos reales."
                : "We design, connect, and improve AI agents that answer questions, qualify leads, book appointments, and trigger real business workflows."}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <CtaButton href="/book-demo" size="lg">
                {ctaLabels.bookDemo}
              </CtaButton>
              <CtaButton href="/use-cases" variant="secondary" size="lg" showIcon={false}>
                {ctaLabels.seeUseCases}
              </CtaButton>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-2 text-xs font-medium text-slate-300 lg:justify-start">
              {(locale === "es"
                ? ["Chat web", "Voz", "CRM", "Derivación humana"]
                : ["Web chat", "Voice", "CRM", "Human handoff"]
              ).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:-mr-8">
            <HomeProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
