"use client";

import Link from "next/link";

import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  const { localizeHref, locale } = useLocale();

  return (
    <Link
      href={localizeHref("/")}
      aria-label={locale === "es" ? "Inicio de AiVantage" : "AiVantage home"}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        className="relative grid size-9 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 shadow-glow"
        aria-hidden="true"
      >
        <span className="absolute inset-1 rounded-md border border-sky-300/30" />
        <span className="h-4 w-4 rounded bg-gradient-to-br from-blue-400 via-cyan-300 to-violet-400 transition group-hover:scale-110" />
      </span>
      <span className="text-base font-semibold tracking-tight text-white">AiVantage</span>
    </Link>
  );
}
