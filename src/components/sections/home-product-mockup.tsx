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

const workflowNodes = ["Lead", "Score", "Book", "Follow up"];
const analytics = [
  { label: "Answered", value: "1,248" },
  { label: "Booked", value: "186" },
  { label: "Handoffs", value: "42" },
];

export function HomeProductMockup() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-[#07101f] p-4 shadow-panel sm:p-5">
      <div className="absolute inset-0 hero-mesh opacity-70" />
      <div className="absolute inset-0 signal-grid opacity-25" />
      <div className="relative grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="rounded-lg border border-cyan-300/20 bg-[#050914]/80 p-4"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                <Bot className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Chat agent</p>
                <p className="text-xs text-slate-400">Website concierge</p>
              </div>
            </div>
            <span className="rounded-md bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
              Live
            </span>
          </div>
          <div className="mt-5 space-y-3">
            <div className="ml-auto max-w-[82%] rounded-md bg-white/10 p-3 text-sm leading-6 text-slate-200">
              Can you help me book a consultation for next week?
            </div>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 1.2, repeat: Infinity, repeatType: "reverse" }
              }
              className="max-w-[88%] rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-6 text-cyan-50"
            >
              Yes. I found two openings, captured the use case, and prepared a
              calendar invite for review.
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.12 }}
          className="rounded-lg border border-white/10 bg-[#050914]/80 p-4"
        >
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-md bg-purple-300/10 text-purple-200">
              <Mic2 className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Voice agent</p>
              <p className="text-xs text-slate-400">Call intake and routing</p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-3">
            <PhoneCall className="size-5 text-cyan-200" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">Inbound call</p>
              <div className="mt-2 flex h-2 gap-1">
                {[42, 70, 54, 90, 62, 78, 48].map((height, index) => (
                  <motion.span
                    key={`${height}-${index}`}
                    animate={
                      shouldReduceMotion
                        ? { height: `${height / 5}px` }
                        : { height: [`${height / 7}px`, `${height / 4}px`, `${height / 7}px`] }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0 : 1.4,
                      repeat: shouldReduceMotion ? 0 : Infinity,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                    }}
                    className="w-full rounded-sm bg-gradient-to-t from-cyan-500 to-purple-300"
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
          className="rounded-lg border border-white/10 bg-[#050914]/80 p-4"
        >
          <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-white">
            <Workflow className="size-5 text-cyan-200" />
            Workflow nodes
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {workflowNodes.map((node, index) => (
              <motion.div
                key={node}
                initial={shouldReduceMotion ? false : { opacity: 0.5, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.55, delay: index * 0.18, repeat: Infinity, repeatDelay: 3 }
                }
                className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.06] p-3"
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
          className="rounded-lg border border-white/10 bg-[#050914]/80 p-4"
        >
          <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-white">
            <BarChart3 className="size-5 text-cyan-200" />
            Analytics cards
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {analytics.map((item) => (
              <div key={item.label} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
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
