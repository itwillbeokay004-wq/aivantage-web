"use client";

import Link from "next/link";

import { LogoMark } from "@/components/brand/logo-mark";
import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  const { localizeHref, locale } = useLocale();

  return (
    <Link
      href={localizeHref("/")}
      aria-label={locale === "es" ? "Inicio de AiVantage" : "AiVantage home"}
      className={cn(
        "group inline-flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <LogoMark className="transition duration-300 group-hover:scale-105 group-hover:border-cyan-200/45" />
      {!compact ? (
        <span className="leading-none">
          <span className="block text-base font-semibold tracking-[-0.02em] text-white sm:text-lg">
            AiVantage
          </span>
          <span className="mt-1 hidden text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cyan-100/70 sm:block">
            AI Agents
          </span>
        </span>
      ) : null}
    </Link>
  );
}
