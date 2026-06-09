"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, Send, Sparkles } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { SectionHeading } from "@/components/ui/section-heading";

const samples = {
  es: [
    {
      question: "¿Puedes cualificar a un cliente potencial?",
      response:
        "Puedo preguntar presupuesto, plazo, necesidad y etapa de decisión, y crear un resumen puntuado para ventas.",
    },
    {
      question: "¿Puedes reservar citas?",
      response:
        "Sí. Puedo recopilar preferencias, revisar horarios, confirmar detalles y enviar recordatorios.",
    },
    {
      question: "¿Puedes responder preguntas frecuentes?",
      response:
        "Puedo usar conocimiento aprobado para responder preguntas comunes y derivar lo que necesite revisión humana.",
    },
    {
      question: "¿Puedes gestionar llamadas?",
      response:
        "Puedo capturar intención, recopilar datos estructurados, resumir la conversación y dirigir casos urgentes.",
    },
  ],
  en: [
    {
      question: "Can you qualify a new lead?",
      response:
        "I can ask budget, timeline, service need, and decision stage, then create a scored lead summary for sales.",
    },
    {
      question: "Can you book appointments?",
      response:
        "Yes. I can collect preferences, check available time slots, confirm details, and send reminders before the meeting.",
    },
    {
      question: "Can you answer customer FAQs?",
      response:
        "I can use approved knowledge base content to answer common questions and escalate anything that needs human review.",
    },
    {
      question: "Can you handle calls?",
      response:
        "I can capture caller intent, gather structured information, summarize the conversation, and route urgent requests.",
    },
  ],
} as const;

export function HomeAgentDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const activeSamples = samples[locale];
  const active = activeSamples[activeIndex];

  return (
    <section className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeading
          align="left"
          eyebrow={locale === "es" ? "Demostración" : "AI agent demo"}
          title={
            locale === "es"
              ? "Prueba respuestas típicas."
              : "Preview common responses."
          }
          description={
            locale === "es"
              ? "Demo preparada, sin llamada a una API."
              : "Prepared demo, no API call yet."
          }
        />
        <div className="glass-panel rounded-lg p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                <Bot className="size-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  {locale === "es" ? "Agente de IA" : "AiVantage Demo Agent"}
                </h2>
                <p className="text-sm text-slate-400">
                  {locale === "es" ? "Solo demostración" : "Prepared response preview"}
                </p>
              </div>
            </div>
            <Sparkles className="size-5 text-purple-200" aria-hidden="true" />
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {activeSamples.map((sample, index) => (
              <button
                key={sample.question}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-md border p-3 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeIndex === index
                    ? "border-cyan-300/50 bg-cyan-300/10 text-white"
                    : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:text-white"
                }`}
                aria-pressed={activeIndex === index}
              >
                {sample.question}
              </button>
            ))}
          </div>

          <motion.div
            key={active.question}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}
            className="mt-6 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.07] p-4"
          >
            <p className="text-sm font-semibold text-cyan-100">
              {locale === "es" ? "Selecciona una pregunta" : "Sample response"}
            </p>
            <p className="mt-3 leading-7 text-slate-100">{active.response}</p>
          </motion.div>

          <div className="mt-5 flex items-center gap-3 rounded-md border border-white/10 bg-[#050914] p-3">
            <input
              aria-label={
                locale === "es"
                  ? "Campo de demostración de ejemplo"
                  : "Demo input placeholder"
              }
              disabled
              value={active.question}
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-400 outline-none"
              readOnly
            />
            <button
              type="button"
              disabled
              className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground opacity-80"
              aria-label={
                locale === "es"
                  ? "Botón de envío de demostración"
                  : "Demo send button placeholder"
              }
            >
              <Send className="size-4" />
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            {locale === "es"
              ? "Demostración — todavía no es un agente de IA en vivo."
              : "Demo only — not a live AI agent yet."}
          </p>
        </div>
      </div>
    </section>
  );
}
