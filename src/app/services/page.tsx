import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/motion";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Scrap paper, plastic, metal, used engine oil and tire recycling plus international commodity trading across Canada and the UAE.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Integrated recycling and commodity-trading programs."
        intro="From recovered fibre to non-ferrous metals, we manage each material stream end to end — purchasing, processing, exporting and recycling."
        image="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=2400&auto=format&fit=crop"
      />

      <div className="divide-y divide-gray-line">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} className="scroll-mt-24 py-20 md:py-28">
            <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-2xl shadow-card">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[5/4] w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest/5 text-forest">
                  <s.icon size={22} strokeWidth={1.9} />
                </span>
                <h2 className="heading-xl mt-6 text-3xl text-forest md:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-charcoal/75">
                  {s.detail}
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {s.grades.map((g) => (
                    <li key={g} className="flex items-center gap-2.5 text-charcoal/80">
                      <Check size={18} className="shrink-0 text-emerald" />
                      <span className="font-medium">{g}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
