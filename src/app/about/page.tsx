import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ClipboardList,
  Handshake,
  LockKeyhole,
  MessageSquareText,
  Radar,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { TrackedLink } from "@/components/analytics";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();

  return pageMetadata({
    title: locale === "es" ? "Sobre AiVantage" : "About AiVantage",
    description:
      locale === "es"
        ? "Conoce cómo AiVantage ayuda a diseñar, desplegar y mejorar agentes de IA prácticos para atención al cliente, ventas, operaciones y comunicación con clientes."
        : "Learn how AiVantage helps businesses design, deploy, and improve practical AI agents for support, sales, operations, and customer engagement.",
    path: "/about",
    locale,
  });
}

const aboutContent = {
  es: {
    principles: [
      {
        icon: ClipboardList,
        title: "Proceso antes que espectáculo",
        description: "Empezamos con el proceso antes de elegir herramientas.",
      },
      {
        icon: LockKeyhole,
        title: "Control como parte de calidad",
        description: "Usamos conocimiento aprobado, respuestas de seguridad, derivaciones y límites.",
      },
      {
        icon: BarChart3,
        title: "Lanzar, medir, mejorar",
        description: "Medimos resultados y refinamos con conversaciones reales.",
      },
    ],
    partnerSteps: [
      {
        title: "Mapear",
        description: "Encontrar dónde esperan clientes y dónde se repite trabajo.",
      },
      {
        title: "Diseñar",
        description: "Dar forma al agente, fuentes, reglas, integraciones y métricas.",
      },
      {
        title: "Lanzar",
        description: "Desplegar, probar comportamiento y preparar al equipo.",
      },
      {
        title: "Optimizar",
        description: "Ajustar respuestas, derivaciones y el siguiente proceso.",
      },
    ],
    focusAreas: [
      "Agentes de chat web que cualifican demanda",
      "Asistentes de voz para llamadas perdidas y recepción",
      "Agentes de conocimiento basados en contenido aprobado",
      "Automatización de citas y seguimiento",
      "Derivaciones a personas con resúmenes",
      "Analítica que muestra qué resolvieron los agentes",
    ],
    trustPoints: [
      {
        icon: Bot,
        value: "Custom",
        label: "agentes alrededor de tu proceso",
      },
      {
        icon: Workflow,
        value: "Multi-step",
        label: "automatización más allá de respuestas simples",
      },
      {
        icon: Handshake,
        value: "Humano listo",
        label: "derivaciones para momentos importantes",
      },
      {
        icon: Radar,
        value: "Medido",
        label: "ciclos de rendimiento y mejora",
      },
    ],
    visual: {
      eyebrow: "Centro de mando de agentes",
      title: "Mapa de proceso del negocio",
      layers: ["Intención", "Conocimiento", "Acción"],
      layerCopy: "La capa {number} revisa el camino antes de continuar.",
      outcomeTitle: "Resultado de ejemplo",
      outcome:
        "El agente cualifica intención, reserva el siguiente paso y envía un resumen.",
    },
  },
  en: {
    principles: [
      {
        icon: ClipboardList,
        title: "Workflow before wow-factor",
        description: "Start with the process before choosing tools.",
      },
      {
        icon: LockKeyhole,
        title: "Control is part of quality",
        description: "Use approved knowledge, fallbacks, handoffs, and boundaries.",
      },
      {
        icon: BarChart3,
        title: "Launch, measure, improve",
        description: "Track outcomes and refine from real conversations.",
      },
    ],
    partnerSteps: [
      {
        title: "Map",
        description: "Find where customers wait and teams repeat work.",
      },
      {
        title: "Design",
        description: "Shape the agent, sources, rules, integrations, and metrics.",
      },
      {
        title: "Launch",
        description: "Deploy, test behavior, and prepare your team.",
      },
      {
        title: "Optimize",
        description: "Tune answers, routing, and the next workflow.",
      },
    ],
    focusAreas: [
      "Website chat agents that qualify demand",
      "Voice assistants for missed calls and intake",
      "Knowledge agents grounded in approved content",
      "Appointment and follow-up automation",
      "Human handoff workflows with summaries",
      "Analytics that show what agents handled",
    ],
    trustPoints: [
      {
        icon: Bot,
        value: "Custom",
        label: "agents around your workflow",
      },
      {
        icon: Workflow,
        value: "Multi-step",
        label: "automation beyond simple replies",
      },
      {
        icon: Handshake,
        value: "Human-ready",
        label: "handoff paths for important moments",
      },
      {
        icon: Radar,
        value: "Measured",
        label: "performance and improvement loops",
      },
    ],
    visual: {
      eyebrow: "Agent command center",
      title: "Business workflow map",
      layers: ["Intent", "Knowledge", "Action"],
      layerCopy: "Layer {number} checks the path before automation continues.",
      outcomeTitle: "Example outcome",
      outcome:
        "The agent qualifies intent, books the next step, and sends a summary.",
    },
  },
} satisfies Record<
  Locale,
  {
    principles: readonly { icon: LucideIcon; title: string; description: string }[];
    partnerSteps: readonly { title: string; description: string }[];
    focusAreas: readonly string[];
    trustPoints: readonly { icon: LucideIcon; value: string; label: string }[];
    visual: {
      eyebrow: string;
      title: string;
      layers: readonly string[];
      layerCopy: string;
      outcomeTitle: string;
      outcome: string;
    };
  }
