# AiVantage Deployment Guide

This guide covers deploying the AiVantage website to Vercel and connecting the
production domain `aivantage.es`.

## 1. Push Code to GitHub

1. Create a GitHub repository for this project.
2. Commit the project files locally.
3. Push the repository to GitHub.

Do not commit real API keys or production secrets. Keep credentials in local
`.env.local` files and Vercel environment variables only.

## 2. Import the Repository into Vercel

1. Sign in to Vercel.
2. Choose **Add New Project**.
3. Import the GitHub repository.
4. Confirm the framework is detected as **Next.js**.
5. Keep the default build settings unless the project configuration changes.

## 3. Set Environment Variables

In the Vercel project settings, add these environment variables before the first
production deployment:

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

Notes:

- `OPENAI_API_KEY` powers the homepage AI builder. If it is blank, the builder
  still works with fallback recommendations.
- `OPENAI_MODEL` defaults to `gpt-5.5` for the AI builder.
- `RESEND_API_KEY` is required for sending contact and demo emails.
- `CONTACT_TO_EMAIL` is the inbox that receives form submissions.
- `CONTACT_FROM_EMAIL` is the verified sender address used by Resend.
- Supabase variables are optional and only needed if you want database lead
  storage.
- Never prefix server-only secrets like `RESEND_API_KEY` or `OPENAI_API_KEY`
  with `NEXT_PUBLIC_`.

## 4. Deploy

1. Click **Deploy** in Vercel.
2. Wait for the build to complete.
3. Open the generated Vercel preview URL and confirm the site loads.

If deployment fails, check the Vercel build logs first. The local commands to
match production validation are:

```bash
npm run lint
npm run build
```

## 5. Add the Custom Domain

In the Vercel project:

1. Open **Settings**.
2. Go to **Domains**.
3. Add `aivantage.es`.
4. Optionally add `www.aivantage.es`.
5. Choose which domain should be canonical and configure redirects as desired.

Vercel will show the exact DNS records needed for the domain. These may include
records such as `A`, `CNAME`, or other verification records depending on the
domain setup.

## 6. Update DNS

The domain is currently connected to Hostinger, so DNS must be updated in
Hostinger or wherever DNS is actively managed for `aivantage.es`.

Follow the DNS records shown by Vercel exactly. DNS propagation can take time,
but many changes begin resolving within minutes.

### Email DNS Warning

If email is already configured for `aivantage.es`, preserve email-related DNS
records when changing web hosting records. Do not delete or overwrite existing
email records unless you are intentionally changing email providers.

Important records to preserve may include:

- `MX`
- `SPF`
- `DKIM`
- `DMARC`

Changing or removing these records can break sending or receiving email for the
domain.

## 7. Post-Deployment Checklist

After DNS is connected and the Vercel deployment is live, verify:

- Homepage loads at `https://aivantage.es`.
- Contact form submits successfully.
- Book demo form submits successfully.
- Mobile navigation opens, closes, and navigates correctly.
- Sitemap loads at `https://aivantage.es/sitemap.xml`.
- Robots file loads at `https://aivantage.es/robots.txt`.
- SSL certificate is active and the browser shows a secure connection.
- Domain redirects work correctly between apex and `www`, according to the chosen
  canonical domain.
