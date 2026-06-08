"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  CalendarCheck,
  CheckCircle2,
  Headphones,
  Home,
  MessageSquare,
  PhoneCall,
  SearchCheck,
  UserPlus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Support",
  "Sales",
  "Operations",
  "Real Estate",
  "Voice",
  "Website",
] as const;

type Category = (typeof categories)[number];

const categoryLabels = {
  es: {
    All: "Todos",
    Support: "Atención",
    Sales: "Ventas",
    Operations: "Operaciones",
    "Real Estate": "Inmobiliario",
    Voice: "Voz",
    Website: "Web",
  },
  en: {
    All: "All",
    Support: "Support",
    Sales: "Sales",
    Operations: "Operations",
    "Real Estate": "Real Estate",
    Voice: "Voice",
    Website: "Website",
  },
} as const;

type UseCaseCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  trigger: string;
  agentDoes: string;
  systems: readonly string[];
  outcome: string;
  categories: readonly Exclude<Category, "All">[];
};

const useCaseCards = {
  es: [
    {
      icon: MessageSquare,
      title: "Agente de captación web",
      description: "Convierte visitas web en consultas estructuradas.",
      trigger: "Un visitante pregunta por precio, servicio o disponibilidad.",
      agentDoes: "Responde, cualifica, recoge datos y deriva al cliente potencial.",
      systems: ["Chat web", "CRM", "Email", "Calendario"],
      outcome: "Conversaciones más útiles desde el tráfico existente.",
      categories: ["Sales", "Website"],
    },
    {
      icon: Building2,
      title: "Asistente para alquileres",
      description: "Responde preguntas sobre unidades, tours y requisitos.",
      trigger: "Un renter pregunta por una propiedad o tour.",
      agentDoes: "Responde, revisa preferencias, cualifica y prepara la derivación.",
      systems: ["Website", "CRM", "Calendario", "Base de propiedades"],
      outcome: "Respuesta más rápida y mejor recepción de clientes potenciales.",
      categories: ["Real Estate", "Sales", "Website"],
    },
    {
      icon: Home,
      title: "Triaje de mantenimiento",
      description: "Recopila detalles antes de enrutar solicitudes.",
      trigger: "Un residente reporta un problema.",
      agentDoes: "Pide ubicación, urgencia, notas, acceso y prioridad.",
      systems: ["Portal residente", "Helpdesk", "Email", "Sistema mantenimiento"],
      outcome: "Menos ida y vuelta y mejor enrutamiento.",
      categories: ["Operations", "Real Estate", "Support"],
    },
    {
      icon: CalendarCheck,
      title: "Asistente de reservas",
      description: "Convierte intención en cita confirmada.",
      trigger: "Un cliente pide reservar llamada, tour o visita.",
      agentDoes: "Recopila preferencias, propone horarios y envía recordatorios.",
      systems: ["Calendario", "CRM", "Email", "SMS"],
      outcome: "Más citas con menos pasos manuales.",
      categories: ["Sales", "Operations", "Website"],
    },
    {
      icon: Headphones,
      title: "Agente de preguntas frecuentes",
      description: "Responde preguntas repetidas desde conocimiento aprobado.",
      trigger: "Un cliente hace una pregunta común.",
      agentDoes: "Busca respuestas aprobadas, responde y deriva si la confianza es baja.",
      systems: ["Base de conocimiento", "Helpdesk", "Chat web", "Email"],
      outcome: "Respuestas más rápidas y menos tickets repetitivos.",
      categories: ["Support", "Website"],
    },
    {
      icon: PhoneCall,
      title: "Agente de seguimiento de llamadas perdidas",
      description: "Recupera demanda tras llamadas perdidas o fuera de horario.",
      trigger: "Se registra una llamada perdida, voicemail o fuera de horario.",
      agentDoes: "Envía seguimiento, recopila intención, resume y enruta urgencias.",
      systems: ["Telefonía", "SMS", "CRM", "Email"],
      outcome: "Menos oportunidades perdidas y mejor seguimiento.",
      categories: ["Voice", "Sales", "Support"],
    },
    {
      icon: UserPlus,
      title: "Agente de calificación comercial",
      description: "Captura señales de fit para mejor seguimiento.",
      trigger: "Un prospecto envía formulario, chatea, responde o llama.",
      agentDoes: "Pregunta necesidad, presupuesto, plazo y envía resumen puntuado.",
      systems: ["CRM", "Formularios web", "Email", "Calendario"],
      outcome: "Pipeline más limpio y seguimiento más rápido.",
      categories: ["Sales", "Website", "Voice"],
    },
    {
      icon: SearchCheck,
      title: "Asistente interno de conocimiento",
      description: "Ayuda a encontrar políticas, owners y pasos de proceso.",
      trigger: "Un equipo hace una pregunta interna.",
      agentDoes: "Busca contenido aprobado y enruta solicitudes cuando toca.",
      systems: ["Docs internos", "Ticketing", "Slack placeholder", "Helpdesk"],
      outcome: "Menos búsqueda y menos solicitudes repetidas.",
      categories: ["Operations", "Support"],
    },
  ],
  en: [
    {
      icon: MessageSquare,
      title: "Website lead capture agent",
      description: "Turns website visits into structured inquiries.",
      trigger: "Visitor asks about pricing, service, or availability.",
      agentDoes: "Answers, qualifies, captures details, and routes the lead.",
      systems: ["Website chat", "CRM", "Email", "Calendar"],
      outcome: "More useful conversations from traffic you already have.",
      categories: ["Sales", "Website"],
    },
    {
      icon: Building2,
      title: "Property leasing assistant",
      description: "Responds to unit, tour, and qualification questions.",
      trigger: "Renter asks about a property or tour.",
      agentDoes: "Answers, checks preferences, qualifies, and prepares handoff.",
      systems: ["Website", "CRM", "Calendar", "Property database"],
      outcome: "Faster leasing response and cleaner prospect intake.",
      categories: ["Real Estate", "Sales", "Website"],
    },
    {
      icon: Home,
      title: "Maintenance request triage",
      description: "Collects maintenance details before routing.",
      trigger: "Resident reports an issue.",
      agentDoes: "Asks location, urgency, notes, access details, and priority.",
      systems: ["Resident portal", "Helpdesk", "Email", "Maintenance system"],
      outcome: "Less manual back-and-forth and better request routing.",
      categories: ["Operations", "Real Estate", "Support"],
    },
    {
      icon: CalendarCheck,
      title: "Appointment booking assistant",
      description: "Moves customers from intent to booked appointment.",
      trigger: "Customer asks to book a call, tour, or visit.",
      agentDoes: "Collects preferences, proposes times, and sends reminders.",
      systems: ["Calendar", "CRM", "Email", "SMS"],
      outcome: "More booked appointments with fewer manual scheduling steps.",
      categories: ["Sales", "Operations", "Website"],
    },
    {
      icon: Headphones,
      title: "Customer support FAQ agent",
      description: "Answers repeat questions from approved knowledge.",
      trigger: "Customer asks a common question.",
      agentDoes: "Searches FAQs, answers, and escalates when confidence is low.",
      systems: ["Knowledge base", "Helpdesk", "Website chat", "Email"],
      outcome: "Faster answers and fewer repetitive support tickets.",
      categories: ["Support", "Website"],
    },
    {
      icon: PhoneCall,
      title: "Missed-call follow-up agent",
      description: "Recovers demand after missed or after-hours calls.",
      trigger: "A missed call, voicemail, or after-hours call event is logged.",
      agentDoes:
        "Sends a follow-up message, collects intent, summarizes the request, and routes urgent cases.",
      systems: ["Phone system", "SMS", "CRM", "Email"],
      outcome: "Fewer missed opportunities and clearer call follow-up.",
      categories: ["Voice", "Sales", "Support"],
    },
    {
      icon: UserPlus,
      title: "Sales qualification agent",
      description: "Captures fit signals for better sales follow-up.",
      trigger: "Prospect submits a form, chats, replies, or calls.",
      agentDoes: "Asks needs, budget, timeline, and sends a scored summary.",
      systems: ["CRM", "Website forms", "Email", "Calendar"],
      outcome: "Cleaner pipeline data and faster follow-up for qualified prospects.",
      categories: ["Sales", "Website", "Voice"],
    },
    {
      icon: SearchCheck,
      title: "Internal team knowledge assistant",
      description: "Helps employees find policies, owners, and process steps.",
      trigger: "Team member asks an internal question.",
      agentDoes: "Searches approved content and routes requests when needed.",
      systems: ["Internal docs", "Ticketing", "Slack placeholder", "Helpdesk"],
      outcome: "Less searching and fewer repeated internal requests.",
      categories: ["Operations", "Support"],
    },
  ],
} satisfies Record<"es" | "en", readonly UseCaseCard[]>;

