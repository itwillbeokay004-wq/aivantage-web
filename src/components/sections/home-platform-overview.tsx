"use client";

import {
  BarChart3,
  Bot,
  BrainCircuit,
  GraduationCap,
  Rocket,
  Settings2,
} from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = {
  es: [
    {
      icon: Bot,
      title: "Diseña",
      description: "Define rol, tono, canales y límites.",
    },
    {
      icon: GraduationCap,
      title: "Entrena",
      description: "Conecta respuestas a conocimiento aprobado.",
    },
    {
      icon: Rocket,
      title: "Implementa",
      description: "Lanza en chat, voz y procesos conectados.",
    },
    {
      icon: BarChart3,
      title: "Supervisa",
      description: "Mide calidad, uso y derivaciones.",
    },
    {
      icon: BrainCircuit,
      title: "Mejora",
      description: "Ajusta desde conversaciones reales.",
    },
    {
      icon: Settings2,
      title: "Escala",
      description: "Expande a más procesos.",
    },
  ],
  en: [
    {
      icon: Bot,
      title: "Build",
      description: "Define role, tone, channels, and guardrails.",
    },
    {
      icon: GraduationCap,
      title: "Train",
      description: "Ground answers in approved knowledge.",
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "Launch on chat, voice, and workflows.",
    },
    {
      icon: BarChart3,
      title: "Monitor",
      description: "Track quality, usage, and handoffs.",
    },
    {
      icon: BrainCircuit,
      title: "Improve",
      description: "Tune from real conversations.",
    },
    {
      icon: Settings2,
      title: "Scale",
      description: "Expand into more workflows.",
    },
  ],
} as const;

export function HomePlatformOverview() {
  const { locale } = useLocale();

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="container py-16">
        <SectionHeading
          eyebrow={locale === "es" ? "Resumen de plataforma" : "Platform overview"}
          title={
            locale === "es"
              ? "Del primer agente a operaciones con IA."
              : "From first agent to AI operations."
          }
          description={
            locale === "es"
              ? "Construye, lanza, mide y mejora."
              : "Build, launch, measure, and improve."
          }
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps[locale].map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal
                key={step.title}
                delay={index * 0.05}
                className="rounded-lg border border-white/10 bg-[#07101f] p-6"
              >
                <div className="grid size-11 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
