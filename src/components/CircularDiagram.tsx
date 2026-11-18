import { Truck, Factory, Recycle, Boxes, RefreshCw } from "lucide-react";

const steps = [
  { icon: Truck, label: "Collection", n: "01" },
  { icon: Factory, label: "Processing", n: "02" },
  { icon: Recycle, label: "Recycling", n: "03" },
  { icon: Boxes, label: "Manufacturing", n: "04" },
  { icon: RefreshCw, label: "Reuse", n: "05" },
];

export default function CircularDiagram() {
  return (
    <div className="relative">
      <div className="grid gap-4 md:grid-cols-5">
        {steps.map((s, i) => (
          <div key={s.label} className="relative">
            <div className="flex flex-col items-center rounded-2xl border border-gray-line bg-white p-7 text-center shadow-card">
              <span className="text-xs font-semibold tracking-[0.18em] text-emerald">
                {s.n}
              </span>
              <span className="mt-4 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-forest to-teal-deep text-white">
                <s.icon size={24} strokeWidth={1.8} />
              </span>
              <span className="mt-4 font-display text-lg font-semibold text-charcoal">
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald text-white">
                  ›
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-charcoal/60">
        <RefreshCw size={15} className="text-emerald" />
        A continuous loop — material returns to productive use rather than landfill.
      </div>
    </div>
  );
}
