import { z } from "zod";

import { defaultLocale, type Locale } from "@/lib/i18n";

export const agentRecommendationSchema = z.object({
  agentName: z.string().trim().min(2).max(90),
  summary: z.string().trim().min(10).max(700),
  workflow: z.array(z.string().trim().min(2).max(140)).min(3).max(6),
  channels: z.array(z.string().trim().min(2).max(80)).min(1).max(6),
  recommendedIntegrations: z.array(z.string().trim().min(2).max(80)).min(1).max(6),
  estimatedSetup: z.string().trim().min(2).max(80),
  nextStep: z.string().trim().min(10).max(300),
  ctaLabel: z.string().trim().min(2).max(60),
  ctaHref: z.string().trim().min(1).max(80),
});

export type AgentRecommendation = z.infer<typeof agentRecommendationSchema>;

export const generateAgentRequestSchema = z.object({
  locale: z.enum(["es", "en"]).default(defaultLocale),
  userIdea: z
    .string()
    .trim()
    .min(6, "Describe what you want to automate.")
    .max(900, "Idea must be 900 characters or fewer."),
  businessType: z.string().trim().max(120).optional().default(""),
  contactIntent: z.string().trim().max(120).optional().default(""),
});

export type GenerateAgentRequest = z.infer<typeof generateAgentRequestSchema>;

const keywordGroups = {
  website: ["website", "web", "chatbot", "chat", "site", "sitio", "página", "pagina"],
  phone: ["phone", "call", "calls", "missed", "llamada", "llamadas", "teléfono", "telefono"],
  lead: ["lead", "leads", "sales", "venta", "ventas", "cliente potencial", "clientes potenciales", "prospect"],
  booking: ["appointment", "appointments", "booking", "calendar", "cita", "citas", "reserva", "reservas", "calendario"],
} as const;

type RecommendationKind = keyof typeof keywordGroups | "custom";

export function getFallbackAgentRecommendation(locale: Locale, userIdea: string): AgentRecommendation {
  const kind = getRecommendationKind(userIdea);
  const recommendations = fallbackRecommendations[locale];

  return recommendations[kind];
}

function getRecommendationKind(input: string): RecommendationKind {
  const normalized = input.toLowerCase();
  const orderedKinds: RecommendationKind[] = ["phone", "booking", "lead", "website"];

  return orderedKinds.find(
    (kind) => kind !== "custom" && keywordGroups[kind].some((keyword) => normalized.includes(keyword)),
  ) ?? "custom";
}

