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
          src="/images/homepage.avif"
          alt="Recycling facility processing recovered materials"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-forest/40" />
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
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white/90 backdrop-blur"
          >
            <MapPin size={13} /> Canada &nbsp;•&nbsp; United Arab Emirates
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
            className="heading-xl mt-6 text-4xl text-white sm:text-6xl lg:text-[4.4rem]"
          >
            Transforming Waste<br />
            Into Value{" "}
            <span className="italic text-emerald-light">Since 2001</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            International recycling and commodity trading solutions across Canada
            and the UAE — built on two decades of reliable processing, logistics,
            and global trade.
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
