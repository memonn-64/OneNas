import type { Metadata } from "next";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/motion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact our recycling and commodity-trading team in Canada and the UAE. Request a quote or discuss your material.",
};

const offices = [
  { ...site.offices.canada, phone: site.phoneCanada, tag: "CA" },
  { ...site.offices.uae, phone: site.phoneUAE, tag: "UAE" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your material."
        intro="Request a quote, ask about a program, or connect with our trading desk. We respond to every enquiry from Canada and the UAE."
        image="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2400&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="heading-xl text-3xl text-forest md:text-4xl">
              Request a quote
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-charcoal/70">
              Share a few details and our team will follow up to scope pricing,
              logistics and timelines.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-8">
            <div className="rounded-2xl bg-gray-soft p-8">
              <h3 className="font-display text-xl font-semibold text-forest">
                Get in touch
              </h3>
              <ul className="mt-6 space-y-5 text-charcoal/80">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-emerald" />
                  <a href={`mailto:${site.email}`} className="link-underline">{site.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-emerald" />
                  <span>
                    {site.phoneCanada} <span className="text-charcoal/40">(Canada)</span><br />
                    {site.phoneUAE} <span className="text-charcoal/40">(UAE)</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-emerald" />
                  <span>{site.hours}</span>
                </li>
              </ul>
            </div>

            {offices.map((o) => (
              <div key={o.label} className="rounded-2xl border border-gray-line p-8">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-emerald" />
                  <h3 className="font-display text-lg font-semibold text-charcoal">{o.label}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{o.address}</p>
                <p className="mt-2 text-sm text-charcoal/65">{o.phone}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <Reveal className="overflow-hidden rounded-2xl border border-gray-line">
            <iframe
              title="Office locations map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-100%2C20%2C60%2C60&layer=mapnik"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
          <p className="mt-4 text-center text-sm text-charcoal/50">
            Replace this embed with a Google Maps iframe pinned to your Canada and UAE office addresses.
          </p>
        </div>
      </section>
    </>
  );
}
