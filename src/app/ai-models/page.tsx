import {
  AudioLines,
  Bot,
  BrainCircuit,
  CheckCircle2,
  FileSearch,
  Globe2,
  Languages,
  ListChecks,
  Plug,
  ShieldCheck,
  Sparkles,
  TableProperties,
  UserRoundCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ChatDemo } from "@/components/sections/chat-demo";
import { Reveal } from "@/components/reveal";
import { TrackedLink } from "@/components/analytics";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ctaLabelsByLocale } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();

  return pageMetadata({
    title: locale === "es" ? "Modelos de IA" : "AI Models",
    description:
      locale === "es"
        ? "Aprende cómo AiVantage ayuda a elegir e integrar capacidades de modelos de IA para texto, voz, documentos, evaluación, resúmenes, decisiones y extracción."
        : "Learn how AiVantage helps businesses choose and integrate AI model capabilities for text, voice, documents, scoring, summaries, decisions, multilingual support, and extraction.",
    path: "/ai-models",
    locale,
  });
}

const aiModelsContent = {
  es: {
    capabilities: [
      {
        icon: Sparkles,
        title: "Generación de texto",
        description: "Redacta respuestas, seguimientos, resúmenes y guías.",
      },
      {
        icon: AudioLines,
        title: "Conversaciones de voz",
        description: "Ayuda con recepción de llamadas, transcripciones y procesos de voz.",
      },
      {
        icon: FileSearch,
        title: "Comprensión de documentos",
        description: "Encuentra respuestas en políticas, preguntas frecuentes, manuales y documentos.",
      },
      {
        icon: BrainCircuit,
        title: "Evaluación de clientes potenciales",
        description: "Evalúa encaje, urgencia, plazo y datos faltantes.",
      },
      {
        icon: ListChecks,
        title: "Resúmenes",
        description: "Convierte llamadas, chats y formularios en notas de derivación.",
      },
      {
        icon: Bot,
        title: "Decisiones de proceso",
        description: "Elige próximos pasos por reglas, confianza y contexto.",
      },
      {
        icon: Languages,
        title: "Atención multilingüe",
        description: "Apoya enrutamiento y respuestas en varios idiomas.",
      },
      {
        icon: TableProperties,
        title: "Extracción de datos",
        description: "Extrae campos estructurados de mensajes, docs y llamadas.",
      },
    ],
    providerCards: [
      {
        icon: Plug,
        title: "APIs seguras",
        copy: "Usa credenciales con alcance limitado y rutas controladas.",
      },
      {
        icon: Globe2,
        title: "Enrutamiento flexible",
        copy: "Enruta por capacidad, coste, latencia, confianza y riesgo.",
      },
      {
        icon: BrainCircuit,
        title: "Encaje con el proceso",
        copy: "Elige capacidades según el trabajo del agente.",
      },
    ],
    providerNote:
      "Los proveedores se tratan como opciones de implementación. Esta página no afirma alianzas oficiales ni avales.",
    safetyControls: [
      {
        icon: ShieldCheck,
        title: "Límites operativos",
        description: "Define respuestas, rechazos y reglas de derivación.",
      },
      {
        icon: FileSearch,
        title: "Conocimiento aprobado",
        description: "Usa documentos, preguntas frecuentes y políticas aprobadas por tu equipo.",
      },
      {
        icon: ListChecks,
        title: "Respuestas de reserva",
        description: "Usa lenguaje seguro cuando la confianza sea baja.",
      },
      {
        icon: UserRoundCheck,
        title: "Derivación a un humano",
        description: "Deriva momentos sensibles o de alto valor.",
      },
      {
        icon: TableProperties,
        title: "Registros de auditoría",
        description: "Planifica registros trazables de decisiones y derivaciones.",
      },
    ],
    faqs: [
      {
        question: "¿La IA puede responder desde mis documentos?",
        answer:
          "Sí. Los agentes pueden consultar documentos aprobados, preguntas frecuentes, políticas y contenido de conocimiento antes de responder.",
      },
      {
        question: "¿Puede hablar con clientes?",
        answer:
          "Sí, cuando voz está dentro del alcance. Podemos diseñar recepción de llamadas, resúmenes y derivaciones.",
      },
      {
        question: "¿Puede conectarse a mi CRM?",
        answer:
          "Sí. Los agentes pueden crear registros, añadir notas, derivar clientes potenciales o activar seguimientos.",
      },
      {
        question: "¿Puede tomar el control una persona?",
        answer:
          "Sí. La derivación puede activarse por solicitudes sensibles, baja confianza o clientes potenciales valiosos.",
      },
      {
        question: "¿Cómo protegen datos sensibles?",
        answer:
          "Limitamos el acceso, usamos fuentes aprobadas y planificamos controles alrededor del proceso.",
      },
    ],
  },
  en: {
    capabilities: [
      {
        icon: Sparkles,
        title: "Text generation",
        description: "Draft answers, follow-ups, summaries, and guided responses.",
      },
      {
        icon: AudioLines,
        title: "Voice conversations",
        description: "Support call intake, transcripts, and voice-ready workflows.",
      },
      {
        icon: FileSearch,
        title: "Document understanding",
        description: "Find answers in policies, FAQs, manuals, and docs.",
      },
      {
        icon: BrainCircuit,
        title: "Lead scoring",
        description: "Evaluate fit, urgency, timeline, and missing details.",
      },
      {
        icon: ListChecks,
        title: "Summaries",
        description: "Turn calls, chats, and forms into handoff notes.",
      },
      {
        icon: Bot,
        title: "Workflow decisions",
        description: "Choose next steps from rules, confidence, and context.",
      },
      {
        icon: Languages,
        title: "Multilingual support",
        description: "Support routing and responses across languages.",
      },
      {
        icon: TableProperties,
        title: "Data extraction",
        description: "Pull structured fields from messages, docs, calls, and forms.",
      },
    ],
    providerCards: [
      {
        icon: Plug,
        title: "Secure APIs",
        copy: "Use scoped credentials and controlled request paths.",
      },
      {
        icon: Globe2,
        title: "Flexible routing",
        copy: "Route by capability, cost, latency, confidence, and risk.",
      },
      {
        icon: BrainCircuit,
        title: "Workflow fit",
        copy: "Choose capabilities by agent job.",
      },
    ],
    providerNote:
      "Provider names are discussed only as implementation options. This page does not claim any official partnership or endorsement.",
    safetyControls: [
      {
        icon: ShieldCheck,
        title: "Guardrails",
        description: "Define answers, refusals, and escalation rules.",
      },
      {
        icon: FileSearch,
        title: "Approved knowledge",
        description: "Use documents, FAQs, and policies your team approves.",
      },
      {
        icon: ListChecks,
        title: "Fallback responses",
        description: "Use safe language when confidence is low.",
      },
      {
        icon: UserRoundCheck,
        title: "Human handoff",
        description: "Escalate sensitive or high-value moments.",
      },
      {
        icon: TableProperties,
        title: "Audit logs placeholder",
        description: "Plan traceable records for decisions and handoffs.",
      },
    ],
    faqs: [
      {
        question: "Can AI answer questions from my documents?",
        answer:
          "Yes. Agents can search approved documents, FAQs, policies, and knowledge base content before responding.",
      },
      {
        question: "Can it speak with customers?",
        answer:
          "Yes, when voice is in scope. We can design intake, summaries, and handoff paths.",
      },
      {
        question: "Can it connect to my CRM?",
        answer:
          "Yes. Agents can create records, add notes, route leads, or trigger follow-ups.",
      },
      {
        question: "Can humans take over?",
        answer:
          "Yes. Handoff can trigger for sensitive requests, low confidence, or high-value leads.",
      },
      {
        question: "How do you protect sensitive data?",
        answer:
          "We scope access carefully, use approved sources, and plan controls around the workflow.",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    capabilities: readonly { icon: LucideIcon; title: string; description: string }[];
    providerCards: readonly { icon: LucideIcon; title: string; copy: string }[];
    providerNote: string;
    safetyControls: readonly { icon: LucideIcon; title: string; description: string }[];
    faqs: readonly { question: string; answer: string }[];
  }
>;

export default async function AiModelsPage() {
  const locale = await getRequestLocale();
  const ctaLabels = ctaLabelsByLocale[locale];
  const content = aiModelsContent[locale];

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute inset-0 signal-grid opacity-30" />
        <div className="container relative py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {locale === "es" ? "Estrategia de modelos IA" : "AI model strategy"}
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-normal text-white sm:text-6xl">
                {locale === "es"
                  ? "Usa el modelo de IA adecuado para cada trabajo."
                  : "Use the right AI model for the right job."}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {locale === "es"
                  ? "Alinea capacidades de modelo con el proceso: chat, voz, documentos, evaluación, resúmenes, decisiones o extracción."
                  : "Match model capabilities to the workflow: chat, voice, documents, scoring, summaries, decisions, or extraction."}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaButton href="/book-demo" size="lg">
                  {ctaLabels.bookDemo}
                </CtaButton>
                <Button asChild variant="secondary" size="lg">
                  <TrackedLink
                    href="/contact"
                    eventProperties={{ location: "ai_models_hero" }}
                  >
                    {locale === "es" ? "Hablar de modelos" : "Discuss model needs"}
                  </TrackedLink>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ChatDemo />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          eyebrow={locale === "es" ? "Capacidades" : "Model capabilities"}
          title={
            locale === "es"
              ? "Diferentes procesos necesitan diferentes tipos de inteligencia."
              : "Different workflows need different kinds of intelligence."
          }
          description={
            locale === "es"
              ? "Elige capacidades según trabajo, riesgo, velocidad, fuente y resultado."
              : "Pick the capability around the job, risk, speed, source, and outcome."
          }
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Reveal
                key={capability.title}
                delay={index * 0.04}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <Icon className="size-6 text-cyan-200" />
                <h2 className="mt-5 text-lg font-semibold text-white">{capability.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {capability.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow={
                  locale === "es"
                    ? "Arquitectura neutral"
                    : "Provider-neutral architecture"
                }
                title={
                  locale === "es"
                    ? "Diseñado alrededor de tus requisitos, no de un único proveedor."
                    : "Designed around your requirements, not a single model vendor."
                }
                description={
                  locale === "es"
                    ? "AiVantage puede trabajar con OpenAI u otros proveedores mediante APIs seguras, según necesidades del cliente."
                    : "AiVantage can work with OpenAI or other providers through secure APIs, depending on client needs."
                }
              />
            </Reveal>
            <Reveal delay={0.08} className="rounded-lg border border-white/10 bg-[#07101f] p-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {content.providerCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                      <Icon className="size-5 text-cyan-200" />
                      <h2 className="mt-4 font-semibold text-white">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.copy}</p>
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                {content.providerNote}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          eyebrow={locale === "es" ? "Seguridad y control" : "Safety and control"}
          title={
            locale === "es"
              ? "La potencia del modelo necesita límites operativos claros."
              : "Model power should come with clear operating boundaries."
          }
          description={
            locale === "es"
              ? "Decide qué puede responder la IA, qué debe evitar y cuándo derivar a una persona."
              : "Decide what AI can answer, avoid, and hand off."
          }
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {content.safetyControls.map((control, index) => {
            const Icon = control.icon;
            return (
              <Reveal
                key={control.title}
                delay={index * 0.04}
                className="rounded-lg border border-white/10 bg-[#07101f] p-5"
              >
                <Icon className="size-6 text-cyan-200" />
                <h2 className="mt-5 text-lg font-semibold text-white">{control.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{control.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <SectionHeading
            eyebrow={locale === "es" ? "Preguntas frecuentes" : "FAQ"}
            title={
              locale === "es"
                ? "Preguntas comunes sobre modelos de IA."
                : "Common questions about AI model workflows."
            }
            description={
              locale === "es"
                ? "La implementación depende del proceso, los datos, los canales, las integraciones y los controles."
                : "Implementation depends on workflow, data, channels, integrations, and controls."
            }
          />
          <div className="mx-auto mt-12 max-w-4xl space-y-3">
            {content.faqs.map((faq, index) => (
              <Reveal
                key={faq.question}
                delay={index * 0.04}
                className="rounded-lg border border-white/10 bg-[#07101f] p-5"
              >
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-300" />
                  <div>
                    <h2 className="text-lg font-semibold text-white">{faq.question}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#07101f] p-8 text-center shadow-panel sm:p-10">
          <div className="absolute inset-0 hero-mesh opacity-70" />
          <div className="absolute inset-0 signal-grid opacity-25" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              {locale === "es"
                ? "¿Necesitas ayuda eligiendo el enfoque de modelo?"
                : "Need help choosing the right model approach?"}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              {locale === "es"
                ? "Comparte el proceso. Definiremos capacidades, controles e integraciones."
                : "Share the workflow. We’ll scope the model capabilities, controls, and integrations."}
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton href="/book-demo" size="lg">
                {ctaLabels.bookDemo}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
