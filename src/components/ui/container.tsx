import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

export function Container({
  as,
  children,
  className,
  ...props
}: ContainerProps) {
  const Component = as ?? "div";

  return (
    <Component className={cn("container", className)} {...props}>
      {children}
    </Component>
  );
}
