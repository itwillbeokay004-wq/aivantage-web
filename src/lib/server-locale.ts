import { headers } from "next/headers";

import { defaultLocale, isLocale, type Locale } from "@/lib/locale";

export async function getRequestLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const headerLocale = requestHeaders.get("x-aivantage-locale");

  return isLocale(headerLocale) ? headerLocale : defaultLocale;
}
