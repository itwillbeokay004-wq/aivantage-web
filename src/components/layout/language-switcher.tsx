"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useLocale } from "@/components/locale-provider";
import { localizeHref, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const languageOptions = [
  { locale: "es", label: "Español" },
  { locale: "en", label: "English" },
] as const satisfies readonly { locale: Locale; label: string }[];

export function LanguageSwitcher({
  className,
  onNavigate,
  variant = "desktop",
}: {
  className?: string;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
}) {
  const pathname = usePathname();
  const { locale } = useLocale();
  const groupLabel =
    locale === "es" ? "Selector de idioma" : "Language selector";

  return (
    <div
      aria-label={groupLabel}
      className={cn(
        "flex items-center gap-1",
        variant === "mobile" &&
          "rounded-2xl border border-white/10 bg-white/[0.08] p-1",
        className,
      )}
      role="group"
    >
      {languageOptions.map((option) => {
        const isActive = locale === option.locale;
        const ariaLabel = isActive
          ? locale === "es"
            ? `Idioma actual: ${option.label}`
            : `Current language: ${option.label}`
          : locale === "es"
            ? `Cambiar idioma a ${option.label}`
            : `Switch language to ${option.label}`;

        return (
          <Link
            key={option.locale}
            href={localizeHref(pathname, option.locale)}
            aria-current={isActive ? "page" : undefined}
            aria-label={ariaLabel}
            onClick={onNavigate}
            className={cn(
              "rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              variant === "desktop"
                ? "px-4 py-2.5"
                : "flex-1 px-4 py-3 text-center",
              isActive
                ? "bg-white/[0.12] text-white shadow-sm"
                : "text-slate-300 hover:bg-white/10 hover:text-white",
              variant === "mobile" &&
                (isActive
                  ? "bg-blue-600 text-white shadow-sm"
                  : "hover:bg-cyan-300/10 hover:text-white"),
            )}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}
