import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/motion";
import { services } from "@/lib/services";
import { photosForCategory } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Scrap paper, plastic, metal, used engine oil and tire recycling plus international commodity trading across Canada, the United States and the UAE.",
};

const MAX_THUMBS = 3;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Integrated recycling and commodity-trading programs."
        intro="From recovered fibre to non-ferrous metals, we manage each material stream end to end — purchasing, processing, exporting and recycling."
        image="/images/gallery/metal2.jpeg"
      />

      <div className="divide-y divide-gray-line">
        {services.map((s, i) => {
          const allPhotos = photosForCategory(s.galleryCategory);
          // Thumbnails skip whichever photo is already shown full-size above.
          const photos = allPhotos.filter((p) => p.src !== s.image);
          const thumbs = photos.slice(0, MAX_THUMBS);
          const remaining = photos.length - thumbs.length;

          return (
            <section
              key={s.slug}
              id={s.slug}
              className={`scroll-mt-24 py-20 md:py-28 ${i % 2 === 1 ? "bg-mint" : ""}`}
            >
              <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="overflow-hidden rounded-2xl shadow-card">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="aspect-[5/4] w-full object-cover"
                    />
                  </div>

                  {thumbs.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      {thumbs.map((p, t) => (
                        <Link
                          key={p.src}
                          href={`/industries#${s.slug}`}
                          aria-label={`View ${s.title} photos in the gallery`}
                          className="group relative block overflow-hidden rounded-xl shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
                        >
                          <img
                            src={p.src}
                            alt={p.caption}
                            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {t === thumbs.length - 1 && remaining > 0 ? (
                            <span className="absolute inset-0 grid place-items-center bg-forest/65 font-display text-lg font-semibold text-white">
                              +{remaining}
                            </span>
                          ) : (
                            <span className="absolute inset-0 bg-forest/0 transition-colors duration-300 group-hover:bg-forest/25" />
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
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

                  {allPhotos.length > 0 && (
                    <Link
                      href={`/industries#${s.slug}`}
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-royal transition-colors hover:text-forest"
                    >
                      View all {allPhotos.length} photos in the gallery
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  )}
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBand />
    </>
  );
}
