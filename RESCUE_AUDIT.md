# AiVantage Rescue Audit

Date: 2026-06-09

## 1. Current Route Map

### Spanish/default public routes

- `/` → Spanish homepage
- `/plataforma` → re-exports `/platform`
- `/soluciones` → re-exports `/solutions`
- `/modelos-ia` → re-exports `/ai-models`
- `/casos-de-uso` → dedicated Spanish/locale-aware use cases page
- `/precios` → re-exports `/pricing`
- `/recursos` → re-exports `/resources`
- `/recursos/[slug]` → Spanish resource article route
- `/contacto` → re-exports `/contact`
- `/reservar-demo` → re-exports `/book-demo`
- `/privacidad` → re-exports `/privacy`
- `/terminos` → re-exports `/terms`

### English public routes

- `/en` → English homepage
- `/en/platform` → re-exports `/platform`
- `/en/solutions` → re-exports `/solutions`
- `/en/ai-models` → re-exports `/ai-models`
- `/en/use-cases` → re-exports `/use-cases`
- `/en/pricing` → re-exports `/pricing`
- `/en/resources` → re-exports `/resources`
- `/en/resources/[slug]` → English resource article route
- `/en/contact` → re-exports `/contact`
- `/en/book-demo` → re-exports `/book-demo`
- `/en/privacy` → re-exports `/privacy`
- `/en/terms` → re-exports `/terms`

### Legacy English root routes

The app still contains root English route files such as `/platform`, `/solutions`, `/resources`, `/contact`, and `/book-demo`. Middleware redirects these old URLs to `/en/...`, so they are not visible as Spanish pages. The files remain as internal shared implementations.

## 2. Broken or Suspicious Routes

- Root legacy route files exist physically and show in build output even though middleware redirects them. This is acceptable technically but easy to misunderstand.
- `/about` and `/en/about` are redirected by middleware and the unused route implementation has been removed during this rescue pass.
- `/resources/[slug]` exists and middleware redirects it to `/en/resources/[slug]`; it remains mostly as a compatibility shell.
- Sitemap resource generation uses shared internal `/resources/...` paths and relies on localization helpers to map slugs. This works but should be monitored if articles are added.

## 3. Hardcoded English Areas

- Most pages are locale-aware through `getRequestLocale`, but many strings are inline inside page components rather than centralized.
- Some internal component/file names remain English, which is fine for code, but visible UI should stay locale-aware.
- The chat widget, forms, footer, navbar, resource pages, validation messages, and legal pages are currently localized.

## 4. UI/UX Problems

- Global CSS currently forces many dark-card utility classes back to light colors, which fights the intended premium dark SaaS direction.
- The visual system feels split: dark-section components exist, but body, hero, navbar, footer, and global overrides make the site feel light/generic.
- Navigation was recently simplified, but the design still needs stronger hierarchy and a darker premium shell.
- Homepage copy is cleaner than before, but the page should keep a concise hero while restoring enough problem/solution context for clarity.
- Some sections use dark-class names while rendered colors are overridden globally, increasing future design fragility.

## 5. Mobile / Responsive Risks

- Mobile menu opens and is keyboard reachable.
- Spanish text is longer; buttons and cards need flexible wrapping.
- Header is sticky and compact, but the white header does not match the intended premium dark identity.
- Dense grid cards may need better stacking and spacing after the dark redesign.

## 6. Form Risks

- Contact and demo forms use React Hook Form + Zod, include locale in submissions, preserve honeypot protection, and return localized messages.
- Production contact and demo API submissions returned `200 OK` during smoke testing.
- Email depends on valid Resend sender/domain configuration in production.
- Rate limiting is still a TODO comment, not implemented.

## 7. SEO Risks

- Metadata helpers include canonical and hreflang alternates.
- Sitemap and robots exist and return `200` in production.
- JSON-LD exists, but `areaServed` currently says United States while the domain and Spanish-first positioning target Spain/international Spanish markets. This should be broadened or made neutral.
- Unused `/about` route metadata/build output has been removed; middleware still redirects old `/about` URLs safely.

## 8. Build / Lint / Test Status

- `npm run lint` passed before this audit.
- `npm run build` passed before this audit.
- Production smoke checks returned `200` for `/`, `/en`, `/sitemap.xml`, and `/robots.txt`.
- Old `/platform` redirects to `/en/platform`.

## 9. Proposed Repair Plan

1. Restore a coherent premium dark visual system by removing global light-theme override hacks and updating layout, navbar, footer, hero, cards, and common sections to use intentional dark surfaces.
2. Keep the simplified navigation pattern, but ensure Spanish/English labels and dropdown links remain correct.
3. Remove or neutralize dead `/about` route files if they are not part of the required route set.
4. Improve shared components so pages feel consistently premium without duplicating styles.
5. Review Spanish copy on high-visibility pages after the dark redesign to keep it concise and native.
6. Fix JSON-LD `areaServed` to avoid a narrow unsupported geography claim.
7. Re-run lint/build, then visually QA desktop and mobile for required core routes.
8. Commit, push, and redeploy once checks pass.
