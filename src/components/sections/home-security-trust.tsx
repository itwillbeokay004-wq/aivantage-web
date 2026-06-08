import { ClipboardCheck, LockKeyhole, ShieldCheck, UsersRound } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Privacy-minded workflows",
    description: "Approved sources and careful data handling.",
  },
  {
    icon: LockKeyhole,
    title: "Role-based access placeholder",
    description: "Permissions for admins and operators.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit logs placeholder",
    description: "Trace conversations and workflow actions.",
  },
  {
    icon: UsersRound,
    title: "Human handoff",
    description: "Escalate with context and summaries.",
  },
];

export function HomeSecurityTrust() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="container py-16">
        <SectionHeading
          eyebrow="Security and trust"
          title="Automation with control."
          description="Privacy, oversight, and human handoff built in."
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
