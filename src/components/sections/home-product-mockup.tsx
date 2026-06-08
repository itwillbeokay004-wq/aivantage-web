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
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-panel sm:p-5">
      <div className="absolute inset-0 hero-mesh opacity-70" />
      <div className="absolute inset-0 signal-grid opacity-25" />
      <div className="relative grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-md bg-blue-50 text-blue-700">
                <Bot className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">Chat agent</p>
                <p className="text-xs text-slate-500">Website concierge</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              Live
            </span>
          </div>
          <div className="mt-5 space-y-3">
            <div className="ml-auto max-w-[82%] rounded-lg bg-slate-100 p-3 text-sm leading-6 text-slate-700">
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
              className="max-w-[88%] rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm leading-6 text-slate-700"
            >
              Yes — I found openings, captured the use case, and prepared the
              next step.
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.12 }}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-md bg-indigo-50 text-indigo-700">
              <Mic2 className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">Voice agent</p>
              <p className="text-xs text-slate-500">Call intake and routing</p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
            <PhoneCall className="size-5 text-blue-700" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-slate-950">Inbound call</p>
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
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-slate-950">
            <Workflow className="size-5 text-blue-700" />
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
                className="rounded-lg border border-blue-100 bg-blue-50 p-3"
              >
                <CheckCircle2 className="size-4 text-emerald-600" />
                <p className="mt-2 text-sm font-medium text-slate-950">{node}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.24 }}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-slate-950">
            <BarChart3 className="size-5 text-blue-700" />
            Analytics cards
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {analytics.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="mt-1 text-2xl font-semibold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
