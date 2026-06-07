export type ResourceArticle = {
  title: string;
  category: string;
  readingTime: string;
  excerpt: string;
  slug: string;
  body: readonly string[];
  takeaways: readonly string[];
};

export const resourceArticles = [
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
      "Lead capture works best when the assistant balances helpful answers with smart qualification. It should ask for only the details that help your team act: contact information, service need, timing, location, budget range, or appointment preferences.",
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
    category: "Real Estate",
    readingTime: "7 min read",
    slug: "using-ai-in-property-management",
    excerpt:
      "Practical ways property managers can use AI agents for leasing questions, maintenance intake, resident FAQs, and follow-up.",
    body: [
      "Property management teams handle a steady stream of repeated questions across leasing, maintenance, resident communication, and operations. AI agents can reduce back-and-forth by collecting the right context up front.",
      "For leasing, an assistant can answer approved questions about availability, criteria, amenities, tours, and next steps. For maintenance, it can gather location, urgency, photos or notes, access details, and route the request by priority.",
      "The key is to keep source information fresh and define escalation paths. Property workflows often involve policies, timing, and exceptions, so the agent should know when to stop and ask for human review.",
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
] satisfies readonly ResourceArticle[];

export function getResourceArticle(slug: string) {
  return resourceArticles.find((article) => article.slug === slug);
}
