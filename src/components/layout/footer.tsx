"use client";

import Link from "next/link";

import { TrackedLink } from "@/components/analytics";
import { useLocale } from "@/components/locale-provider";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { footerGroupsByLocale, siteConfig } from "@/data/site";
import { localizeHref } from "@/lib/i18n";

export function Footer() {
  const { locale } = useLocale();
  const footerGroups = footerGroupsByLocale[locale];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="max-w-lg">
            <Logo />
            <p className="mt-5 text-sm leading-7 text-slate-600">
              {locale === "es"
                ? "Agentes de IA listos para producción para atención al cliente, ventas, operaciones y comunicación con clientes."
                : "Production-ready AI agents for support, sales, operations, and customer engagement."}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <TrackedLink href="/book-demo" eventProperties={{ location: "footer" }}>
                  {locale === "es" ? "Reservar una demo" : "Book a Demo"}
                </TrackedLink>
              </Button>
              <Button asChild variant="secondary">
                <TrackedLink href="/contact" eventProperties={{ location: "footer" }}>
                  {locale === "es" ? "Consulta gratuita" : "Start Free Consultation"}
                </TrackedLink>
              </Button>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-slate-950">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={localizeHref(link.href, locale)}
                        className="text-sm text-slate-600 transition hover:text-blue-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {locale === "es"
              ? `Copyright ${new Date().getFullYear()} AiVantage. Todos los derechos reservados.`
              : `Copyright ${new Date().getFullYear()} AiVantage. All rights reserved.`}
          </p>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-blue-700">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
