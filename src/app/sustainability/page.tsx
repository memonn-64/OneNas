import type { Metadata } from "next";
import { Recycle, Sprout, BarChart3, Globe2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import CircularDiagram from "@/components/CircularDiagram";
import { Reveal, RevealGroup, Item } from "@/components/motion";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Supporting the circular economy through waste diversion, resource recovery and measurable environmental impact.",
};

const commitments = [
  { icon: Recycle, title: "Waste Diversion", tone: "text-forest", text: "Keeping recoverable material out of landfill across every stream we handle." },
  { icon: Sprout, title: "Resource Recovery", tone: "text-emerald", text: "Returning paper, plastic, metal, oil and rubber to productive use." },
  { icon: BarChart3, title: "Environmental Impact", tone: "text-emerald-light", text: "Reducing the demand for virgin resources through recycled commodities." },
  { icon: Globe2, title: "Responsible Trade", tone: "text-royal", text: "Moving material to markets that recycle it under sound practices." },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sustainability"
        title="Supporting the Circular Economy"
        intro="Recycling is only valuable when material actually re-enters the economy. Our programs are built around diversion, recovery and measurable impact."
        image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2400&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">The Process</p>
            <h2 className="heading-xl mt-5 text-3xl text-forest md:text-4xl">
              How material moves through the loop.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-charcoal/70">
              Every program we run is designed to carry material through five
              stages — and back to the beginning.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-16">
            <CircularDiagram />
          </Reveal>
        </div>
      </section>

      <section className="bg-mint py-24 md:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our Commitments</p>
            <h2 className="heading-xl mt-5 text-3xl text-forest md:text-4xl">
              Sustainability built into the business model.
            </h2>
          </Reveal>
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c) => (
              <Item key={c.title} className="rounded-2xl bg-white p-8 shadow-card">
                <c.icon className={`${c.tone}`} size={28} strokeWidth={1.8} />
                <h3 className="mt-5 font-display text-lg font-semibold text-charcoal">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{c.text}</p>
              </Item>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        title="Recover more. Waste less."
        text="Talk to our team about a recycling program that turns your material into measurable environmental and economic value."
      />
    </>
  );
}
