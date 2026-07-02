import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "luxury-villa-dha-lahore",
    title: "Luxury Villa - DHA Lahore",
    category: "Residential",
    location: "DHA Phase 6, Lahore",
    description:
      "Complete aluminium windows and sliding doors installation for a 10,000 sq ft luxury villa featuring floor-to-ceiling glass panels and thermal break systems.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    client: "Private Homeowner",
    year: "2024",
    services: ["Aluminium Doors & Windows", "Sliding Systems"],
  },
  {
    slug: "corporate-tower-gulberg",
    title: "Corporate Tower - Gulberg",
    category: "Commercial",
    location: "Gulberg III, Lahore",
    description:
      "Full facade glazing and glass partition installation for a 15-story corporate tower including curtain wall system and executive floor partitions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    ],
    client: "Corporate Developer",
    year: "2024",
    services: ["Glass Partitions", "Office Glass"],
  },
  {
    slug: "fashion-boutique-mall",
    title: "Fashion Boutique - Packages Mall",
    category: "Retail",
    location: "Packages Mall, Lahore",
    description:
      "Premium shop front glass system with automatic sliding doors and LED-integrated display windows for a high-end fashion retailer.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      "https://images.unsplash.com/photo-1555529669-e69e7d0b0604?w=800&q=80",
    ],
    client: "Fashion Retail Group",
    year: "2023",
    services: ["Shop Front Glass"],
  },
  {
    slug: "tech-office-johar-town",
    title: "Tech Office - Johar Town",
    category: "Office",
    location: "Johar Town, Lahore",
    description:
      "Modern open-plan office with frameless glass partitions, meeting room enclosures, and acoustic glass solutions for a growing tech startup.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    ],
    client: "Tech Startup",
    year: "2023",
    services: ["Glass Partitions", "Office Glass"],
  },
  {
    slug: "restaurant-mm-alam-road",
    title: "Fine Dining Restaurant - MM Alam Road",
    category: "Restaurant",
    location: "MM Alam Road, Lahore",
    description:
      "Elegant glass facade and interior partitions creating an open, inviting atmosphere for a premium dining establishment.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    ],
    client: "Restaurant Group",
    year: "2023",
    services: ["Shop Front Glass", "Glass Partitions"],
  },
  {
    slug: "apartment-complex-bahria",
    title: "Apartment Complex - Bahria Town",
    category: "Residential",
    location: "Bahria Town, Lahore",
    description:
      "High-quality balcony glazing and window solutions for a 200-unit residential apartment complex with standardized designs and bulk pricing.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    client: "Real Estate Developer",
    year: "2022",
    services: ["Aluminium Doors & Windows"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
