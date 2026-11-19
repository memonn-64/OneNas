import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion";

// One photo per material stream, so the card shows the whole business rather
// than whichever single material happened to be picked. The big tile leads;
// the four small ones fill the right half of a 4x2 grid.
const streams = [
  { src: "/images/gallery/paper1.jpeg", label: "Scrap paper", feature: true },
  { src: "/images/gallery/plastic_2.jpeg", label: "Plastic" },
  { src: "/images/gallery/metal1.jpeg", label: "Metal" },
  { src: "/images/gallery/oil_3.jpeg", label: "Used oil" },
  { src: "/images/gallery/tire2.jpeg", label: "Tires" },
];

const points = [
  "Two decades of recycling and commodity-trading expertise",
  "Established operations in Canada and the UAE, trading across the United States",
  "End-to-end purchasing, processing, export and recycling",
];

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative grid aspect-[4/3] grid-cols-4 grid-rows-2 gap-1.5 overflow-hidden rounded-2xl shadow-card">
            {streams.map((s) => (
              <div
                key={s.src}
                className={`group relative overflow-hidden ${
                  s.feature ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={s.src}
                  alt={`${s.label} handled by OneNas`}
                  className="h-full w-full object-cover"
                />
                {/* Labels sit at the top: the 2001 badge overlaps the bottom
                    of the card, and at the bottom it buried a whole tile. */}
                <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/65 to-transparent pb-6" />
                <span
                  className={`absolute left-2 top-1.5 font-semibold uppercase tracking-[0.1em] text-white ${
                    s.feature ? "text-[11px]" : "text-[9px]"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-xl bg-gradient-to-br from-forest to-forest-mid p-6 text-white shadow-card-hover sm:block">
            <div className="font-display text-4xl font-semibold">2001</div>
            <div className="mt-1 text-sm text-white/70">Established</div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">Who We Are</p>
          <h2 className="heading-xl mt-5 text-3xl text-forest md:text-4xl">
            A trusted name in recycling and global commodity trade.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/75">
            We purchase, process, trade, export and recycle recoverable materials
            for manufacturers, industrial facilities, municipalities and commodity
            buyers worldwide. Our integrated model connects the material that
            operations no longer need with the markets that value it most.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald" size={20} />
                <span className="text-charcoal/80">{p}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-forest"
          >
            Learn more about us
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
