import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "flex h-12 w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-2 pr-10 text-sm text-white shadow-inner shadow-black/20 transition hover:border-white/20 focus-visible:border-cyan-300/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/55 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-rose-300/45 aria-[invalid=true]:focus-visible:ring-rose-300/50",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
      </div>
    );
  },
);
Select.displayName = "Select";

export { Select };
