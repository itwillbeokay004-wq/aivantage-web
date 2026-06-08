"use client";

import { useEffect, useState } from "react";
import { Bot, CheckCircle2, Mic2, Send, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/locale";

const widgetContent = {
  es: {
    eyebrow: "Espacio de agentes en vivo",
    title: "Agente AiVantage 03",
    status: "Online",
    transcriptLabel: "transcripción",
    confidenceLabel: "confianza",
    responseLabel: "Respuesta AiVantage",
    sendAria: "Enviar respuesta de ejemplo",
    scenarios: [
      {
        label: "Soporte",
        channel: "Chat",
        icon: Bot,
        user: "¿Puedes revisar por qué cambió mi factura?",
        agent:
          "Encontré una actualización de plan el 28 de mayo. Puedo explicar la diferencia y abrir una revisión de facturación si hace falta.",
        action: "Revisión de factura redactada",
        score: "96%",
      },
      {
        label: "Ventas",
        channel: "Voz",
        icon: Mic2,
        user: "Necesito automatizar leads entrantes.",
        agent:
          "Capturé los requisitos, marqué la urgencia como alta y encontré dos horarios de demo esta semana.",
        action: "Horario de demo propuesto",
        score: "92%",
      },
      {
        label: "Ops",
        channel: "Workflow",
        icon: Workflow,
        user: "Asigna esta tarea de onboarding al responsable correcto.",
        agent:
          "El cliente necesita configuración API, revisión de seguridad y sincronización CRM. Asigné responsables y fechas.",
        action: "Flujo creado",
        score: "98%",
      },
    ],
  },
  en: {
    eyebrow: "Live agent workspace",
    title: "AiVantage Agent 03",
    status: "Online",
    transcriptLabel: "transcript",
    confidenceLabel: "confidence",
    responseLabel: "AiVantage response",
    sendAria: "Send sample response",
    scenarios: [
      {
        label: "Support",
        channel: "Chat",
        icon: Bot,
        user: "Can you check why my invoice changed?",
        agent:
          "I found a plan update on May 28. I can explain the difference and open a billing review if needed.",
        action: "Billing review drafted",
        score: "96%",
      },
      {
        label: "Sales",
        channel: "Voice",
        icon: Mic2,
        user: "I need automation for inbound leads.",
        agent:
          "I captured your requirements, scored urgency as high, and found two demo slots this week.",
        action: "Demo slot proposed",
        score: "92%",
      },
      {
        label: "Ops",
        channel: "Workflow",
        icon: Workflow,
        user: "Route this onboarding task to the right owner.",
        agent:
          "The customer needs API setup, security review, and CRM sync. I assigned owners and set due dates.",
        action: "Workflow created",
        score: "98%",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    status: string;
    transcriptLabel: string;
    confidenceLabel: string;
    responseLabel: string;
    sendAria: string;
    scenarios: readonly {
      label: string;
      channel: string;
      icon: LucideIcon;
      user: string;
      agent: string;
      action: string;
      score: string;
    }[];
  }
>;

export function AgentDemoWidget({ compact = false }: { compact?: boolean }) {
  const { locale } = useLocale();
  const content = widgetContent[locale];
  const scenarios = content.scenarios;
  const scenarioCount = scenarios.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const active = scenarios[activeIndex];
  const confidenceBars = [72, 86, 64, 92, 78];

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % scenarioCount);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [scenarioCount, shouldReduceMotion]);

  return (
    <div
      className={cn(
        "glass-panel relative overflow-hidden rounded-lg p-4",
        compact ? "w-full" : "mx-auto w-full max-w-xl",
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            {content.eyebrow}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white">{content.title}</h3>
        </div>
        <div className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
          {content.status}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {scenarios.map((scenario, index) => {
          const Icon = scenario.icon;
          return (
            <button
              key={scenario.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "rounded-md border px-3 py-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                activeIndex === index
                  ? "border-cyan-300/50 bg-cyan-300/10 text-white"
                  : "border-white/10 bg-white/5 text-slate-400 hover:text-white",
              )}
              aria-pressed={activeIndex === index}
            >
              <Icon className="mb-2 size-4" aria-hidden="true" />
              <span className="block text-xs font-semibold">{scenario.label}</span>
            </button>
          );
        })}
      </div>

      <motion.div
        key={active.label}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}
        className="mt-5 space-y-3"
      >
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
            <span>
              {active.channel} {content.transcriptLabel}
            </span>
            <span>
              {active.score} {content.confidenceLabel}
            </span>
          </div>
          <p className="text-sm leading-6 text-slate-200">{active.user}</p>
        </div>
        <div className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.07] p-3">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-cyan-100">
            <Bot className="size-4" />
            {content.responseLabel}
          </div>
          <p className="text-sm leading-6 text-slate-100">{active.agent}</p>
        </div>
      </motion.div>

      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="rounded-md border border-white/10 bg-[#07101f] p-3">
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <CheckCircle2 className="size-4 text-emerald-300" />
            {active.action}
          </div>
          <div className="mt-3 flex items-end gap-1.5">
            {confidenceBars.map((height, index) => (
              <span
                key={`${height}-${index}`}
                className="w-full rounded-sm bg-gradient-to-t from-cyan-500/50 to-purple-300/80"
                style={{ height: `${height / 5}px` }}
              />
            ))}
          </div>
        </div>
        <Button type="button" size="icon" aria-label={content.sendAria}>
          <Send className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
