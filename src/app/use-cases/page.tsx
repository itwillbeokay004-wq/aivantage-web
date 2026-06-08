import { ArrowRight, Compass, Filter, Route, Sparkles } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { UseCasesFilterGrid } from "@/components/sections/use-cases-filter-grid";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ctaLabels } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Use Cases",
  description:
    "Explore practical AI agent use cases for support, sales, voice intake, scheduling, lead follow-up, and internal helpdesks.",
  path: "/use-cases",
});

export default function UseCasesPage() {
  const workflowSignals = [
    "Clear trigger",
    "Approved answer source",
    "System connection",
    "Human fallback",
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(168,85,247,0.16),transparent_30%)]" />
        <div className="absolute inset-0 -z-10 bg-grid-soft opacity-40" />
        <div className="container grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Practical Use Cases
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              AI agent examples for practical workflows.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Explore website intake, voice follow-up, support, property
              operations, bookings, and internal knowledge.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="/book-demo" size="lg">
                {ctaLabels.bookDemo}
              </CtaButton>
              <CtaButton href="/contact" variant="secondary" size="lg">
                {ctaLabels.startFreeConsultation}
              </CtaButton>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/30"
          >
            <div className="rounded-xl border border-cyan-300/20 bg-[#050914]/90 p-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Workflow Map
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Intent to outcome.
                  </p>
                </div>
                <div className="grid size-11 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                  <Route className="size-5" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {workflowSignals.map((signal, index) => (
                  <div
                    key={signal}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="grid size-8 place-items-center rounded-md bg-white/[0.06] text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-white">{signal}</p>
                      <p className="mt-1 text-sm text-slate-400">
                        Defined before launch.
                      </p>
                    </div>
                    <ArrowRight className="size-4 text-cyan-200" aria-hidden="true" />
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-cyan-300/10 p-4">
                  <Filter className="size-5 text-cyan-200" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-white">
                    Filter by team need
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Support, sales, operations, voice, or website.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-purple-400/10 p-4">
                  <Compass className="size-5 text-purple-200" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-white">
                    Map next steps
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Trigger, systems, metric, escalation.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          eyebrow="Examples"
          title="Filter use cases by channel, team, or workflow."
          description="Scan triggers, agent actions, systems, and outcomes."
        />
        <div className="mt-12">
          <UseCasesFilterGrid />
        </div>
      </section>

      <section className="container pb-20">
        <Reveal className="overflow-hidden rounded-2xl border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(168,85,247,0.12)_45%,rgba(255,255,255,0.04))] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Workflow Strategy
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Have a workflow in mind? Let’s map it.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Bring the repetitive questions, missed calls, or slow handoffs.
                We’ll turn them into a practical AI agent plan.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <CtaButton href="/contact" size="lg">
                Contact Us
              </CtaButton>
              <CtaButton href="/book-demo" variant="secondary" size="lg">
                {ctaLabels.bookDemo}
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
