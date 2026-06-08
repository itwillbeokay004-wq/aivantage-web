import type { Locale } from "@/lib/i18n";

export type ResourceArticle = {
  title: string;
  category: string;
  readingTime: string;
  excerpt: string;
  slug: string;
  body: readonly string[];
  takeaways: readonly string[];
};

export const resourceArticlesByLocale = {
  es: [
    {
      title: "¿Qué es un agente de IA para pequeñas empresas?",
      category: "IA básica",
      readingTime: "5 min",
      slug: "what-is-an-ai-agent-for-small-businesses",
      excerpt:
        "Una guía simple sobre agentes de IA, cómo se diferencian de chatbots básicos y dónde empezar.",
      body: [
        "Un agente de IA es un asistente de software diseñado para entender una solicitud, usar contexto aprobado del negocio y completar una tarea útil. Para una pequeña empresa, esa tarea puede ser responder una pregunta frecuente, captar un cliente potencial, reservar una cita o enrutar una solicitud.",
        "Los agentes más prácticos empiezan con responsabilidades concretas. En vez de automatizar todo el negocio, se enfocan en procesos repetibles con disparadores claros, respuestas conocidas y una derivación segura cuando una persona debe tomar el control.",
        "Un buen primer agente combina conocimiento confiable, un camino de acción simple y visibilidad del resultado. Eso mantiene el proyecto cerca del valor diario, no de la experimentación abstracta con IA.",
      ],
      takeaways: [
        "Empieza con procesos repetibles de cliente u operaciones.",
        "Usa conocimiento aprobado del negocio.",
        "Define cuándo el agente debe escalar a una persona.",
      ],
    },
    {
      title: "Cómo los chatbots web captan más clientes potenciales",
      category: "Automatización web",
      readingTime: "6 min",
      slug: "how-website-chatbots-capture-more-leads",
      excerpt:
        "Cómo un asistente web convierte visitas anónimas en conversaciones útiles, consultas calificadas y seguimiento más limpio.",
      body: [
        "La mayoría de visitantes se van sin completar un formulario. Un chatbot bien diseñado les da una forma más fácil de preguntar, comparar opciones y compartir lo que necesitan mientras la intención sigue activa.",
        "La captación de clientes potenciales funciona mejor cuando el asistente equilibra respuestas útiles con calificación inteligente. Debe pedir solo los datos que ayudan a actuar: contacto, necesidad, plazo, ubicación, presupuesto o preferencias de cita.",
        "El objetivo no es encerrar al visitante en automatización. Es crear una mejor primera conversación y pasar contexto estructurado a ventas, atención al cliente u operaciones.",
      ],
      takeaways: [
        "Responde antes de pedir datos de contacto.",
        "Captura contexto estructurado para seguimiento.",
        "Enruta conversaciones de alta intención rápidamente.",
      ],
    },
    {
      title: "Agentes de voz con IA para llamadas perdidas",
      category: "Agentes de voz",
      readingTime: "5 min",
      slug: "ai-voice-agents-for-missed-calls",
      excerpt:
        "Por qué las llamadas perdidas son un punto de partida práctico para automatización de voz en negocios de servicio.",
      body: [
        "Las llamadas perdidas suelen ser ingresos perdidos, especialmente para equipos que dependen de citas, consultas, visitas o solicitudes urgentes. Los procesos de voz con IA ayudan a captar intención cuando el equipo está ocupado o fuera de horario.",
        "Un asistente para llamadas perdidas puede responder con seguimiento, recopilar el motivo, identificar urgencia y resumir la solicitud para una persona. En algunos casos también puede sugerir próximos pasos o ayudar a agendar una devolución.",
        "Los despliegues de voz más seguros tienen alcance claro. Recopilan información, responden preguntas aprobadas y derivan cualquier caso sensible, complejo o de alto valor.",
      ],
      takeaways: [
        "Usa voz con IA para recuperar demanda tras llamadas perdidas.",
        "Captura urgencia e intención antes de enrutar.",
        "Mantén casos sensibles en derivación a un humano.",
      ],
    },
    {
      title: "Uso de IA en gestión de propiedades",
      category: "Inmobiliario",
      readingTime: "7 min",
      slug: "using-ai-in-property-management",
      excerpt:
        "Formas prácticas de usar agentes de IA para alquileres, mantenimiento, preguntas frecuentes de residentes y seguimiento.",
      body: [
        "Los equipos de gestión de propiedades reciben preguntas repetidas sobre alquileres, mantenimiento, comunicación con residentes y operaciones. Los agentes de IA reducen ida y vuelta recopilando el contexto correcto desde el inicio.",
        "Para alquileres, un asistente puede responder preguntas aprobadas sobre disponibilidad, criterios, amenidades, tours y próximos pasos. Para mantenimiento, puede recopilar ubicación, urgencia, notas y detalles de acceso.",
        "La clave es mantener la información actualizada y definir rutas de derivación. Estos procesos suelen tener políticas, tiempos y excepciones, así que el agente debe saber cuándo detenerse y pedir revisión humana.",
      ],
      takeaways: [
        "Separa procesos de alquileres, residentes y mantenimiento.",
        "Usa conocimiento aprobado de propiedades y políticas.",
        "Deriva excepciones y urgencias rápido.",
      ],
    },
    {
      title: "Cómo preparar tus preguntas frecuentes para un asistente de IA",
      category: "Base de conocimiento",
      readingTime: "6 min",
      slug: "how-to-prepare-your-faqs-for-an-ai-assistant",
      excerpt:
        "Un marco simple para convertir preguntas frecuentes, políticas y documentos dispersos en material útil para un asistente de IA.",
      body: [
        "Los asistentes de IA son tan útiles como el conocimiento en el que pueden apoyarse. Antes de lanzar, conviene reunir las preguntas frecuentes y separar respuestas aprobadas de información vieja o informal.",
        "Una buena preparación empieza con estructura: agrupar por tema, escribir respuestas directas, incluir excepciones y definir quién mantiene cada respuesta actualizada.",
        "También ayuda definir qué no debe responder el asistente. Mensajes de reserva claros y reglas de derivación protegen la confianza cuando la pregunta queda fuera del conocimiento aprobado.",
      ],
      takeaways: [
        "Agrupa preguntas frecuentes por tema y proceso.",
        "Asigna responsables para respuestas sensibles o cambiantes.",
        "Documenta reglas de respuesta segura y derivación.",
      ],
    },
    {
      title: "¿Cuándo debe la IA derivar a una persona?",
      category: "Gobernanza",
      readingTime: "5 min",
      slug: "when-should-ai-hand-off-to-a-human",
      excerpt:
        "Cómo diseñar reglas de derivación para preguntas sensibles, baja confianza, casos complejos y oportunidades valiosas.",
      body: [
        "La derivación a un humano no es un fallo de automatización. Es uno de los controles que hace que los agentes de IA sean útiles en negocios reales.",
        "Disparadores comunes incluyen baja confianza, conocimiento faltante, datos sensibles, temas legales o médicos, quejas urgentes, riesgo de cancelación u oportunidades de alto valor.",
        "Una buena derivación incluye contexto. El agente debe resumir la solicitud, lo que ya preguntó, detalles relevantes y una siguiente acción recomendada para que la persona no empiece desde cero.",
      ],
      takeaways: [
        "Define criterios de derivación antes del lanzamiento.",
        "Trata la derivación como una función de confianza.",
        "Envía resúmenes para responder más rápido.",
      ],
    },
  ],
  en: [
    {
      title: "What Is an AI Agent for Small Businesses?",
      category: "AI Basics",
      readingTime: "5 min read",
      slug: "what-is-an-ai-agent-for-small-businesses",
      excerpt:
        "A plain-language guide to AI agents, how they differ from simple chatbots, and where small teams can use them first.",
      body: [
        "An AI agent is a software assistant designed to understand a request, use approved business context, and help complete a useful task. For small businesses, that task might be answering a common customer question, capturing a lead, booking an appointment, or routing a request to the right person.",
        "The most practical agents start with narrow responsibilities. Instead of trying to automate an entire business, they focus on repeatable workflows with clear triggers, known answers, and a safe handoff path when a human should take over.",
        "A strong first agent usually has three ingredients: trusted knowledge, a simple action path, and visibility into outcomes. That keeps the project grounded in everyday business value instead of abstract AI experimentation.",
      ],
      takeaways: [
        "Start with repeatable customer or operations workflows.",
        "Ground answers in approved business knowledge.",
        "Define when the agent should escalate to a person.",
      ],
    },
    {
      title: "How Website Chatbots Capture More Leads",
      category: "Website Automation",
      readingTime: "6 min read",
      slug: "how-website-chatbots-capture-more-leads",
      excerpt:
        "How a website assistant can turn anonymous visits into useful conversations, qualified inquiries, and cleaner follow-up.",
      body: [
        "Most website visitors leave without filling out a form. A well-designed chatbot gives them a lower-friction way to ask questions, compare options, and share what they need while their intent is still active.",
        "Lead capture works best when the assistant balances helpful answers with smart qualification. It should ask for only the details that help your team act: contact information, service need, timeline, location, budget range, or appointment preferences.",
        "The goal is not to trap visitors in automation. The goal is to create a better first conversation and pass structured context to sales, support, or operations so follow-up feels fast and relevant.",
      ],
      takeaways: [
        "Answer visitor questions before asking for contact details.",
        "Capture structured lead context for follow-up.",
        "Route high-intent conversations quickly.",
      ],
    },
    {
      title: "AI Voice Agents for Missed Calls",
      category: "Voice Agents",
      readingTime: "5 min read",
      slug: "ai-voice-agents-for-missed-calls",
      excerpt:
        "Why missed-call workflows are a practical starting point for AI voice automation in service-based businesses.",
      body: [
        "Missed calls are often missed revenue, especially for teams that rely on appointments, consultations, tours, or urgent service requests. AI voice workflows can help capture caller intent when your team is busy or after hours.",
        "A missed-call assistant can respond with a follow-up, collect the reason for the call, identify urgency, and summarize the request for a human. In some cases, it can also suggest next steps or help schedule a callback.",
        "The safest voice deployments are clear about scope. They collect information, answer approved questions, and hand off anything sensitive, complex, or high-value to the right person.",
      ],
      takeaways: [
        "Use voice AI to recover demand after missed calls.",
        "Collect urgency and intent before routing.",
        "Keep sensitive cases on a human handoff path.",
      ],
    },
    {
      title: "Using AI in Property Management",
      category: "Property Management",
      readingTime: "7 min read",
      slug: "using-ai-in-property-management",
      excerpt:
        "Practical ways property managers can use AI agents for leasing questions, maintenance intake, resident FAQs, and follow-up.",
      body: [
        "Property management teams handle a steady stream of repeated questions across leasing, maintenance, resident communication, and operations. AI agents can reduce back-and-forth by collecting the right context up front.",
        "For leasing, an assistant can answer approved questions about availability, criteria, amenities, tours, and next steps. For maintenance, it can gather location, urgency, photos or notes, access details, and route the request by priority.",
        "The key is to keep source information fresh and define escalation paths. Property workflows often involve policies, timelines, and exceptions, so the agent should know when to stop and ask for human review.",
      ],
      takeaways: [
        "Separate leasing, resident, and maintenance workflows.",
        "Use approved property and policy knowledge.",
        "Escalate exceptions and urgent issues quickly.",
      ],
    },
    {
      title: "How to Prepare Your FAQs for an AI Assistant",
      category: "Knowledge Base",
      readingTime: "6 min read",
      slug: "how-to-prepare-your-faqs-for-an-ai-assistant",
      excerpt:
        "A simple framework for turning scattered FAQs, policies, and documents into useful source material for an AI assistant.",
      body: [
        "AI assistants are only as useful as the knowledge they can rely on. Before launch, teams should gather the questions customers ask most often and separate approved answers from outdated, unclear, or informal guidance.",
        "Good FAQ preparation starts with structure. Group questions by topic, write direct answers, include exceptions, and identify the owner responsible for keeping each answer current.",
        "It also helps to define what the assistant should not answer. Clear fallback language and escalation rules protect customer trust when a question is outside the approved knowledge base.",
      ],
      takeaways: [
        "Group FAQs by topic and workflow.",
        "Assign owners for sensitive or changing answers.",
        "Document fallback and escalation rules.",
      ],
    },
    {
      title: "When Should AI Hand Off to a Human?",
      category: "Governance",
      readingTime: "5 min read",
      slug: "when-should-ai-hand-off-to-a-human",
      excerpt:
        "How to design human handoff rules for sensitive questions, low-confidence answers, complex cases, and high-value opportunities.",
      body: [
        "Human handoff is not a failure of automation. It is one of the controls that makes AI agents useful in real business settings. The best workflows decide in advance which conversations need a person.",
        "Common handoff triggers include low confidence, missing knowledge, sensitive data, legal or medical concerns, urgent complaints, cancellation risk, or high-value sales opportunities.",
        "A strong handoff includes context. The agent should summarize the customer request, what it already asked, relevant details, and a recommended next step so the human can continue without starting over.",
      ],
      takeaways: [
        "Define handoff triggers before launch.",
        "Treat escalation as a trust feature.",
        "Send summaries so humans can respond faster.",
      ],
    },
  ],
} satisfies Record<Locale, readonly ResourceArticle[]>;

export const resourceArticles = resourceArticlesByLocale.en;

export function getResourceArticle(slug: string, locale: Locale = "en") {
  return resourceArticlesByLocale[locale].find((article) => article.slug === slug);
}
