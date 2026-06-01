import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion";

const points = [
  "Two decades of recycling and commodity-trading expertise",
  "Established operations in Canada and the United Arab Emirates",
  "End-to-end purchasing, processing, export and recycling",
];

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <img
              src="https://images.unsplash.com/photo-1591193686104-fdccd5e6e35e0?q=80&w=1600&auto=format&fit=crop"
              alt="Baled recovered material ready for export"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-forest p-6 text-white shadow-card-hover sm:block lg:-right-8">
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
