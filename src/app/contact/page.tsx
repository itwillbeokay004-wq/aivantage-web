import { Mail, MapPin, MessageSquare } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();

  return pageMetadata({
    title: locale === "es" ? "Contacto" : "Contact",
    description:
      locale === "es"
        ? "Contacta con AiVantage para hablar de automatización con IA, agentes de IA, voz y flujos personalizados."
        : "Contact AiVantage to discuss AI automation, AI agents, voice workflows, and custom business automation.",
    path: "/contact",
    locale,
  });
}

export default async function ContactPage() {
  const locale = await getRequestLocale();
  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      description: siteConfig.email,
    },
    {
      icon: MessageSquare,
      title: locale === "es" ? "Tiempo de respuesta" : "Response time",
      description:
        locale === "es" ? "En un día hábil" : "Within one business day",
    },
    {
      icon: MapPin,
      title: locale === "es" ? "Cobertura" : "Serving",
      description:
        locale === "es"
          ? "Equipos remote-first en Estados Unidos y Europa"
          : "Remote-first teams across the US and Europe",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={locale === "es" ? "Contacto" : "Contact"}
        title={
          locale === "es"
            ? "Habla con AiVantage sobre tu primer agente de IA."
            : "Talk with AiVantage about your first AI agent."
        }
        description={
          locale === "es"
            ? "Comparte el flujo que quieres mejorar y te ayudaremos a identificar el camino más rápido hacia un lanzamiento útil y controlado."
            : "Share the workflow you want to improve and we will help identify the fastest path to a useful, controlled launch."
        }
      />

      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow={locale === "es" ? "Empieza aquí" : "Start here"}
              title={
                locale === "es"
                  ? "Una nota breve es suficiente."
                  : "A short note is enough."
              }
              description={
                locale === "es"
                  ? "Cuéntanos sobre tu equipo, sistemas, volumen de clientes y dónde el trabajo manual te frena."
                  : "Tell us about your team, systems, customer volume, and where manual work is slowing you down."
              }
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
