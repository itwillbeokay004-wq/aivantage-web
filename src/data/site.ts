import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Bot,
  BrainCircuit,
  Building2,
  Cable,
  CircleDollarSign,
  DatabaseZap,
  FileCheck2,
  GraduationCap,
  Handshake,
  Headphones,
  Home,
  Landmark,
  LineChart,
  LockKeyhole,
  MessagesSquare,
  Mic2,
  Network,
  Rocket,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

import type { Locale } from "@/lib/i18n";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
const siteUrl = configuredSiteUrl || "https://aivantage.es";

export type SiteConfig = {
  name: string;
  domain: string;
  url: string;
  email: string;
  tagline: string;
  description: string;
};

export type NavItem = {
  href: string;
  label: string;
};

export type CtaLabels = {
  bookDemo: string;
  startFreeConsultation: string;
  seeUseCases: string;
  contactUs: string;
  letsTalk: string;
};

export type IconContentItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type UseCase = {
  title: string;
  metric: string;
  label: string;
  description: string;
};

export type Industry = {
  icon: LucideIcon;
  name: string;
  description: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  featured?: boolean;
  features: readonly string[];
};

export type FooterGroup = {
  title: string;
  links: readonly NavItem[];
};

export type Resource = {
  type: string;
  title: string;
  description: string;
  readTime: string;
};

export type ProofPoint = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export const siteConfig = {
  name: "AiVantage",
  domain: "aivantage.es",
  url: siteUrl,
  email: "hello@aivantage.es",
  tagline: "Tu ventaja con IA, diseñada para negocios reales.",
  description:
    "AiVantage ayuda a empresas a diseñar, implementar y mejorar agentes de IA para atención al cliente, ventas, operaciones y comunicación con clientes.",
} satisfies SiteConfig;

export const siteConfigByLocale = {
  es: siteConfig,
  en: {
    ...siteConfig,
    tagline: "Your AI advantage, built for real business.",
    description:
      "AiVantage helps businesses design, deploy, and improve AI agents for support, sales, operations, and customer engagement.",
  },
} satisfies Record<Locale, SiteConfig>;

export const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
] satisfies readonly NavItem[];

export const navLinksByLocale = {
  es: [
    { href: "/platform", label: "Plataforma" },
    { href: "/solutions", label: "Soluciones" },
    { href: "/pricing", label: "Precios" },
  ],
  en: navLinks,
} satisfies Record<Locale, readonly NavItem[]>;

