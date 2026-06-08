import { Reveal } from "@/components/reveal";

const trustItems = [
  "Built for growing teams",
  "AI automation",
  "Customer experience",
  "Operations",
];

export function HomeTrustStrip() {
  return (
    <section className="border-b border-slate-200 bg-white" aria-label="Trust themes">
      <div className="container py-8">
        <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
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
