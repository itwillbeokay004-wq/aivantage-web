import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Plain-language AiVantage terms of service template covering website use, demo and contact requests, no guarantee language, intellectual property, liability, governing law, and contact details.",
  path: "/terms",
});

const legalTemplateNote =
  "This page is a general template and should be reviewed by a qualified legal professional before production use.";

const sections = [
  {
    title: "Website use",
    body: [
      "You may use this website to learn about AiVantage, explore AI automation services, read resources, request information, and contact the team.",
      "You agree not to misuse the website, attempt to disrupt its operation, submit harmful code, scrape content at unreasonable volume, impersonate others, or use the site for unlawful purposes.",
    ],
  },
  {
    title: "Demo and contact requests",
    body: [
      "Submitting a contact form, demo request, or chat message does not create a customer relationship, service agreement, partnership, or obligation for AiVantage to provide services.",
      "Any project scope, pricing, timeline, implementation plan, or support commitment must be agreed in a separate written agreement between AiVantage and the customer.",
    ],
  },
  {
    title: "No guarantee language",
    body: [
      "Website content is provided for general informational purposes. AiVantage does not guarantee that any AI automation workflow, agent, integration, or business outcome described on the website will be available, suitable, error-free, or produce a specific result for every business.",
      "AI systems can make mistakes and should be designed with appropriate review, monitoring, and human handoff processes.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "The AiVantage name, website copy, original design elements, visual system, resource content, and other materials on this website are owned by AiVantage or its licensors unless otherwise stated.",
      "You may not copy, reproduce, distribute, modify, or use these materials for commercial purposes without written permission, except as allowed by applicable law.",
    ],
  },
  {
    title: "Limitation of liability placeholder",
    body: [
      "To the maximum extent permitted by applicable law, AiVantage should not be responsible for indirect, incidental, special, consequential, or punitive damages arising from use of this website or reliance on website content.",
      "A qualified legal professional should review and customize this section for the jurisdictions and services that apply to AiVantage.",
    ],
  },
  {
    title: "Governing law placeholder",
    body: [
      "These website terms should identify the governing law and venue that apply to AiVantage before production use.",
      "Replace this placeholder with jurisdiction-specific language after legal review.",
    ],
  },
  {
    title: "Contact email placeholder",
    body: [
      `Questions about these website terms can be sent to ${siteConfig.email}. Replace this with the correct legal contact before production use if needed.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Service"
        title="Terms for using the AiVantage website."
        description="These terms describe the basic conditions for using this website and contacting AiVantage."
      />
      <section className="container py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <p className="text-sm text-slate-400">Last updated: June 6, 2026</p>
          <div className="rounded-lg border border-amber-300/30 bg-amber-300/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-100">
              Legal Review Required
            </p>
            <p className="mt-3 leading-7 text-amber-50">{legalTemplateNote}</p>
          </div>
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="leading-7 text-slate-400">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
          <p className="text-sm leading-6 text-slate-400">
            This placeholder copy is not legal advice. It should be customized
            for AiVantage&apos;s actual services, contracts, jurisdiction, and
            risk requirements before publication.
          </p>
        </div>
      </section>
    </>
  );
}
