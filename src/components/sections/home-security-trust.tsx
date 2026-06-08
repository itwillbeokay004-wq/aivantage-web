"use client";

import { ClipboardCheck, LockKeyhole, ShieldCheck, UsersRound } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const trustItems = {
  es: [
    {
      icon: ShieldCheck,
      title: "Flujos con privacidad",
      description: "Fuentes aprobadas y manejo cuidadoso de datos.",
    },
    {
      icon: LockKeyhole,
      title: "Acceso por roles",
      description: "Permisos para administradores y operadores.",
    },
    {
      icon: ClipboardCheck,
      title: "Registros de auditoría",
      description: "Trazabilidad de conversaciones y acciones.",
    },
    {
      icon: UsersRound,
      title: "Traspaso humano",
      description: "Escala con contexto y resúmenes.",
    },
  ],
  en: [
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
  ],
} as const;

export function HomeSecurityTrust() {
  const { locale } = useLocale();

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="container py-16">
        <SectionHeading
          eyebrow={locale === "es" ? "Seguridad y confianza" : "Security and trust"}
          title={
            locale === "es"
              ? "Automatización con control."
              : "Automation with control."
          }
          description={
            locale === "es"
              ? "Privacidad, supervisión y traspaso humano integrados."
              : "Privacy, oversight, and human handoff built in."
          }
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustItems[locale].map((item, index) => {
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
