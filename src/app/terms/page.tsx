import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();

  return pageMetadata({
    title: locale === "es" ? "Términos de servicio" : "Terms of Service",
    description:
      locale === "es"
        ? "Plantilla en lenguaje claro de términos de AiVantage para uso del sitio, solicitudes de demo, propiedad intelectual, responsabilidad, ley aplicable y contacto."
        : "Plain-language AiVantage terms of service template covering website use, demo and contact requests, no guarantee language, intellectual property, liability, governing law, and contact details.",
    path: "/terms",
    locale,
  });
}

const termsContent = {
  es: {
    eyebrow: "Términos de servicio",
    title: "Términos para usar el sitio de AiVantage.",
    description:
      "Estos términos describen las condiciones básicas para usar este sitio y contactar con AiVantage.",
    lastUpdated: "Última actualización: 6 de junio de 2026",
    reviewLabel: "Revisión legal requerida",
    legalTemplateNote:
      "Esta página es una plantilla general y debe ser revisada por un profesional legal cualificado antes de usarse en producción.",
    sections: [
      {
        title: "Uso del sitio web",
        body: [
          "Puedes usar este sitio para conocer AiVantage, explorar servicios de automatización con IA, leer recursos, solicitar información y contactar al equipo.",
          "Aceptas no abusar del sitio, intentar interrumpir su operación, enviar código dañino, extraer contenido en volumen irrazonable, suplantar identidades o usar el sitio para fines ilícitos.",
        ],
      },
      {
        title: "Solicitudes de demo y contacto",
        body: [
          "Enviar un formulario, solicitud de demo o mensaje de chat no crea una relación de cliente, acuerdo de servicio, alianza ni obligación de AiVantage de prestar servicios.",
          "Cualquier alcance, precio, plazo, plan de implementación o compromiso de acompañamiento debe acordarse en un contrato escrito separado entre AiVantage y el cliente.",
        ],
      },
      {
        title: "Sin garantías",
        body: [
          "El contenido del sitio se ofrece con fines informativos generales. AiVantage no garantiza que cualquier proceso, agente, integración o resultado descrito esté disponible, sea adecuado, esté libre de errores o produzca un resultado específico para cada negocio.",
          "Los sistemas de IA pueden cometer errores y deben diseñarse con revisión, monitoreo y derivaciones a personas apropiadas.",
        ],
      },
      {
        title: "Propiedad intelectual",
        body: [
          "El nombre AiVantage, copy del sitio, elementos originales de diseño, sistema visual, recursos y otros materiales del sitio pertenecen a AiVantage o sus licenciantes salvo que se indique lo contrario.",
          "No puedes copiar, reproducir, distribuir, modificar o usar estos materiales con fines comerciales sin permiso escrito, salvo lo permitido por la ley aplicable.",
        ],
      },
      {
        title: "Limitación de responsabilidad placeholder",
        body: [
          "Hasta el máximo permitido por la ley aplicable, AiVantage no debería ser responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos derivados del uso del sitio o confianza en su contenido.",
          "Un profesional legal cualificado debe revisar y adaptar esta sección a las jurisdicciones y servicios aplicables.",
        ],
      },
      {
        title: "Ley aplicable placeholder",
        body: [
          "Estos términos deben identificar la ley aplicable y jurisdicción correspondiente a AiVantage antes de producción.",
          "Sustituye este placeholder por lenguaje específico de jurisdicción tras revisión legal.",
        ],
      },
      {
        title: "Email de contacto placeholder",
        body: [
          `Las preguntas sobre estos términos pueden enviarse a ${siteConfig.email}. Sustituye este contacto antes de producción si hace falta.`,
        ],
      },
    ],
    closing:
      "Este texto placeholder no es asesoramiento legal. Debe adaptarse a los servicios, contratos, jurisdicción y requisitos de riesgo reales de AiVantage antes de publicarse.",
  },
  en: {
    eyebrow: "Terms of Service",
    title: "Terms for using the AiVantage website.",
    description:
      "These terms describe the basic conditions for using this website and contacting AiVantage.",
    lastUpdated: "Last updated: June 6, 2026",
    reviewLabel: "Legal Review Required",
    legalTemplateNote:
      "This page is a general template and should be reviewed by a qualified legal professional before production use.",
    sections: [
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
    ],
    closing:
      "This placeholder copy is not legal advice. It should be customized for AiVantage's actual services, contracts, jurisdiction, and risk requirements before publication.",
  },
} as const;

export default async function TermsPage() {
  const locale = await getRequestLocale();
  const content = termsContent[locale];

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />
      <section className="container py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <p className="text-sm text-slate-400">{content.lastUpdated}</p>
          <div className="rounded-lg border border-amber-300/30 bg-amber-300/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-100">
              {content.reviewLabel}
            </p>
            <p className="mt-3 leading-7 text-amber-50">
              {content.legalTemplateNote}
            </p>
          </div>
          {content.sections.map((section) => (
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
          <p className="text-sm leading-6 text-slate-400">{content.closing}</p>
        </div>
      </section>
    </>
  );
}
