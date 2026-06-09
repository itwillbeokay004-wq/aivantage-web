import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  HelpCircle,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { TrackedLink } from "@/components/analytics";
import { Reveal } from "@/components/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ctaLabelsByLocale } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { getRequestLocale } from "@/lib/server-locale";
import { cn } from "@/lib/utils";

export async function generateMetadata() {
  const locale = await getRequestLocale();

  return pageMetadata({
    title: locale === "es" ? "Precios" : "Pricing",
    description:
      locale === "es"
        ? "Precios personalizados de AiVantage para automatización con IA, asistentes web, agentes de voz, integraciones, analítica y gobernanza."
        : "Custom AiVantage pricing for AI automation, website assistants, voice agents, integrations, analytics, governance, and ongoing support.",
    path: "/pricing",
    locale,
  });
}

const pricingTiers = {
  es: [
    {
      name: "Starter",
      eyebrow: "Consulta inicial",
      description: "Para pequeñas empresas probando automatización con IA.",
      icon: Sparkles,
      cta: "Consulta gratuita",
      href: "/contact",
      featured: false,
      features: [
        "Asistente IA para web",
        "Base de conocimiento básica",
        "Captación de clientes potenciales",
        "Informe mensual",
      ],
    },
    {
      name: "Growth",
      eyebrow: "Alcance personalizado",
      description: "Para equipos que automatizan atención al cliente y ventas.",
      icon: Layers3,
      cta: "Reservar demo",
      href: "/book-demo",
      featured: true,
      features: [
        "Todo en Starter",
        "Procesos personalizados",
        "Integraciones CRM/calendario",
        "Derivación a un humano",
        "Opción de agente de voz",
      ],
    },
    {
      name: "Enterprise",
      eyebrow: "Acuerdo personalizado",
      description: "Para seguridad avanzada, escala e integraciones.",
      icon: ShieldCheck,
      cta: "Contactar ventas",
      href: "/contact",
      featured: false,
      features: [
        "Todo en Growth",
        "Múltiples agentes",
        "APIs personalizadas",
        "Analítica avanzada",
        "Controles de gobernanza",
        "Acompañamiento prioritario",
      ],
    },
  ],
  en: [
    {
      name: "Starter",
      eyebrow: "Starting consultation",
      description: "For small businesses testing AI automation.",
      icon: Sparkles,
      cta: "Start Free Consultation",
      href: "/contact",
      featured: false,
      features: [
        "Website AI assistant",
        "Basic knowledge base",
        "Lead capture",
        "Monthly reporting",
      ],
    },
    {
      name: "Growth",
      eyebrow: "Custom scope",
      description: "For teams automating support and sales.",
      icon: Layers3,
      cta: "Book a Demo",
      href: "/book-demo",
      featured: true,
      features: [
        "Everything in Starter",
        "Custom workflows",
        "CRM/calendar integrations",
        "Human handoff",
        "Voice agent option",
      ],
    },
    {
      name: "Enterprise",
      eyebrow: "Custom agreement",
      description: "For advanced security, scale, and integrations.",
      icon: ShieldCheck,
      cta: "Contact Sales",
      href: "/contact",
      featured: false,
      features: [
        "Everything in Growth",
        "Multiple agents",
        "Custom APIs",
        "Advanced analytics",
        "Governance controls",
        "Priority support",
      ],
    },
  ],
} as const;

const pricingPrinciples = {
  es: [
    "Sin precio fijo antes del descubrimiento",
    "Alcance basado en canales, sistemas y complejidad operativa",
    "Pensado para lanzar algo útil, no una herramienta que nadie usa",
    "Acompañamiento continuo disponible después del despliegue",
  ],
  en: [
    "No fixed package pricing before discovery",
    "Scoped around channels, systems, and workflow complexity",
    "Built for a practical launch path, not shelfware",
    "Ongoing support available after deployment",
  ],
} as const;

const faqs = {
  es: [
    {
      question: "¿Cuánto tarda la configuración?",
      answer:
        "Un piloto enfocado puede lanzarse en semanas, según contenido, integraciones y revisión.",
    },
    {
      question: "¿AiVantage puede trabajar con mi web actual?",
      answer:
        "Sí. Podemos definir un asistente embebible, derivaciones desde formularios, eventos de analítica o integraciones personalizadas.",
    },
    {
      question: "¿Necesito equipo técnico?",
      answer:
        "No necesitas un equipo de IA dedicado. Guiamos el descubrimiento, la configuración, las pruebas y el lanzamiento.",
    },
    {
      question: "¿Puede responder llamadas?",
      answer:
        "Sí. Los agentes de voz pueden gestionar recepción de llamadas, llamadas perdidas, preguntas frecuentes y resúmenes.",
    },
    {
      question: "¿Puede integrarse con mi CRM?",
      answer:
        "Sí. El alcance CRM puede incluir captación de clientes potenciales, notas, citas, derivaciones e informes.",
    },
    {
      question: "¿Hay acompañamiento continuo?",
      answer:
        "Sí. El acompañamiento puede incluir seguimiento, informes, actualizaciones, mejoras y revisión de calidad.",
    },
  ],
  en: [
    {
      question: "How long does setup take?",
      answer:
        "A focused pilot can often launch in weeks, depending on content, integrations, and review needs.",
    },
    {
      question: "Can AiVantage work with my current website?",
      answer:
        "Yes. We can scope an embeddable assistant, form handoffs, analytics events, or custom integrations.",
    },
    {
      question: "Do I need technical staff?",
      answer:
        "No dedicated AI team is required. We guide discovery, setup, testing, and launch.",
    },
    {
      question: "Can it answer calls?",
      answer:
        "Yes. Voice workflows can handle intake, missed-call follow-up, FAQs, and summaries.",
    },
    {
      question: "Can it integrate with my CRM?",
      answer:
        "Yes. CRM scope can include lead capture, notes, appointments, handoffs, and reporting.",
    },
    {
      question: "Is there ongoing support?",
      answer:
        "Yes. Support can include monitoring, reporting, updates, improvements, and quality reviews.",
    },
  ],
} as const;

