import { Mail, MapPin, MessageSquare } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact AiVantage to discuss AI automation, AI agents, voice workflows, and custom business automation.",
  path: "/contact",
});

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    description: siteConfig.email,
  },
  {
    icon: MessageSquare,
    title: "Response time",
    description: "Within one business day",
  },
  {
    icon: MapPin,
    title: "Serving",
    description: "Remote-first teams across the US and Europe",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk with AiVantage about your first AI agent."
        description="Share the workflow you want to improve and we will help identify the fastest path to a useful, controlled launch."
      />

      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Start here"
              title="A short note is enough."
              description="Tell us about your team, systems, customer volume, and where manual work is slowing you down."
            />
            <div className="mt-8 grid gap-3">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Reveal
                    key={card.title}
                    className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4"
                  >
                    <Icon className="mt-1 size-5 shrink-0 text-cyan-200" />
                    <div>
                      <h2 className="font-semibold text-white">{card.title}</h2>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {card.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
