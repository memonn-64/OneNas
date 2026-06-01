import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { Reveal, RevealGroup, Item } from "@/components/motion";

export default function Services() {
  return (
    <section className="bg-gray-soft py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What We Do</p>
          <h2 className="heading-xl mt-5 text-3xl text-forest md:text-4xl">
            Recycling and trading across five core material streams.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Item key={s.slug}>
              <Link
                href={`/services#${s.slug}`}
                className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest/5 text-forest transition-colors group-hover:bg-emerald group-hover:text-white">
                    <s.icon size={22} strokeWidth={1.9} />
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-charcoal/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald"
                  />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">
                  {s.short}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.grades.slice(0, 4).map((g) => (
                    <span
                      key={g}
                      className="rounded-full bg-gray-soft px-3 py-1 text-xs font-medium text-charcoal/70"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </Link>
            </Item>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
