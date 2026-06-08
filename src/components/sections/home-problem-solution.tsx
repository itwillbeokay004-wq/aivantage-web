"use client";

import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const problemSolutions = {
  es: [
    {
      problem: "Clientes potenciales sin respuesta",
      solution: "Califica y dirige prospectos al instante.",
    },
    {
      problem: "Preguntas repetitivas",
      solution: "Responde desde conocimiento aprobado.",
    },
    {
      problem: "Tiempos de respuesta lentos",
      solution: "Atiende canales incluso fuera de horario.",
    },
    {
      problem: "Seguimientos manuales",
      solution: "Activa resúmenes y próximos pasos.",
    },
  ],
  en: [
    {
      problem: "Missed leads",
      solution: "Qualify and route prospects instantly.",
    },
    {
      problem: "Repetitive questions",
      solution: "Answer from approved knowledge.",
    },
    {
      problem: "Slow response times",
      solution: "Respond across channels after hours.",
    },
    {
      problem: "Manual follow-ups",
      solution: "Trigger summaries and next steps.",
    },
  ],
} as const;

export function HomeProblemSolution() {
  const { locale } = useLocale();

  return (
    <section className="container py-16">
      <SectionHeading
        eyebrow={locale === "es" ? "Problema y solución" : "Problem and solution"}
        title={
          locale === "es"
            ? "Corrige primero los cuellos de botella que sienten tus clientes."
            : "Fix the bottlenecks customers feel first."
        }
        description={
          locale === "es"
            ? "Empieza donde importan la velocidad, la consistencia y las derivaciones claras."
            : "Start where speed, consistency, and handoffs matter."
        }
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {problemSolutions[locale].map((item, index) => (
          <Reveal
            key={item.problem}
            delay={index * 0.05}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
          >
            <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-rose-200">
                  <AlertCircle className="size-4" />
                  {item.problem}
                </div>
              </div>
              <ArrowRight className="hidden size-5 text-cyan-200 sm:block" aria-hidden="true" />
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
                  <CheckCircle2 className="size-4" />
                  {locale === "es" ? "Solución AiVantage" : "AiVantage solution"}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.solution}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
