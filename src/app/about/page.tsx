import type { Metadata } from "next";
import { Target, Eye, ShieldCheck, Leaf, Handshake, Lightbulb, Recycle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { Reveal, RevealGroup, Item } from "@/components/motion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2001 with over two decades of experience in recycling and commodity trading across Canada, the United States and the UAE.",
};

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "Transparent dealings and accurate grading on every transaction." },
  { icon: Leaf, title: "Sustainability", text: "Diverting material from landfill is the measure of our work." },
  { icon: Recycle, title: "Reliability", text: "Consistent quality, volumes and timelines our partners can plan around." },
  { icon: Lightbulb, title: "Innovation", text: "Continually improving how material is recovered and traded." },
  { icon: Handshake, title: "Partnership", text: "Long-term relationships with suppliers and buyers worldwide." },
];

const timeline = [
  { year: "2001", title: "Founded", text: "Established with a focus on recovered material trading." },
  { year: "2008", title: "Material Expansion", text: "Added plastics, metals and used-oil recovery to our programs." },
  { year: "2015", title: "International Growth", text: "Extended operations into the United Arab Emirates." },
  { year: "Today", title: "Circular Leadership", text: "An integrated recycling and commodity-trading business across Canada, the United States and the UAE." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Two decades turning recoverable material into value."
        intro="Founded in 2001, we have spent more than twenty years building a reliable, international recycling and commodity-trading business."
        image="/images/about/5streams.png"
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="heading-xl mt-5 text-3xl text-forest md:text-4xl">
              Built on experience, scaled through trade.
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-card">
              <img
                src="/images/about/factory.png"
                alt="OneNas processing facility"
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-charcoal/75">
            <p>
              Since 2001, our company has grown from a focused recovered-material
              trader into an integrated recycling and commodity business operating
              across Canada, the United States and the United Arab Emirates.
            </p>
            <p>
              We purchase, process, trade, export and recycle scrap paper, plastic,
              metal, used engine oil and tires — working with manufacturers,
              industrial facilities, logistics companies, municipalities, waste
              generators, recyclers and commodity buyers around the world.
            </p>
            <p>
              That breadth lets us match every material stream with the right
              market, helping our partners reduce waste while maximizing the value
              of what they recover.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sky-tint py-24 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl bg-gradient-to-br from-royal-deep to-royal-mid p-10 shadow-card text-white">
            <Target className="text-white/70" size={30} strokeWidth={1.8} />
            <h3 className="mt-5 font-display text-2xl font-semibold text-white">Our Mission</h3>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Helping businesses reduce waste while maximizing material value —
              through dependable recycling and transparent global trade.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl bg-gradient-to-br from-forest to-teal-deep p-10 text-white shadow-card">
            <Eye className="text-lime" size={30} strokeWidth={1.8} />
            <h3 className="mt-5 font-display text-2xl font-semibold">Our Vision</h3>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Advancing the circular economy through responsible recycling and
              global trade that keeps materials in productive use.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our Values</p>
            <h2 className="heading-xl mt-5 text-3xl text-forest md:text-4xl">
              The principles behind every transaction.
            </h2>
          </Reveal>
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <Item key={v.title} className="rounded-2xl border border-gray-line p-8 transition-colors hover:border-royal/40 hover:bg-royal/5">
                <v.icon className="text-royal" size={26} strokeWidth={1.8} />
                <h3 className="mt-5 font-display text-lg font-semibold text-charcoal">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{v.text}</p>
              </Item>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-mint py-24 md:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our Journey</p>
            <h2 className="heading-xl mt-5 text-3xl text-forest md:text-4xl">
              From 2001 to today.
            </h2>
          </Reveal>
          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gray-line bg-gray-line md:grid-cols-4">
            {timeline.map((t) => (
              <Item key={t.year} className="bg-white p-8">
                <div className="font-display text-3xl font-semibold text-emerald">{t.year}</div>
                <h3 className="mt-4 font-semibold text-charcoal">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{t.text}</p>
              </Item>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
