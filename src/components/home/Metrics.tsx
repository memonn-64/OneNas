import { CalendarClock, Globe2, Network, Leaf } from "lucide-react";
import { RevealGroup, Item } from "@/components/motion";

const metrics = [
  { icon: CalendarClock, value: "20+", label: "Years of Experience" },
  { icon: Globe2, value: "2", label: "Canada & UAE Operations" },
  { icon: Network, value: "Global", label: "Trading Network" },
  { icon: Leaf, value: "Sustainable", label: "Recycling Solutions" },
];

export default function Metrics() {
  return (
    <section className="relative z-10 -mt-20">
      <div className="container-x">
        <RevealGroup className="grid grid-cols-2 overflow-hidden rounded-2xl bg-royal shadow-card lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Item
              key={m.label}
              className={`flex flex-col items-start gap-3 p-8 lg:p-10 transition-colors hover:bg-royal-mid ${
                i !== 0 ? "border-l border-white/10" : ""
              } ${i === 2 ? "border-l-0 lg:border-l" : ""} ${
                i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""
              }`}
            >
              <m.icon className="text-white/60" size={26} strokeWidth={1.8} />
              <div className="font-display text-3xl font-semibold text-white lg:text-4xl">
                {m.value}
              </div>
              <div className="text-sm font-medium text-white/60">{m.label}</div>
            </Item>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
