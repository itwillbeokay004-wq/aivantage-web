import {
  Bot,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Headphones,
  MessageSquare,
  PhoneCall,
  Send,
  UserPlus,
  Workflow,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { VoiceAgentCard } from "@/components/sections/voice-agent-card";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ctaLabels, industries } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions",
  description:
    "Explore AiVantage AI automation solutions for customer support, lead qualification, appointment booking, real estate, operations, voice calls, chat, and follow-up.",
  path: "/solutions",
});

const solutionCards = [
  {
    icon: Headphones,
    title: "Customer Support Automation",
    problem: "Teams answer the same questions all day.",
    agentDoes: "Answers FAQs, collects context, and escalates complex cases.",
    workflow: "Question → approved answer → resolution or handoff.",
    outcome: "Faster replies and fewer repetitive tickets.",
  },
  {
    icon: UserPlus,
    title: "Lead Qualification",
    problem: "Inquiries lack context.",
    agentDoes: "Asks fit, budget, timeline, and urgency questions.",
    workflow: "Chat → fit signals → clean sales handoff.",
    outcome: "Better leads and faster follow-up.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    problem: "Scheduling creates friction.",
    agentDoes: "Checks times, confirms details, and sends reminders.",
    workflow: "Request → options → confirmed appointment.",
    outcome: "Less back-and-forth, more bookings.",
  },
  {
    icon: Building2,
    title: "Real Estate & Property Management Assistant",
    problem: "Questions arrive across too many channels.",
    agentDoes: "Answers listings, qualifies renters, and collects requests.",
    workflow: "Inquiry → criteria → approved answer or tour handoff.",
    outcome: "Faster leasing and cleaner intake.",
  },
  {
    icon: Workflow,
    title: "Internal Operations Assistant",
    problem: "Teams lose time finding answers.",
    agentDoes: "Finds policies, routes requests, and gathers missing details.",
    workflow: "Question → knowledge lookup → routed task.",
    outcome: "Faster internal support.",
  },
  {
    icon: PhoneCall,
    title: "Voice Call Assistant",
    problem: "Calls get missed or rushed.",
    agentDoes: "Captures intent, summarizes calls, and flags urgency.",
    workflow: "Call → intake → structured handoff.",
    outcome: "Better coverage and cleaner context.",
  },
  {
    icon: MessageSquare,
    title: "Website Chat Assistant",
    problem: "Visitors leave without answers.",
    agentDoes: "Answers FAQs, guides next steps, and captures contact details.",
    workflow: "Question → answer → booking or handoff.",
    outcome: "More useful website conversations.",
  },
  {
    icon: Send,
    title: "Follow-up Automation",
    problem: "Follow-up gets missed.",
    agentDoes: "Sends reminders, summaries, and next-step messages.",
    workflow: "Intake → next touch → timely follow-up.",
    outcome: "Fewer dropped opportunities.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute inset-0 signal-grid opacity-30" />
        <div className="container relative py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Business solutions
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-normal text-white sm:text-6xl">
                AI agents built around your business workflows.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Automate the moments where customers need answers and teams
                need clean handoffs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaButton href="/book-demo" size="lg">
                  {ctaLabels.bookDemo}
                </CtaButton>
                <CtaButton href="/contact" variant="secondary" size="lg" showIcon={false}>
                  Tell us what you want to automate
                </CtaButton>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <VoiceAgentCard />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          eyebrow="Solutions"
          title="AI automation for the work customers and teams repeat every day."
          description="Focused workflows for support, sales, calls, bookings, and operations."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {solutionCards.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Reveal
                key={solution.title}
                delay={index * 0.035}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">{solution.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Built as a practical workflow.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <DetailBlock label="Problem" text={solution.problem} />
                  <DetailBlock label="What the AI agent does" text={solution.agentDoes} />
                  <DetailBlock label="Example workflow" text={solution.workflow} />
                  <DetailBlock label="Business outcome" text={solution.outcome} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Industries we help"
                title="Flexible AI automation for service-heavy teams."
                description="Useful where questions, intake, bookings, and follow-up pile up."
              />
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Reveal
                    key={industry.name}
                    delay={index * 0.04}
                    className="rounded-lg border border-white/10 bg-[#07101f] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="mt-1 size-5 shrink-0 text-cyan-200" />
                      <div>
                        <h2 className="font-semibold text-white">{industry.name}</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#07101f] p-8 text-center shadow-panel sm:p-10">
          <div className="absolute inset-0 hero-mesh opacity-70" />
          <div className="absolute inset-0 signal-grid opacity-25" />
          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto grid size-12 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
              <Bot className="size-6" />
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              Tell us what you want to automate.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Share the workflow. We’ll map the first useful agent.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaButton href="/contact" size="lg">
                Start Free Consultation
              </CtaButton>
              <CtaButton href="/book-demo" variant="secondary" size="lg" showIcon={false}>
                {ctaLabels.bookDemo}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-[#050914]/80 p-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
        <CheckCircle2 className="size-4 text-emerald-300" />
        {label}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}
