"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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

  // The bar is white once you scroll, and also while the mobile menu is down.
  const onLight = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        onLight
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(20,87,47,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        {/* Both prints of the lockup are mounted so the swap between the
            transparent navbar (dark photo behind it) and the scrolled white one
            cross-fades, rather than flashing while a new src loads. */}
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="relative block h-10 w-[150px] shrink-0 md:h-11 md:w-[168px]"
        >
          <img
            src="/images/logo.png"
            alt={site.name}
            className={`absolute left-0 top-1/2 h-full w-auto -translate-y-1/2 transition-opacity duration-300 ${
              onLight ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src="/images/logo-light.png"
            alt=""
            aria-hidden="true"
            className={`absolute left-0 top-1/2 h-full w-auto -translate-y-1/2 transition-opacity duration-300 ${
              onLight ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`link-underline text-sm font-medium transition-colors ${
                    onLight
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
          className={`lg:hidden ${onLight ? "text-forest" : "text-white"}`}
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