export default async function PricingPage() {
  const locale = await getRequestLocale();
  const ctaLabels = ctaLabelsByLocale[locale];

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_34%)]" />
        <div className="absolute inset-0 -z-10 bg-grid-soft opacity-35" />
        <div className="container py-20 sm:py-24 lg:py-28">
          <Reveal className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
              <BadgeCheck className="size-3.5" aria-hidden="true" />
              {locale === "es" ? "Precios" : "Pricing"}
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {locale === "es"
                ? "Paquetes personalizados de automatización con IA."
                : "Custom AI automation packages."}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {locale === "es"
                ? "Empezamos por el proceso, los canales y las integraciones que tu negocio necesita."
                : "Start with the workflow, channels, integrations, and support your business needs."}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaButton
                href="/contact"
                size="lg"
                analyticsEvent="pricing_cta_click"
                analyticsLabel="pricing_hero_consultation"
              >
                {ctaLabels.startFreeConsultation}
              </CtaButton>
              <CtaButton
                href="/book-demo"
                variant="secondary"
                size="lg"
                analyticsEvent="pricing_cta_click"
                analyticsLabel="pricing_hero_demo"
              >
                {ctaLabels.bookDemo}
              </CtaButton>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="mx-auto mt-12 grid max-w-5xl gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {pricingPrinciples[locale].map((principle) => (
              <div
                key={principle}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#050914]/70 p-4"
              >
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-emerald-300"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-300">{principle}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="container py-16 sm:py-20">
        <SectionHeading
          eyebrow={locale === "es" ? "Planes" : "Plans"}
          title={
            locale === "es"
              ? "Elige un punto de partida. Definimos el alcance juntos."
              : "Choose a starting point. Scope the exact build together."
          }
          description={
            locale === "es"
              ? "Sin precios fijos todavía. Cada implementación se ajusta al proceso real."
              : "No fixed pricing yet. Every build is scoped around the actual workflow."
          }
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingTiers[locale].map((tier, index) => {
            const Icon = tier.icon;

            return (
              <Reveal
                key={tier.name}
                delay={index * 0.05}
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-2xl border p-6",
                  tier.featured
                    ? "border-cyan-300/40 bg-cyan-300/[0.075] shadow-2xl shadow-cyan-950/30"
                    : "border-white/10 bg-white/[0.04]",
                )}
              >
                {tier.featured ? (
                  <div className="absolute right-5 top-5 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                    {locale === "es" ? "Recomendado" : "Recommended"}
                  </div>
                ) : null}
                <div className="grid size-12 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-cyan-200">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  {tier.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  {tier.name}
                </h2>
                <p className="mt-4 text-4xl font-semibold text-white">
                  {locale === "es" ? "Personalizado" : "Custom"}
                </p>
                <p className="mt-4 leading-7 text-slate-400">
                  {tier.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-slate-300">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-emerald-300"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="mt-8"
                  size="lg"
                  variant={tier.featured ? "default" : "secondary"}
                >
                  <TrackedLink
                    href={tier.href}
                    eventName="pricing_cta_click"
                    eventProperties={{ tier: tier.name, location: "pricing_tier" }}
                  >
                    {tier.cta}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </TrackedLink>
                </Button>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow={locale === "es" ? "Preguntas frecuentes" : "FAQ"}
            title={
              locale === "es"
                ? "Preguntas comunes sobre precio y configuración."
                : "Common pricing and setup questions."
            }
            description={
              locale === "es"
                ? "Una consulta define el camino de lanzamiento más simple y útil."
                : "A consultation defines the simplest useful launch path."
            }
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {faqs[locale].map((faq, index) => (
              <Reveal
                key={faq.question}
                delay={index * 0.035}
                className="rounded-xl border border-white/10 bg-[#050914]/80 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-10 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                    <HelpCircle className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h2>
                    <p className="mt-3 leading-7 text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-20">
        <Reveal className="overflow-hidden rounded-2xl border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(168,85,247,0.12)_46%,rgba(255,255,255,0.04))] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
                {locale === "es" ? "Primero el alcance" : "Scope First"}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                {locale === "es"
                  ? "¿Quieres precio para tu proceso exacto?"
                  : "Want pricing for your exact workflow?"}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                {locale === "es"
                  ? "Comparte tus canales y momentos repetitivos. Mapearemos la mejor primera automatización."
                  : "Share your channels and repetitive customer moments. We’ll map the best first automation."}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <CtaButton
                href="/contact"
                size="lg"
                analyticsEvent="pricing_cta_click"
                analyticsLabel="pricing_final_consultation"
              >
                {ctaLabels.startFreeConsultation}
              </CtaButton>
              <CtaButton
                href="/book-demo"
                variant="secondary"
                size="lg"
                analyticsEvent="pricing_cta_click"
                analyticsLabel="pricing_final_demo"
              >
                {ctaLabels.bookDemo}
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
