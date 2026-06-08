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
  tagline: "Your AI advantage, built for real business.",
  description:
    "AiVantage helps businesses design, deploy, and manage AI agents for support, sales, operations, and customer engagement.",
} satisfies SiteConfig;

export const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/ai-models", label: "AI Models" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] satisfies readonly NavItem[];

export const ctaLabels = {
  bookDemo: "Book a Demo",
  startFreeConsultation: "Start Free Consultation",
} satisfies CtaLabels;

export const platformFeatures = [
  {
    icon: Bot,
    title: "AI Agent Builder",
    description:
      "Design task-focused agents with goals, tone, escalation logic, and business rules built around your customer journey.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description:
      "Ground every answer in approved content, policies, documents, product details, and service playbooks.",
  },
  {
    icon: Mic2,
    title: "Chat + Voice Agents",
    description:
      "Launch assistants for website chat, phone intake, messaging channels, and internal support desks.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Let agents create tickets, update records, schedule meetings, trigger follow-ups, and move work between systems.",
  },
  {
    icon: Handshake,
    title: "Human Handoff",
    description:
      "Route sensitive or high-value conversations to the right person with summaries, context, and recommended next steps.",
  },
  {
    icon: BarChart3,
    title: "Analytics + Monitoring",
    description:
      "Track containment, conversion, response quality, call outcomes, costs, and the workflows that need tuning.",
  },
  {
    icon: Cable,
    title: "Integrations",
    description:
      "Connect AI agents to CRMs, calendars, helpdesks, property systems, ecommerce tools, and private APIs.",
  },
  {
    icon: LockKeyhole,
    title: "Security Controls",
    description:
      "Use permissions, audit trails, approval gates, data handling rules, and safe fallback paths for production use.",
  },
] satisfies readonly IconContentItem[];

export const useCases = [
  {
    title: "Customer Support",
    metric: "24/7",
    label: "first-line coverage",
    description:
      "Answer common questions, collect context, troubleshoot routine issues, and escalate complex cases with clean notes.",
  },
  {
    title: "Lead Qualification",
    metric: "+32%",
    label: "higher intent capture",
    description:
      "Ask the right questions, score fit, enrich CRM records, and route ready prospects to sales without delay.",
  },
  {
    title: "Appointment Booking",
    metric: "18 hrs",
    label: "saved weekly",
    description:
      "Coordinate availability, book meetings, send reminders, and reduce back-and-forth for teams with busy calendars.",
  },
  {
    title: "Real Estate Leasing Assistant",
    metric: "5 min",
    label: "median response",
    description:
      "Respond to listing inquiries, qualify renters, answer property questions, and schedule tours from one agent flow.",
  },
  {
    title: "Internal Operations Assistant",
    metric: "3.4x",
    label: "faster answers",
    description:
      "Help teams find policies, submit requests, update systems, and complete repeatable internal workflows.",
  },
  {
    title: "FAQ + Knowledge Base Agent",
    metric: "-28%",
    label: "repeat questions",
    description:
      "Turn existing docs into reliable answers that stay aligned with your approved source material.",
  },
  {
    title: "Call Handling",
    metric: "0 missed",
    label: "after-hours calls",
    description:
      "Capture caller intent, gather structured details, route urgent requests, and summarize every conversation.",
  },
  {
    title: "Follow-up Automation",
    metric: "100%",
    label: "consistent next steps",
    description:
      "Send timely check-ins, reminders, summaries, and handoff messages based on customer status and intent.",
  },
] satisfies readonly UseCase[];

export const industries = [
  {
    icon: Building2,
    name: "Real Estate",
    description:
      "Qualify buyers, renters, and sellers while keeping property teams responsive across every listing channel.",
  },
  {
    icon: Home,
    name: "Property Management",
    description:
      "Handle resident questions, maintenance intake, leasing inquiries, renewals, and operational routing.",
  },
  {
    icon: Wrench,
    name: "Local Services",
    description:
      "Book appointments, answer service questions, capture job details, and follow up after every inquiry.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare Offices",
    description:
      "Support front-desk workflows with intake, scheduling guidance, reminders, and non-clinical FAQs.",
  },
  {
    icon: Scale,
    name: "Legal Offices",
    description:
      "Screen inquiries, collect matter details, route prospects, and keep intake organized for review.",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    description:
      "Answer product, shipping, return, and order questions while identifying revenue opportunities.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description:
      "Guide students, parents, and staff through admissions, support, scheduling, and knowledge requests.",
  },
  {
    icon: Wrench,
    name: "Home Services",
    description:
      "Turn calls and website visits into booked jobs with fast intake, estimates, and follow-up workflows.",
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
    description:
      "Give customers fast answers while routing complex issues to people with context already prepared.",
  },
  {
    icon: CircleDollarSign,
    title: "Sales teams",
    description:
      "Qualify demand, answer buyer questions, book meetings, and keep follow-up consistent after first touch.",
  },
  {
    icon: Workflow,
    title: "Operations teams",
    description:
      "Automate repeatable requests, internal lookups, routing, reporting, and system updates.",
  },
  {
    icon: Landmark,
    title: "Service businesses",
    description:
      "Handle calls, forms, bookings, and customer questions with dependable workflows built around daily operations.",
  },
] satisfies readonly IconContentItem[];

export const modelStack = [
  {
    icon: BrainCircuit,
    title: "Model routing",
    description:
      "Route tasks to the right mix of fast, capable, and cost-efficient models based on risk and context.",
  },
  {
    icon: DatabaseZap,
    title: "Private retrieval",
    description:
      "Ground responses in approved content, customer records, product catalogs, and operational data.",
  },
  {
    icon: FileCheck2,
    title: "Quality evaluation",
    description:
      "Test agent behavior with scenario suites, human review loops, and production conversation scoring.",
  },
  {
    icon: Network,
    title: "Tool orchestration",
    description:
      "Let agents call APIs, schedule meetings, update tickets, create quotes, and trigger internal workflows.",
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