export const resourceNavLinks = [
  { href: "/resources", label: "Resources" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/ai-models", label: "AI Models" },
  { href: "/contact", label: "Contact" },
] satisfies readonly NavItem[];

export const resourceNavLinksByLocale = {
  es: [
    { href: "/resources", label: "Recursos" },
    { href: "/use-cases", label: "Casos de uso" },
    { href: "/ai-models", label: "Modelos de IA" },
    { href: "/contact", label: "Contacto" },
  ],
  en: resourceNavLinks,
} satisfies Record<Locale, readonly NavItem[]>;

export const navigationItemsByLocale = {
  es: [
    { href: "/platform", label: "Plataforma" },
    { href: "/solutions", label: "Soluciones" },
    { href: "/ai-models", label: "Modelos de IA" },
    { href: "/use-cases", label: "Casos de uso" },
    { href: "/pricing", label: "Precios" },
    { href: "/resources", label: "Recursos" },
    { href: "/contact", label: "Contacto" },
  ],
  en: [
    { href: "/platform", label: "Platform" },
    { href: "/solutions", label: "Solutions" },
    { href: "/ai-models", label: "AI Models" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/pricing", label: "Pricing" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ],
} satisfies Record<Locale, readonly NavItem[]>;

export const navigationItems = navigationItemsByLocale.en;

export const ctaLabels = {
  bookDemo: "Book a Demo",
  startFreeConsultation: "Start Free Consultation",
  seeUseCases: "See Use Cases",
  contactUs: "Contact Us",
  letsTalk: "Let’s Talk",
} satisfies CtaLabels;

export const ctaLabelsByLocale = {
  es: {
    bookDemo: "Reservar una demo",
    startFreeConsultation: "Solicitar consulta",
    seeUseCases: "Ver casos de uso",
    contactUs: "Contactar",
    letsTalk: "Hablemos",
  },
  en: ctaLabels,
} satisfies Record<Locale, CtaLabels>;

export const platformFeaturesByLocale = {
  es: [
    {
      icon: Bot,
      title: "Constructor de agentes de IA",
      description: "Diseña agentes con objetivos, tono, reglas y criterios claros para pasar casos al equipo.",
    },
    {
      icon: BookOpen,
      title: "Base de conocimiento",
      description: "Conecta respuestas a documentación, políticas y contenido aprobado.",
    },
    {
      icon: Mic2,
      title: "Agentes para chat y voz",
      description: "Atiende conversaciones web, llamadas e interacciones internas desde una misma lógica.",
    },
    {
      icon: Workflow,
      title: "Automatización de procesos",
      description: "Crea tareas, agenda citas y activa seguimientos sin trabajo manual repetitivo.",
    },
    {
      icon: Handshake,
      title: "Derivación a un humano",
      description: "Pasa la conversación a una persona del equipo con contexto y resumen.",
    },
    {
      icon: BarChart3,
      title: "Analítica y seguimiento",
      description: "Mide calidad, conversiones, derivaciones y resultados de cada agente.",
    },
    {
      icon: Cable,
      title: "Integraciones",
      description: "Conecta CRM, calendarios, email, herramientas de atención y APIs internas.",
    },
    {
      icon: LockKeyhole,
      title: "Controles de seguridad",
      description: "Define permisos, registros de actividad, respuestas de seguridad y límites operativos.",
    },
  ],
  en: [
    {
      icon: Bot,
      title: "AI Agent Builder",
      description: "Design agents around goals, tone, rules, and handoff paths.",
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Ground answers in approved content, policies, and documents.",
    },
    {
      icon: Mic2,
      title: "Chat + Voice Agents",
      description: "Launch assistants for chat, calls, and internal support.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Create tickets, schedule meetings, and trigger follow-ups.",
    },
    {
      icon: Handshake,
      title: "Human Handoff",
      description: "Route important conversations with context and summaries.",
    },
    {
      icon: BarChart3,
      title: "Analytics + Monitoring",
      description: "Track quality, conversion, handoffs, and outcomes.",
    },
    {
      icon: Cable,
      title: "Integrations",
      description: "Connect CRMs, calendars, helpdesks, and APIs.",
    },
    {
      icon: LockKeyhole,
      title: "Security Controls",
      description: "Add permissions, audit trails, and safe fallbacks.",
    },
  ],
} satisfies Record<Locale, readonly IconContentItem[]>;

export const platformFeatures = platformFeaturesByLocale.en;

export const useCasesByLocale = {
  es: [
    {
      title: "Atención al cliente",
      metric: "24/7",
      label: "primera respuesta",
      description: "Responde preguntas frecuentes, recoge contexto y deriva casos complejos.",
    },
    {
      title: "Cualificación de clientes potenciales",
      metric: "+32%",
      label: "mejor seguimiento",
      description: "Identifica intención, encaje y prioridad antes de pasar la conversación a ventas.",
    },
    {
      title: "Reserva de citas",
      metric: "18 h",
      label: "ahorradas por semana",
      description: "Agenda reuniones y reduce mensajes de ida y vuelta.",
    },
    {
      title: "Asistente para alquileres inmobiliarios",
      metric: "5 min",
      label: "respuesta media",
      description: "Responde sobre inmuebles, cualifica interesados y coordina visitas.",
    },
    {
      title: "Asistente interno de operaciones",
      metric: "3,4x",
      label: "respuestas más rápidas",
      description: "Encuentra políticas, recopila datos y deriva solicitudes internas.",
    },
    {
      title: "Agente de preguntas frecuentes",
      metric: "-28%",
      label: "consultas repetidas",
      description: "Convierte documentación aprobada en respuestas claras y consistentes.",
    },
    {
      title: "Gestión de llamadas",
      metric: "0",
      label: "llamadas sin registrar",
      description: "Recoge intención, detecta urgencia y resume llamadas para el equipo.",
    },
    {
      title: "Automatización de seguimiento",
      metric: "100%",
      label: "próximos pasos claros",
      description: "Envía recordatorios, resúmenes y mensajes de seguimiento a tiempo.",
    },
  ],
  en: [
    {
      title: "Customer Support",
      metric: "24/7",
      label: "first-line coverage",
      description: "Answer FAQs, collect context, and escalate cleanly.",
    },
    {
      title: "Lead Qualification",
      metric: "+32%",
      label: "higher intent capture",
      description: "Qualify fit and route sales-ready prospects.",
    },
    {
      title: "Appointment Booking",
      metric: "18 hrs",
      label: "saved weekly",
      description: "Book meetings and reduce back-and-forth.",
    },
    {
      title: "Real Estate Leasing Assistant",
      metric: "5 min",
      label: "median response",
      description: "Answer listings, qualify renters, and schedule tours.",
    },
    {
      title: "Internal Operations Assistant",
      metric: "3.4x",
      label: "faster answers",
      description: "Find policies, submit requests, and update systems.",
    },
    {
      title: "FAQ + Knowledge Base Agent",
      metric: "-28%",
      label: "repeat questions",
      description: "Turn documents into reliable answers.",
    },
    {
      title: "Call Handling",
      metric: "0 missed",
      label: "after-hours calls",
      description: "Capture intent, route urgency, and summarize calls.",
    },
    {
      title: "Follow-up Automation",
      metric: "100%",
      label: "consistent next steps",
      description: "Send reminders, summaries, and next steps.",
    },
  ],
} satisfies Record<Locale, readonly UseCase[]>;

export const useCases = useCasesByLocale.en;

export const industriesByLocale = {
  es: [
    {
      icon: Building2,
      name: "Inmobiliarias",
      description: "Cualifica compradores, vendedores e interesados en alquiler.",
    },
    {
      icon: Home,
      name: "Gestión de propiedades",
      description: "Gestiona consultas de residentes, alquileres y mantenimiento.",
    },
    {
      icon: Wrench,
      name: "Servicios locales",
      description: "Convierte consultas en citas, presupuestos y trabajos programados.",
    },
    {
      icon: Stethoscope,
      name: "Clínicas y consultas",
      description: "Ayuda con información general, citas y preguntas no clínicas.",
    },
    {
      icon: Scale,
      name: "Despachos legales",
      description: "Organiza consultas iniciales y recopila datos antes de la llamada.",
    },
    {
      icon: ShoppingCart,
      name: "E-commerce",
      description: "Responde sobre productos, pedidos, entregas y devoluciones.",
    },
    {
      icon: GraduationCap,
      name: "Educación",
      description: "Guía procesos de admisión, orientación y atención a estudiantes.",
    },
    {
      icon: Wrench,
      name: "Servicios para el hogar",
      description: "Atiende llamadas y formularios para reservar trabajos con más rapidez.",
    },
  ],
  en: [
    {
      icon: Building2,
      name: "Real Estate",
      description: "Qualify buyers, renters, and sellers.",
    },
    {
      icon: Home,
      name: "Property Management",
      description: "Handle residents, leasing, and maintenance intake.",
    },
    {
      icon: Wrench,
      name: "Local Services",
      description: "Book jobs and capture service details.",
    },
    {
      icon: Stethoscope,
      name: "Healthcare Offices",
      description: "Support intake, scheduling, and non-clinical FAQs.",
    },
    {
      icon: Scale,
      name: "Legal Offices",
      description: "Screen inquiries and organize intake.",
    },
    {
      icon: ShoppingCart,
      name: "E-commerce",
      description: "Answer product, order, and return questions.",
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Guide admissions, support, and scheduling.",
    },
    {
      icon: Wrench,
      name: "Home Services",
      description: "Turn calls and visits into booked jobs.",
    },
  ],
} satisfies Record<Locale, readonly Industry[]>;

export const industries = industriesByLocale.en;

export const pricingPlans = [
  {
    name: "Starter",
    price: "Custom",
    description:
      "For teams launching one focused AI agent around a high-volume conversation or workflow.",
    features: [
      "Discovery and workflow mapping",
      "One chat or voice-ready agent",
      "Knowledge base setup",
      "Basic analytics dashboard",
      "Launch support and refinement",
    ],
  },
  {
    name: "Growth",
    price: "Custom",
    description:
      "For businesses expanding AI automation across multiple teams, channels, or customer journeys.",
    featured: true,
    features: [
      "Multiple agent workflows",
      "CRM, calendar, and helpdesk integrations",
      "Human handoff design",
      "Quality monitoring and reporting",
      "Monthly optimization reviews",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For organizations that need advanced governance, security reviews, and custom operating requirements.",
    features: [
      "Custom architecture planning",
      "Security and data handling controls",
      "Role-based approval workflows",
      "SLA-backed support options",
      "Executive roadmap planning",
    ],
  },
] satisfies readonly PricingTier[];

export const footerGroups = [
  {
    title: "Product",
    links: [
      { href: "/platform", label: "Platform" },
      { href: "/ai-models", label: "AI Models" },
      { href: "/use-cases", label: "Use Cases" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/solutions", label: "Solutions" },
      { href: "/resources", label: "Resources" },
      { href: "/contact", label: "Contact" },
      { href: "/book-demo", label: ctaLabels.bookDemo },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
] satisfies readonly FooterGroup[];

export const footerGroupsByLocale = {
  es: [
    {
      title: "Producto",
      links: [
        { href: "/platform", label: "Plataforma" },
        { href: "/ai-models", label: "Modelos de IA" },
        { href: "/use-cases", label: "Casos de uso" },
        { href: "/pricing", label: "Precios" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { href: "/solutions", label: "Soluciones" },
        { href: "/resources", label: "Recursos" },
        { href: "/contact", label: "Contacto" },
        { href: "/book-demo", label: "Reservar una demo" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Política de privacidad" },
        { href: "/terms", label: "Términos del servicio" },
      ],
    },
  ],
  en: footerGroups,
} satisfies Record<Locale, readonly FooterGroup[]>;

export const operatingLayers = [
  "Capture intent from chat, phone, form, and email",
  "Retrieve approved knowledge and customer context",
  "Reason through policies, actions, and next-best steps",
  "Execute workflows or route to the right human team",
  "Measure outcomes, costs, containment, and quality",
] satisfies readonly string[];

export const solutions = [
  {
    icon: Headphones,
    title: "Support teams",
    description: "Answer faster and escalate with context.",
  },
  {
    icon: CircleDollarSign,
    title: "Sales teams",
    description: "Qualify demand and book meetings.",
  },
  {
    icon: Workflow,
    title: "Operations teams",
    description: "Automate requests, lookups, and updates.",
  },
  {
    icon: Landmark,
    title: "Service businesses",
    description: "Handle calls, forms, bookings, and FAQs.",
  },
] satisfies readonly IconContentItem[];

export const modelStack = [
  {
    icon: BrainCircuit,
    title: "Model routing",
    description: "Route tasks to the right model for the job.",
  },
  {
    icon: DatabaseZap,
    title: "Private retrieval",
    description: "Ground responses in approved business context.",
  },
  {
    icon: FileCheck2,
    title: "Quality evaluation",
    description: "Test behavior before and after launch.",
  },
  {
    icon: Network,
    title: "Tool orchestration",
    description: "Let agents call APIs and trigger workflows.",
  },
] satisfies readonly IconContentItem[];

export const resources = [
  {
    type: "Guide",
    title: "How to choose the first AI agent workflow",
    description:
      "A practical framework for ranking automation opportunities by business value, risk, and speed.",
    readTime: "6 min read",
  },
  {
    type: "Playbook",
    title: "Designing human handoffs that customers trust",
    description:
      "What strong escalation paths include, from context summaries to confidence thresholds.",
    readTime: "8 min read",
  },
  {
    type: "Checklist",
    title: "AI readiness for support and operations leaders",
    description:
      "The data, policies, and systems to prepare before launching production AI agents.",
    readTime: "5 min read",
  },
] satisfies readonly Resource[];

export const proofPoints = [
  { icon: Sparkles, value: "30 days", label: "to first production pilot" },
  { icon: LineChart, value: "Live", label: "agent quality analytics" },
  { icon: ShieldCheck, value: "Built-in", label: "approval and audit controls" },
  { icon: Zap, value: "API-first", label: "workflow automation" },
] satisfies readonly ProofPoint[];

export const processSteps = [
  {
    icon: MessagesSquare,
    title: "Map the conversations",
    description:
      "We identify the highest-volume intents and define where AI should answer, act, or escalate.",
  },
  {
    icon: DatabaseZap,
    title: "Connect the knowledge",
    description:
      "We structure your content, policies, and systems so agents can work from trusted context.",
  },
  {
    icon: Rocket,
    title: "Launch with guardrails",
    description:
      "We ship production agents with evaluation checks, analytics, and human review paths.",
  },
  {
    icon: BarChart3,
    title: "Optimize continuously",
    description:
      "We tune prompts, workflows, retrieval, and routing based on real outcomes and feedback.",
  },
] satisfies readonly IconContentItem[];
