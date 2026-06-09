import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type VisualCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  graphic: "chat" | "phone" | "lead" | "calendar";
  accent?: "cyan" | "blue" | "violet" | "emerald";
};

const accentClasses = {
  cyan: "from-cyan-300/24 via-blue-500/10 to-transparent text-cyan-100 border-cyan-200/20",
  blue: "from-blue-400/24 via-cyan-300/10 to-transparent text-blue-100 border-blue-200/20",
  violet: "from-violet-400/24 via-blue-500/10 to-transparent text-violet-100 border-violet-200/20",
  emerald: "from-emerald-300/20 via-cyan-300/10 to-transparent text-emerald-100 border-emerald-200/20",
} as const;

export function VisualCard({
  icon: Icon,
  title,
  description,
  graphic,
  accent = "cyan",
}: VisualCardProps) {
  return (
    <article
      tabIndex={0}
      className={cn(
        "group relative flex h-full min-h-[17rem] flex-col overflow-hidden rounded-[1.45rem] border bg-[#07101f]/92 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] outline-none transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:shadow-[0_30px_90px_rgba(8,47,73,0.34)] focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ring",
        accentClasses[accent],
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-100" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
      <div className="relative flex items-center justify-between">
        <div className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] shadow-inner shadow-white/5">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <ArrowUpRight className="size-4 text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-100" aria-hidden="true" />
      </div>
      <div className="relative mt-5 h-24 rounded-2xl border border-white/10 bg-slate-950/45 p-3">
        <CardGraphic graphic={graphic} />
      </div>
      <div className="relative mt-auto pt-5">
        <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      </div>
    </article>
  );
}

function CardGraphic({ graphic }: { graphic: VisualCardProps["graphic"] }) {
  if (graphic === "chat") {
    return (
      <div className="space-y-2">
        <div className="ml-auto h-7 w-24 rounded-2xl rounded-br-sm bg-cyan-300/18" />
        <div className="h-7 w-28 rounded-2xl rounded-bl-sm bg-white/10" />
        <div className="ml-auto flex h-7 w-20 items-center justify-center gap-1 rounded-2xl rounded-br-sm bg-blue-400/20">
          <span className="size-1.5 rounded-full bg-cyan-100 animate-pulse" />
          <span className="size-1.5 rounded-full bg-cyan-100 animate-pulse [animation-delay:120ms]" />
          <span className="size-1.5 rounded-full bg-cyan-100 animate-pulse [animation-delay:240ms]" />
        </div>
      </div>
    );
  }

  if (graphic === "phone") {
    return (
      <div className="flex h-full items-center gap-3">
        <div className="grid size-12 place-items-center rounded-full border border-cyan-200/20 bg-cyan-300/10">
          <span className="size-4 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.65)]" />
        </div>
        <div className="flex flex-1 items-end gap-1.5">
          {[24, 42, 30, 54, 34, 46, 28, 38].map((height, index) => (
            <span
              key={height + index}
              className="w-2 rounded-full bg-gradient-to-t from-blue-500/30 to-cyan-200/80 transition group-hover:scale-y-110"
              style={{ height }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (graphic === "lead") {
    return (
      <div className="grid h-full grid-cols-[1fr_auto] items-center gap-3">
        <div className="space-y-2">
          <div className="h-3 w-20 rounded-full bg-white/18" />
          <div className="h-3 w-28 rounded-full bg-cyan-200/18" />
          <div className="h-3 w-16 rounded-full bg-violet-200/18" />
        </div>
        <div className="relative size-16 rounded-2xl border border-white/10 bg-white/[0.06]">
          <span className="absolute left-1/2 top-3 size-5 -translate-x-1/2 rounded-full bg-cyan-200/70" />
          <span className="absolute bottom-3 left-1/2 h-5 w-10 -translate-x-1/2 rounded-t-full bg-blue-400/40" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-full grid-cols-4 gap-2">
      {["", "", "", "", "", "active", "", "", "", "", "", ""].map((state, index) => (
        <span
          key={`${state}-${index}`}
          className={cn(
            "rounded-lg border border-white/10 bg-white/[0.06]",
            state === "active" && "border-cyan-200/40 bg-cyan-300/18 shadow-[0_0_24px_rgba(34,211,238,0.18)]",
          )}
        />
      ))}
    </div>
  );
}
