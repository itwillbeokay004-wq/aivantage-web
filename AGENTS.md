# AiVantage Project Instructions

## Language and Routing

- Spanish is the default language and must live at root routes.
- English must live under `/en`.
- Spanish copy must be native, polished, and business-friendly, not a literal translation from English.
- Do not leave hardcoded English on Spanish pages unless it is an intentional brand name, technical term, or domain.
- Do not leave broken redirects.
- Old English root routes should redirect to their `/en` equivalents where applicable.

## Brand and Design

- Preserve a premium SaaS UX/UI quality bar.
- The site should feel modern, trustworthy, fast, polished, enterprise-ready, and Spanish-first.
- Use AiVantage’s original visual system and original copy.
- Do not copy, clone, scrape, reproduce, or imitate Voiceflow or any competitor’s protected website, copy, code, screenshots, assets, layout, trade dress, animations, brand identity, icons, or graphics.
- Avoid generic template-feeling UI, clutter, weak contrast, awkward spacing, and overdone animation.

## Localization Architecture

- Use the existing route and localization helpers for internal links instead of hardcoding localized URLs.
- Keep navigation, footer, CTAs, forms, SEO metadata, sitemap, robots, chat/demo widget, and resource links bilingual.
- When adding or changing pages, update the matching Spanish and English routes, metadata, CTAs, footer/nav links, and sitemap as needed.
- Spanish route examples: `/`, `/plataforma`, `/soluciones`, `/modelos-ia`, `/casos-de-uso`, `/precios`, `/recursos`, `/contacto`, `/reservar-demo`, `/privacidad`, `/terminos`.
- English route examples: `/en`, `/en/platform`, `/en/solutions`, `/en/ai-models`, `/en/use-cases`, `/en/pricing`, `/en/resources`, `/en/contact`, `/en/book-demo`, `/en/privacy`, `/en/terms`.

## Engineering Standards

- Keep changes focused, clean, and maintainable.
- Prefer reusable components and existing architecture over one-off duplicated code.
- Do not add heavy dependencies without a clear reason.
- Keep forms localized, validated, accessible, and safe; never expose server-only secrets to the client.
- Keep SEO localized with canonical URLs and hreflang alternates.
- Maintain accessible navigation, visible focus states, readable contrast, and mobile-friendly layouts.

## Validation

- Always run `npm run lint` and `npm run build` before the final response.
- Fix reasonable lint, type, build, routing, and localization errors before handing off.
