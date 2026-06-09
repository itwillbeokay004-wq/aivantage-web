import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white shadow-[0_18px_46px_rgba(37,99,235,0.28)] hover:-translate-y-0.5 hover:brightness-110",
        secondary:
          "border border-white/10 bg-white/[0.08] text-slate-100 shadow-sm shadow-black/20 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.12]",
        ghost: "text-slate-300 hover:bg-white/[0.08] hover:text-white",
        outline:
          "border border-cyan-300/30 bg-cyan-300/5 text-cyan-100 hover:-translate-y-0.5 hover:bg-cyan-300/10",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-6",
        icon: "h-11 w-11 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
