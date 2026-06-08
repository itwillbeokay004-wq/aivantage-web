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
CONTACT_TO_EMAIL=ai@aivantage.es
CONTACT_FROM_EMAIL=ai@aivantage.es
```

Keep `RESEND_API_KEY` server-only. Do not prefix it with `NEXT_PUBLIC_`, do not
render it in client components, and do not commit real keys to source control.

Before production launch, add rate limiting to the API routes. Placeholder
comments are included in both handlers for future hardening.

## Optional AI Chat Mode

The site-wide chat widget runs in hardcoded demo mode by default. To enable real
AI responses, configure both the server-only OpenAI key and the public feature
flag:

```bash
OPENAI_API_KEY=
OPENAI_CHAT_MODEL=gpt-4o-mini
NEXT_PUBLIC_AI_CHAT_ENABLED=true
```

Keep `OPENAI_API_KEY` server-only. Do not prefix it with `NEXT_PUBLIC_`, do not
render it in client components, and do not commit real keys to source control.

When enabled, the browser calls `POST /api/chat`, and the server route calls
OpenAI. If the key is missing, the OpenAI request fails, or validation rejects a
message, the widget falls back to safe AiVantage guidance. Message length is
limited, and the API route includes TODO comments for future abuse prevention
such as rate limiting, bot detection, and monitoring.

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
4. Add `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`.
5. Verify the sending domain or sender address in Resend before going live.
6. Optionally add `OPENAI_API_KEY` and set `NEXT_PUBLIC_AI_CHAT_ENABLED=true`.
7. Optionally add `NEXT_PUBLIC_GA_ID` or `NEXT_PUBLIC_POSTHOG_KEY` to enable analytics.

## Design Note

The site uses original AiVantage copy, layout, components, and CSS/HTML visuals.
It does not copy third-party assets, code, illustrations, screenshots, or brand
identity.
