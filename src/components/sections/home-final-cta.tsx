"use client";

import { useLocale } from "@/components/locale-provider";
import { CtaButton } from "@/components/ui/cta-button";
import { ctaLabelsByLocale } from "@/data/site";

export function HomeFinalCta() {
  const { locale } = useLocale();
  const ctaLabels = ctaLabelsByLocale[locale];

  return (
    <section className="container py-16">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-panel sm:p-10">
        <div className="absolute inset-0 hero-mesh opacity-70" />
        <div className="absolute inset-0 signal-grid opacity-25" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {locale === "es"
              ? "¿Listo para crear tu ventaja con IA?"
              : "Ready to build your AI advantage?"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            {locale === "es"
              ? "Trae un proceso concreto. Mapearemos el primer agente de IA y el camino de implementación."
              : "Bring one workflow. We’ll map the first agent and launch path."}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton href="/book-demo" size="lg">
              {ctaLabels.bookDemo}
            </CtaButton>
            <CtaButton href="/contact" variant="secondary" size="lg" showIcon={false}>
              {ctaLabels.contactUs}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
