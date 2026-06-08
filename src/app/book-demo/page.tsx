import { CalendarDays, CheckCircle2 } from "lucide-react";

import { AgentDemoWidget } from "@/components/agent-demo-widget";
import { DemoForm } from "@/components/forms/demo-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/seo";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();

  return pageMetadata({
    title: locale === "es" ? "Reservar una demo" : "Book a Demo",
    description:
      locale === "es"
        ? "Reserva una demo de AiVantage para explorar agentes de IA personalizados para chat, voz y automatización de procesos."
        : "Book an AiVantage demo to explore custom AI agents for chat, voice, and workflow automation.",
    path: "/book-demo",
    locale,
  });
}

const demoAgenda = {
  es: [
    "Identificar tu mejor primer proceso para automatizar",
    "Revisar canales y sistemas que los agentes deberían conectar",
    "Hablar de límites, derivaciones y calendario de lanzamiento",
  ],
  en: [
    "Identify your best first automation workflow",
    "Review the channels and systems agents should connect to",
    "Discuss guardrails, handoffs, and launch timeline",
  ],
} as const;

export default async function BookDemoPage() {
  const locale = await getRequestLocale();

  return (
    <>
      <PageHero
        eyebrow={locale === "es" ? "Reservar una demo" : "Book a Demo"}
        title={
          locale === "es"
            ? "Mira cómo un agente AiVantage podría funcionar en tu negocio."
            : "See how an AiVantage agent could work in your business."
        }
        description={
          locale === "es"
            ? "Solicita una sesión de trabajo con AiVantage. Nos enfocaremos en tu proceso, no en una demo genérica."
            : "Request a working session with AiVantage. We will focus on your workflow, not a generic product tour."
        }
      />

      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <DemoForm />
          </Reveal>
          <div>
            <Reveal delay={0.08}>
              <AgentDemoWidget compact />
            </Reveal>
            <Reveal delay={0.12} className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center gap-3">
                <CalendarDays className="size-5 text-cyan-200" />
                <h2 className="font-semibold text-white">
                  {locale === "es" ? "Qué cubre la sesión" : "What the session covers"}
                </h2>
              </div>
              <ul className="mt-5 space-y-3">
                {demoAgenda[locale].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <SectionHeading
            eyebrow={locale === "es" ? "Sin presión" : "No pressure"}
            title={
              locale === "es"
                ? "Una conversación práctica antes de cualquier propuesta."
                : "A practical conversation before any proposal."
            }
            description={
              locale === "es"
                ? "Si un agente de IA no es el paso correcto, lo diremos. Si lo es, saldrás con un primer proceso y alcance claros."
                : "If an AI agent is not the right move, we will say so. If it is, you will leave with a clear first workflow and scope."
            }
          />
        </div>
      </section>
    </>
  );
}
