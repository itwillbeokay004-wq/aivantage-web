"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { TrackedLink } from "@/components/analytics";
import { useLocale } from "@/components/locale-provider";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import {
  navLinksByLocale,
  resourceNavLinksByLocale,
} from "@/data/site";
import { localizeHref, toInternalPath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const navLinks = navLinksByLocale[locale];
  const resourceNavLinks = resourceNavLinksByLocale[locale];
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesMenuId = useId();
  const platformLink = navLinks[0];
  const remainingNavLinks = navLinks.slice(1);

  const isResourceActive = resourceNavLinks.some(
    (link) => {
      const normalizedPathname = toInternalPath(pathname);

      return (
        normalizedPathname === link.href ||
        normalizedPathname.startsWith(`${link.href}/`)
      );
    },
  );

  useEffect(() => {
    setResourcesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setResourcesOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav
          className="desktop-nav-shell items-center gap-1 rounded-full border border-white/10 bg-white/[0.08] p-1 shadow-sm shadow-black/20"
          aria-label="Main navigation"
        >
          {platformLink ? (
            <NavPillLink
              href={platformLink.href}
              label={platformLink.label}
              pathname={pathname}
              locale={locale}
            />
          ) : null}
          <div className="relative">
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isResourceActive && "bg-white/[0.12] text-white shadow-sm",
              )}
              aria-expanded={resourcesOpen}
              aria-controls={resourcesMenuId}
              onClick={() => setResourcesOpen((value) => !value)}
            >
              {locale === "es" ? "Recursos" : "Resources"}
              <ChevronDown
                className={cn(
                  "size-4 transition",
                  resourcesOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>
            {resourcesOpen ? (
              <div
                id={resourcesMenuId}
                className="absolute left-1/2 top-[calc(100%+0.75rem)] w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#07101f] p-2 shadow-2xl shadow-black/40"
              >
                {resourceNavLinks.map((link) => (
              <Link
                key={link.href}
                href={localizeHref(link.href, locale)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-cyan-300/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {remainingNavLinks.map((link) => (
            <NavPillLink
              key={link.href}
              href={link.href}
              label={link.label}
              pathname={pathname}
              locale={locale}
            />
          ))}
        </nav>
        <div className="desktop-nav-shell items-center gap-1 rounded-full border border-white/10 bg-white/[0.08] p-1 shadow-sm shadow-black/20">
          <TrackedLink
            href="/contact"
            className="rounded-full px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            eventProperties={{ location: "navbar_login_placeholder" }}
          >
            {locale === "es" ? "Entrar" : "Login"}
          </TrackedLink>
          <TrackedLink
            href="/contact"
            className="rounded-full px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            eventProperties={{ location: "navbar_signup" }}
          >
            {locale === "es" ? "Registrarse" : "Sign up"}
          </TrackedLink>
          <TrackedLink
            href="/book-demo"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            eventProperties={{ location: "navbar" }}
          >
            {locale === "es" ? "Reservar una demo" : "Book a demo"}
          </TrackedLink>
          <LanguageSwitcher />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}

function NavPillLink({
  href,
  label,
  locale,
  pathname,
}: {
  href: string;
  label: string;
  locale: "es" | "en";
  pathname: string;
}) {
  const normalizedPathname = toInternalPath(pathname);
  const isActive =
    normalizedPathname === href || normalizedPathname.startsWith(`${href}/`);

  return (
    <Link
      href={localizeHref(href, locale)}
      className={cn(
        "rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isActive && "bg-white/[0.12] text-white shadow-sm",
      )}
    >
      {label}
    </Link>
  );
}
