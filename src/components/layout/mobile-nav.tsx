"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";

import { TrackedLink } from "@/components/analytics";
import { useLocale } from "@/components/locale-provider";
import { Button } from "@/components/ui/button";
import {
  navLinksByLocale,
  resourceNavLinksByLocale,
} from "@/data/site";
import { localizeHref } from "@/lib/i18n";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname();
  const { locale } = useLocale();
  const navLinks = navLinksByLocale[locale];
  const resourceNavLinks = resourceNavLinksByLocale[locale];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="mobile-nav-shell">
      <button
        type="button"
        className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm"
        onClick={() => setIsOpen((value) => !value)}
        aria-label={
          isOpen
            ? locale === "es"
              ? "Cerrar navegación"
              : "Close navigation"
            : locale === "es"
              ? "Abrir navegación"
              : "Open navigation"
        }
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {isOpen ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>
      {isOpen ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-16 border-t border-slate-200 bg-white shadow-xl"
        >
          <div className="container flex flex-col gap-2 py-4">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <div key={link.href} className="contents">
                  <Link
                    href={localizeHref(link.href, locale)}
                    onClick={() => setIsOpen(false)}
                    className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </Link>
                  {index === 0 ? (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                      <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {locale === "es" ? "Recursos" : "Resources"}
                      </p>
                      <div className="grid gap-1">
                        {resourceNavLinks.map((resourceLink) => (
                          <Link
                            key={resourceLink.href}
                            href={localizeHref(resourceLink.href, locale)}
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-white hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            {resourceLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
            <div className="mt-2 grid gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 sm:grid-cols-4">
              <Button asChild variant="secondary">
                <TrackedLink
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  eventProperties={{ location: "mobile_nav_login_placeholder" }}
                >
                  {locale === "es" ? "Entrar" : "Login"}
                </TrackedLink>
              </Button>
              <Button asChild variant="secondary">
                <TrackedLink
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  eventProperties={{ location: "mobile_nav_signup" }}
                >
                  {locale === "es" ? "Registrarse" : "Sign up"}
                </TrackedLink>
              </Button>
              <Button asChild>
                <TrackedLink
                  href="/book-demo"
                  onClick={() => setIsOpen(false)}
                  eventProperties={{ location: "mobile_nav" }}
                >
                  {locale === "es" ? "Reservar demo" : "Book demo"}
                </TrackedLink>
              </Button>
              <Button asChild variant="secondary">
                <Link
                  href={
                    locale === "es"
                      ? localizeHref(pathname, "en")
                      : localizeHref(pathname, "es")
                  }
                  onClick={() => setIsOpen(false)}
                  aria-label={
                    locale === "es"
                      ? "View site in English"
                      : "Ver sitio en español"
                  }
                >
                  {locale === "es" ? "English" : "Español"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
