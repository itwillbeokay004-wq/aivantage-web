"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Mic2, PhoneCall, UserRound } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import type { Locale } from "@/lib/locale";

const voiceCardContent = {
  es: {
    eyebrow: "Llamada entrante",
    title: "Recepción con agente de voz",
    badge: "Llamada de ejemplo",
    caller: "Llamante desconocido",
    elapsed: "00:42 transcurridos",
    outcomeTitle: "Resultado resuelto",
    outcome:
      "Lead calificado, preferencia de tour capturada, nota CRM redactada y traspaso preparado para el equipo de leasing.",
    transcriptSnippets: [
      {
        speaker: "Llamante",
        text: "Hola, necesito agendar un tour para una unidad de dos habitaciones.",
      },
      {
        speaker: "Agente IA",
        text: "Puedo ayudarte con eso. ¿Qué día te funciona mejor y cuándo esperas mudarte?",
      },
      {
        speaker: "Llamante",
        text: "Este fin de semana si es posible. La mudanza sería el próximo mes.",
      },
    ],
  },
  en: {
    eyebrow: "Incoming call",
    title: "Voice Agent Intake",
    badge: "Example call",
    caller: "Unknown caller",
    elapsed: "00:42 elapsed",
    outcomeTitle: "Resolved outcome",
    outcome:
      "Lead qualified, tour preference captured, CRM note drafted, and handoff prepared for the leasing team.",
    transcriptSnippets: [
      {
        speaker: "Caller",
        text: "Hi, I need to schedule a tour for a two-bedroom unit.",
      },
      {
        speaker: "AI Agent",
        text: "I can help with that. What day works best and how soon are you hoping to move?",
      },
      {
        speaker: "Caller",
        text: "This weekend if possible. Move-in would be next month.",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    badge: string;
    caller: string;
    elapsed: string;
    outcomeTitle: string;
    outcome: string;
    transcriptSnippets: readonly { speaker: string; text: string }[];
  }
>;

export function VoiceAgentCard() {
  const { locale } = useLocale();
  const content = voiceCardContent[locale];
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#07101f] p-5 shadow-panel">
      <div className="absolute inset-0 hero-mesh opacity-60" />
      <div className="relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-md bg-purple-300/10 text-purple-200">
              <PhoneCall className="size-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-purple-100">{content.eyebrow}</p>
              <h3 className="text-xl font-semibold text-white">{content.title}</h3>
            </div>
          </div>
          <span className="w-fit rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            {content.badge}
          </span>
        </div>

        <div className="mt-6 rounded-lg border border-white/10 bg-[#050914]/80 p-4">
          <div className="flex items-center gap-3">
            <UserRound className="size-5 text-cyan-200" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">{content.caller}</p>
              <p className="text-xs text-slate-400">{content.elapsed}</p>
            </div>
            <Mic2 className="size-5 text-purple-200" />
          </div>
          <div className="mt-4 flex h-8 items-center gap-1.5">
            {[38, 68, 50, 86, 42, 76, 58, 92, 48, 72, 54, 82].map((height, index) => (
              <motion.span
                key={`${height}-${index}`}
                animate={
                  shouldReduceMotion
                    ? { height: `${height / 5}px` }
                    : { height: [`${height / 10}px`, `${height / 4}px`, `${height / 10}px`] }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.2,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  delay: shouldReduceMotion ? 0 : index * 0.05,
                }}
                className="w-full rounded-sm bg-gradient-to-t from-cyan-500 to-purple-300"
              />
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {content.transcriptSnippets.map((snippet, index) => (
            <motion.div
              key={`${snippet.speaker}-${snippet.text}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
                delay: shouldReduceMotion ? 0 : index * 0.08,
              }}
              className="rounded-md border border-white/10 bg-white/[0.04] p-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                {snippet.speaker}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-200">{snippet.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 rounded-lg border border-emerald-300/20 bg-emerald-300/[0.08] p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-300" />
            <div>
              <p className="font-semibold text-white">{content.outcomeTitle}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {content.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
