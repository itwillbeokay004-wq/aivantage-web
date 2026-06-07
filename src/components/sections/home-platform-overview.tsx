import {
  BarChart3,
  Bot,
  BrainCircuit,
  GraduationCap,
  Rocket,
  Settings2,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    icon: Bot,
    title: "Build",
    description: "Define the agent role, tone, guardrails, channels, and workflows.",
  },
  {
    icon: GraduationCap,
    title: "Train",
    description: "Ground responses in your knowledge base, policies, and customer context.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Launch on chat, voice, messaging, and connected business systems.",
  },
  {
    icon: BarChart3,
    title: "Monitor",
    description: "Track quality, usage, outcomes, handoffs, and automation performance.",
  },
  {
    icon: BrainCircuit,
    title: "Improve",
    description: "Tune prompts, workflows, routing, and knowledge based on real conversations.",
  },
  {
    icon: Settings2,
    title: "Scale",
    description: "Expand from one high-value workflow into a broader AI operations layer.",
  },
];

export function HomePlatformOverview() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="container py-16">
        <SectionHeading
          eyebrow="Platform overview"
          title="A practical path from first agent to managed AI operations."
          description="Each layer is designed to make agents useful, measurable, and easier for your team to trust."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal
                key={step.title}
                delay={index * 0.05}
                className="rounded-lg border border-white/10 bg-[#07101f] p-6"
              >
                <div className="grid size-11 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
