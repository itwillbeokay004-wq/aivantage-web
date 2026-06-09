"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { TrackedLink } from "@/components/analytics";
import { Logo } from "@/components/brand/logo";
import { useLocale } from "@/components/locale-provider";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import { localizeHref } from "@/lib/i18n";

const navItems = {
  es: [
    { href: "/", label: "Inicio" },
    { href: "/contact", label: "Contacto" },
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const { locale } = useLocale();

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="mobile-nav-shell">
      <button
        type="button"
        className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-white shadow-sm shadow-black/20 transition hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
        {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>
      {isOpen ? (
        <div
          id={panelId}
          data-mobile-nav-panel
          className="absolute inset-x-0 top-20 z-[60] max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-[#020617]/98 shadow-xl shadow-black/50 backdrop-blur-xl"
        >
          <div className="container flex flex-col gap-4 py-5">
            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-3">
              <Logo />
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {locale === "es"
                  ? "Genera una propuesta de agente de IA y reserva una demo cuando quieras avanzar."
                  : "Generate an AI agent recommendation and book a demo when you are ready."}
              </p>
            </div>
            <nav className="grid gap-2" aria-label={locale === "es" ? "Navegación móvil" : "Mobile navigation"}>
              {navItems[locale].map((link) => (
                <Link
                  key={link.href}
                  href={localizeHref(link.href, locale)}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="grid gap-2 rounded-[1.35rem] border border-white/10 bg-white/5 p-2">
              <Button asChild>
                <TrackedLink
                  href="/book-demo"
                  onClick={() => setIsOpen(false)}
                  eventProperties={{ location: "mobile_nav" }}
                >
                  {locale === "es" ? "Reservar demo" : "Book Demo"}
                </TrackedLink>
              </Button>
              <LanguageSwitcher onNavigate={() => setIsOpen(false)} variant="mobile" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
