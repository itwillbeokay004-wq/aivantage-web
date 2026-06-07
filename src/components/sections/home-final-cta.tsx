import { CtaButton } from "@/components/ui/cta-button";
import { ctaLabels } from "@/data/site";

export function HomeFinalCta() {
  return (
    <section className="container py-16">
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#07101f] p-8 text-center shadow-panel sm:p-10">
        <div className="absolute inset-0 hero-mesh opacity-70" />
        <div className="absolute inset-0 signal-grid opacity-25" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            Ready to build your AI advantage?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Bring us the workflow you want to improve. We will help map the
            first agent, channels, handoffs, and launch plan.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton href="/book-demo" size="lg">
              {ctaLabels.bookDemo}
            </CtaButton>
            <CtaButton href="/contact" variant="secondary" size="lg" showIcon={false}>
              Contact Us
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
