import type { Locale } from "@/lib/i18n";
import type { ContactFormValues, DemoFormValues } from "@/lib/schemas";

type LeadType = "contact" | "demo";

type LeadRecord = {
  type: LeadType;
  locale: Locale;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  industry?: string;
  automation_goal?: string;
  preferred_contact_method?: string;
  preferred_date_time?: string;
  source_idea?: string;
  generated_agent_name?: string;
  metadata?: Record<string, unknown>;
};

export function isLeadStorageConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}

export async function storeContactLead(data: ContactFormValues) {
  return storeLead({
    type: "contact",
    locale: data.locale,
    name: data.name,
    email: data.email,
    phone: data.phone,
    company: data.company,
    automation_goal: data.message,
  });
}

export async function storeDemoLead(data: DemoFormValues) {
  return storeLead({
    type: "demo",
    locale: data.locale,
    name: data.name,
    email: data.email,
    phone: data.phone,
    company: data.company,
    website: data.businessWebsite,
    industry: data.industry,
    automation_goal: data.automationGoal,
    preferred_contact_method: data.preferredContactMethod,
    preferred_date_time: data.preferredDateTime,
    source_idea: data.sourceIdea,
    generated_agent_name: data.generatedAgentName,
  });
}

async function storeLead(record: LeadRecord) {
  if (!isLeadStorageConfigured()) {
    return { stored: false, reason: "not_configured" as const };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return { stored: false, reason: "not_configured" as const };
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/lead_requests`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      type: record.type,
      locale: record.locale,
      name: record.name,
      email: record.email,
      phone: emptyToNull(record.phone),
      company: emptyToNull(record.company),
      website: emptyToNull(record.website),
      industry: emptyToNull(record.industry),
      automation_goal: emptyToNull(record.automation_goal),
      preferred_contact_method: emptyToNull(record.preferred_contact_method),
      preferred_date_time: emptyToNull(record.preferred_date_time),
      source_idea: emptyToNull(record.source_idea),
      generated_agent_name: emptyToNull(record.generated_agent_name),
      status: "new",
      metadata: record.metadata ?? {},
    }),
  });

  if (!response.ok) {
    throw new Error(`Supabase lead storage failed with status ${response.status}.`);
  }

  return { stored: true as const };
}

function emptyToNull(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}
