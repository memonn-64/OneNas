import { Mail } from "lucide-react";
import { Reveal, RevealGroup, Item } from "@/components/motion";

// Replace placeholder data with actual OneNas leadership information.
const team = [
  {
    name: "Asif Memon",
    title: "Founder & CEO",
    bio: "With over 20 years of experience in international recycling and commodity trading, our CEO has led OneNas from a focused recovered-material trader into an integrated operation spanning Canada, the United States and the UAE.",
    email: "onenasgroup@gmail.com",
    // Replace with actual photo: /images/team/ceo.jpg
    photo: "/images/team/asif.png",
    initials: "CEO",
  },
  {
    name: "Ayaan Memon",
    title: "Director of Operations",
    bio: "Oversees day-to-day processing, logistics, and quality control across our Canadian and UAE operations, ensuring reliable service for every partner.",
    email: "ayaan.onenas@outlook.com",
    // Replace with actual photo: /images/team/director-operations.jpg
    photo: "/images/team/ayaan.png",
    initials: "DO",
  },
  {
    name: "Nabil Memon",
    title: "Logistics Coordinator",
    bio: "Coordinates outbound shipments across our material streams — booking containers, preparing export documentation, and keeping buyers in North America and overseas updated from pickup through delivery.",
    email: "Nabil.onenas@outlook.com",
    // Replace with actual photo: /images/team/logistics-coordinator.jpg
    photo: "/images/team/Nabil.jpg",
    initials: "LC",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Our People</p>
          <h2 className="heading-xl mt-5 text-3xl text-forest md:text-4xl">
            Leadership built on two decades of expertise.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/70">
            Our leadership team brings deep experience in recycling operations,
            international commodity trading, and sustainable logistics.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Item
              key={member.title}
              className="group rounded-2xl border border-gray-line bg-white p-0 overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Replace with actual OneNas team photo */}
              <div className="relative h-64 w-full bg-gradient-to-br from-forest to-royal overflow-hidden">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-display text-5xl font-semibold text-white/30">
                      {member.initials}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-7">
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-royal">
                  {member.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
                  {member.bio}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald transition-colors hover:text-forest"
                >
                  <Mail size={15} />
                  {member.email}
                </a>
              </div>
            </Item>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
