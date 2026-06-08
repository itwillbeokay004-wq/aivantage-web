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

import type { Locale } from "@/lib/locale";

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
  tagline: "Tu ventaja con IA, construida para negocios reales.",
  description:
    "AiVantage ayuda a las empresas a diseñar, desplegar y gestionar agentes de IA para soporte, ventas, operaciones y experiencia del cliente.",
} satisfies SiteConfig;

export const siteConfigByLocale = {
  es: siteConfig,
  en: {
    ...siteConfig,
    tagline: "Your AI advantage, built for real business.",
    description:
      "AiVantage helps businesses design, deploy, and manage AI agents for support, sales, operations, and customer engagement.",
  },
} satisfies Record<Locale, SiteConfig>;

export const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Customers" },
  { href: "/pricing", label: "Pricing" },
] satisfies readonly NavItem[];

export const navLinksByLocale = {
  es: [
    { href: "/platform", label: "Plataforma" },
    { href: "/solutions", label: "Clientes" },
    { href: "/pricing", label: "Precios" },
  ],
  en: navLinks,
} satisfies Record<Locale, readonly NavItem[]>;

export const resourceNavLinks = [
  { href: "/resources", label: "Resources" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/ai-models", label: "AI Models" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] satisfies readonly NavItem[];

export const resourceNavLinksByLocale = {
  es: [
    { href: "/resources", label: "Recursos" },
    { href: "/use-cases", label: "Casos de uso" },
    { href: "/ai-models", label: "Modelos de IA" },
    { href: "/about", label: "Sobre nosotros" },
    { href: "/contact", label: "Contacto" },
  ],
  en: resourceNavLinks,
} satisfies Record<Locale, readonly NavItem[]>;

export const ctaLabels = {
  bookDemo: "Book a Demo",
  startFreeConsultation: "Start Free Consultation",
} satisfies CtaLabels;

export const ctaLabelsByLocale = {
  es: {
    bookDemo: "Reservar demo",
    startFreeConsultation: "Consulta gratuita",
  },
  en: ctaLabels,
} satisfies Record<Locale, CtaLabels>;

export const platformFeatures = [
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
] satisfies readonly IconContentItem[];

export const useCases = [
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
] satisfies readonly UseCase[];

export const industries = [
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
] satisfies readonly Industry[];

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
      { href: "/about", label: "About" },
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
        { href: "/about", label: "Sobre nosotros" },
        { href: "/solutions", label: "Soluciones" },
        { href: "/resources", label: "Recursos" },
        { href: "/contact", label: "Contacto" },
        { href: "/book-demo", label: "Reservar demo" },
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
