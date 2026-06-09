"use client";

import { ArrowDown, CalendarCheck, MessageSquareText, PhoneCall, Sparkles, Target } from "lucide-react";

import { AiBuilder } from "@/components/ai-builder/ai-builder";
import { useLocale } from "@/components/locale-provider";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/cta-button";
import { VisualCard } from "@/components/ui/visual-card";

const pageCopy = {
  es: {
    hero: {
      eyebrow: "AiVantage · Agentes de IA para negocios reales",
      title: "Crea tu próximo agente de IA en minutos.",
      description:
        "Describe lo que quieres automatizar y AiVantage te muestra una idea clara de agente, proceso y próximos pasos.",
      primaryCta: "Probar el generador",
      secondaryCta: "Reservar una demo",
      proof: ["Propuesta instantánea", "Chat, voz y procesos", "Listo para demo"],
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
          graphic: "chat",
          accent: "cyan",
        },
        {
          icon: PhoneCall,
          title: "Llamadas con IA",
          description: "Atiende llamadas, recoge datos clave y envía resúmenes al equipo.",
          graphic: "phone",
          accent: "blue",
        },
        {
          icon: Target,
          title: "Clientes potenciales",
          description: "Cualifica intención, urgencia y encaje antes de pasar la oportunidad a ventas.",
          graphic: "lead",
          accent: "violet",
        },
        {
          icon: CalendarCheck,
          title: "Reservas de citas",
          description: "Coordina horarios, confirma citas y reduce mensajes de ida y vuelta.",
          graphic: "calendar",
          accent: "emerald",
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
      primaryCta: "Try the builder",
      secondaryCta: "Book a demo",
      proof: ["Instant recommendation", "Chat, voice, workflows", "Demo-ready next step"],
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
          graphic: "chat",
          accent: "cyan",
        },
        {
          icon: PhoneCall,
          title: "AI phone calls",
          description: "Answer calls, collect key details, and send summaries to your team.",
          graphic: "phone",
          accent: "blue",
        },
        {
          icon: Target,
          title: "Lead capture",
          description: "Qualify intent, urgency, and fit before routing opportunities to sales.",
          graphic: "lead",
          accent: "violet",
        },
        {
          icon: CalendarCheck,
          title: "Appointment booking",
          description: "Coordinate times, confirm appointments, and reduce back-and-forth.",
          graphic: "calendar",
          accent: "emerald",
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
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="container relative grid gap-8 py-10 sm:py-14 lg:grid-cols-[1fr_22rem] lg:items-center lg:py-18">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
              {copy.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              {copy.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
              {copy.hero.description}
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="group">
                <a href="#ai-builder">
                  {copy.hero.primaryCta}
                  <ArrowDown className="size-4 transition group-hover:translate-y-0.5" aria-hidden="true" />
                </a>
              </Button>
              <CtaButton href="/book-demo" size="lg" variant="secondary">
                {copy.hero.secondaryCta}
              </CtaButton>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
              {copy.hero.proof.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-sm lg:block">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-cyan-300/18 to-violet-400/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-panel backdrop-blur">
              <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Agent Studio</span>
                  <Sparkles className="size-4 text-cyan-100" aria-hidden="true" />
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    locale === "es" ? "Idea" : "Idea",
                    locale === "es" ? "Proceso" : "Workflow",
                    locale === "es" ? "Canales" : "Channels",
                  ].map((label, index) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                      <div className="flex items-center gap-3">
                        <span className="grid size-7 place-items-center rounded-full bg-cyan-300/10 text-xs font-semibold text-cyan-100">
                          {index + 1}
                        </span>
                        <span className="text-sm font-medium text-slate-200">{label}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-cyan-200/20 bg-cyan-300/10 p-3">
                  <div className="h-2 w-28 rounded-full bg-cyan-100/70" />
                  <div className="mt-2 h-2 w-40 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <AiBuilder className="relative -mt-2 pb-12 pt-0 sm:-mt-4 sm:pb-16 sm:pt-0" />
      </section>

      <section className="container py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            {copy.useCases.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {copy.useCases.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            {copy.useCases.description}
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.useCases.cards.map((card) => (
            <VisualCard key={card.title} {...card} />
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
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#07101f] p-5 text-center shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:border-cyan-200/25 hover:bg-white/[0.045]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mx-auto grid size-10 place-items-center rounded-full border border-cyan-200/15 bg-cyan-300/10 text-sm font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
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
