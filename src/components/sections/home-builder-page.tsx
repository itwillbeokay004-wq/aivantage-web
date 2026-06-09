"use client";

import { CalendarCheck, MessageSquareText, PhoneCall, Target } from "lucide-react";

import { AiBuilder } from "@/components/builder/ai-builder";
import { UseCaseCard } from "@/components/builder/use-case-card";
import { useLocale } from "@/components/locale-provider";
import { CtaButton } from "@/components/ui/cta-button";

const pageCopy = {
  es: {
    hero: {
      eyebrow: "AiVantage · Agentes de IA para negocios reales",
      title: "Crea tu próximo agente de IA en minutos.",
      description:
        "Describe lo que quieres automatizar y AiVantage te muestra una idea clara de agente, proceso y próximos pasos.",
    },
    useCases: {
      eyebrow: "Casos de uso principales",
      title: "Empieza por el proceso que más impacto tenga.",
      description: "Menos páginas, más claridad: chat, llamadas, clientes potenciales y reservas.",
      cards: [
        {
          icon: MessageSquareText,
          title: "Chat web",
          description: "Responde preguntas frecuentes y capta clientes potenciales desde tu sitio.",
        },
        {
          icon: PhoneCall,
          title: "Llamadas con IA",
          description: "Atiende llamadas, recoge datos clave y envía resúmenes al equipo.",
        },
        {
          icon: Target,
          title: "Clientes potenciales",
          description: "Cualifica intención, urgencia y encaje antes de pasar la oportunidad a ventas.",
        },
        {
          icon: CalendarCheck,
          title: "Reservas de citas",
          description: "Coordina horarios, confirma citas y reduce mensajes de ida y vuelta.",
        },
      ],
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "De una idea simple a un agente útil.",
      steps: [
        "Describe tu idea",
        "Recibe una propuesta",
        "Refinamos el proceso",
        "Lanzamos tu agente",
      ],
    },
    cta: {
      title: "¿Tienes una idea para automatizar?",
      description:
        "Cuéntanos qué quieres crear y te ayudamos a convertirlo en un agente de IA real.",
      button: "Reservar una demo",
    },
  },
  en: {
    hero: {
      eyebrow: "AiVantage · AI agents for real businesses",
      title: "Build your next AI agent in minutes.",
      description:
        "Describe what you want to automate and AiVantage will show you a clear agent concept, workflow, and next steps.",
    },
    useCases: {
      eyebrow: "Core use cases",
      title: "Start with the workflow that matters most.",
      description: "Fewer pages, more clarity: chat, calls, lead capture, and appointment booking.",
      cards: [
        {
          icon: MessageSquareText,
          title: "Website chat",
          description: "Answer FAQs and capture qualified interest from your website.",
        },
        {
          icon: PhoneCall,
          title: "AI phone calls",
          description: "Answer calls, collect key details, and send summaries to your team.",
        },
        {
          icon: Target,
          title: "Lead capture",
          description: "Qualify intent, urgency, and fit before routing opportunities to sales.",
        },
        {
          icon: CalendarCheck,
          title: "Appointment booking",
          description: "Coordinate times, confirm appointments, and reduce back-and-forth.",
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "From a simple idea to a useful agent.",
      steps: ["Describe your idea", "Get a recommendation", "Refine the workflow", "Launch your agent"],
    },
    cta: {
      title: "Have an automation idea?",
      description: "Tell us what you want to build and we’ll help turn it into a real AI agent.",
      button: "Book a demo",
    },
  },
} as const;

export function HomeBuilderPage() {
  const { locale } = useLocale();
  const copy = pageCopy[locale];

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute inset-0 signal-grid opacity-15" />
        <div className="container relative flex flex-col items-center justify-center py-7 text-center sm:py-9">
          <div className="mx-auto max-w-3xl">
            <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
              {copy.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {copy.hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
              {copy.hero.description}
            </p>
          </div>
        </div>
        <AiBuilder className="relative -mt-1 pb-12 pt-0 sm:-mt-2 sm:pb-16 sm:pt-0" />
      </section>

      <section className="container py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {copy.useCases.title}
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.useCases.cards.map((card) => (
            <UseCaseCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-12 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {copy.how.title}
            </h2>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {copy.how.steps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-[#07101f] p-5 text-center shadow-sm shadow-black/20"
              >
                <div className="mx-auto grid size-10 place-items-center rounded-full border border-cyan-200/15 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                  {index + 1}
                </div>
                <p className="mt-4 text-sm font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101f] p-8 text-center shadow-panel sm:p-10">
          <div className="absolute inset-0 hero-mesh opacity-65" />
          <div className="absolute inset-0 signal-grid opacity-20" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {copy.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              {copy.cta.description}
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton href="/book-demo" size="lg">
                {copy.cta.button}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
