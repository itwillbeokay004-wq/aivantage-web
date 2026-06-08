import { NextResponse, type NextRequest } from "next/server";

import { isLocale, localeFromPathname } from "@/lib/locale";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const requestHeaders = new Headers(request.headers);
  const existingLocale = request.headers.get("x-aivantage-locale");
  const existingPathname = request.headers.get("x-aivantage-pathname");
  const locale = isLocale(existingLocale)
    ? existingLocale
    : localeFromPathname(pathname);

  requestHeaders.set("x-aivantage-pathname", existingPathname ?? pathname);
  requestHeaders.set("x-aivantage-locale", locale);

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";

    return NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.svg|apple-touch-icon.svg).*)"],
};
