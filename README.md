# AiVantage Website

Premium SaaS marketing website for AiVantage at `aivantage.es`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn-style UI primitives
- Framer Motion
- lucide-react icons
- React Hook Form and Zod
- Resend email integration for contact and demo requests
- OpenAI-powered AI builder with safe fallback mode

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Set the production site URL in `.env.local` or Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://aivantage.es
```

Analytics is disabled by default. Optional analytics scripts only load when one
or both public analytics environment variables are configured:

```bash
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_POSTHOG_KEY=
```

The full environment template lives in `.env.example`.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Pages

Spanish is the default language at root routes:

- `/`
- `/plataforma`
- `/soluciones`
- `/modelos-ia`
- `/casos-de-uso`
- `/precios`
- `/recursos`
- `/contacto`
- `/reservar-demo`
- `/privacidad`
- `/terminos`

English routes live under `/en`:

- `/en`
- `/en/platform`
- `/en/solutions`
- `/en/ai-models`
- `/en/use-cases`
- `/en/pricing`
- `/en/resources`
- `/en/contact`
- `/en/book-demo`
- `/en/privacy`
- `/en/terms`

## Forms and Email

The contact and demo forms validate with Zod, include a honeypot spam field, and
submit to:

- `POST /api/contact`
- `POST /api/book-demo`

`POST /api/demo` is kept as a compatibility wrapper for older clients.

Both primary routes send a notification email to `CONTACT_TO_EMAIL` and a
confirmation email to the submitted user email through Resend. Add these values
to `.env.local` for local development and to Vercel environment variables for
production:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

Keep `RESEND_API_KEY` server-only. Do not prefix it with `NEXT_PUBLIC_`, do not
render it in client components, and do not commit real keys to source control.

Before production launch, add rate limiting to the API routes. Placeholder
comments are included in both handlers for future hardening.

## AI Builder

The homepage AI builder calls `POST /api/generate-agent`. It validates input,
uses the OpenAI Responses API server-side when configured, and falls back to a
localized keyword recommendation engine when the OpenAI key is missing or an API
call fails.

```bash
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5.5
```

Keep `OPENAI_API_KEY` server-only. Do not prefix it with `NEXT_PUBLIC_`, do not
render it in client components, and do not commit real keys to source control.

Generated recommendations can be handed to the demo form through query params so
the visitor does not need to retype their idea.

## Optional Lead Storage

Form submissions can optionally be stored in Supabase. This is off by default.
To enable it, run `supabase/lead_requests.sql` in Supabase and configure:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Keep `SUPABASE_SERVICE_ROLE_KEY` server-only. If Supabase is not configured, the
forms still work through Resend when email is configured.

## Analytics

Analytics-ready structure lives in `src/components/analytics.tsx`, but tracking
is off unless `NEXT_PUBLIC_GA_ID` or `NEXT_PUBLIC_POSTHOG_KEY` exists.

To enable later, add either or both variables to `.env.local` and Vercel:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxxxxxxxxx
```

The CTA helper is a no-op when analytics is not configured. When enabled, it can
send these event names to Google Analytics and/or PostHog:

- `book_demo_click`
- `contact_click`
- `use_case_click`
- `chat_widget_open`
- `pricing_cta_click`

## Deployment

The project is ready for Vercel:

1. Push the repository to GitHub.
2. Import it in Vercel.
3. Set the production domain to `aivantage.es`.
4. Add the required environment variables from `.env.example`.
5. Verify the sending domain or sender address in Resend before going live.
6. Optionally add Supabase credentials if you want database lead storage.
7. Optionally add `NEXT_PUBLIC_GA_ID` or `NEXT_PUBLIC_POSTHOG_KEY` to enable analytics.

See `OWNER_SETUP.md` for a non-technical launch checklist.

## Design Note

The site uses original AiVantage copy, layout, components, and CSS/HTML visuals.
It does not copy third-party assets, code, illustrations, screenshots, or brand
identity.
