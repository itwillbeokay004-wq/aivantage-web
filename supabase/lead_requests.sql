create extension if not exists "pgcrypto";

create table if not exists public.lead_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  type text not null check (type in ('contact', 'demo')),
  locale text not null check (locale in ('es', 'en')),
  name text not null,
  email text not null,
  phone text,
  company text,
  website text,
  industry text,
  automation_goal text,
  preferred_contact_method text,
  preferred_date_time text,
  source_idea text,
  generated_agent_name text,
  status text not null default 'new',
  metadata jsonb not null default '{}'::jsonb
);

create index if not exists lead_requests_created_at_idx on public.lead_requests (created_at desc);
create index if not exists lead_requests_type_status_idx on public.lead_requests (type, status);

alter table public.lead_requests enable row level security;

-- No public policies are required for the website API path.
-- The Next.js API writes with SUPABASE_SERVICE_ROLE_KEY server-side only.
