"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Recycle } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(15,81,50,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            className={`grid h-9 w-9 place-items-center rounded-md transition-colors ${
              scrolled ? "bg-forest text-white" : "bg-white/15 text-white backdrop-blur"
            }`}
          >
            <Recycle size={20} strokeWidth={2.2} />
          </span>
          <span
            className={`font-display text-lg font-semibold tracking-tight transition-colors ${
              scrolled ? "text-forest" : "text-white"
            }`}
          >
            {site.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`link-underline text-sm font-medium transition-colors ${
                    scrolled
                      ? active
                        ? "text-emerald"
                        : "text-charcoal/80 hover:text-forest"
                      : active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-royal-mid hover:shadow-lg"
          >
            Request a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden ${scrolled || open ? "text-forest" : "text-white"}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-line bg-white lg:hidden">
          <ul className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="block py-3 text-base font-medium text-charcoal"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/contact"
                className="block rounded-full bg-royal px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
