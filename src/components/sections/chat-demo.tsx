"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, MessageSquare, Send } from "lucide-react";

const samplePrompts = [
  {
    prompt: "Can you qualify this lead?",
    response:
      "Yes. I would ask about timeline, budget, location, service need, and decision stage, then send a scored lead summary to your CRM.",
  },
  {
    prompt: "Can you book an appointment?",
    response:
      "Yes. I can collect preferred times, confirm contact details, reserve an available slot, and trigger reminder follow-ups.",
  },
  {
    prompt: "Can you answer a property management question?",
    response:
      "Yes. I can answer approved questions about rent, maintenance requests, leasing criteria, amenities, and office hours.",
  },
  {
    prompt: "Can you summarize a support issue?",
    response:
      "Yes. I can capture the customer problem, urgency, attempted fixes, account context, and a recommended next action for your team.",
  },
];

export function ChatDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const active = samplePrompts[activeIndex];

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    const timer = window.setTimeout(() => setIsTyping(false), 650);

    return () => window.clearTimeout(timer);
  }, [activeIndex, shouldReduceMotion]);

  return (
    <div className="glass-panel overflow-hidden rounded-lg">
      <div className="border-b border-white/10 bg-[#050914] p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
              <MessageSquare className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white">AiVantage Chat Agent</h3>
              <p className="text-sm text-slate-400">Interactive sample responses</p>
            </div>
          </div>
          <span className="w-fit rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
            Demo only
          </span>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Sample prompts
          </p>
          <div className="space-y-2">
            {samplePrompts.map((sample, index) => (
              <button
                key={sample.prompt}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full rounded-md border p-3 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeIndex === index
                    ? "border-cyan-300/50 bg-cyan-300/10 text-white"
                    : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:text-white"
                }`}
                aria-pressed={activeIndex === index}
              >
                {sample.prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[360px] p-4">
          <div className="space-y-4">
            <motion.div
              key={`user-${active.prompt}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
              className="ml-auto max-w-[85%] rounded-md bg-white/10 p-3 text-sm leading-6 text-slate-100"
            >
              {active.prompt}
            </motion.div>

            <div className="flex max-w-[88%] gap-3">
              <div className="grid size-8 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                <Bot className="size-4" />
              </div>
              {isTyping ? (
                <div className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-3">
                  <div className="flex h-6 items-center gap-1.5" aria-label="Typing">
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        className="size-2 rounded-full bg-cyan-200"
                        animate={
                          shouldReduceMotion
                            ? { opacity: 1, y: 0 }
                            : { opacity: [0.35, 1, 0.35], y: [0, -3, 0] }
                        }
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.75,
                          repeat: shouldReduceMotion ? 0 : Infinity,
                          delay: shouldReduceMotion ? 0 : dot * 0.12,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div
                  key={`agent-${active.response}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
                  className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.07] p-3 text-sm leading-6 text-cyan-50"
                >
                  {active.response}
                </motion.div>
              )}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-md border border-white/10 bg-[#050914] p-3">
            <input
              aria-label="Chat demo input"
              disabled
              readOnly
              value={active.prompt}
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-400 outline-none"
            />
            <button
              type="button"
              disabled
              className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground opacity-80"
              aria-label="Send demo prompt"
            >
              <Send className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
