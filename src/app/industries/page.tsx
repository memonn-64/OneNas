"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { Reveal, RevealGroup, Item } from "@/components/motion";

// Add your images to /public/images/ and list them here.
// Format: { src, caption, category }
const gallery = [
  {
    src: "/images/gallery/metal_1.jpeg",
    caption: "Metal Scrap — Ferrous & Non-Ferrous",
    category: "Metal Recycling",
  },
  {
    src: "/images/gallery/oil_1.jpeg",
    caption: "Used Oil — On-Site Collection",
    category: "Used Oil",
  },
  {
    src: "/images/gallery/oil_2.jpeg",
    caption: "Used Oil — Facility Pick-Up",
    category: "Used Oil",
  },
  {
    src: "/images/gallery/oil_3.jpeg",
    caption: "Used Oil — Ready for Recovery",
    category: "Used Oil",
  },
  {
    src: "/images/gallery/paper_1.jpeg",
    caption: "Scrap Paper — Ready for Market",
    category: "Scrap Paper",
  },
  {
    src: "/images/gallery/paper_2.jpeg",
    caption: "Paper Bales — Recovered & Sorted",
    category: "Scrap Paper",
  },
  {
    src: "/images/gallery/paper_3.jpeg",
    caption: "Recovered Paper — Graded for Export",
    category: "Scrap Paper",
  },
  {
    src: "/images/gallery/plastic_1.jpeg",
    caption: "Plastic Scrap — Sorted & Graded",
    category: "Plastic Recycling",
  },
  {
    src: "/images/gallery/plastic_2.jpeg",
    caption: "Plastic Bales — Ready for Processing",
    category: "Plastic Recycling",
  },
  {
    src: "/images/gallery/plastic_3.jpeg",
    caption: "Recovered Plastic — Graded & Sorted",
    category: "Plastic Recycling",
  },
  {
    src: "/images/gallery/plastic_4.jpeg",
    caption: "Plastic Recovery — Industrial Grade",
    category: "Plastic Recycling",
  },
  {
    src: "/images/gallery/plastic_5.jpeg",
    caption: "Plastic Scrap — Mixed Grades",
    category: "Plastic Recycling",
  },
  {
    src: "/images/gallery/plastic_6.jpeg",
    caption: "Plastic Bales — Export Ready",
    category: "Plastic Recycling",
  },
  {
    src: "/images/gallery/tire_1.jpeg",
    caption: "Tire Collection — Ready for Recovery",
    category: "Tire Recycling",
  },
  {
    src: "/images/about/5streams.png",
    caption: "Our Five Core Material Streams",
    category: "Operations",
  },
  {
    src: "/images/about/factory.png",
    caption: "Processing Facility",
    category: "Operations",
  },
];

const categories = ["All", ...Array.from(new Set(gallery.map((g) => g.category)))];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? gallery : gallery.filter((g) => g.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A look at what we do."
        intro="Real materials, real operations. Browse our work across metal, paper, plastic, oil and tire recovery."
        image="/images/gallery/plastic_2.jpeg"
      />

      <section className="py-24 md:py-32">
        <div className="container-x">

          {/* Category filter */}
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                    active === cat
                      ? "bg-royal text-white shadow-md"
                      : "border border-gray-line bg-white text-charcoal/70 hover:border-royal/40 hover:text-royal"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Item key={item.src}>
                <button
                  onClick={() => setLightbox(gallery.indexOf(item))}
                  className="group relative w-full overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="mb-1 inline-block rounded-full bg-royal px-3 py-0.5 text-xs font-semibold text-white">
                      {item.category}
                    </span>
                    <p className="text-sm font-medium text-white">{item.caption}</p>
                  </div>
                  <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn size={16} className="text-royal" />
                  </div>
                </button>
              </Item>
            ))}
          </RevealGroup>

          <Reveal className="mt-8 text-center text-sm text-charcoal/40">
            More images coming soon — drop your photos in /public/images/ to add them here.
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <div
            className="max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[lightbox].src}
              alt={gallery[lightbox].caption}
              className="max-h-[80vh] w-full object-contain"
            />
            <div className="bg-white px-6 py-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-royal">
                {gallery[lightbox].category}
              </span>
              <p className="mt-1 font-medium text-charcoal">{gallery[lightbox].caption}</p>
            </div>
          </div>

          {/* Prev / Next */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l! > 0 ? l! - 1 : gallery.length - 1)); }}
          >
            ‹
          </button>
          <button
            className="absolute right-16 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l! < gallery.length - 1 ? l! + 1 : 0)); }}
          >
            ›
          </button>
        </div>
      )}

      <CtaBand />
    </>
  );
}
