"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo } from "react";
import type { ReactNode } from "react";

import {
  defaultLocale,
  getLocaleFromPathname,
  localizeHref as localizeHrefForLocale,
  type Locale,
} from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  localizeHref: (href: string) => string;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  localizeHref: (href) => localizeHrefForLocale(href, defaultLocale),
});

export function LocaleProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const pathname = usePathname();
  const activeLocale = pathname ? getLocaleFromPathname(pathname) : locale;

  useEffect(() => {
    document.documentElement.lang = activeLocale;
  }, [activeLocale]);

  const value = useMemo(
    () => ({
      locale: activeLocale,
      localizeHref: (href: string) => localizeHrefForLocale(href, activeLocale),
    }),
    [activeLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
