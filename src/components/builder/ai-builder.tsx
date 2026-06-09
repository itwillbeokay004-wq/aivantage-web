"use client";

import { useMemo, useRef, useState } from "react";
import { Bot, CalendarDays, CheckCircle2, RotateCcw, Sparkles } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/cta-button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type RecommendationType = "website" | "phone" | "lead" | "booking" | "custom";

type Recommendation = {
  type: RecommendationType;
  agentName: string;
  whatItDoes: string;
  workflow: string;
  channels: string;
  nextStep: string;
};

const content = {
  es: {
    title: "¿Qué quieres crear con IA?",
    eyebrow: "Generador AiVantage",
    description: "Escribe una idea y recibe una propuesta clara de agente, canales y próximos pasos.",
    placeholder:
      "Ejemplo: Quiero un asistente que responda llamadas y capte clientes potenciales…",
    button: "Generar idea",
    emptyError: "Cuéntanos brevemente qué quieres automatizar.",
    labels: {
      agent: "Agente recomendado",
      does: "Qué haría",
      workflow: "Proceso sugerido",
      channels: "Canales",
      nextStep: "Próximo paso",
    },
    chips: [
      "Quiero un chatbot para mi web",
      "Necesito responder llamadas perdidas",
      "Quiero cualificar clientes potenciales",
      "Quiero automatizar reservas de citas",
    ],
    demoCta: "Reservar una demo",
    tryAgain: "Probar otra idea",
    demoNote: "Respuesta de demostración basada en palabras clave. No usa IA real todavía.",
    recommendations: {
      website: {
        type: "website",
        agentName: "Asistente web de IA",
        whatItDoes:
          "Respondería preguntas frecuentes, captaría clientes potenciales y pasaría conversaciones importantes a tu equipo.",
        workflow:
          "Visitante entra en la web → el asistente pregunta qué necesita → recoge datos clave → responde o deriva al equipo.",
        channels: "Sitio web, email y CRM.",
        nextStep: "Podemos revisar tu web y definir el primer flujo de conversación.",
      },
      phone: {
        type: "phone",
        agentName: "Asistente telefónico con IA",
        whatItDoes:
          "Respondería llamadas, recogería información básica, resumiría la conversación y reduciría oportunidades perdidas.",
        workflow:
          "Cliente llama → el asistente atiende → identifica la necesidad → registra los datos → envía el resumen al equipo.",
        channels: "Teléfono, email, CRM y calendario.",
        nextStep: "Podemos mapear tus llamadas más comunes y crear el primer guion.",
      },
      lead: {
        type: "lead",
        agentName: "Agente de cualificación comercial",
        whatItDoes:
          "Haría preguntas clave, identificaría la intención del cliente y organizaría la información para tu equipo comercial.",
        workflow:
          "Cliente deja sus datos → el agente pregunta presupuesto, necesidad y urgencia → califica la oportunidad → envía el resumen.",
        channels: "Web, formularios, email, CRM y calendario.",
        nextStep:
          "Podemos definir tus criterios de cliente ideal y automatizar el seguimiento.",
      },
      booking: {
        type: "booking",
        agentName: "Agente de reservas de citas",
        whatItDoes:
          "Ayudaría a encontrar horarios, confirmar disponibilidad y reducir mensajes de ida y vuelta con cada cliente.",
        workflow:
          "Cliente solicita una cita → el agente recoge preferencias → propone horario → confirma y envía recordatorio.",
        channels: "Web, calendario, email, SMS y CRM.",
        nextStep: "Podemos revisar tu proceso actual de reservas y crear el primer flujo.",
      },
      custom: {
        type: "custom",
        agentName: "Agente personalizado de automatización con IA",
        whatItDoes:
          "Analizaría tu proceso, recopilaría información clave y ayudaría a automatizar tareas repetitivas con control humano cuando haga falta.",
        workflow:
          "Usuario inicia la conversación → el agente entiende la intención → consulta conocimiento aprobado → responde, activa tareas o deriva al equipo.",
        channels: "Chat web, email, CRM, calendario y herramientas internas.",
        nextStep: "Podemos convertir tu idea en un mapa simple de agente, proceso y lanzamiento.",
      },
    },
  },
  en: {
    title: "What do you want to build with AI?",
    eyebrow: "AiVantage Builder",
    description: "Type an idea and get a clear agent concept, channels, and next steps.",
    placeholder: "Example: I want an assistant that answers calls and captures leads…",
    button: "Generate idea",
    emptyError: "Briefly describe what you want to automate.",
    labels: {
      agent: "Recommended agent",
      does: "What it would do",
      workflow: "Suggested workflow",
      channels: "Channels",
      nextStep: "Next step",
    },
    chips: [
      "I want a website chatbot",
      "I need to answer missed calls",
      "I want to qualify leads",
      "I want to automate appointment booking",
    ],
    demoCta: "Book a demo",
    tryAgain: "Try another idea",
    demoNote: "Demo response based on keywords. It does not use real AI yet.",
    recommendations: {
      website: {
        type: "website",
        agentName: "Website AI Assistant",
        whatItDoes:
          "It would answer FAQs, capture leads, and route important conversations to your team.",
        workflow:
          "Visitor lands on your website → the assistant asks what they need → captures key details → answers or hands off to your team.",
        channels: "Website, email, and CRM.",
        nextStep: "We can review your website and define the first conversation flow.",
      },
      phone: {
        type: "phone",
        agentName: "AI Phone Assistant",
        whatItDoes:
          "It would answer calls, collect basic information, summarize conversations, and reduce missed opportunities.",
        workflow:
          "Customer calls → the assistant answers → identifies the need → records details → sends a summary to your team.",
        channels: "Phone, email, CRM, and calendar.",
        nextStep: "We can map your most common calls and create the first call script.",
      },
      lead: {
        type: "lead",
        agentName: "Lead Qualification Agent",
        whatItDoes:
          "It would ask key questions, identify customer intent, and organize information for your sales team.",
        workflow:
          "Customer shares details → the agent asks about budget, need, and urgency → qualifies the opportunity → sends the summary.",
        channels: "Website, forms, email, CRM, and calendar.",
        nextStep: "We can define your ideal-customer criteria and automate follow-up.",
      },
      booking: {
        type: "booking",
        agentName: "Appointment Booking Agent",
        whatItDoes:
          "It would help find times, confirm availability, and reduce back-and-forth messages with customers.",
        workflow:
          "Customer requests an appointment → the agent collects preferences → suggests a time → confirms and sends a reminder.",
        channels: "Website, calendar, email, SMS, and CRM.",
        nextStep: "We can review your booking process and create the first scheduling flow.",
      },
      custom: {
        type: "custom",
        agentName: "Custom AI Automation Agent",
        whatItDoes:
          "It would understand your process, collect key information, and automate repetitive tasks with human control where needed.",
        workflow:
          "User starts a conversation → the agent understands intent → checks approved knowledge → answers, triggers tasks, or hands off.",
        channels: "Website chat, email, CRM, calendar, and internal tools.",
        nextStep: "We can turn your idea into a simple agent, workflow, and launch plan.",
      },
    },
  },
} as const;

