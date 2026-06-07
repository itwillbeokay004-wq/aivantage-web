"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, Send, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";

const samples = [
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
];

export function HomeAgentDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const active = samples[activeIndex];

  return (
    <section className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeading
          align="left"
          eyebrow="AI agent demo"
          title="Click a sample question to preview how an agent responds."
          description="This is an interactive-looking demo built with React state. It uses prepared sample responses and does not call an API yet."
        />
        <div className="glass-panel rounded-lg p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                <Bot className="size-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">AiVantage Demo Agent</h2>
                <p className="text-sm text-slate-400">Prepared response preview</p>
              </div>
            </div>
            <Sparkles className="size-5 text-purple-200" aria-hidden="true" />
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {samples.map((sample, index) => (
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
            <p className="text-sm font-semibold text-cyan-100">Sample response</p>
            <p className="mt-3 leading-7 text-slate-100">{active.response}</p>
          </motion.div>

          <div className="mt-5 flex items-center gap-3 rounded-md border border-white/10 bg-[#050914] p-3">
            <input
              aria-label="Demo input placeholder"
              disabled
              value={active.question}
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-400 outline-none"
              readOnly
            />
            <button
              type="button"
              disabled
              className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground opacity-80"
              aria-label="Demo send button placeholder"
            >
              <Send className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
