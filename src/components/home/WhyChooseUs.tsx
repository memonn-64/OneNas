import { Globe2, Truck, BadgeDollarSign, Leaf, Users } from "lucide-react";
import { Reveal, RevealGroup, Item } from "@/components/motion";

const reasons = [
  {
    icon: Globe2,
    title: "International Reach",
    text: "Operations in Canada and the UAE connect your material to buyers worldwide.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    text: "Established freight and export channels keep volumes moving on schedule.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    text: "Direct market access and trading expertise translate into strong returns.",
  },
  {
    icon: Leaf,
    title: "Sustainability Focus",
    text: "Every program is designed to divert waste and recover material value.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    text: "More than twenty years of hands-on recycling and commodity knowledge.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="heading-xl mt-5 text-3xl text-forest md:text-4xl">
            A dependable partner from collection to global market.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gray-line bg-gray-line sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <Item key={r.title} className="bg-white p-8 transition-colors hover:bg-gray-soft">
              <r.icon className="text-emerald" size={26} strokeWidth={1.8} />
              <h3 className="mt-5 font-display text-lg font-semibold text-charcoal">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                {r.text}
              </p>
            </Item>
          ))}
          <Item className="flex flex-col justify-center bg-forest p-8 text-white">
            <p className="font-display text-xl font-semibold leading-snug">
              Trusted by industrial generators and global buyers alike.
            </p>
          </Item>
        </RevealGroup>
      </div>
    </section>
  );
}
