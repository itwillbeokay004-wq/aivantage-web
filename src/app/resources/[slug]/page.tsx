import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { TrackedLink } from "@/components/analytics";
import { Button } from "@/components/ui/button";
import { resourceArticles, getResourceArticle } from "@/data/resources";
import { siteConfig } from "@/data/site";

type ResourceArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return resourceArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ResourceArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceArticle(slug);

  if (!article) {
    return {
      title: "Resource Not Found",
    };
  }

  const url = `${siteConfig.url}/resources/${article.slug}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      siteName: siteConfig.name,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ResourceArticlePage({
  params,
}: ResourceArticlePageProps) {
  const { slug } = await params;
  const article = getResourceArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_34%)]" />
        <div className="absolute inset-0 -z-10 bg-grid-soft opacity-35" />
        <div className="container py-16 sm:py-20 lg:py-24">
          <Reveal className="max-w-4xl">
            <Button asChild variant="ghost" className="mb-8 px-0">
              <Link href="/resources">
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back to resources
              </Link>
            </Button>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                <Clock className="size-4" aria-hidden="true" />
                {article.readingTime}
              </span>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {article.excerpt}
            </p>
            <p className="mt-6 w-fit rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-400">
              Placeholder article powered by local static data.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Reveal className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="space-y-6">
              {article.body.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] p-5">
              <h2 className="text-xl font-semibold text-white">
                Placeholder note
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                This page is ready for a longer article, MDX content, or a CMS
                migration later. For now, it gives every starter resource a
                crawlable URL and consistent reading experience.
              </p>
            </div>
          </Reveal>

          <aside className="space-y-5">
            <Reveal className="rounded-2xl border border-white/10 bg-[#050914]/80 p-6">
              <h2 className="text-lg font-semibold text-white">Key takeaways</h2>
              <ul className="mt-5 space-y-3">
                {article.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-emerald-300"
                      aria-hidden="true"
                    />
                    {takeaway}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.06} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-lg font-semibold text-white">
                Want help applying this?
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                AiVantage can map a practical first AI agent around your
                channels, knowledge, and handoff rules.
              </p>
              <Button asChild className="mt-5 w-full">
                <TrackedLink
                  href="/book-demo"
                  eventProperties={{
                    location: "resource_article_sidebar",
                    label: article.slug,
                  }}
                >
                  Book a Demo
                  <ArrowRight className="size-4" aria-hidden="true" />
                </TrackedLink>
              </Button>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
