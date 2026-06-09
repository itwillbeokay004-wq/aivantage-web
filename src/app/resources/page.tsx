import { ArrowRight, BookOpen, Clock, Library } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrackedLink } from "@/components/analytics";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { resourceArticlesByLocale } from "@/data/resources";
import { ctaLabelsByLocale } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();

  return pageMetadata({
    title: locale === "es" ? "Recursos" : "Resources",
    description:
      locale === "es"
        ? "Artículos prácticos sobre automatización con IA para empresas, chatbots web, agentes de voz, gestión de propiedades, preguntas frecuentes y derivación a una persona."
        : "Practical AI automation articles for small businesses, website chatbots, AI voice agents, property management, FAQs, and human handoff design.",
    path: "/resources",
    locale,
  });
}

export default async function ResourcesPage() {
  const locale = await getRequestLocale();
  const ctaLabels = ctaLabelsByLocale[locale];
  const resourceArticles = resourceArticlesByLocale[locale];

  return (
    <>
      <PageHero
        eyebrow={locale === "es" ? "Recursos" : "Resources"}
        title={
          locale === "es"
            ? "Guías prácticas de automatización con IA para procesos reales."
            : "Practical AI automation guides for real business workflows."
        }
        description={
          locale === "es"
            ? "Explora artículos sobre agentes de IA, chatbots web, voz, gestión de propiedades, bases de conocimiento y derivación a una persona."
            : "Explore starter articles on AI agents, website chatbots, voice automation, property management, knowledge bases, and human handoff design."
        }
        primaryCta={{ href: "/book-demo", label: ctaLabels.bookDemo }}
        secondaryCta={{
          href: "/contact",
          label: locale === "es" ? "Contactar" : "Contact Us",
        }}
      />

      <section className="container py-16 sm:py-20">
        <SectionHeading
          eyebrow={locale === "es" ? "Biblioteca inicial" : "Starter Library"}
          title={
            locale === "es"
              ? "Seis lecturas prácticas para planear tu primer agente de IA."
              : "Six practical reads to help you plan your first AI agent."
          }
          description={
            locale === "es"
              ? "Sin CMS por ahora: estos recursos usan datos locales y páginas iniciales de contenido."
              : "No CMS yet — these resources are powered by local static data and placeholder article pages that can evolve into a full content system later."
          }
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resourceArticles.map((article, index) => (
            <Reveal
              key={article.slug}
              delay={index * 0.045}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300/30 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="size-3.5" aria-hidden="true" />
                  {article.readingTime}
                </span>
              </div>

              <div className="mt-7 grid size-12 place-items-center rounded-md border border-white/10 bg-cyan-300/10 text-cyan-200">
                <BookOpen className="size-6" aria-hidden="true" />
              </div>
              <h2 className="mt-6 text-xl font-semibold leading-tight text-white">
                {article.title}
              </h2>
              <p className="mt-4 flex-1 leading-7 text-slate-400">
                {article.excerpt}
              </p>
              <p className="mt-5 rounded-md border border-white/10 bg-[#050914]/80 px-3 py-2 text-xs text-slate-400">
                {locale === "es" ? "Ruta" : "Slug"}:{" "}
                {locale === "es" ? "/recursos/" : "/en/resources/"}
                {article.slug}
              </p>
              <Button asChild variant="ghost" className="mt-5 justify-start px-0">
                <TrackedLink href={`/resources/${article.slug}`}>
                  {locale === "es" ? "Leer artículo" : "Read placeholder article"}
                  <ArrowRight
                    className="size-4 transition group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </TrackedLink>
              </Button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container py-16">
          <Reveal className="grid gap-8 rounded-2xl border border-white/10 bg-[#050914]/80 p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="grid size-14 place-items-center rounded-lg bg-cyan-300/10 text-cyan-200">
              <Library className="size-7" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">
                {locale === "es"
                  ? "¿Quieres una guía sobre tu proceso exacto?"
                  : "Want a guide on your exact workflow?"}
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                {locale === "es"
                  ? "Comparte lo que quieres automatizar y AiVantage puede mapear un primer agente útil, sus reglas de derivación y las conexiones necesarias."
                  : "Share what you are trying to automate and AiVantage can help map the first useful agent, handoff rules, and system connections."}
              </p>
            </div>
            <Button asChild size="lg">
              <TrackedLink
                href="/contact"
                eventProperties={{ location: "resources_topic_cta" }}
              >
                {locale === "es" ? "Solicitar tema" : "Request a Topic"}
                <ArrowRight className="size-4" aria-hidden="true" />
              </TrackedLink>
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
