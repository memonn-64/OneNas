"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-forest">
      <div className="absolute inset-0">
        {/* Replace with actual OneNas image: /images/hero/hero-main.jpg */}
        <img
          src="/images/gallery/plastic_4.jpeg"
          alt="Baled recovered plastic stacked and ready for export"
          className="h-full w-full object-cover"
        />
        {/* Light enough that the bales still read as a photo rather than
            flattening into a green field, but no lighter: over the brightest
            part of the photo this still keeps the subheading at ~5:1. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,63,38,0.86)_0%,rgba(20,87,47,0.60)_58%,rgba(20,87,47,0)_92%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
      </div>

      <div className="container-x relative pt-28 pb-36 md:pb-40">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          className="max-w-3xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-pale/35 bg-emerald-pale/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur"
          >
            <MapPin size={13} className="text-emerald-pale" />
            Canada
            <span className="mx-1 text-emerald-pale">•</span>
            United States
            <span className="mx-1 text-emerald-pale">•</span>
            United Arab Emirates
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
            className="heading-xl mt-6 text-4xl text-white sm:text-6xl lg:text-[4.4rem]"
          >
            Transforming Waste<br />
            Into Value{" "}
            <span className="italic text-emerald-pale">Since 2001</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
            className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-white/90 md:text-xl"
          >
            Recycling and commodity trading across{" "}
            <span className="font-semibold text-emerald-pale">Canada</span>, the{" "}
            <span className="font-semibold text-emerald-pale">United States</span> and the{" "}
            <span className="font-semibold text-emerald-pale">UAE</span>.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-royal px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-royal-mid hover:shadow-xl"
            >
              Request a Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
}
