"use client";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/reveal";

const trustItems = {
  es: [
    "Para equipos en crecimiento",
    "Automatización con IA",
    "Experiencia del cliente",
    "Operaciones",
  ],
  en: [
    "Built for growing teams",
    "AI automation",
    "Customer experience",
    "Operations",
  ],
} as const;

export function HomeTrustStrip() {
  const { locale } = useLocale();

  return (
    <section
      className="border-b border-slate-200 bg-white"
      aria-label={locale === "es" ? "Temas de confianza" : "Trust themes"}
    >
      <div className="container py-8">
        <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems[locale].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-medium text-slate-600"
            >
              {item}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
