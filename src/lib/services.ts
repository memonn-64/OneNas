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
  grades: string[];
  detail: string;
};

export const services: Service[] = [
  {
    slug: "scrap-paper",
    icon: Newspaper,
    title: "Scrap Paper Recycling",
    short:
      "Sourcing, baling and export of recovered fibre grades for global paper mills.",
    image:
      "https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=1600&auto=format&fit=crop",
    grades: ["OCC", "Mixed Paper", "Newsprint", "Cardboard"],
    detail:
      "We collect, sort and bale recovered fibre to consistent, mill-ready specifications, then move it to domestic and international buyers through established logistics channels.",
  },
  {
    slug: "plastic",
    icon: Recycle,
    title: "Plastic Recycling",
    short:
      "Recovery and trading of post-industrial and post-consumer polymers.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1600&auto=format&fit=crop",
    grades: ["PET", "HDPE", "LDPE", "Industrial Plastics"],
    detail:
      "From baled bottles to industrial regrind, we aggregate, grade and supply polymer streams to reprocessors and manufacturers seeking reliable recycled feedstock.",
  },
  {
    slug: "metal",
    icon: Wrench,
    title: "Metal Recycling",
    short:
      "Ferrous and non-ferrous scrap handling for industrial and commercial generators.",
    image:
      "https://images.unsplash.com/photo-1605557202138-c7e5f8e8e7a3?q=80&w=1600&auto=format&fit=crop",
    grades: ["Ferrous Metals", "Non-Ferrous Metals", "Industrial Scrap"],
    detail:
      "We purchase and process metal scrap from facilities of every size, recovering value through accurate grading, processing and access to international metal markets.",
  },
  {
    slug: "used-engine-oil",
    icon: Droplets,
    title: "Used Oil Recovery",
    short:
      "Compliant collection, processing and recovery of used engine oil.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
    grades: ["Collection", "Processing", "Recovery"],
    detail:
      "Our used-oil program keeps a hazardous waste stream out of the environment, channelling collected oil through responsible processing and recovery pathways.",
  },
  {
    slug: "tires",
    icon: CircleDot,
    title: "Tire Recycling",
    short:
      "Collection and resource recovery that diverts end-of-life tires from landfill.",
    image:
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=1600&auto=format&fit=crop",
    grades: ["Collection", "Recycling", "Resource Recovery"],
    detail:
      "End-of-life tires are collected and directed to recycling and resource-recovery outlets, turning a difficult waste stream into usable downstream material.",
  },
  {
    slug: "commodity-trading",
    icon: Ship,
    title: "Commodity Trading",
    short:
      "International sourcing, export, import and supply-chain management.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1600&auto=format&fit=crop",
    grades: ["International Sourcing", "Export & Import", "Supply Chain Management"],
    detail:
      "Our trading desk connects suppliers and buyers across borders, managing pricing, documentation, logistics and compliance for dependable recycled-commodity flows.",
  },
];
