"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Building2,
  DatabaseZap,
  Globe,
  UserRoundCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import type { Locale } from "@/lib/i18n";

const workflowContent = {
  es: {
    eyebrow: "Flujo del agente",
    title: "Del primer contacto a la siguiente acción correcta.",
    description:
      "Flujo de ejemplo. Cada nodo se puede adaptar a los sistemas y reglas de derivación de tu equipo.",
    nodes: [
      {
        icon: Globe,
        title: "Visitante web",
        description: "Hace una pregunta o muestra intención.",
      },
      {
        icon: Bot,
        title: "Agente IA",
        description: "Entiende la solicitud y elige el siguiente paso.",
      },
      {
        icon: DatabaseZap,
        title: "Base de conocimiento",
        description: "Consulta respuestas, políticas y detalles aprobados.",
      },
      {
        icon: Building2,
        title: "CRM",
        description: "Crea o actualiza el registro del cliente.",
      },
      {
        icon: UserRoundCheck,
        title: "Derivación a un humano",
        description: "Deriva casos especiales con un resumen útil.",
      },
    ],
  },
  en: {
    eyebrow: "Agent workflow",
    title: "From first touch to the right next action.",
    description:
      "Example flow only. Every node can be customized for the systems and handoff rules your team uses.",
    nodes: [
      {
        icon: Globe,
        title: "Website Visitor",
        description: "Asks a question or submits intent.",
      },
      {
        icon: Bot,
        title: "AI Agent",
        description: "Understands the request and chooses the next step.",
      },
      {
        icon: DatabaseZap,
        title: "Knowledge Base",
        description: "Checks approved answers, policies, and service details.",
      },
      {
        icon: Building2,
        title: "CRM",
        description: "Creates or updates the customer record.",
      },
      {
        icon: UserRoundCheck,
        title: "Human Handoff",
        description: "Routes edge cases with a useful summary.",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    nodes: readonly { icon: LucideIcon; title: string; description: string }[];
  }
>;

export function AgentWorkflowVisual() {
  const { locale } = useLocale();
  const content = workflowContent[locale];
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07101f] p-5 shadow-panel">
      <div className="absolute inset-0 hero-mesh opacity-70" />
      <div className="absolute inset-0 signal-grid opacity-25" />
      <div className="relative">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-cyan-200">{content.eyebrow}</p>
            <h3 className="mt-1 text-xl font-semibold text-white">
              {content.title}
            </h3>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-300">
            {content.description}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-5 lg:items-stretch">
          {content.nodes.map((node, index) => {
            const Icon = node.icon;
            const isLast = index === content.nodes.length - 1;

            return (
              <div key={node.title} className="relative">
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                  }}
                  className="relative z-10 h-full rounded-xl border border-white/10 bg-white/[0.055] p-4 shadow-sm"
                >
                  <div className="grid size-11 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                    <Icon className="size-5" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-white">{node.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{node.description}</p>
                </motion.div>

                {!isLast ? (
                  <>
                    <div className="absolute left-1/2 top-full z-0 h-4 w-px -translate-x-1/2 bg-cyan-300/25 lg:left-full lg:top-1/2 lg:h-px lg:w-4 lg:-translate-y-1/2 lg:translate-x-0" />
                    <motion.div
                      aria-hidden="true"
                      className="absolute left-1/2 top-full z-0 h-4 w-px -translate-x-1/2 bg-gradient-to-b from-blue-500 to-cyan-300 lg:left-full lg:top-1/2 lg:h-px lg:w-4 lg:-translate-y-1/2 lg:translate-x-0 lg:bg-gradient-to-r"
                      initial={shouldReduceMotion ? false : { scaleY: 0, scaleX: 1 }}
                      whileInView={{ scaleY: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.6,
                        delay: shouldReduceMotion ? 0 : index * 0.1 + 0.2,
                      }}
                    />
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
