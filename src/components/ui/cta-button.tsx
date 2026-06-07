import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { TrackedLink } from "@/components/analytics";
import type { AnalyticsEventName } from "@/components/analytics";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  showIcon?: boolean;
  variant?: ComponentPropsWithoutRef<typeof Button>["variant"];
  size?: ComponentPropsWithoutRef<typeof Button>["size"];
  className?: string;
  analyticsEvent?: AnalyticsEventName;
  analyticsLabel?: string;
};

export function CtaButton({
  href,
  children,
  showIcon = true,
  variant = "default",
  size = "default",
  className,
  analyticsEvent,
  analyticsLabel,
}: CtaButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn(className)}>
      <TrackedLink
        href={href}
        eventName={analyticsEvent}
        eventProperties={{ label: analyticsLabel }}
      >
        {children}
        {showIcon ? <ArrowRight className="size-4" aria-hidden="true" /> : null}
      </TrackedLink>
    </Button>
  );
}
