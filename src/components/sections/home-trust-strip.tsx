import { Reveal } from "@/components/reveal";

const trustItems = [
  "Built for growing teams",
  "AI automation",
  "Customer experience",
  "Operations",
];

export function HomeTrustStrip() {
  return (
    <section className="border-b border-white/10 bg-white/[0.025]" aria-label="Trust themes">
      <div className="container py-8">
        <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-[#07101f] px-4 py-4 text-center text-sm font-medium text-slate-300"
            >
              {item}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
