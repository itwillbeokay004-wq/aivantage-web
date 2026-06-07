"use client";

import Link from "next/link";
import Script from "next/script";
import { forwardRef } from "react";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import type { LinkProps } from "next/link";

export const analyticsEvents = {
  bookDemoClick: "book_demo_click",
  contactClick: "contact_click",
  useCaseClick: "use_case_click",
  chatWidgetOpen: "chat_widget_open",
  pricingCtaClick: "pricing_cta_click",
} as const;

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];

type AnalyticsProperties = Record<string, boolean | number | string | null | undefined>;

type GtagFunction = (...args: unknown[]) => void;

type PostHogClient = {
  capture?: (eventName: string, properties?: AnalyticsProperties) => void;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFunction;
    posthog?: PostHogClient;
  }
}

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const analyticsConfigured = Boolean(gaId || posthogKey);

export function Analytics() {
  if (!analyticsConfigured) {
    return null;
  }

  return (
    <>
      {/* Enable GA later by setting NEXT_PUBLIC_GA_ID in Vercel or .env.local. */}
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {/* Enable PostHog later by setting NEXT_PUBLIC_POSTHOG_KEY. */}
      {posthogKey ? (
        <Script id="posthog-init" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once reset group identify_page".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('${posthogKey}', {
              api_host: 'https://us.i.posthog.com',
              person_profiles: 'identified_only'
            });
          `}
        </Script>
      ) : null}
    </>
  );
}

export function isAnalyticsConfigured() {
  return analyticsConfigured;
}

export function trackAnalyticsEvent(
  eventName: AnalyticsEventName,
  properties: AnalyticsProperties = {},
) {
  if (!analyticsConfigured || typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", eventName, properties);
  window.posthog?.capture?.(eventName, properties);
}

export function trackCtaClick(
  eventName: AnalyticsEventName | undefined,
  properties: AnalyticsProperties = {},
) {
  if (!eventName) {
    return;
  }

  trackAnalyticsEvent(eventName, {
    category: "cta",
    ...properties,
  });
}

export function getCtaEventForHref(href: string): AnalyticsEventName | undefined {
  if (href === "/book-demo" || href.startsWith("/book-demo?")) {
    return analyticsEvents.bookDemoClick;
  }

  if (href === "/contact" || href.startsWith("/contact?")) {
    return analyticsEvents.contactClick;
  }

  if (href === "/use-cases" || href.startsWith("/use-cases?")) {
    return analyticsEvents.useCaseClick;
  }

  return undefined;
}

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "onClick"> & {
    children: ReactNode;
    eventName?: AnalyticsEventName;
    eventProperties?: AnalyticsProperties;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  };

export const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  (
    {
      children,
      eventName,
      eventProperties,
      href,
      onClick,
      ...props
    },
    ref,
  ) => {
    const hrefString = typeof href === "string" ? href : href.toString();

    return (
      <Link
        ref={ref}
        href={href}
        onClick={(event) => {
          trackCtaClick(eventName ?? getCtaEventForHref(hrefString), {
            href: hrefString,
            ...eventProperties,
          });
          onClick?.(event);
        }}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

TrackedLink.displayName = "TrackedLink";
