"use client";

import { Code2, Mail, MessageSquare, PhoneCall } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const channels = {
  es: [
    {
      icon: MessageSquare,
      title: "Chat web",
      description: "Responde visitantes y captura intención.",
    },
    {
      icon: PhoneCall,
      title: "Llamadas de voz",
      description: "Gestiona recepción y resume llamadas.",
    },
    {
      icon: Mail,
      title: "Seguimiento SMS/email",
      description: "Envía recordatorios y próximos pasos.",
    },
    {
      icon: Code2,
      title: "Integraciones API",
      description: "Conecta CRM, calendario y helpdesk.",
    },
  ],
  en: [
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
  ],
} as const;

export function HomeOmnichannel() {
  const { locale } = useLocale();

  return (
    <section className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow={locale === "es" ? "Omnicanal" : "Omnichannel"}
            title={
              locale === "es"
                ? "Atiende cada primer contacto."
                : "Support every first touch."
            }
            description={
              locale === "es"
                ? "Chat, llamadas, seguimiento y APIs en un proceso conectado."
                : "Chat, calls, follow-up, and APIs in one connected flow."
            }
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {channels[locale].map((channel, index) => {
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
