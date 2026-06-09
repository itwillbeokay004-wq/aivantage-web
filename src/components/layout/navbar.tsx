"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { TrackedLink } from "@/components/analytics";
import { useLocale } from "@/components/locale-provider";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { localizeHref, toInternalPath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navItems = {
  es: [
    { href: "/", label: "Inicio" },
    { href: "/contact", label: "Contacto" },
    { href: "/book-demo", label: "Reservar demo" },
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/book-demo", label: "Book Demo" },
  ],
} as const;

export function Navbar() {
  const pathname = usePathname();
  const { locale } = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/88 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav
          className="desktop-nav-shell items-center gap-1 rounded-full border border-white/10 bg-white/[0.08] p-1 shadow-sm shadow-black/20"
          aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}
        >
          {navItems[locale].map((link) => (
            <NavPillLink
              key={link.href}
              href={link.href}
              label={link.label}
              locale={locale}
              pathname={pathname}
              primary={link.href === "/book-demo"}
            />
          ))}
        </nav>
        <div className="desktop-nav-shell items-center gap-1 rounded-full border border-white/10 bg-white/[0.08] p-1 shadow-sm shadow-black/20">
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
  primary = false,
}: {
  href: string;
  label: string;
  locale: Locale;
  pathname: string;
  primary?: boolean;
}) {
  const normalizedPathname = toInternalPath(pathname);
  const isActive = normalizedPathname === href;
  const className = cn(
    "rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    primary
      ? "bg-blue-600 text-white shadow-glow hover:bg-blue-500"
      : "text-slate-300 hover:bg-white/10 hover:text-white",
    isActive && !primary && "bg-white/[0.12] text-white shadow-sm",
  );

  if (href === "/contact" || href === "/book-demo") {
    return (
      <TrackedLink href={href} className={className} eventProperties={{ location: "navbar" }}>
        {label}
      </TrackedLink>
    );
  }

  return (
    <Link href={localizeHref(href, locale)} className={className}>
      {label}
    </Link>
  );
}
