import type { Service } from "@/types";

const defaultFaqs = [
  {
    question: "What areas do you serve in Pakistan?",
    answer:
      "We are based in Lahore and serve clients across Pakistan including Islamabad, Rawalpindi, Faisalabad, Multan, and nationwide for larger projects.",
  },
  {
    question: "Do you provide free quotations?",
    answer:
      "Yes, we offer free on-site consultations and detailed quotations with no obligation. Contact us to schedule a visit.",
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "Timelines vary by project scope. Standard residential installations take 2-4 weeks, while commercial projects may take 4-8 weeks from design approval.",
  },
  {
    question: "Do you offer warranty on your products?",
    answer:
      "Yes, all our products come with manufacturer warranty and our own workmanship guarantee for complete peace of mind.",
  },
];

export const services: Service[] = [
  {
    slug: "aluminium-doors-windows",
    title: "Aluminium Doors & Windows",
    shortDescription:
      "Premium aluminium doors and windows with thermal break technology for superior insulation and durability.",
    description:
      "Our aluminium doors and windows combine sleek aesthetics with exceptional performance. Engineered with thermal break technology, they provide excellent insulation while maintaining slim profiles that maximize natural light. Perfect for modern homes and commercial buildings across Pakistan.",
    icon: "DoorOpen",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    benefits: [
      "Superior thermal insulation",
      "Corrosion-resistant powder coating",
      "Low maintenance requirements",
      "Custom sizes and finishes",
      "Enhanced security features",
      "Energy-efficient design",
    ],
    features: [
      "Sliding, casement, and tilt-turn options",
      "Double and triple glazing available",
      "Multi-point locking systems",
      "Wide range of color finishes",
      "Sound insulation up to 42dB",
      "Weather-sealed frames",
    ],
    process: [
      "Site survey and measurements",
      "Design selection and quotation",
      "Custom fabrication",
      "Professional installation",
      "Quality inspection and handover",
    ],
    faqs: defaultFaqs,
    seoTitle: "Aluminium Doors & Windows in Pakistan",
    seoDescription:
      "Premium aluminium doors and windows in Lahore, Pakistan. Thermal break technology, custom designs, and expert installation by Azan Glass.",
  },
  {
    slug: "glass-partitions",
    title: "Glass Partitions",
    shortDescription:
      "Elegant glass partition systems for offices and commercial spaces that maximize light and create modern aesthetics.",
    description:
      "Transform your office or commercial space with our premium glass partition systems. From frameless designs to aluminum-framed solutions, we create functional and beautiful spaces that promote collaboration while maintaining privacy where needed.",
    icon: "Columns",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    benefits: [
      "Maximizes natural light",
      "Creates open, modern workspaces",
      "Acoustic privacy options available",
      "Flexible and reconfigurable",
      "Professional corporate appearance",
      "Quick installation",
    ],
    features: [
      "Frameless and framed systems",
      "Frosted and tinted glass options",
      "Sliding and fixed configurations",
      "Integrated blinds",
      "Fire-rated glass available",
      "Custom branding integration",
    ],
    process: [
      "Space planning consultation",
      "Design and layout approval",
      "Glass cutting and preparation",
      "Professional installation",
      "Finishing and cleanup",
    ],
    faqs: defaultFaqs,
    seoTitle: "Glass Partition Solutions in Pakistan",
    seoDescription:
      "Professional glass partition installation for offices and commercial spaces in Lahore, Pakistan. Modern designs by Azan Glass.",
  },
  {
    slug: "shower-enclosures",
    title: "Shower Enclosures",
    shortDescription:
      "Luxurious shower enclosures and bathroom glass solutions crafted for style, safety, and easy maintenance.",
    description:
      "Elevate your bathroom with our custom shower enclosures featuring tempered safety glass, premium hardware, and elegant designs. From walk-in showers to corner enclosures, we create spa-like experiences for your home.",
    icon: "Droplets",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    benefits: [
      "Tempered safety glass standard",
      "Water-tight sealing",
      "Easy to clean surfaces",
      "Space-saving designs",
      "Custom sizing available",
      "Premium hardware finishes",
    ],
    features: [
      "Frameless and semi-frameless options",
      "Sliding and hinged doors",
      "Anti-limescale coatings",
      "Corner and walk-in designs",
      "Rain glass and clear options",
      "Chrome, matte black, and gold hardware",
    ],
    process: [
      "Bathroom measurement",
      "Design and hardware selection",
      "Glass tempering and fabrication",
      "Careful installation",
      "Sealing and quality check",
    ],
    faqs: defaultFaqs,
    seoTitle: "Shower Enclosures in Lahore, Pakistan",
    seoDescription:
      "Custom shower enclosures and bathroom glass in Lahore. Tempered glass, premium hardware, and expert installation by Azan Glass.",
  },
  {
    slug: "shop-front-glass",
    title: "Shop Front Glass Systems",
    shortDescription:
      "Stunning shop front glass installations that attract customers and showcase your products beautifully.",
    description:
      "Make a powerful first impression with our shop front glass systems. We design and install storefront glazing that maximizes product visibility while ensuring security and weather protection for retail businesses across Pakistan.",
    icon: "Store",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    benefits: [
      "Maximum product visibility",
      "Enhanced curb appeal",
      "Security glass options",
      "Weather-resistant installation",
      "Custom branding integration",
      "Increased foot traffic potential",
    ],
    features: [
      "Full glass facades",
      "Automatic sliding doors",
      "Security laminated glass",
      "LED integration options",
      "Curved glass capabilities",
      "Night security shutters",
    ],
    process: [
      "Retail space assessment",
      "Design and compliance review",
      "Structural preparation",
      "Glass installation",
      "Final inspection and handover",
    ],
    faqs: defaultFaqs,
    seoTitle: "Shop Front Glass Installation in Pakistan",
    seoDescription:
      "Professional shop front glass installation in Lahore and across Pakistan. Attract more customers with premium storefront glazing by Azan Glass.",
  },
  {
    slug: "custom-fabrication",
    title: "Custom Glass & Aluminium Fabrication",
    shortDescription:
      "Bespoke glass and aluminium fabrication for unique architectural requirements and custom projects.",
    description:
      "When standard solutions won't do, our custom fabrication team brings your vision to life. From curved glass panels to intricate aluminium structures, we handle complex projects with precision engineering and expert craftsmanship.",
    icon: "Hammer",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    benefits: [
      "Fully customized solutions",
      "Complex design capabilities",
      "Precision engineering",
      "One-of-a-kind installations",
      "Architect collaboration welcome",
      "Premium material selection",
    ],
    features: [
      "Curved and bent glass",
      "Structural glass systems",
      "Custom aluminium profiles",
      "CNC precision cutting",
      "Specialty coatings and finishes",
      "Prototype development",
    ],
    process: [
      "Design consultation",
      "Technical drawings and approval",
      "Prototype if required",
      "Precision fabrication",
      "Installation and commissioning",
    ],
    faqs: defaultFaqs,
    seoTitle: "Custom Aluminium Fabrication in Pakistan",
    seoDescription:
      "Bespoke glass and aluminium fabrication services in Pakistan. Custom designs, precision engineering by Azan Glass in Lahore.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const additionalServices = [
  {
    title: "Sliding Doors & Windows",
    description: "Smooth-operating sliding systems for patios, balconies, and large openings.",
    icon: "MoveHorizontal",
  },
  {
    title: "Office Glass Installations",
    description: "Complete office glazing solutions including conference rooms and reception areas.",
    icon: "Building",
  },
  {
    title: "Tempered & Toughened Glass",
    description: "Safety glass solutions for high-traffic and high-risk applications.",
    icon: "Shield",
  },
];
