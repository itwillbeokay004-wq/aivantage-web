import { ClipboardCheck, LockKeyhole, ShieldCheck, UsersRound } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Privacy-minded workflows",
    description:
      "Agents are designed around approved data sources, clear escalation rules, and careful information handling.",
  },
  {
    icon: LockKeyhole,
    title: "Role-based access placeholder",
    description:
      "Plan different permissions for admins, operators, reviewers, and front-line users as the platform grows.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit logs placeholder",
    description:
      "Prepare for traceable activity records across conversations, workflow actions, and handoff decisions.",
  },
  {
    icon: UsersRound,
    title: "Human handoff",
    description:
      "Move sensitive or complex cases to the right person with context, summaries, and recommended next steps.",
  },
];

export function HomeSecurityTrust() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="container py-16">
        <SectionHeading
          eyebrow="Security and trust"
          title="Built for controlled automation, not unattended guesswork."
          description="AiVantage workflows are shaped around privacy, oversight, and clear human escalation paths."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="rounded-lg border border-white/10 bg-[#07101f] p-5"
              >
                <Icon className="size-6 text-cyan-200" />
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
