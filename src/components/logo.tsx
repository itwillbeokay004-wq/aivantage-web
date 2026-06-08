import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="AiVantage home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        className="relative grid size-9 place-items-center rounded-lg border border-blue-200 bg-blue-50 shadow-glow"
        aria-hidden="true"
      >
        <span className="absolute inset-1 rounded-md border border-sky-200" />
        <span className="h-4 w-4 rounded bg-gradient-to-br from-blue-700 via-sky-500 to-indigo-500 transition group-hover:scale-110" />
      </span>
      <span className="text-base font-semibold tracking-tight text-slate-950">AiVantage</span>
    </Link>
  );
}
