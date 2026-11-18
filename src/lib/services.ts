import {
  Newspaper,
  Recycle,
  Wrench,
  Droplets,
  CircleDot,
  Ship,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  image: string;
  /** Matching category in src/lib/gallery.ts, when we have site photos for it. */
  galleryCategory?: string;
  grades: string[];
  detail: string;
};

export const services: Service[] = [
  {
    slug: "used-oil",
    icon: Droplets,
    title: "Used Oil Recycling",
    short:
      "We pick up used engine oil directly from your facility — handling collection, transportation, and responsible recycling so you don't have to.",
    image: "/images/gallery/oil_1.jpeg",
    galleryCategory: "Used Oil",
    grades: ["On-Site Collection", "Safe Transport", "Recovery Markets", "Sustainability"],
    detail:
      "OneNas provides direct pick-up of used engine oil from industrial facilities, garages, manufacturers, and fleet operators. Our team handles the full process — collection, safe transportation, and delivery to licensed recovery facilities and refiners. We take care of all logistics and documentation, ensuring your operation stays compliant while valuable resources are directed toward responsible reuse.",
  },
  {
    slug: "scrap-paper",
    icon: Newspaper,
    title: "Scrap Paper Recycling",
    short:
      "Supplying recovered paper grades to paper mills, recycling facilities, and other downstream markets worldwide.",
    image: "/images/services/paper_bales.jpg",
    galleryCategory: "Scrap Paper",
    grades: ["OCC", "Mixed Paper", "Newsprint", "Cardboard"],
    detail:
      "OneNas sources and supplies recovered paper products to recycling facilities, paper mills, and industrial buyers worldwide. Through our extensive network and logistics expertise, we help move quality fiber materials efficiently across global markets.",
  },
  {
    slug: "plastic",
    icon: Recycle,
    title: "Plastic Recycling",
    short:
      "Connecting recyclable plastics with processors, manufacturers, and other recycling markets across global supply chains.",
    image: "/images/services/plastic_scrap.jpg",
    galleryCategory: "Plastic Recycling",
    grades: ["PET", "HDPE", "LDPE", "Industrial Plastics"],
    detail:
      "OneNas sources and supplies recyclable plastic materials through a trusted network of processors, manufacturers, and recycling partners. By facilitating efficient material flows and market access, we help support circular economy initiatives while delivering reliable trading solutions across global markets.",
  },
  {
    slug: "metal",
    icon: Wrench,
    title: "Metal Recycling",
    short:
      "Sourcing and supplying ferrous and non-ferrous metals to foundries, smelters, and industrial consumers worldwide.",
    image: "/images/services/Metal_scrap.jpg",
    galleryCategory: "Metal Recycling",
    grades: ["Ferrous Metals", "Non-Ferrous Metals", "Industrial Scrap", "Heavy Melting Scrap (HMS)"],
    detail:
      "OneNas facilitates the trading and recycling of ferrous and non-ferrous metals for industrial buyers, processors, and manufacturers. Leveraging strong market relationships and international logistics expertise, we help move valuable metal resources efficiently throughout the global supply chain.",
  },
  {
    slug: "tire",
    icon: CircleDot,
    title: "Tire Recycling",
    short:
      "Connecting end-of-life tires with recyclers, processors, and resource recovery partners across international markets.",
    image: "/images/services/tire.jpg",
    galleryCategory: "Tire Recycling",
    grades: ["Global Sourcing", "Tire Trading", "Industry Partnerships"],
    detail:
      "OneNas specializes in the purchase and sale of end-of-life tires, connecting suppliers, recyclers, and downstream processors across international markets through reliable trading and logistics solutions.",
  },
  {
    slug: "commodity-trading",
    icon: Ship,
    title: "Commodity Trading",
    short:
      "Supporting manufacturers, recyclers, and industrial buyers through global sourcing and commodity trading solutions.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1600&auto=format&fit=crop",
    grades: ["International Sourcing", "Export & Import", "Supply Chain Management"],
    detail:
      "OneNas provides commodity trading solutions across a range of recyclable and industrial materials. With over two decades of experience, we connect buyers and sellers through reliable sourcing, competitive market access, and efficient logistics coordination across international markets.",
  },
];
