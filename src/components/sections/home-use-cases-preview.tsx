"use client";

import { ArrowRight } from "lucide-react";

import { TrackedLink } from "@/components/analytics";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useCases } from "@/data/site";

const spanishUseCases = [
  { title: "Soporte al cliente", metric: "24/7", label: "Respuestas rápidas" },
  { title: "Calificación de leads", metric: "+38%", label: "Mejor seguimiento" },
  { title: "Reserva de citas", metric: "Menos ida y vuelta", label: "Más reuniones" },
  { title: "Leasing inmobiliario", metric: "Tours", label: "Intake más limpio" },
  { title: "Operaciones internas", metric: "Ahorro de tiempo", label: "Menos búsquedas" },
  { title: "Agente FAQ", metric: "FAQs", label: "Conocimiento aprobado" },
] as const;

export function HomeUseCasesPreview() {
  const { locale } = useLocale();
  const previewUseCases = locale === "es" ? spanishUseCases : useCases.slice(0, 6);

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="container py-16">
        <SectionHeading
          eyebrow={locale === "es" ? "Casos de uso" : "Use cases"}
          title={
            locale === "es"
              ? "Empieza con un flujo de alto valor."
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
                {locale === "es" ? "Ver caso de uso" : "View use case"}
                <ArrowRight className="size-4" aria-hidden="true" />
              </TrackedLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
