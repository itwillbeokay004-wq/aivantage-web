import { BarChart3, Clock3, Handshake, MessagesSquare, UserPlus } from "lucide-react";

const metrics = [
  {
    icon: MessagesSquare,
    label: "Conversations handled",
    value: "1,248",
    detail: "Example monthly total",
  },
  {
    icon: UserPlus,
    label: "Leads captured",
    value: "186",
    detail: "Example qualified contacts",
  },
  {
    icon: Clock3,
    label: "Time saved",
    value: "74 hrs",
    detail: "Example operator time",
  },
  {
    icon: Handshake,
    label: "Human handoffs",
    value: "42",
    detail: "Example reviewed cases",
  },
];

export function AnalyticsPreview() {
  return (
    <div className="rounded-lg border border-white/10 bg-[#07101f] p-5 shadow-panel">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
            <BarChart3 className="size-4" />
            Analytics preview
          </div>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Example dashboard for agent performance.
          </h3>
        </div>
        <p className="text-sm text-slate-400">Placeholder numbers shown as examples.</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className="size-5 text-cyan-200" />
                <span className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-400">
                  Example
                </span>
              </div>
              <p className="mt-5 text-3xl font-semibold text-white">{metric.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-200">{metric.label}</p>
              <p className="mt-3 text-xs leading-5 text-slate-400">{metric.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
