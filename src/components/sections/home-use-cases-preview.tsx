"use client";

import { ArrowRight } from "lucide-react";

import { TrackedLink } from "@/components/analytics";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ctaLabelsByLocale, useCasesByLocale } from "@/data/site";

export function HomeUseCasesPreview() {
  const { locale } = useLocale();
  const ctaLabels = ctaLabelsByLocale[locale];
  const previewUseCases = useCasesByLocale[locale].slice(0, 6);

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="container py-16">
        <SectionHeading
          eyebrow={locale === "es" ? "Casos de uso" : "Use cases"}
          title={
            locale === "es"
              ? "Empieza con un proceso de alto valor."
              : "Start with one high-value workflow."
          }
          description={
            locale === "es"
              ? "Mídelo y luego expande lo que funciona."
              : "Measure it, then expand what works."
          }
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {previewUseCases.map((useCase, index) => (
            <Reveal
              key={useCase.title}
              delay={index * 0.04}
              className="rounded-lg border border-white/10 bg-[#07101f] p-5"
            >
              <p className="text-sm font-semibold text-cyan-200">{useCase.title}</p>
              <p className="mt-4 text-3xl font-semibold text-white">{useCase.metric}</p>
              <p className="mt-1 text-sm text-slate-400">{useCase.label}</p>
              <TrackedLink
                href="/use-cases"
                eventProperties={{ location: "home_use_cases_preview", label: useCase.title }}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
              >
                {ctaLabels.seeUseCases}
                <ArrowRight className="size-4" aria-hidden="true" />
              </TrackedLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
