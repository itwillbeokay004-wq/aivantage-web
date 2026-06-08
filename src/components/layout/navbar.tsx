"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { TrackedLink } from "@/components/analytics";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700",
                  isActive && "bg-blue-50 text-blue-700",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <TrackedLink href="/contact" eventProperties={{ location: "navbar" }}>
              Contact Us
            </TrackedLink>
          </Button>
          <Button asChild size="sm">
            <TrackedLink href="/book-demo" eventProperties={{ location: "navbar" }}>
              Book a Demo
            </TrackedLink>
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
