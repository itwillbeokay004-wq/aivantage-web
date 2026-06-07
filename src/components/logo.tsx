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
        className="relative grid size-9 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 shadow-glow"
        aria-hidden="true"
      >
        <span className="absolute inset-1 rounded-[0.35rem] border border-purple-300/20" />
        <span className="h-4 w-4 rounded-[0.2rem] bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-400 transition group-hover:scale-110" />
      </span>
      <span className="text-base font-semibold tracking-normal text-white">AiVantage</span>
    </Link>
  );
}