export function UseCasesFilterGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const { locale } = useLocale();
  const activeUseCaseCards = useCaseCards[locale];
  const filteredUseCases = useMemo(() => {
    if (activeCategory === "All") {
      return activeUseCaseCards;
    }

    return activeUseCaseCards.filter((useCase) =>
      (useCase.categories as readonly Category[]).includes(activeCategory),
    );
  }, [activeCategory, activeUseCaseCards]);

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2"
        aria-label={locale === "es" ? "Filtros de casos de uso" : "Use case filters"}
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-md border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              activeCategory === category
                ? "border-cyan-300/50 bg-cyan-300/10 text-white"
                : "border-white/10 bg-white/[0.04] text-slate-400 hover:border-white/20 hover:text-white",
            )}
            aria-pressed={activeCategory === category}
          >
            {categoryLabels[locale][category]}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {filteredUseCases.map((useCase, index) => {
          const Icon = useCase.icon;

          return (
            <Reveal
              key={useCase.title}
              delay={index * 0.035}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                  <Icon className="size-6" />
                </div>
                <div>
                  <div className="flex flex-wrap gap-2">
                    {useCase.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-xs font-semibold text-cyan-100"
                      >
                        {categoryLabels[locale][category]}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-white">
                    {useCase.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {useCase.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <UseCaseDetail
                  label={locale === "es" ? "Disparador" : "Trigger"}
                  text={useCase.trigger}
                />
                <UseCaseDetail
                  label={
                    locale === "es"
                      ? "Qué hace el agente"
                      : "What the AI agent does"
                  }
                  text={useCase.agentDoes}
                />
                <UseCaseDetail
                  label={
                    locale === "es"
                      ? "Sistemas posibles"
                      : "Systems it may connect to"
                  }
                  text={useCase.systems.join(", ")}
                />
                <UseCaseDetail
                  label={locale === "es" ? "Resultado" : "Outcome"}
                  text={useCase.outcome}
                />
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

function UseCaseDetail({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-[#050914]/80 p-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
        <CheckCircle2 className="size-4 text-emerald-300" />
        {label}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}
