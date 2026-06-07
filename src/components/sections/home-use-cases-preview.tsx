import { ArrowRight } from "lucide-react";

import { TrackedLink } from "@/components/analytics";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useCases } from "@/data/site";

export function HomeUseCasesPreview() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="container py-16">
        <SectionHeading
          eyebrow="Use cases"
          title="Launch agents around workflows with clear business value."
          description="Start with one practical use case, measure it, then expand automation where it earns trust."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.slice(0, 6).map((useCase, index) => (
            <Reveal
              key={useCase.title}
              delay={index * 0.04}
              className="rounded-lg border border-white/10 bg-[#07101f] p-5"
            >
              <p className="text-sm font-semibold text-cyan-200">{useCase.title}</p>
              <p className="mt-4 text-3xl font-semibold text-white">{useCase.metric}</p>
              <p className="mt-1 text-sm text-slate-400">{useCase.label}</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">{useCase.description}</p>
              <TrackedLink
                href="/use-cases"
                eventProperties={{ location: "home_use_cases_preview", label: useCase.title }}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
              >
                View use case
                <ArrowRight className="size-4" aria-hidden="true" />
              </TrackedLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