const fallbackRecommendations = {
  es: {
    website: {
      agentName: "Asistente web de IA",
      summary:
        "Respondería preguntas frecuentes, captaría clientes potenciales y pasaría conversaciones importantes a tu equipo.",
      workflow: [
        "El visitante entra en la web.",
        "El asistente pregunta qué necesita.",
        "Recoge datos clave y responde desde conocimiento aprobado.",
        "Deriva al equipo cuando hace falta seguimiento humano.",
      ],
      channels: ["Sitio web", "Email", "CRM"],
      recommendedIntegrations: ["Formulario web", "CRM", "Email"],
      estimatedSetup: "1–3 semanas para un primer flujo",
      nextStep: "Podemos revisar tu web y definir el primer flujo de conversación.",
      ctaLabel: "Reservar una demo",
      ctaHref: "/reservar-demo",
    },
    phone: {
      agentName: "Asistente telefónico con IA",
      summary:
        "Respondería llamadas, recogería información básica, resumiría la conversación y reduciría oportunidades perdidas.",
      workflow: [
        "El cliente llama.",
        "El asistente atiende e identifica la necesidad.",
        "Registra datos clave y nivel de urgencia.",
        "Envía un resumen al equipo o prepara una cita.",
      ],
      channels: ["Teléfono", "Email", "CRM", "Calendario"],
      recommendedIntegrations: ["Telefonía", "CRM", "Calendario", "Email"],
      estimatedSetup: "2–4 semanas para un piloto controlado",
      nextStep: "Podemos mapear tus llamadas más comunes y crear el primer guion.",
      ctaLabel: "Reservar una demo",
      ctaHref: "/reservar-demo",
    },
    lead: {
      agentName: "Agente de cualificación comercial",
      summary:
        "Haría preguntas clave, identificaría la intención del cliente y organizaría la información para tu equipo comercial.",
      workflow: [
        "El cliente deja sus datos o inicia una conversación.",
        "El agente pregunta necesidad, urgencia y presupuesto.",
        "Califica la oportunidad con criterios acordados.",
        "Envía el resumen y activa el seguimiento.",
      ],
      channels: ["Web", "Formularios", "Email", "CRM", "Calendario"],
      recommendedIntegrations: ["CRM", "Email", "Calendario", "Formularios"],
      estimatedSetup: "1–3 semanas según criterios comerciales",
      nextStep: "Podemos definir tus criterios de cliente ideal y automatizar el seguimiento.",
      ctaLabel: "Reservar una demo",
      ctaHref: "/reservar-demo",
    },
    booking: {
      agentName: "Agente de reservas de citas",
      summary:
        "Ayudaría a encontrar horarios, confirmar disponibilidad y reducir mensajes de ida y vuelta con cada cliente.",
      workflow: [
        "El cliente solicita una cita.",
        "El agente recoge preferencias y datos básicos.",
        "Propone un horario disponible.",
        "Confirma la cita y envía recordatorio.",
      ],
      channels: ["Web", "Calendario", "Email", "SMS", "CRM"],
      recommendedIntegrations: ["Calendario", "CRM", "Email", "SMS"],
      estimatedSetup: "1–2 semanas para un flujo inicial",
      nextStep: "Podemos revisar tu proceso actual de reservas y crear el primer flujo.",
      ctaLabel: "Reservar una demo",
      ctaHref: "/reservar-demo",
    },
    custom: {
      agentName: "Agente personalizado de automatización con IA",
      summary:
        "Analizaría tu proceso, recopilaría información clave y automatizaría tareas repetitivas con control humano cuando haga falta.",
      workflow: [
        "El usuario explica lo que necesita.",
        "El agente entiende la intención y consulta conocimiento aprobado.",
        "Responde, recoge datos o activa una tarea.",
        "Deriva al equipo cuando el caso requiere revisión humana.",
      ],
      channels: ["Chat web", "Email", "CRM", "Calendario"],
      recommendedIntegrations: ["CRM", "Email", "Calendario", "API interna"],
      estimatedSetup: "2–4 semanas según alcance",
      nextStep: "Podemos convertir tu idea en un mapa simple de agente, proceso y lanzamiento.",
      ctaLabel: "Reservar una demo",
      ctaHref: "/reservar-demo",
    },
  },
  en: {
    website: {
      agentName: "Website AI Assistant",
      summary: "It would answer FAQs, capture leads, and route important conversations to your team.",
      workflow: [
        "A visitor lands on your website.",
        "The assistant asks what they need.",
        "It captures key details and answers from approved knowledge.",
        "It hands off to your team when human follow-up is needed.",
      ],
      channels: ["Website", "Email", "CRM"],
      recommendedIntegrations: ["Website forms", "CRM", "Email"],
      estimatedSetup: "1–3 weeks for a first flow",
      nextStep: "We can review your website and define the first conversation flow.",
      ctaLabel: "Book a demo",
      ctaHref: "/en/book-demo",
    },
    phone: {
      agentName: "AI Phone Assistant",
      summary: "It would answer calls, collect basic information, summarize conversations, and reduce missed opportunities.",
      workflow: [
        "A customer calls your business.",
        "The assistant answers and identifies the need.",
        "It records key details and urgency.",
        "It sends a summary to your team or prepares an appointment.",
      ],
      channels: ["Phone", "Email", "CRM", "Calendar"],
      recommendedIntegrations: ["Phone system", "CRM", "Calendar", "Email"],
      estimatedSetup: "2–4 weeks for a controlled pilot",
      nextStep: "We can map your most common calls and create the first call script.",
      ctaLabel: "Book a demo",
      ctaHref: "/en/book-demo",
    },
    lead: {
      agentName: "Lead Qualification Agent",
      summary: "It would ask key questions, identify customer intent, and organize information for your sales team.",
      workflow: [
        "A customer submits details or starts a conversation.",
        "The agent asks about need, urgency, and budget.",
        "It qualifies the opportunity against agreed criteria.",
        "It sends a summary and triggers follow-up.",
      ],
      channels: ["Website", "Forms", "Email", "CRM", "Calendar"],
      recommendedIntegrations: ["CRM", "Email", "Calendar", "Forms"],
      estimatedSetup: "1–3 weeks depending on sales criteria",
      nextStep: "We can define your ideal-customer criteria and automate follow-up.",
      ctaLabel: "Book a demo",
      ctaHref: "/en/book-demo",
    },
    booking: {
      agentName: "Appointment Booking Agent",
      summary: "It would help find times, confirm availability, and reduce back-and-forth messages with customers.",
      workflow: [
        "A customer requests an appointment.",
        "The agent collects preferences and basic details.",
        "It suggests an available time.",
        "It confirms the appointment and sends a reminder.",
      ],
      channels: ["Website", "Calendar", "Email", "SMS", "CRM"],
      recommendedIntegrations: ["Calendar", "CRM", "Email", "SMS"],
      estimatedSetup: "1–2 weeks for an initial flow",
      nextStep: "We can review your booking process and create the first scheduling flow.",
      ctaLabel: "Book a demo",
      ctaHref: "/en/book-demo",
    },
    custom: {
      agentName: "Custom AI Automation Agent",
      summary:
        "It would understand your process, collect key information, and automate repetitive tasks with human control where needed.",
      workflow: [
        "The user explains what they need.",
        "The agent understands intent and checks approved knowledge.",
        "It answers, collects data, or triggers a task.",
        "It hands off to your team when human review is needed.",
      ],
      channels: ["Website chat", "Email", "CRM", "Calendar"],
      recommendedIntegrations: ["CRM", "Email", "Calendar", "Internal API"],
      estimatedSetup: "2–4 weeks depending on scope",
      nextStep: "We can turn your idea into a simple agent, workflow, and launch plan.",
      ctaLabel: "Book a demo",
      ctaHref: "/en/book-demo",
    },
  },
} satisfies Record<Locale, Record<RecommendationKind, AgentRecommendation>>;
