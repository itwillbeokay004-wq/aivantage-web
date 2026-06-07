import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Plain-language AiVantage privacy policy template for website visitors, form submissions, email follow-up, cookies, analytics, third-party services, and data retention.",
  path: "/privacy",
});

const legalTemplateNote =
  "This page is a general template and should be reviewed by a qualified legal professional before production use.";

const sections = [
  {
    title: "Information collected through forms",
    body: [
      "When you submit a contact form, demo request, or similar website form, AiVantage may collect details such as your name, business email, company, team size, area of interest, timeline, and notes about the workflow you want to discuss.",
      "Please avoid submitting sensitive personal, financial, medical, legal, or confidential business information through website forms unless AiVantage specifically asks for it through an appropriate secure process.",
    ],
  },
  {
    title: "How we use information",
    body: [
      "AiVantage may use submitted information to respond to inquiries, understand your business needs, prepare demo conversations, scope AI automation opportunities, improve website content, and maintain basic business records.",
      "We may also use aggregated or non-identifying information to understand which services, pages, or resources are most useful to visitors.",
    ],
  },
  {
    title: "Email and contact follow-up",
    body: [
      "If you contact AiVantage, request a demo, or ask for information, we may use your email address or other contact details to reply, schedule a conversation, send relevant next steps, or follow up about your request.",
      "You can ask AiVantage to stop non-essential follow-up messages by contacting the email address listed below.",
    ],
  },
  {
    title: "Cookies and analytics placeholder",
    body: [
      "This website may use cookies, analytics tools, or similar technologies to understand website performance, page visits, traffic sources, and user interactions.",
      "Specific analytics and cookie tools should be listed here before production launch, along with any required consent or opt-out details.",
    ],
  },
  {
    title: "Third-party service placeholders",
    body: [
      "AiVantage may use third-party providers for website hosting, form handling, email delivery, analytics, scheduling, customer relationship management, and AI service infrastructure.",
      "Before production use, this section should identify the actual providers in use and describe how they process information on behalf of AiVantage.",
    ],
  },
  {
    title: "Data retention placeholder",
    body: [
      "AiVantage may retain business contact details, inquiry records, and project communications for as long as reasonably needed to respond to requests, support business operations, comply with legal obligations, resolve disputes, and maintain records.",
      "A production version of this policy should define retention periods or criteria based on actual business, legal, and operational requirements.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You may request access, correction, or deletion of information you have submitted by contacting AiVantage. Requests will be reviewed and handled in accordance with applicable law and legitimate business needs.",
    ],
  },
  {
    title: "Contact email placeholder",
    body: [
      `Questions about this privacy template or privacy-related requests can be sent to ${siteConfig.email}. Replace this with the correct privacy contact before production use if needed.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy at AiVantage."
        description="This policy explains how AiVantage handles information from website visitors, prospective customers, and business contacts."
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
            for AiVantage&apos;s actual data practices, service providers, and
            legal requirements before publication.
          </p>
        </div>
      </section>
    </>
  );
}
