# AiVantage Owner Setup Checklist

Use this checklist when you are ready to make the live AiVantage site fully functional on Vercel.

## 1. OpenAI

Needed for the homepage AI builder to generate real recommendations.

- Create or copy an OpenAI API key.
- Add it in Vercel as `OPENAI_API_KEY`.
- Add `OPENAI_MODEL=gpt-5.5` unless you decide to use a different model.

If `OPENAI_API_KEY` is missing, the website still works in demo mode with safe fallback recommendations.

## 2. Resend Email

Needed for contact and demo form notifications.

- Create a Resend API key.
- Add it in Vercel as `RESEND_API_KEY`.
- Add the email that should receive messages as `CONTACT_TO_EMAIL`.
- Add the verified sender email as `CONTACT_FROM_EMAIL`.

Example values:

```bash
CONTACT_TO_EMAIL=ai@aivantage.es
CONTACT_FROM_EMAIL=ai@aivantage.es
```

Do not put real API keys in GitHub.

## 3. Optional Supabase Lead Storage

Only needed if you want contact and demo submissions saved in a database.

- Create a Supabase project.
- Run `supabase/lead_requests.sql` in the Supabase SQL editor.
- Add these Vercel environment variables:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`

Important: `SUPABASE_SERVICE_ROLE_KEY` must stay server-only. Never expose it in browser code.

If Supabase is not configured, forms still work through email when Resend is configured.

## 4. Vercel Environment Variables

Add these in Vercel under Project Settings → Environment Variables:

```bash
NEXT_PUBLIC_SITE_URL=https://aivantage.es
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5.5
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_POSTHOG_KEY=
```

Leave optional variables blank until you use them.

## 5. Domain Notes for aivantage.es

- Add `aivantage.es` in Vercel Domains.
- Add `www.aivantage.es` if you want the www version too.
- Vercel will show the exact DNS records to add.
- If DNS is managed in Hostinger, update the records there.
- Preserve email DNS records if email is already configured: MX, SPF, DKIM, and DMARC.

## 6. Post-Deployment Test Checklist

After deployment, test:

- `https://aivantage.es` loads in Spanish.
- `https://aivantage.es/en` loads in English.
- The homepage AI builder generates a recommendation.
- The builder still works if OpenAI is unavailable.
- “Reservar una demo” opens the demo form with the generated idea.
- Contact form submits in Spanish and English.
- Demo form submits in Spanish and English.
- Email notifications arrive at `CONTACT_TO_EMAIL`.
- Demo confirmation email arrives for the visitor.
- Mobile navigation works.
- Language switcher works.
- `https://aivantage.es/sitemap.xml` loads.
- `https://aivantage.es/robots.txt` loads.
- SSL is active.
