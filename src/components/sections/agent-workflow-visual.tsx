"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Building2,
  DatabaseZap,
  Globe,
  UserRoundCheck,
} from "lucide-react";

const workflowNodes = [
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
];

export function AgentWorkflowVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-panel">
      <div className="absolute inset-0 hero-mesh opacity-70" />
      <div className="absolute inset-0 signal-grid opacity-25" />
      <div className="relative">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-700">Agent workflow</p>
            <h3 className="mt-1 text-xl font-semibold text-slate-950">
              From first touch to the right next action.
            </h3>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            Example flow only. Every node can be customized for the systems and
            handoff rules your team uses.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-5 lg:items-stretch">
          {workflowNodes.map((node, index) => {
            const Icon = node.icon;
            const isLast = index === workflowNodes.length - 1;

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
                  className="relative z-10 h-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="grid size-11 place-items-center rounded-md bg-blue-50 text-blue-700">
                    <Icon className="size-5" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-slate-950">{node.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{node.description}</p>
                </motion.div>

                {!isLast ? (
                  <>
                    <div className="absolute left-1/2 top-full z-0 h-4 w-px -translate-x-1/2 bg-blue-200 lg:left-full lg:top-1/2 lg:h-px lg:w-4 lg:-translate-y-1/2 lg:translate-x-0" />
                    <motion.div
                      aria-hidden="true"
                      className="absolute left-1/2 top-full z-0 h-4 w-px -translate-x-1/2 bg-gradient-to-b from-blue-600 to-sky-300 lg:left-full lg:top-1/2 lg:h-px lg:w-4 lg:-translate-y-1/2 lg:translate-x-0 lg:bg-gradient-to-r"
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
