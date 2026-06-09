import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-32 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 shadow-inner shadow-black/20 transition hover:border-white/20 focus-visible:border-cyan-300/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/55 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-rose-300/45 aria-[invalid=true]:focus-visible:ring-rose-300/50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
