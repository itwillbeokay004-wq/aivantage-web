import { Code2, Mail, MessageSquare, PhoneCall } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const channels = [
  {
    icon: MessageSquare,
    title: "Web chat",
    description: "Answer visitors and capture intent.",
  },
  {
    icon: PhoneCall,
    title: "Voice calls",
    description: "Handle intake and summarize calls.",
  },
  {
    icon: Mail,
    title: "SMS/email follow-up",
    description: "Send reminders and next steps.",
  },
  {
    icon: Code2,
    title: "API integrations",
    description: "Connect CRM, calendar, and helpdesk.",
  },
];

export function HomeOmnichannel() {
  return (
    <section className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Omnichannel"
            title="Support every first touch."
            description="Chat, calls, follow-up, and APIs in one connected flow."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <Reveal
                key={channel.title}
                delay={index * 0.05}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <Icon className="size-6 text-cyan-200" />
                <h3 className="mt-5 text-lg font-semibold text-white">{channel.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{channel.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
