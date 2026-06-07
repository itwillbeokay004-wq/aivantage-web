"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  CalendarCheck,
  CheckCircle2,
  Headphones,
  Home,
  MessageSquare,
  PhoneCall,
  SearchCheck,
  UserPlus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Support",
  "Sales",
  "Operations",
  "Real Estate",
  "Voice",
  "Website",
] as const;

type Category = (typeof categories)[number];

type UseCaseCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  trigger: string;
  agentDoes: string;
  systems: readonly string[];
  outcome: string;
  categories: readonly Exclude<Category, "All">[];
};

const useCaseCards: readonly UseCaseCard[] = [
  {
    icon: MessageSquare,
    title: "Website lead capture agent",
    description:
      "Turns anonymous website visits into structured inquiries with context your team can act on.",
    trigger: "A visitor asks a pricing, service, or availability question on the website.",
    agentDoes:
      "Answers initial questions, asks qualifying follow-ups, captures contact details, and routes the lead.",
    systems: ["Website chat", "CRM", "Email", "Calendar"],
    outcome: "More useful conversations from traffic you already have.",
    categories: ["Sales", "Website"],
  },
  {
    icon: Building2,
    title: "Property leasing assistant",
    description:
      "Helps leasing teams respond quickly to unit, tour, availability, and qualification questions.",
    trigger: "A renter asks about an available property or wants to schedule a tour.",
    agentDoes:
      "Answers approved property questions, checks preferences, qualifies interest, and prepares a tour handoff.",
    systems: ["Website", "CRM", "Calendar", "Property database"],
    outcome: "Faster leasing response and cleaner prospect intake.",
    categories: ["Real Estate", "Sales", "Website"],
  },
  {
    icon: Home,
    title: "Maintenance request triage",
    description:
      "Collects the details property teams need before a maintenance request reaches the right owner.",
    trigger: "A resident reports an issue through chat, form, email, or call intake.",
    agentDoes:
      "Asks for location, urgency, photos or notes, access details, and routes the request by priority.",
    systems: ["Resident portal", "Helpdesk", "Email", "Maintenance system"],
    outcome: "Less manual back-and-forth and better request routing.",
    categories: ["Operations", "Real Estate", "Support"],
  },
  {
    icon: CalendarCheck,
    title: "Appointment booking assistant",
    description:
      "Reduces scheduling friction by guiding customers from intent to confirmed appointment.",
    trigger: "A customer asks to book a call, consultation, tour, or service visit.",
    agentDoes:
      "Collects preferences, confirms contact details, proposes available times, and sends reminders.",
    systems: ["Calendar", "CRM", "Email", "SMS"],
    outcome: "More booked appointments with fewer manual scheduling steps.",
    categories: ["Sales", "Operations", "Website"],
  },
  {
    icon: Headphones,
    title: "Customer support FAQ agent",
    description:
      "Handles repeat questions from approved knowledge while keeping escalation paths clear.",
    trigger: "A customer asks a common product, service, billing, or policy question.",
    agentDoes:
      "Searches approved FAQs, responds with the best answer, and escalates when confidence is low.",
    systems: ["Knowledge base", "Helpdesk", "Website chat", "Email"],
    outcome: "Faster answers and fewer repetitive support tickets.",
    categories: ["Support", "Website"],
  },
  {
    icon: PhoneCall,
    title: "Missed-call follow-up agent",
    description:
      "Helps recover demand when customers call after hours or your team is busy.",
    trigger: "A missed call, voicemail, or after-hours call event is logged.",
    agentDoes:
      "Sends a follow-up message, collects intent, summarizes the request, and routes urgent cases.",
    systems: ["Phone system", "SMS", "CRM", "Email"],
    outcome: "Fewer missed opportunities and clearer call follow-up.",
    categories: ["Voice", "Sales", "Support"],
  },
  {
    icon: UserPlus,
    title: "Sales qualification agent",
    description:
      "Captures fit signals so sales teams know who to prioritize and what to say next.",
    trigger: "A prospect submits a form, starts chat, replies to outreach, or calls in.",
    agentDoes:
      "Asks about needs, budget, timeline, decision process, and sends a scored summary.",
    systems: ["CRM", "Website forms", "Email", "Calendar"],
    outcome: "Cleaner pipeline data and faster follow-up for qualified prospects.",
    categories: ["Sales", "Website", "Voice"],
  },
  {
    icon: SearchCheck,
    title: "Internal team knowledge assistant",
    description:
      "Gives employees a faster way to find policies, owners, process steps, and internal answers.",
    trigger: "A team member asks an internal process, HR, IT, or operations question.",
    agentDoes:
      "Searches approved internal content, answers with source-aware guidance, and routes requests when needed.",
    systems: ["Internal docs", "Ticketing", "Slack placeholder", "Helpdesk"],
    outcome: "Less searching and fewer repeated internal requests.",
    categories: ["Operations", "Support"],
  },
];

export function UseCasesFilterGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const filteredUseCases = useMemo(() => {
    if (activeCategory === "All") {
      return useCaseCards;
    }

    return useCaseCards.filter((useCase) =>
      useCase.categories.includes(activeCategory),
    );
  }, [activeCategory]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" aria-label="Use case filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-md border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              activeCategory === category
                ? "border-cyan-300/50 bg-cyan-300/10 text-white"
                : "border-white/10 bg-white/[0.04] text-slate-400 hover:border-white/20 hover:text-white",
            )}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {filteredUseCases.map((useCase, index) => {
          const Icon = useCase.icon;

          return (
            <Reveal
              key={useCase.title}
              delay={index * 0.035}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                  <Icon className="size-6" />
                </div>
                <div>
                  <div className="flex flex-wrap gap-2">
                    {useCase.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-xs font-semibold text-cyan-100"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-white">
                    {useCase.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {useCase.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <UseCaseDetail label="Trigger" text={useCase.trigger} />
                <UseCaseDetail label="What the AI agent does" text={useCase.agentDoes} />
                <UseCaseDetail
                  label="Systems it may connect to"
                  text={useCase.systems.join(", ")}
                />
                <UseCaseDetail label="Outcome" text={useCase.outcome} />
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

function UseCaseDetail({ label, text }: { label: string; text: string }) {
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
