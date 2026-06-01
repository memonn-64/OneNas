import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./motion";

export default function CtaBand({
  title = "Let's build a more sustainable future together.",
  text = "Whether you generate recoverable material or source recycled commodities, our team is ready to structure a reliable, compliant program for your operation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest">
      <div className="absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%">
          <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>
      <div className="container-x relative py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="heading-xl text-3xl text-white md:text-5xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {text}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-light hover:shadow-lg"
            >
              Request a Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              About Our Company
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