const keywordGroups: Record<RecommendationType, readonly string[]> = {
  website: ["website", "web", "chatbot", "chat", "site", "sitio", "página", "pagina"],
  phone: ["phone", "call", "calls", "missed", "llamada", "llamadas", "teléfono", "telefono"],
  lead: ["lead", "leads", "sales", "venta", "ventas", "cliente potencial", "clientes potenciales", "prospect"],
  booking: ["appointment", "appointments", "booking", "calendar", "cita", "citas", "reserva", "reservas", "calendario"],
  custom: [],
};

export function AiBuilder({ className }: { className?: string }) {
  const { locale } = useLocale();
  const copy = content[locale];
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const hasResult = Boolean(recommendation);

  const icon = useMemo(() => {
    if (!recommendation) return Sparkles;

    return recommendation.type === "booking" ? CalendarDays : Bot;
  }, [recommendation]);

  function generate(input: string) {
    const trimmed = input.trim();

    if (!trimmed) {
      setError(copy.emptyError);
      setRecommendation(null);
      return;
    }

    setError("");
    const recommendationType = getRecommendationType(trimmed);
    setRecommendation(copy.recommendations[recommendationType]);
    window.requestAnimationFrame(() => {
      const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      resultRef.current?.scrollIntoView({
        block: "nearest",
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    });
  }

  function resetIdea() {
    setValue("");
    setError("");
    setRecommendation(null);
  }

  const ResultIcon = icon;

  return (
    <div id="ai-builder" className={cn("container relative py-8 sm:py-12", className)}>
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.055] p-3 shadow-panel backdrop-blur">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#050b16] p-5 sm:p-8 lg:p-10">
          <div className="absolute inset-0 hero-mesh opacity-55" />
          <div className="absolute inset-0 signal-grid opacity-20" />
          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                {copy.eyebrow}
              </p>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {copy.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                {copy.description}
              </p>
              <p className="mt-5 text-xs text-slate-500">{copy.demoNote}</p>
            </div>

            <form
              className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 shadow-sm shadow-black/20"
              onSubmit={(event) => {
                event.preventDefault();
                generate(value);
              }}
            >
              <label htmlFor="builder-prompt" className="sr-only">
                {copy.title}
              </label>
              <Textarea
                id="builder-prompt"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder={copy.placeholder}
                className="min-h-32 resize-none border-white/10 bg-white/[0.04] text-base leading-7"
              />
              {error ? (
                <p className="mt-3 text-sm text-rose-200" role="alert">
                  {error}
                </p>
              ) : null}
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {copy.chips.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => {
                        setValue(chip);
                        generate(chip);
                      }}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
                <Button type="submit" className="shrink-0">
                  {copy.button}
                  <Sparkles className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </form>
          </div>

          <div
            ref={resultRef}
            aria-live="polite"
            className={cn(
              "relative grid transition-all duration-300",
              hasResult ? "mt-8 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              {recommendation ? (
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-5 shadow-lg shadow-cyan-950/20 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-100">
                        <ResultIcon className="size-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                          {copy.labels.agent}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                          {recommendation.agentName}
                        </h3>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                      <CheckCircle2 className="size-4" aria-hidden="true" />
                      {locale === "es" ? "Idea generada" : "Idea generated"}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <ResultBlock label={copy.labels.does} value={recommendation.whatItDoes} />
                    <ResultBlock label={copy.labels.channels} value={recommendation.channels} />
                    <ResultBlock className="md:col-span-2" label={copy.labels.workflow} value={recommendation.workflow} />
                    <ResultBlock className="md:col-span-2" label={copy.labels.nextStep} value={recommendation.nextStep} />
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <CtaButton href="/book-demo" size="lg">
                      {copy.demoCta}
                    </CtaButton>
                    <Button type="button" variant="secondary" size="lg" onClick={resetIdea}>
                      {copy.tryAgain}
                      <RotateCcw className="size-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultBlock({ label, value, className }: { label: string; value: string; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/[0.055] p-4", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
      <p className="mt-3 text-sm leading-6 text-slate-100">{value}</p>
    </div>
  );
}

function getRecommendationType(input: string): RecommendationType {
  const normalized = input.toLowerCase();
  const orderedTypes: RecommendationType[] = ["phone", "booking", "lead", "website"];

  return orderedTypes.find((type) => keywordGroups[type].some((keyword) => normalized.includes(keyword))) ?? "custom";
}
