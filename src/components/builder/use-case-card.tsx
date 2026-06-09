import type { LucideIcon } from "lucide-react";

export function UseCaseCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-sm shadow-black/20 transition hover:border-cyan-300/20 hover:bg-white/[0.055]">
      <div className="grid size-10 place-items-center rounded-xl border border-cyan-200/15 bg-cyan-300/10 text-cyan-100">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}
