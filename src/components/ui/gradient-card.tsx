import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function GradientCard({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "gradient-border relative overflow-hidden rounded-lg p-5 shadow-panel",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-lg",
        className,
      )}
      {...props}
    />
  );
}
