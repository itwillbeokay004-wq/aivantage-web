import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();

  return pageMetadata({
    title: locale === "es" ? "Política de privacidad" : "Privacy Policy",
    description:
      locale === "es"
        ? "Plantilla en lenguaje claro de la política de privacidad de AiVantage para visitantes, formularios, email, cookies, analítica, servicios externos y retención."
        : "Plain-language AiVantage privacy policy template for website visitors, form submissions, email follow-up, cookies, analytics, third-party services, and data retention.",
    path: "/privacy",
    locale,
  });
}

const privacyContent = {
  es: {
    eyebrow: "Política de privacidad",
    title: "Privacidad en AiVantage.",
    description:
      "Esta política explica cómo AiVantage maneja información de visitantes, potenciales clientes y contactos de negocio.",
    lastUpdated: "Última actualización: 6 de junio de 2026",
    reviewLabel: "Revisión legal requerida",
    legalTemplateNote:
      "Esta página es una plantilla general y debe ser revisada por un profesional legal cualificado antes de usarse en producción.",
    sections: [
      {
        title: "Información recopilada a través de formularios",
        body: [
          "Cuando envías un formulario de contacto, solicitud de demo u otro formulario similar, AiVantage puede recopilar datos como nombre, email profesional, empresa, tamaño de equipo, área de interés, plazo y notas sobre el proceso que quieres discutir.",
          "Evita enviar información personal, financiera, médica, legal o confidencial a través de formularios web salvo que AiVantage lo solicite mediante un proceso seguro apropiado.",
        ],
      },
      {
        title: "Cómo usamos la información",
        body: [
          "AiVantage puede usar la información enviada para responder consultas, entender necesidades, preparar demos, definir oportunidades de automatización con IA, mejorar contenido y mantener registros básicos del negocio.",
          "También podemos usar información agregada o no identificable para entender qué servicios, páginas o recursos son más útiles para visitantes.",
        ],
      },
      {
        title: "Email y seguimiento de contacto",
        body: [
          "Si contactas con AiVantage, solicitas una demo o pides información, podemos usar tu email u otros datos de contacto para responder, agendar una conversación, enviar próximos pasos o hacer seguimiento.",
          "Puedes pedir que AiVantage deje de enviar mensajes no esenciales contactando el email indicado abajo.",
        ],
      },
      {
        title: "Cookies y analítica placeholder",
        body: [
          "Este sitio puede usar cookies, herramientas de analítica o tecnologías similares para entender rendimiento, visitas, fuentes de tráfico e interacciones.",
          "Las herramientas específicas de analítica y cookies deben listarse aquí antes del lanzamiento, junto con cualquier consentimiento u opción de exclusión requerida.",
        ],
      },
      {
        title: "Servicios externos placeholder",
        body: [
          "AiVantage puede usar proveedores externos para hosting, formularios, envío de email, analítica, agenda, CRM e infraestructura de servicios de IA.",
          "Antes de producción, esta sección debe identificar los proveedores reales y describir cómo procesan información por cuenta de AiVantage.",
        ],
      },
      {
        title: "Retención de datos placeholder",
        body: [
          "AiVantage puede conservar datos de contacto, registros de consultas y comunicaciones de proyecto durante el tiempo razonablemente necesario para responder solicitudes, operar el negocio, cumplir obligaciones legales, resolver disputas y mantener registros.",
          "Una versión de producción debe definir periodos o criterios de retención según requisitos reales del negocio, legales y operativos.",
        ],
      },
      {
        title: "Tus opciones",
        body: [
          "Puedes solicitar acceso, corrección o eliminación de información enviada contactando con AiVantage. Las solicitudes se revisarán según la ley aplicable y necesidades legítimas del negocio.",
        ],
      },
      {
        title: "Email de contacto placeholder",
        body: [
          `Las preguntas sobre esta plantilla de privacidad o solicitudes relacionadas pueden enviarse a ${siteConfig.email}. Sustituye este contacto antes de producción si hace falta.`,
        ],
      },
    ],
    closing:
      "Este texto placeholder no es asesoramiento legal. Debe adaptarse a las prácticas reales de datos, proveedores y requisitos legales de AiVantage antes de publicarse.",
  },
  en: {
    eyebrow: "Privacy Policy",
    title: "Privacy at AiVantage.",
    description:
      "This policy explains how AiVantage handles information from website visitors, prospective customers, and business contacts.",
    lastUpdated: "Last updated: June 6, 2026",
    reviewLabel: "Legal Review Required",
    legalTemplateNote:
      "This page is a general template and should be reviewed by a qualified legal professional before production use.",
    sections: [
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
    ],
    closing:
      "This placeholder copy is not legal advice. It should be customized for AiVantage's actual data practices, service providers, and legal requirements before publication.",
  },
} as const;

export default async function PrivacyPage() {
  const locale = await getRequestLocale();
  const content = privacyContent[locale];

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
