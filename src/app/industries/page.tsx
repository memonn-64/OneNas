import type { Metadata } from "next";
import { Factory, Warehouse, Truck, HardHat, Building2, Ship, Car, Cog } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { Reveal, RevealGroup, Item } from "@/components/motion";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "We work with manufacturing, warehousing, distribution, construction, municipalities, logistics, automotive and industrial facilities.",
};

const industries = [
  { icon: Factory, title: "Manufacturing", text: "Recovering production scrap and off-spec material at the source." },
  { icon: Warehouse, title: "Warehousing", text: "Handling packaging, film and pallet-volume recyclables." },
  { icon: Truck, title: "Distribution", text: "Programs that fit high-throughput logistics environments." },
  { icon: HardHat, title: "Construction", text: "Diverting metals and material from build and demolition sites." },
  { icon: Building2, title: "Municipalities", text: "Supporting public-sector diversion and recovery targets." },
  { icon: Ship, title: "Logistics", text: "Integrating recovery into freight and supply-chain operations." },
  { icon: Car, title: "Automotive", text: "Used oil, tires and metal recovery for the automotive sector." },
  { icon: Cog, title: "Industrial Facilities", text: "Tailored programs for complex industrial waste streams." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries We Serve"
        title="Programs tailored to how each sector generates material."
        intro="From the production floor to the municipal depot, we design recovery and trading programs that match the realities of your operation."
        image="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2400&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <Item
                key={ind.title}
                className="group rounded-2xl border border-gray-line p-8 transition-all hover:-translate-y-1 hover:border-emerald/40 hover:shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest/5 text-forest transition-colors group-hover:bg-emerald group-hover:text-white">
                  <ind.icon size={22} strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-charcoal">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{ind.text}</p>
              </Item>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
