"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Bot,
  CheckCircle2,
  Mic2,
  PhoneCall,
  Workflow,
} from "lucide-react";

import { useLocale } from "@/components/locale-provider";

const workflowNodes = {
  es: ["Cliente", "Cualificar", "Reservar", "Seguimiento"],
  en: ["Lead", "Score", "Book", "Follow up"],
} as const;

const analytics = {
  es: [
    { label: "Respondidas", value: "1,248" },
    { label: "Reservadas", value: "186" },
    { label: "Derivaciones", value: "42" },
  ],
  en: [
    { label: "Answered", value: "1,248" },
    { label: "Booked", value: "186" },
    { label: "Handoffs", value: "42" },
  ],
} as const;

export function HomeProductMockup() {
  const shouldReduceMotion = useReducedMotion();
  const { locale } = useLocale();

  return (
    <div className="relative mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-[#07101f] p-3 shadow-panel sm:p-4">
      <div className="absolute inset-0 hero-mesh opacity-70" />
      <div className="absolute inset-0 signal-grid opacity-25" />
      <div className="relative sm:hidden">
        <div className="rounded-xl border border-white/10 bg-white/[0.055] p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-md bg-blue-400/10 text-blue-200">
                <Bot className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {locale === "es" ? "Agente AiVantage" : "AiVantage agent"}
                </p>
                <p className="text-xs text-slate-400">
                  {locale === "es" ? "Chat, voz y procesos" : "Chat, voice, workflows"}
                </p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
              {locale === "es" ? "Activo" : "Live"}
            </span>
          </div>
          <div className="mt-5 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-6 text-slate-100">
            {locale === "es"
              ? "He captado la intención, cualificado la consulta y preparado el siguiente paso."
              : "I captured intent, qualified the request, and prepared the next step."}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
              <Mic2 className="size-4 text-violet-200" />
              <p className="mt-2 text-xs font-medium text-white">
                {locale === "es" ? "Voz" : "Voice"}
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
              <Workflow className="size-4 text-cyan-200" />
              <p className="mt-2 text-xs font-medium text-white">
                {locale === "es" ? "Proceso" : "Workflow"}
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {analytics[locale].map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-2">
                <p className="text-[10px] text-slate-400">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative hidden gap-3 sm:grid sm:grid-cols-2 xl:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="col-span-2 rounded-xl border border-white/10 bg-white/[0.055] p-4 shadow-sm xl:col-span-1"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-md bg-blue-400/10 text-blue-200">
                <Bot className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {locale === "es" ? "Agente de chat" : "Chat agent"}
                </p>
                <p className="text-xs text-slate-400">
                  {locale === "es" ? "Asistente web" : "Website concierge"}
                </p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
              {locale === "es" ? "Activo" : "Live"}
            </span>
          </div>
          <div className="mt-5 space-y-3">
            <div className="ml-auto max-w-[82%] rounded-lg bg-white/10 p-3 text-sm leading-6 text-slate-200">
              {locale === "es"
                ? "¿Puedes ayudarme a reservar una consulta para la próxima semana?"
                : "Can you help me book a consultation for next week?"}
            </div>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
              className="max-w-[88%] rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-6 text-slate-100"
            >
              {locale === "es"
                ? "Sí — encontré horarios, capturé el caso de uso y preparé el siguiente paso."
                : "Yes — I found openings, captured the use case, and prepared the next step."}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.12 }}
          className="rounded-xl border border-white/10 bg-white/[0.055] p-4 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-md bg-violet-400/10 text-violet-200">
              <Mic2 className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {locale === "es" ? "Agente de voz" : "Voice agent"}
              </p>
              <p className="text-xs text-slate-400">
                {locale === "es" ? "Recepción y derivación" : "Call intake and routing"}
              </p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <PhoneCall className="size-5 text-cyan-200" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">
                {locale === "es" ? "Llamada entrante" : "Inbound call"}
              </p>
              <div className="mt-2 flex h-3 items-end gap-1">
                {[42, 70, 54, 90, 62, 78, 48].map((height, index) => (
                  <span
                    key={`${height}-${index}`}
                    style={{ height: `${height / 10}px` }}
                    className="w-full rounded-sm bg-gradient-to-t from-blue-600 to-sky-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.18 }}
          className="col-span-2 rounded-xl border border-white/10 bg-white/[0.055] p-4 shadow-sm xl:col-span-1"
        >
          <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-white">
            <Workflow className="size-5 text-cyan-200" />
            {locale === "es" ? "Pasos del proceso" : "Workflow nodes"}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {workflowNodes[locale].map((node, index) => (
              <motion.div
                key={node}
                initial={shouldReduceMotion ? false : { opacity: 0.5, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.55, delay: index * 0.12 }
                }
                className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-3"
              >
                <CheckCircle2 className="size-4 text-emerald-300" />
                <p className="mt-2 text-sm font-medium text-white">{node}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.24 }}
          className="rounded-xl border border-white/10 bg-white/[0.055] p-4 shadow-sm"
        >
          <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-white">
            <BarChart3 className="size-5 text-cyan-200" />
            {locale === "es" ? "Tarjetas de analítica" : "Analytics cards"}
          </div>
          <div className="grid gap-3 xl:grid-cols-1">
            {analytics[locale].map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="text-xs text-slate-400">{item.label}</p>
                <p className="mt-1 text-2xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
