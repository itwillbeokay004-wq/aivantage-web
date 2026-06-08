"use client";

import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";

import {
  defaultLocale,
  localizeHref as localizeHrefForLocale,
  type Locale,
} from "@/lib/locale";

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
  const value = useMemo(
    () => ({
      locale,
      localizeHref: (href: string) => localizeHrefForLocale(href, locale),
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
