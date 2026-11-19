export type GalleryItem = {
  src: string;
  caption: string;
  category: string;
};

// Add your images to /public/images/gallery/ and list them here.
export const gallery: GalleryItem[] = [
  { src: "/images/gallery/metal_1.jpeg", caption: "Metal Scrap", category: "Metal Recycling" },
  { src: "/images/gallery/metal.jpeg", caption: "Metal Scrap", category: "Metal Recycling" },
  { src: "/images/gallery/metal1.jpeg", caption: "Metal Scrap", category: "Metal Recycling" },
  { src: "/images/gallery/metal2.jpeg", caption: "Metal Scrap", category: "Metal Recycling" },
  { src: "/images/gallery/oil_1.jpeg", caption: "Used Oil", category: "Used Oil" },
  { src: "/images/gallery/oil_2.jpeg", caption: "Used Oil", category: "Used Oil" },
  { src: "/images/gallery/oil_3.jpeg", caption: "Used Oil", category: "Used Oil" },
  { src: "/images/gallery/paper_1.jpeg", caption: "Scrap Paper", category: "Scrap Paper" },
  { src: "/images/gallery/paper.jpeg", caption: "Scrap Paper", category: "Scrap Paper" },
  { src: "/images/gallery/paper1.jpeg", caption: "Scrap Paper", category: "Scrap Paper" },
  { src: "/images/gallery/paper2.jpeg", caption: "Scrap Paper", category: "Scrap Paper" },
  { src: "/images/gallery/paper3.jpeg", caption: "Scrap Paper", category: "Scrap Paper" },
  { src: "/images/gallery/paper4.jpeg", caption: "Scrap Paper", category: "Scrap Paper" },
  { src: "/images/gallery/plastic.jpeg", caption: "Plastic", category: "Plastic Recycling" },
  { src: "/images/gallery/plastic_2.jpeg", caption: "Plastic", category: "Plastic Recycling" },
  { src: "/images/gallery/plastic_4.jpeg", caption: "Plastic", category: "Plastic Recycling" },
  { src: "/images/gallery/plastic_6.jpeg", caption: "Plastic", category: "Plastic Recycling" },
  { src: "/images/gallery/tire.jpeg", caption: "Tires", category: "Tire Recycling" },
  { src: "/images/gallery/tire1.jpeg", caption: "Tires", category: "Tire Recycling" },
  { src: "/images/gallery/tire2.jpeg", caption: "Tires", category: "Tire Recycling" },
];

export const categories = [
  "All",
  ...Array.from(new Set(gallery.map((g) => g.category))),
];

/**
 * Gallery categories keyed by the matching service slug, so a service section
 * on /services can deep-link into the gallery filtered to its own material.
 */
export const categoryBySlug: Record<string, string> = {
  "used-oil": "Used Oil",
  "scrap-paper": "Scrap Paper",
  plastic: "Plastic Recycling",
  metal: "Metal Recycling",
  tire: "Tire Recycling",
};

export const slugByCategory: Record<string, string> = Object.fromEntries(
  Object.entries(categoryBySlug).map(([slug, category]) => [category, slug])
);

export function photosForCategory(category?: string): GalleryItem[] {
  if (!category) return [];
  return gallery.filter((g) => g.category === category);
}
