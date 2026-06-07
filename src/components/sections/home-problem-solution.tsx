import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const problemSolutions = [
  {
    problem: "Missed leads",
    solution: "Instantly qualify inquiries and route ready prospects to the right person.",
  },
  {
    problem: "Repetitive questions",
    solution: "Answer common requests from approved knowledge without making teams repeat themselves.",
  },
  {
    problem: "Slow response times",
    solution: "Keep web, phone, and message channels responsive even after business hours.",
  },
  {
    problem: "Manual follow-ups",
    solution: "Trigger reminders, summaries, next steps, and workflow updates automatically.",
  },
];

export function HomeProblemSolution() {
  return (
    <section className="container py-16">
      <SectionHeading
        eyebrow="Problem and solution"
        title="Turn the everyday bottlenecks into agent-powered workflows."
        description="AiVantage starts with the operational moments where speed, consistency, and clean handoffs matter most."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {problemSolutions.map((item, index) => (
          <Reveal
            key={item.problem}
            delay={index * 0.05}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
          >
            <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-rose-200">
                  <AlertCircle className="size-4" />
                  {item.problem}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Work slows down when this depends on manual attention.
                </p>
              </div>
              <ArrowRight className="hidden size-5 text-cyan-200 sm:block" aria-hidden="true" />
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
                  <CheckCircle2 className="size-4" />
                  AiVantage solution
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.solution}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