>;

function AboutSystemVisual({ locale }: { locale: Locale }) {
  const visual = aboutContent[locale].visual;

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#07101f] p-5 shadow-glow">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_34%)]" />
      <div className="relative space-y-4">
        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">
              {visual.eyebrow}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              {visual.title}
            </h2>
          </div>
          <div className="grid size-12 place-items-center rounded-full bg-cyan-300/10">
            <Sparkles className="size-5 text-cyan-200" aria-hidden="true" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {visual.layers.map((item, index) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-black/20 p-4"
            >
              <div className="mb-4 h-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-purple-300" />
              <p className="text-sm font-semibold text-white">{item}</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                {visual.layerCopy.replace("{number}", `${index + 1}`)}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
          <div className="flex items-start gap-3">
            <MessageSquareText className="mt-1 size-5 shrink-0 text-cyan-200" />
            <div>
              <p className="text-sm font-semibold text-white">
                {visual.outcomeTitle}
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                {visual.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function AboutPage() {
  const locale = await getRequestLocale();
  const content = aboutContent[locale];

  return (
    <>
      <PageHero
        eyebrow={locale === "es" ? "Sobre AiVantage" : "About AiVantage"}
        title={
          locale === "es"
            ? "Automatización con IA para trabajo útil, no teatro."
            : "AI automation built for useful work, not theater."
        }
        description={
          locale === "es"
            ? `${siteConfig.name} convierte conversaciones y tareas repetibles en procesos gestionados con agentes de IA.`
            : `${siteConfig.name} turns repeatable conversations and tasks into managed AI agent workflows.`
        }
        primaryCta={{
          href: "/book-demo",
          label: locale === "es" ? "Reservar una demo" : "Book a Demo",
        }}
        secondaryCta={{
          href: "/use-cases",
          label: locale === "es" ? "Ver casos de uso" : "See Use Cases",
        }}
      />

      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={locale === "es" ? "Nuestro enfoque" : "Our point of view"}
              title={
                locale === "es"
                  ? "Los mejores agentes se diseñan alrededor de cómo ya se mueve tu negocio."
                  : "The best AI agents are designed around the way your business already moves."
              }
              description={
                locale === "es"
                  ? "Respuestas más rápidas, derivaciones claras, menos preguntas repetidas y mejora medible."
                  : "Faster responses, cleaner handoffs, fewer repeat questions, and measurable lift."
              }
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <TrackedLink
                  href="/contact"
                  eventProperties={{ location: "about_point_of_view" }}
                >
                  {locale === "es" ? "Consulta gratuita" : "Start Free Consultation"}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </TrackedLink>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <TrackedLink
                  href="/platform"
                  eventProperties={{ location: "about_point_of_view" }}
                >
                  {locale === "es" ? "Explorar plataforma" : "Explore Platform"}
                </TrackedLink>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <AboutSystemVisual locale={locale} />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <SectionHeading
            eyebrow={locale === "es" ? "Cómo pensamos" : "How we think"}
            title={
              locale === "es"
                ? "Principios para mantener la IA aterrizada."
                : "Principles that keep AI automation grounded."
            }
            description={
              locale === "es"
                ? "Útil, medible y controlada para procesos reales."
                : "Useful, measurable, and controlled enough for real workflows."
            }
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {content.principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Reveal
                  key={principle.title}
                  delay={index * 0.05}
                  className="rounded-lg border border-white/10 bg-[#07101f] p-6"
                >
                  <Icon className="size-6 text-cyan-200" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-semibold text-white">
                    {principle.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {principle.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={locale === "es" ? "Trabajando juntos" : "Working together"}
              title={
                locale === "es"
                  ? "Un camino práctico de idea a agente en producción."
                  : "A practical path from idea to production agent."
              }
              description={
                locale === "es"
                  ? "Trae el contexto. Damos forma al proceso y al camino de lanzamiento."
                  : "Bring the context. We shape the workflow and launch path."
              }
            />
          </Reveal>
          <div className="space-y-3">
            {content.partnerSteps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 0.04}
                className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-sm font-semibold text-cyan-200">
                  {index + 1}
                </div>
                <div>
                  <h2 className="font-semibold text-white">{step.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow={locale === "es" ? "Dónde ayudamos" : "Where we help"}
                title={
                  locale === "es"
                    ? "Enfocados en procesos que crean impacto inmediato."
                    : "Focused on the workflows that create immediate business leverage."
                }
                description={
                  locale === "es"
                    ? "Empieza con un cuello de botella real y expande lo que funciona."
                    : "Start with one real bottleneck, then expand what works."
                }
              />
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.focusAreas.map((area, index) => (
                <Reveal
                  key={area}
                  delay={index * 0.03}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#07101f] p-4"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cyan-200" />
                  <span className="text-sm leading-6 text-slate-300">{area}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal
                key={point.label}
                delay={index * 0.04}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
              >
                <Icon className="size-6 text-purple-200" aria-hidden="true" />
                <p className="mt-5 text-3xl font-semibold text-white">{point.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{point.label}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand
        title={
          locale === "es"
            ? "Construyamos el primer agente que tu negocio realmente usará."
            : "Let’s build the first agent your business can actually use."
        }
        description={
          locale === "es"
            ? "Reserva una demo y mapearemos un proceso de alto valor."
            : "Book a demo and we’ll map one high-value workflow."
        }
      />
    </>
  );
}
