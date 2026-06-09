"use client";

import Link from "next/link";

import { TrackedLink } from "@/components/analytics";
import { Logo } from "@/components/brand/logo";
import { useLocale } from "@/components/locale-provider";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { localizeHref } from "@/lib/i18n";

const footerLinks = {
  es: [
    { href: "/", label: "Inicio" },
    { href: "/contact", label: "Contacto" },
    { href: "/book-demo", label: "Reservar demo" },
    { href: "/privacy", label: "Privacidad" },
    { href: "/terms", label: "Términos" },
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/book-demo", label: "Book Demo" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;

export function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/5 blur-3xl" />
      <div className="container py-12">
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-xl">
            <Logo />
            <p className="mt-5 text-sm leading-7 text-slate-300">
              {locale === "es"
                ? "AiVantage ayuda a empresas a crear agentes de IA para comunicación con clientes, captación, citas, llamadas y operaciones."
                : "AiVantage helps businesses create AI agents for customer communication, lead capture, appointments, calls, and operations."}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <TrackedLink href="/book-demo" eventProperties={{ location: "footer" }}>
                  {locale === "es" ? "Reservar demo" : "Book Demo"}
                </TrackedLink>
              </Button>
              <Button asChild variant="secondary">
                <TrackedLink href="/contact" eventProperties={{ location: "footer" }}>
                  {locale === "es" ? "Contacto" : "Contact"}
                </TrackedLink>
              </Button>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3 lg:max-w-sm lg:justify-end" aria-label={locale === "es" ? "Enlaces del pie" : "Footer links"}>
            {footerLinks[locale].map((link) => (
              <Link
                key={link.href}
                href={localizeHref(link.href, locale)}
                className="text-sm text-slate-400 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {locale === "es"
              ? `© ${new Date().getFullYear()} AiVantage. Todos los derechos reservados.`
              : `Copyright ${new Date().getFullYear()} AiVantage. All rights reserved.`}
          </p>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
