import { NextResponse, type NextRequest } from "next/server";

import {
  defaultLocale,
  isLocale,
  localizedRoutes,
  resolvePublicPathname,
  type Locale,
} from "@/lib/i18n";

const legacyRootRoutes = new Set(
  Object.keys(localizedRoutes).filter((route) => route !== "/"),
);

function redirectTo(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;

  return NextResponse.redirect(url, 308);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (legacyRootRoutes.has(pathname)) {
    return redirectTo(
      request,
      localizedRoutes[pathname as keyof typeof localizedRoutes][defaultLocale],
    );
  }

  if (pathname.startsWith("/resources/")) {
    return redirectTo(request, pathname.replace(/^\/resources/, "/recursos"));
  }

  if (pathname === "/about" || pathname.startsWith("/about/")) {
    return redirectTo(request, "/");
  }

  if (pathname === "/en/about" || pathname.startsWith("/en/about/")) {
    return redirectTo(request, "/en");
  }

  const route = resolvePublicPathname(pathname);
  const requestHeaders = new Headers(request.headers);
  const existingLocale = request.headers.get("x-aivantage-locale");
  const existingPathname = request.headers.get("x-aivantage-pathname");
  const locale: Locale = isLocale(existingLocale) ? existingLocale : route.locale;

  requestHeaders.set("x-aivantage-pathname", existingPathname ?? pathname);
  requestHeaders.set("x-aivantage-locale", locale);

  if (route.internalPath !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = route.internalPath;

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
