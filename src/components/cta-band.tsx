import { ArrowRight } from "lucide-react";

import { TrackedLink } from "@/components/analytics";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title = "Ready to build your AI advantage?",
  description = "Book a working session and we will map the first agent your business should launch.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="container py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <TrackedLink href="/book-demo" eventProperties={{ location: "cta_band" }}>
                Book a Demo
                <ArrowRight className="size-4" />
              </TrackedLink>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <TrackedLink href="/use-cases" eventProperties={{ location: "cta_band" }}>
                See Use Cases
              </TrackedLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
