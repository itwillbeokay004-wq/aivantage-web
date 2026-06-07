import { ArrowRight } from "lucide-react";

import { TrackedLink } from "@/components/analytics";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 signal-grid opacity-30" />
      <div className="container relative py-16 sm:py-20 lg:py-24">
        <Reveal className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-normal text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {description}
          </p>
          {(primaryCta || secondaryCta) ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Button asChild size="lg">
                  <TrackedLink
                    href={primaryCta.href}
                    eventProperties={{ location: "page_hero", label: primaryCta.label }}
                  >
                    {primaryCta.label}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </TrackedLink>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button asChild variant="secondary" size="lg">
                  <TrackedLink
                    href={secondaryCta.href}
                    eventProperties={{ location: "page_hero", label: secondaryCta.label }}
                  >
                    {secondaryCta.label}
                  </TrackedLink>
                </Button>
              ) : null}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
