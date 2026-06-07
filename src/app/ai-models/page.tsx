import {
  AudioLines,
  Bot,
  BrainCircuit,
  CheckCircle2,
  FileSearch,
  Globe2,
  Languages,
  ListChecks,
  Plug,
  ShieldCheck,
  Sparkles,
  TableProperties,
  UserRoundCheck,
} from "lucide-react";

import { ChatDemo } from "@/components/sections/chat-demo";
import { Reveal } from "@/components/reveal";
import { TrackedLink } from "@/components/analytics";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ctaLabels } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Models",
  description:
    "Learn how AiVantage helps businesses choose and integrate AI model capabilities for text, voice, documents, scoring, summaries, decisions, multilingual support, and extraction.",
  path: "/ai-models",
});

const capabilities = [
  {
    icon: Sparkles,
    title: "Text generation",
    description:
      "Draft helpful answers, follow-up messages, summaries, and guided responses using approved business context.",
  },
  {
    icon: AudioLines,
    title: "Voice conversations",
    description:
      "Support call intake, spoken prompts, transcript capture, and voice-ready workflows for customer conversations.",
  },
  {
    icon: FileSearch,
    title: "Document understanding",
    description:
      "Find useful information inside policies, FAQs, manuals, listings, service guides, and internal docs.",
  },
  {
    icon: BrainCircuit,
    title: "Lead scoring",
    description:
      "Evaluate fit, urgency, intent, timeline, and missing details before routing prospects to sales.",
  },
  {
    icon: ListChecks,
    title: "Summaries",
    description:
      "Turn conversations, calls, support issues, and intake forms into clear handoff notes.",
  },
  {
    icon: Bot,
    title: "Workflow decisions",
    description:
      "Choose the next step based on confidence, policy, customer status, and business rules.",
  },
  {
    icon: Languages,
    title: "Multilingual support",
    description:
      "Design agent experiences for customers who need responses or routing across multiple languages.",
  },
  {
    icon: TableProperties,
    title: "Data extraction",
    description:
      "Pull structured fields from messages, documents, calls, forms, and support requests.",
  },
];

const safetyControls = [
  {
    icon: ShieldCheck,
    title: "Guardrails",
    description:
      "Define what agents should answer, when they should refuse, and when they should route to a person.",
  },
  {
    icon: FileSearch,
    title: "Approved knowledge",
    description:
      "Ground responses in selected documents, FAQs, policies, and source material your team trusts.",
  },
  {
    icon: ListChecks,
    title: "Fallback responses",
    description:
      "Use clear backup language when confidence is low, source material is missing, or a workflow needs review.",
  },
  {
    icon: UserRoundCheck,
    title: "Human handoff",
    description:
      "Move sensitive, complex, or high-value conversations to people with context already summarized.",
  },
  {
    icon: TableProperties,
    title: "Audit logs placeholder",
    description:
      "Plan traceable records for conversations, decisions, handoffs, and workflow actions as systems mature.",
  },
];

const faqs = [
  {
    question: "Can AI answer questions from my documents?",
    answer:
      "Yes. AiVantage can design agents that search approved documents, FAQs, policies, and knowledge base content before responding.",
  },
  {
    question: "Can it speak with customers?",
    answer:
      "Yes, when voice capability is part of the workflow. AiVantage can help design voice intake, call summaries, and handoff paths using suitable voice model providers or telephony integrations.",
  },
  {
    question: "Can it connect to my CRM?",
    answer:
      "Yes. Agents can be designed to create records, update fields, add notes, route leads, or trigger follow-up workflows through secure integrations.",
  },
  {
    question: "Can humans take over?",
    answer:
      "Yes. Human handoff can be built into the workflow for sensitive requests, low-confidence responses, high-value leads, or policy exceptions.",
  },
  {
    question: "How do you protect sensitive data?",
    answer:
      "AiVantage scopes data access carefully, uses approved sources, designs fallback behavior, and can plan role-based controls and audit logging around the workflow requirements.",
  },
];

export default function AiModelsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute inset-0 signal-grid opacity-30" />
        <div className="container relative py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                AI model strategy
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-normal text-white sm:text-6xl">
                Use the right AI model for the right job.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                AiVantage helps businesses match AI capabilities to each
                workflow, whether the job involves chat, voice, documents,
                scoring, extraction, summaries, or structured decisions.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaButton href="/book-demo" size="lg">
                  {ctaLabels.bookDemo}
                </CtaButton>
                <Button asChild variant="secondary" size="lg">
                  <TrackedLink
                    href="/contact"
                    eventProperties={{ location: "ai_models_hero" }}
                  >
                    Discuss model needs
                  </TrackedLink>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ChatDemo />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          eyebrow="Model capabilities"
          title="Different workflows need different kinds of intelligence."
          description="AiVantage scopes the model capability around the job, risk level, speed requirement, data source, and business outcome."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Reveal
                key={capability.title}
                delay={index * 0.04}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <Icon className="size-6 text-cyan-200" />
                <h2 className="mt-5 text-lg font-semibold text-white">{capability.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {capability.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Provider-neutral architecture"
                title="Designed around your requirements, not a single model vendor."
                description="AiVantage can design workflows to work with OpenAI or other model providers through secure API integrations, depending on the client's needs, data policies, latency goals, budget, and preferred deployment approach."
              />
            </Reveal>
            <Reveal delay={0.08} className="rounded-lg border border-white/10 bg-[#07101f] p-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: Plug,
                    title: "Secure APIs",
                    copy: "Connect selected providers through scoped credentials and controlled request paths.",
                  },
                  {
                    icon: Globe2,
                    title: "Flexible routing",
                    copy: "Route tasks by capability, cost, latency, confidence, and business risk.",
                  },
                  {
                    icon: BrainCircuit,
                    title: "Workflow fit",
                    copy: "Choose model capabilities based on what the agent needs to accomplish.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                      <Icon className="size-5 text-cyan-200" />
                      <h2 className="mt-4 font-semibold text-white">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.copy}</p>
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                Provider names are discussed only as implementation options. This
                page does not claim any official partnership or endorsement.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          eyebrow="Safety and control"
          title="Model power should come with clear operating boundaries."
          description="AiVantage designs agents with practical controls that help businesses decide what AI can answer, what it should avoid, and when humans should step in."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {safetyControls.map((control, index) => {
            const Icon = control.icon;
            return (
              <Reveal
                key={control.title}
                delay={index * 0.04}
                className="rounded-lg border border-white/10 bg-[#07101f] p-5"
              >
                <Icon className="size-6 text-cyan-200" />
                <h2 className="mt-5 text-lg font-semibold text-white">{control.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{control.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions about AI model workflows."
            description="The best implementation depends on the workflow, data, channels, integrations, and controls your business needs."
          />
          <div className="mx-auto mt-12 max-w-4xl space-y-3">
            {faqs.map((faq, index) => (
              <Reveal
                key={faq.question}
                delay={index * 0.04}
                className="rounded-lg border border-white/10 bg-[#07101f] p-5"
              >
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-300" />
                  <div>
                    <h2 className="text-lg font-semibold text-white">{faq.question}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#07101f] p-8 text-center shadow-panel sm:p-10">
          <div className="absolute inset-0 hero-mesh opacity-70" />
          <div className="absolute inset-0 signal-grid opacity-25" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              Need help choosing the right model approach?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Share the workflow you want to automate and AiVantage will help
              scope the right model capabilities, controls, and integrations.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton href="/book-demo" size="lg">
                {ctaLabels.bookDemo}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
