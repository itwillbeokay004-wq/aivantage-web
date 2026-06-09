import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-white placeholder:text-slate-500 shadow-inner shadow-black/20 transition file:border-0 file:bg-transparent file:text-sm file:font-medium hover:border-white/20 focus-visible:border-cyan-300/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/55 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-rose-300/45 aria-[invalid=true]:focus-visible:ring-rose-300/50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
