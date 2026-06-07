"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { TrackedLink } from "@/components/analytics";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-white"
        onClick={() => setIsOpen((value) => !value)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {isOpen ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>
      {isOpen ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-16 border-t border-white/10 bg-[#050914]"
        >
          <div className="container flex flex-col gap-2 py-4">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <Button asChild variant="secondary">
                <TrackedLink
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  eventProperties={{ location: "mobile_nav" }}
                >
                  Contact Us
                </TrackedLink>
              </Button>
              <Button asChild>
                <TrackedLink
                  href="/book-demo"
                  onClick={() => setIsOpen(false)}
                  eventProperties={{ location: "mobile_nav" }}
                >
                  Book a Demo
                </TrackedLink>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
