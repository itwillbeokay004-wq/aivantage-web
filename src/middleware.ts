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

const routeRedirects = new Map<string, string>([
  ...Object.entries(localizedRoutes)
    .filter(([internalPath]) => internalPath !== "/")
    .map(([internalPath, localizedPath]) => [
      internalPath,
      localizedPath[defaultLocale],
    ] as const),
  ["/resources", "/recursos"],
]);

function redirectTo(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;

  return NextResponse.redirect(url, 308);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const route = resolvePublicPathname(pathname);
  const requestHeaders = new Headers(request.headers);
  const existingLocale = request.headers.get("x-aivantage-locale");
  const existingPathname = request.headers.get("x-aivantage-pathname");
  const locale: Locale = isLocale(existingLocale) ? existingLocale : route.locale;

  requestHeaders.set("x-aivantage-pathname", existingPathname ?? pathname);
  requestHeaders.set("x-aivantage-locale", locale);

  if (legacyRootRoutes.has(pathname)) {
    return redirectTo(request, routeRedirects.get(pathname) ?? "/");
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

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.svg|apple-touch-icon.svg).*)"],
};
