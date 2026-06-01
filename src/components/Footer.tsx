import Link from "next/link";
import { Recycle, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-white/10">
                <Recycle size={20} strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-semibold">{site.name}</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              International recycling and commodity trading since {site.founded}.
              Turning recoverable materials into measurable value across Canada and
              the UAE.
            </p>
            <Link
              href={site.linkedin}
              aria-label="LinkedIn"
              className="mt-6 inline-grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
            >
              <Linkedin size={18} />
            </Link>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-emerald-light" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-emerald-light" />
                <span>
                  {site.phoneCanada} <span className="text-white/40">(CA)</span>
                  <br />
                  {site.phoneUAE} <span className="text-white/40">(UAE)</span>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Offices
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-emerald-light" />
                <span>
                  <span className="block font-medium text-white">
                    {site.offices.canada.label}
                  </span>
                  {site.offices.canada.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-emerald-light" />
                <span>
                  <span className="block font-medium text-white">
                    {site.offices.uae.label}
                  </span>
                  {site.offices.uae.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>{site.hours}</p>
        </div>
      </div>
    </footer>
  );
}
