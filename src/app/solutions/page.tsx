import {
  Bot,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Headphones,
  MessageSquare,
  PhoneCall,
  Send,
  UserPlus,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { VoiceAgentCard } from "@/components/sections/voice-agent-card";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ctaLabelsByLocale } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();

  return pageMetadata({
    title: locale === "es" ? "Soluciones" : "Solutions",
    description:
      locale === "es"
        ? "Explora soluciones de automatización con IA para atención al cliente, clientes potenciales, reservas, inmobiliarias, operaciones, llamadas, chat y seguimiento."
        : "Explore AiVantage AI automation solutions for customer support, lead qualification, appointment booking, real estate, operations, voice calls, chat, and follow-up.",
    path: "/solutions",
    locale,
  });
}

const solutionsContent = {
  es: {
    cardKicker: "Construido como proceso práctico.",
    detailLabels: {
      problem: "Problema",
      agentDoes: "Qué hace el agente de IA",
      workflow: "Ejemplo de proceso",
      outcome: "Resultado para el negocio",
    },
    solutionCards: [
      {
        icon: Headphones,
        title: "Automatización de atención al cliente",
        problem: "Los equipos responden las mismas preguntas todo el día.",
        agentDoes: "Responde preguntas frecuentes, recopila contexto y deriva casos complejos.",
        workflow: "Pregunta → respuesta aprobada → resolución o derivación.",
        outcome: "Respuestas más rápidas y menos tickets repetitivos.",
      },
      {
        icon: UserPlus,
        title: "Cualificación de clientes potenciales",
        problem: "Las consultas llegan sin contexto suficiente.",
        agentDoes: "Pregunta por encaje, presupuesto, plazo y urgencia.",
        workflow: "Chat → señales de encaje → derivación limpia a ventas.",
        outcome: "Mejores clientes potenciales y seguimiento más rápido.",
      },
      {
        icon: CalendarCheck,
        title: "Reserva de citas",
        problem: "Agendar crea fricción y mensajes de ida y vuelta.",
        agentDoes: "Revisa horarios, confirma datos y envía recordatorios.",
        workflow: "Solicitud → opciones → cita confirmada.",
        outcome: "Menos coordinación manual y más reservas.",
      },
      {
        icon: Building2,
        title: "Asistente para inmobiliarias y gestión de propiedades",
        problem: "Las preguntas llegan por demasiados canales.",
        agentDoes: "Responde sobre inmuebles, cualifica personas interesadas y recopila solicitudes.",
        workflow: "Consulta → criterios → respuesta aprobada o derivación para visita.",
        outcome: "Alquileres más ágiles y recepción más ordenada.",
      },
      {
        icon: Workflow,
        title: "Asistente interno de operaciones",
        problem: "Los equipos pierden tiempo buscando respuestas.",
        agentDoes: "Encuentra políticas, deriva solicitudes y recopila datos faltantes.",
        workflow: "Pregunta → búsqueda en conocimiento → tarea asignada.",
        outcome: "Ayuda interna más rápida.",
      },
      {
        icon: PhoneCall,
        title: "Asistente de llamadas",
        problem: "Las llamadas se pierden o se atienden con prisa.",
        agentDoes: "Captura intención, resume llamadas y marca urgencia.",
        workflow: "Llamada → recepción → derivación estructurada.",
        outcome: "Mejor cobertura y contexto más limpio.",
      },
      {
        icon: MessageSquare,
        title: "Asistente de chat web",
        problem: "Los visitantes se van sin respuesta.",
        agentDoes: "Responde preguntas frecuentes, guía siguientes pasos y captura contacto.",
        workflow: "Pregunta → respuesta → reserva o derivación.",
        outcome: "Conversaciones web más útiles.",
      },
      {
        icon: Send,
        title: "Automatización de seguimiento",
        problem: "El seguimiento se olvida o llega tarde.",
        agentDoes: "Envía recordatorios, resúmenes y próximos pasos.",
        workflow: "Recepción → siguiente contacto → seguimiento a tiempo.",
        outcome: "Menos oportunidades perdidas.",
      },
    ],
    industries: [
      {
        icon: Building2,
        name: "Inmobiliarias",
        description: "Cualifica compradores, vendedores e interesados en alquiler.",
      },
      {
        icon: Building2,
        name: "Gestión de propiedades",
        description: "Gestiona residentes, alquileres y solicitudes de mantenimiento.",
      },
      {
        icon: Workflow,
        name: "Servicios locales",
        description: "Reserva trabajos y captura detalles de servicio.",
      },
      {
        icon: Headphones,
        name: "Clínicas y consultas",
        description: "Ayuda con recepción, citas y preguntas no clínicas.",
      },
      {
        icon: CheckCircle2,
        name: "Despachos legales",
        description: "Filtra consultas y organiza la recepción inicial.",
      },
      {
        icon: MessageSquare,
        name: "E-commerce",
        description: "Responde preguntas de producto, pedido y devolución.",
      },
      {
        icon: UserPlus,
        name: "Educación",
        description: "Guía admisiones, orientación y agenda.",
      },
      {
        icon: PhoneCall,
        name: "Servicios para el hogar",
        description: "Convierte llamadas y visitas en trabajos reservados.",
      },
    ],
  },
  en: {
    cardKicker: "Built as a practical workflow.",
    detailLabels: {
      problem: "Problem",
      agentDoes: "What the AI agent does",
      workflow: "Example workflow",
      outcome: "Business outcome",
    },
    solutionCards: [
      {
        icon: Headphones,
        title: "Customer Support Automation",
        problem: "Teams answer the same questions all day.",
        agentDoes: "Answers FAQs, collects context, and escalates complex cases.",
        workflow: "Question → approved answer → resolution or handoff.",
        outcome: "Faster replies and fewer repetitive tickets.",
      },
      {
        icon: UserPlus,
        title: "Lead Qualification",
        problem: "Inquiries lack context.",
        agentDoes: "Asks fit, budget, timeline, and urgency questions.",
        workflow: "Chat → fit signals → clean sales handoff.",
        outcome: "Better leads and faster follow-up.",
      },
      {
        icon: CalendarCheck,
        title: "Appointment Booking",
        problem: "Scheduling creates friction.",
        agentDoes: "Checks times, confirms details, and sends reminders.",
        workflow: "Request → options → confirmed appointment.",
        outcome: "Less back-and-forth, more bookings.",
      },
      {
        icon: Building2,
        title: "Real Estate & Property Management Assistant",
        problem: "Questions arrive across too many channels.",
        agentDoes: "Answers listings, qualifies renters, and collects requests.",
        workflow: "Inquiry → criteria → approved answer or tour handoff.",
        outcome: "Faster leasing and cleaner intake.",
      },
      {
        icon: Workflow,
        title: "Internal Operations Assistant",
        problem: "Teams lose time finding answers.",
        agentDoes: "Finds policies, routes requests, and gathers missing details.",
        workflow: "Question → knowledge lookup → routed task.",
        outcome: "Faster internal support.",
      },
      {
        icon: PhoneCall,
        title: "Voice Call Assistant",
        problem: "Calls get missed or rushed.",
        agentDoes: "Captures intent, summarizes calls, and flags urgency.",
        workflow: "Call → intake → structured handoff.",
        outcome: "Better coverage and cleaner context.",
      },
      {
        icon: MessageSquare,
        title: "Website Chat Assistant",
        problem: "Visitors leave without answers.",
        agentDoes: "Answers FAQs, guides next steps, and captures contact details.",
        workflow: "Question → answer → booking or handoff.",
        outcome: "More useful website conversations.",
      },
      {
        icon: Send,
        title: "Follow-up Automation",
        problem: "Follow-up gets missed.",
        agentDoes: "Sends reminders, summaries, and next-step messages.",
        workflow: "Intake → next touch → timely follow-up.",
        outcome: "Fewer dropped opportunities.",
      },
    ],
    industries: [
      {
        icon: Building2,
        name: "Real Estate",
        description: "Qualify buyers, renters, and sellers.",
      },
      {
        icon: Building2,
        name: "Property Management",
        description: "Handle residents, leasing, and maintenance intake.",
      },
      {
        icon: Workflow,
        name: "Local Services",
        description: "Book jobs and capture service details.",
      },
      {
        icon: Headphones,
        name: "Healthcare Offices",
        description: "Support intake, scheduling, and non-clinical FAQs.",
      },
      {
        icon: CheckCircle2,
        name: "Legal Offices",
        description: "Screen inquiries and organize intake.",
      },
      {
        icon: MessageSquare,
        name: "E-commerce",
        description: "Answer product, order, and return questions.",
      },
      {
        icon: UserPlus,
        name: "Education",
        description: "Guide admissions, support, and scheduling.",
      },
      {
        icon: PhoneCall,
        name: "Home Services",
        description: "Turn calls and visits into booked jobs.",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    cardKicker: string;
    detailLabels: Record<"problem" | "agentDoes" | "workflow" | "outcome", string>;
    solutionCards: readonly {
      icon: LucideIcon;
      title: string;
      problem: string;
      agentDoes: string;
      workflow: string;
      outcome: string;
    }[];
    industries: readonly { icon: LucideIcon; name: string; description: string }[];
  }
>;

export default async function SolutionsPage() {
  const locale = await getRequestLocale();
  const ctaLabels = ctaLabelsByLocale[locale];
  const content = solutionsContent[locale];

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute inset-0 signal-grid opacity-30" />
        <div className="container relative py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {locale === "es" ? "Soluciones de negocio" : "Business solutions"}
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-normal text-white sm:text-6xl">
                {locale === "es"
                  ? "Agentes de IA diseñados alrededor de los procesos de tu negocio."
                  : "AI agents built around your business workflows."}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {locale === "es"
                  ? "Automatiza los momentos donde los clientes necesitan respuestas y los equipos necesitan derivaciones claras."
                  : "Automate the moments where customers need answers and teams need clean handoffs."}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaButton href="/book-demo" size="lg">
                  {ctaLabels.bookDemo}
                </CtaButton>
                <CtaButton href="/contact" variant="secondary" size="lg" showIcon={false}>
                  {locale === "es"
                    ? "Cuéntanos qué quieres automatizar"
                    : "Tell us what you want to automate"}
                </CtaButton>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <VoiceAgentCard />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          eyebrow={locale === "es" ? "Soluciones" : "Solutions"}
          title={
            locale === "es"
              ? "Automatización con IA para el trabajo que se repite cada día."
              : "AI automation for the work customers and teams repeat every day."
          }
          description={
            locale === "es"
              ? "Procesos enfocados para atención al cliente, ventas, llamadas, reservas y operaciones."
              : "Focused workflows for support, sales, calls, bookings, and operations."
          }
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {content.solutionCards.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Reveal
                key={solution.title}
                delay={index * 0.035}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">{solution.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {content.cardKicker}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <DetailBlock label={content.detailLabels.problem} text={solution.problem} />
                  <DetailBlock
                    label={content.detailLabels.agentDoes}
                    text={solution.agentDoes}
                  />
                  <DetailBlock
                    label={content.detailLabels.workflow}
                    text={solution.workflow}
                  />
                  <DetailBlock label={content.detailLabels.outcome} text={solution.outcome} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow={locale === "es" ? "Industrias" : "Industries we help"}
                title={
                  locale === "es"
                    ? "Automatización flexible para equipos de servicio."
                    : "Flexible AI automation for service-heavy teams."
                }
                description={
                  locale === "es"
                    ? "Útil donde se acumulan preguntas, recepción, reservas y seguimiento."
                    : "Useful where questions, intake, bookings, and follow-up pile up."
                }
              />
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Reveal
                    key={industry.name}
                    delay={index * 0.04}
                    className="rounded-lg border border-white/10 bg-[#07101f] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="mt-1 size-5 shrink-0 text-cyan-200" />
                      <div>
                        <h2 className="font-semibold text-white">{industry.name}</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#07101f] p-8 text-center shadow-panel sm:p-10">
          <div className="absolute inset-0 hero-mesh opacity-70" />
          <div className="absolute inset-0 signal-grid opacity-25" />
          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto grid size-12 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
              <Bot className="size-6" />
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              {locale === "es"
                ? "Cuéntanos qué quieres automatizar."
                : "Tell us what you want to automate."}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              {locale === "es"
                ? "Comparte el proceso. Mapearemos el primer agente útil."
                : "Share the workflow. We’ll map the first useful agent."}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaButton href="/contact" size="lg">
                {ctaLabels.startFreeConsultation}
              </CtaButton>
              <CtaButton href="/book-demo" variant="secondary" size="lg" showIcon={false}>
                {ctaLabels.bookDemo}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DetailBlock({ label, text }: { label: string; text: string }) {
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
