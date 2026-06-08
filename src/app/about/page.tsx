import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ClipboardList,
  Handshake,
  LockKeyhole,
  MessageSquareText,
  Radar,
  Sparkles,
  Workflow,
} from "lucide-react";

import { TrackedLink } from "@/components/analytics";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About AiVantage",
  description:
    "Learn how AiVantage helps businesses design, deploy, and improve practical AI agents for support, sales, operations, and customer engagement.",
  path: "/about",
});

const principles = [
  {
    icon: ClipboardList,
    title: "Workflow before wow-factor",
    description: "Start with the process before choosing tools.",
  },
  {
    icon: LockKeyhole,
    title: "Control is part of quality",
    description: "Use approved knowledge, fallbacks, handoffs, and boundaries.",
  },
  {
    icon: BarChart3,
    title: "Launch, measure, improve",
    description: "Track outcomes and refine from real conversations.",
  },
];

const partnerSteps = [
  {
    title: "Map",
    description: "Find where customers wait and teams repeat work.",
  },
  {
    title: "Design",
    description: "Shape the agent, sources, rules, integrations, and metrics.",
  },
  {
    title: "Launch",
    description: "Deploy, test behavior, and prepare your team.",
  },
  {
    title: "Optimize",
    description: "Tune answers, routing, and the next workflow.",
  },
];

const focusAreas = [
  "Website chat agents that qualify demand",
  "Voice assistants for missed calls and intake",
  "Knowledge agents grounded in approved content",
  "Appointment and follow-up automation",
  "Human handoff workflows with summaries",
  "Analytics that show what agents handled",
];

const trustPoints = [
  {
    icon: Bot,
    value: "Custom",
    label: "agents around your workflow",
  },
  {
    icon: Workflow,
    value: "Multi-step",
    label: "automation beyond simple replies",
  },
  {
    icon: Handshake,
    value: "Human-ready",
    label: "handoff paths for important moments",
  },
  {
    icon: Radar,
    value: "Measured",
    label: "performance and improvement loops",
  },
];

function AboutSystemVisual() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#07101f] p-5 shadow-glow">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_34%)]" />
      <div className="relative space-y-4">
        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">
              Agent command center
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Business workflow map
            </h2>
          </div>
          <div className="grid size-12 place-items-center rounded-full bg-cyan-300/10">
            <Sparkles className="size-5 text-cyan-200" aria-hidden="true" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {["Intent", "Knowledge", "Action"].map((item, index) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-black/20 p-4"
            >
              <div className="mb-4 h-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-purple-300" />
              <p className="text-sm font-semibold text-white">{item}</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Layer {index + 1} checks the path before automation continues.
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
          <div className="flex items-start gap-3">
            <MessageSquareText className="mt-1 size-5 shrink-0 text-cyan-200" />
            <div>
              <p className="text-sm font-semibold text-white">
                Example outcome
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                The agent qualifies intent, books the next step, and sends a summary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AiVantage"
        title="AI automation built for useful work, not theater."
        description={`${siteConfig.name} turns repeatable conversations and tasks into managed AI agent workflows.`}
        primaryCta={{ href: "/book-demo", label: "Book a Demo" }}
        secondaryCta={{ href: "/use-cases", label: "See Use Cases" }}
      />

      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our point of view"
              title="The best AI agents are designed around the way your business already moves."
              description="Faster responses, cleaner handoffs, fewer repeat questions, and measurable lift."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <TrackedLink
                  href="/contact"
                  eventProperties={{ location: "about_point_of_view" }}
                >
                  Start Free Consultation
                  <ArrowRight className="size-4" aria-hidden="true" />
                </TrackedLink>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <TrackedLink
                  href="/platform"
                  eventProperties={{ location: "about_point_of_view" }}
                >
                  Explore Platform
                </TrackedLink>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <AboutSystemVisual />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <SectionHeading
            eyebrow="How we think"
            title="Principles that keep AI automation grounded."
            description="Useful, measurable, and controlled enough for real workflows."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Reveal
                  key={principle.title}
                  delay={index * 0.05}
                  className="rounded-lg border border-white/10 bg-[#07101f] p-6"
                >
                  <Icon className="size-6 text-cyan-200" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-semibold text-white">
                    {principle.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {principle.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Working together"
              title="A practical path from idea to production agent."
              description="Bring the context. We shape the workflow and launch path."
            />
          </Reveal>
          <div className="space-y-3">
            {partnerSteps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 0.04}
                className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-sm font-semibold text-cyan-200">
                  {index + 1}
                </div>
                <div>
                  <h2 className="font-semibold text-white">{step.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Where we help"
                title="Focused on the workflows that create immediate business leverage."
                description="Start with one real bottleneck, then expand what works."
              />
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {focusAreas.map((area, index) => (
                <Reveal
                  key={area}
                  delay={index * 0.03}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#07101f] p-4"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cyan-200" />
                  <span className="text-sm leading-6 text-slate-300">{area}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal
                key={point.label}
                delay={index * 0.04}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
              >
                <Icon className="size-6 text-purple-200" aria-hidden="true" />
                <p className="mt-5 text-3xl font-semibold text-white">{point.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{point.label}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Let’s build the first agent your business can actually use."
        description="Book a demo and we’ll map one high-value workflow."
      />
    </>
  );
}
