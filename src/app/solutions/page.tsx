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
    problem: "Support teams spend too much time answering the same questions.",
    agentDoes:
      "Answers common issues, collects account context, suggests next steps, and escalates complex cases.",
    workflow:
      "Customer asks a question, agent checks approved knowledge, resolves the issue, or creates a handoff summary.",
    outcome: "Faster first responses and fewer repetitive tickets for the team.",
  },
  {
    icon: UserPlus,
    title: "Lead Qualification",
    problem: "New inquiries arrive without enough detail to prioritize follow-up.",
    agentDoes:
      "Asks qualifying questions about need, budget, timeline, location, and urgency.",
    workflow:
      "Visitor starts chat, agent gathers fit signals, scores intent, and sends a clean record to sales.",
    outcome: "Better lead quality and quicker response to high-intent prospects.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    problem: "Scheduling takes too many messages and slows down customer momentum.",
    agentDoes:
      "Collects preferences, checks available times, confirms details, and triggers reminders.",
    workflow:
      "Customer requests a time, agent proposes options, confirms the booking, and logs the appointment.",
    outcome: "Less back-and-forth and more booked meetings from inbound interest.",
  },
  {
    icon: Building2,
    title: "Real Estate & Property Management Assistant",
    problem: "Listing, leasing, and resident questions arrive across too many channels.",
    agentDoes:
      "Answers property questions, qualifies renters, collects maintenance details, and schedules tours.",
    workflow:
      "Prospect asks about a unit, agent confirms criteria, shares approved details, and prepares a tour handoff.",
    outcome: "More responsive leasing and cleaner operational intake.",
  },
  {
    icon: Workflow,
    title: "Internal Operations Assistant",
    problem: "Employees lose time looking for policies, forms, owners, and status updates.",
    agentDoes:
      "Finds internal answers, routes requests, gathers missing information, and updates workflow records.",
    workflow:
      "Team member asks for help, agent checks the knowledge base, completes intake, and routes the task.",
    outcome: "Faster internal support and fewer manual routing steps.",
  },
  {
    icon: PhoneCall,
    title: "Voice Call Assistant",
    problem: "Calls are missed, rushed, or hard to summarize consistently.",
    agentDoes:
      "Handles intake, captures caller intent, summarizes the conversation, and flags urgent needs.",
    workflow:
      "Caller reaches the voice agent, shares the request, and the agent creates a structured handoff.",
    outcome: "Better call coverage without losing important context.",
  },
  {
    icon: MessageSquare,
    title: "Website Chat Assistant",
    problem: "Website visitors leave when they cannot get quick answers or clear next steps.",
    agentDoes:
      "Guides visitors, answers FAQs, recommends next actions, and captures contact details.",
    workflow:
      "Visitor asks a question, agent responds from approved content, then books or routes the next step.",
    outcome: "Higher engagement and more useful website conversations.",
  },
  {
    icon: Send,
    title: "Follow-up Automation",
    problem: "Manual follow-up is inconsistent and easy to miss after a busy day.",
    agentDoes:
      "Sends reminders, summaries, next-step messages, and status updates based on the workflow.",
    workflow:
      "Agent completes intake, schedules the next touch, and sends a clear follow-up at the right time.",
    outcome: "More consistent communication and fewer dropped opportunities.",
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
                AiVantage designs automation around the moments where customers
                need answers, teams need context, and work needs to move without
                another manual handoff.
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
          description="Each solution combines conversation design, approved knowledge, workflow routing, and measurable business outcomes."
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
                      Built as a practical agent workflow, not a generic script.
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
                description="AiVantage works best where customer questions, intake, bookings, follow-up, and internal routing create daily friction."
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
              Share the workflow, channel, and outcome you care about. We will
              help map the first AI agent that could make it faster, cleaner,
              and easier to measure.
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
