import {
  BarChart3,
  BookOpen,
  Bot,
  CalendarDays,
  CheckCircle2,
  Code2,
  DatabaseZap,
  Headphones,
  Mail,
  MessageSquare,
  Phone,
  Plug,
  ShieldCheck,
  UserRoundCheck,
  Workflow,
} from "lucide-react";

import { AgentWorkflowVisual } from "@/components/sections/agent-workflow-visual";
import { AnalyticsPreview } from "@/components/sections/analytics-preview";
import { Reveal } from "@/components/reveal";
import { TrackedLink } from "@/components/analytics";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ctaLabels } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Platform",
  description:
    "Explore AiVantage as a full AI agent platform and service for chat, voice, workflow automation, analytics, and business operations.",
  path: "/platform",
});

const pillars = [
  {
    icon: Bot,
    title: "Agent Builder",
    description: "Set goals, tone, rules, and handoffs.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Ground answers in approved content.",
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "Connect CRM, calendar, tickets, and follow-up tools.",
  },
  {
    icon: UserRoundCheck,
    title: "Human Handoff",
    description: "Escalate with context already prepared.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track leads, time saved, handoffs, and quality.",
  },
  {
    icon: ShieldCheck,
    title: "Governance",
    description: "Define access, review paths, and boundaries.",
  },
];

const howItWorks = [
  {
    title: "Discover",
    description: "Pick the workflow worth automating first.",
  },
  {
    title: "Design",
    description: "Define the agent, sources, rules, and metrics.",
  },
  {
    title: "Train",
    description: "Connect knowledge and test edge cases.",
  },
  {
    title: "Deploy",
    description: "Launch across chat, voice, forms, and workflows.",
  },
  {
    title: "Optimize",
    description: "Tune performance and expand what works.",
  },
];

const deepDives = [
  {
    icon: Workflow,
    title: "Build custom conversation flows",
    description: "Guide support, qualification, scheduling, and intake.",
  },
  {
    icon: DatabaseZap,
    title: "Connect documents and FAQs",
    description: "Keep answers aligned with approved information.",
  },
  {
    icon: MessageSquare,
    title: "Capture and qualify leads",
    description: "Collect fit, urgency, and contact details.",
  },
  {
    icon: CalendarDays,
    title: "Book appointments",
    description: "Confirm details and trigger reminders.",
  },
  {
    icon: UserRoundCheck,
    title: "Escalate to humans",
    description: "Handoff when value, risk, or confidence requires it.",
  },
  {
    icon: BarChart3,
    title: "Track performance",
    description: "See what worked, what escalated, and what needs tuning.",
  },
];

const integrations = [
  { icon: Code2, label: "Website" },
  { icon: DatabaseZap, label: "CRM" },
  { icon: Mail, label: "Email" },
  { icon: Phone, label: "SMS" },
  { icon: CalendarDays, label: "Calendar" },
  { icon: Headphones, label: "Helpdesk" },
  { icon: Workflow, label: "Zapier" },
  { icon: Plug, label: "Custom API" },
];

export default function PlatformPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute inset-0 signal-grid opacity-30" />
        <div className="container relative py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                AiVantage platform
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-normal text-white sm:text-6xl">
                One platform to design, deploy, and improve AI agents.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Launch agents across chat, voice, workflows, and analytics —
                with a practical path from idea to production.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaButton href="/book-demo" size="lg">
                  {ctaLabels.bookDemo}
                </CtaButton>
                <Button asChild variant="secondary" size="lg">
                  <TrackedLink
                    href="/contact"
                    eventProperties={{ location: "platform_hero" }}
                  >
                    Talk to AiVantage
                  </TrackedLink>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <AgentWorkflowVisual />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          eyebrow="Platform pillars"
          title="Everything a business needs to turn agents into managed workflows."
          description="Design, knowledge, integrations, analytics, and governance in one operating model."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal
                key={pillar.title}
                delay={index * 0.05}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
              >
                <Icon className="size-6 text-cyan-200" />
                <h2 className="mt-5 text-xl font-semibold text-white">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{pillar.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="How it works"
                title="A launch process built for useful automation."
                description="Start focused. Launch safely. Improve with real usage."
              />
            </Reveal>
            <div className="space-y-3">
              {howItWorks.map((step, index) => (
                <Reveal
                  key={step.title}
                  delay={index * 0.04}
                  className="flex gap-4 rounded-lg border border-white/10 bg-[#07101f] p-4"
                >
                  <div className="grid size-9 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-sm font-semibold text-cyan-200">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="font-semibold text-white">{step.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          eyebrow="Feature deep dives"
          title="Agent features designed around real business movement."
          description="Agents can answer, collect, route, schedule, and report."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deepDives.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal
                key={feature.title}
                delay={index * 0.05}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-200">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-white">{feature.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{feature.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Integrations"
                title="Connect agents to the tools your team already uses."
                description="Start with common tools. Add custom APIs when needed."
              />
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {integrations.map((integration, index) => {
                const Icon = integration.icon;
                return (
                  <Reveal
                    key={integration.label}
                    delay={index * 0.035}
                    className="rounded-lg border border-white/10 bg-[#07101f] p-4"
                  >
                    <Icon className="size-5 text-cyan-200" />
                    <p className="mt-4 font-semibold text-white">{integration.label}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Placeholder integration
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-start">
          <AnalyticsPreview />
          <Reveal className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-6 text-emerald-300" />
              <h2 className="text-xl font-semibold text-white">
                Built to keep improving after launch.
              </h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Production agents should improve over time through transcript
              review, handoff analysis, and workflow tuning.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Review what agents handled successfully",
                "Identify knowledge gaps and confusing prompts",
                "Tune handoff rules for sensitive or high-value cases",
                "Expand into the next workflow once results are clear",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-300" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#07101f] p-8 text-center shadow-panel sm:p-10">
            <div className="absolute inset-0 hero-mesh opacity-70" />
            <div className="absolute inset-0 signal-grid opacity-25" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Platform demo
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl">
                See how AiVantage would support your first agent workflow.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Bring one workflow. We’ll map the agent, handoffs, and launch path.
              </p>
              <div className="mt-8 flex justify-center">
                <CtaButton href="/book-demo" size="lg">
                  {ctaLabels.bookDemo}
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
