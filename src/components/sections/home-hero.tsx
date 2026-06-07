import { HomeProductMockup } from "@/components/sections/home-product-mockup";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/reveal";
import { ctaLabels } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 signal-grid opacity-30" />
      <div className="container relative py-20 sm:py-24 lg:py-28">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold text-cyan-200">
            AI automation for modern service teams
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-normal text-white sm:text-6xl">
            Launch AI agents for support, sales, and operations.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            AiVantage designs and deploys custom AI agents that answer
            questions, capture leads, book appointments, and automate everyday
            workflows.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton href="/book-demo" size="lg">
              {ctaLabels.bookDemo}
            </CtaButton>
            <CtaButton href="/use-cases" variant="secondary" size="lg" showIcon={false}>
              See Use Cases
            </CtaButton>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="mt-14">
          <HomeProductMockup />
        </Reveal>
      </div>
    </section>
  );
}
