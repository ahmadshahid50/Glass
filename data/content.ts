import type { FAQ, TeamMember, TimelineEvent, GalleryImage, SEOPage } from "@/types";

export const homeFaqs: FAQ[] = [
  {
    question: "What types of glass and aluminium products do you offer?",
    answer:
      "We offer a comprehensive range including aluminium doors and windows, glass partitions, shower enclosures, shop front glass, office installations, tempered glass, and custom fabrication services.",
  },
  {
    question: "How do I get a quote for my project?",
    answer:
      "Simply fill out our contact form, call us, or message us on WhatsApp. We'll schedule a free on-site consultation and provide a detailed quotation within 48 hours.",
  },
  {
    question: "Do you work with architects and builders?",
    answer:
      "Absolutely! We regularly collaborate with architects, interior designers, and construction companies on residential and commercial projects across Pakistan.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "We provide manufacturer warranty on all products plus our own workmanship guarantee. Our systems come with up to 10-year warranty, while aluminium products have 5-year warranty.",
  },
  {
    question: "Can you handle large commercial projects?",
    answer:
      "Yes, we have the capacity and experience to handle large-scale commercial projects including high-rise buildings, shopping malls, and office complexes.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, cheques, and cash payments. For larger projects, we offer flexible payment schedules tied to project milestones.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Muhammad Mian",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "With over 20 years in the glass and aluminium industry, Muhammad founded Azan Glass with a vision to bring international-quality solutions to Pakistan.",
  },
  {
    name: "Hassan Ahmed",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Hassan oversees all project operations ensuring timely delivery and maintaining our high quality standards across every installation.",
  },
  {
    name: "Aisha Malik",
    role: "Design Head",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Aisha leads our design team, creating custom solutions that blend aesthetics with functionality for residential and commercial clients.",
  },
  {
    name: "Imran Shah",
    role: "Technical Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bio: "Imran brings engineering expertise to complex projects, ensuring structural integrity and compliance with international standards.",
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2008",
    title: "Company Founded",
    description: "Azan Glass established in Lahore with a small workshop and big dreams.",
  },
  {
    year: "2012",
    title: "First Major Contract",
    description: "Secured first large commercial project for a shopping mall in Lahore.",
  },
  {
    year: "2015",
    title: "Service Expansion",
    description: "Expanded services to include more premium aluminium and glass solutions.",
  },
  {
    year: "2018",
    title: "New Manufacturing Facility",
    description: "Opened state-of-the-art fabrication facility with CNC machinery.",
  },
  {
    year: "2021",
    title: "1000+ Projects Milestone",
    description: "Celebrated completion of over 1000 successful projects nationwide.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Recognized as one of Pakistan's leading glass and aluminium companies.",
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "1", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: "Aluminium window installation", category: "Doors & Windows" },
  { id: "2", src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", alt: "Sliding door installation", category: "Doors & Windows" },
  { id: "3", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", alt: "Office glass partition", category: "Glass Partitions" },
  { id: "4", src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80", alt: "Shop front glass", category: "Shop Fronts" },
  { id: "5", src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", alt: "Shower enclosure", category: "Shower Enclosures" },
  { id: "6", src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80", alt: "Modern office glass", category: "Office Glass" },
  { id: "7", src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", alt: "Luxury villa windows", category: "Doors & Windows" },
  { id: "8", src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", alt: "Commercial building facade", category: "Shop Fronts" },
  { id: "9", src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80", alt: "Apartment building glazing", category: "Doors & Windows" },
  { id: "10", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", alt: "Restaurant glass facade", category: "Shop Fronts" },
  { id: "11", src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80", alt: "Custom glass fabrication", category: "Office Glass" },
  { id: "12", src: "https://images.unsplash.com/photo-1555529669-e69e7d0b0604?w=600&q=80", alt: "Retail store interior", category: "Glass Partitions" },
];

export const seoPages: SEOPage[] = [
  {
    slug: "aluminium-doors-pakistan",
    title: "Aluminium Doors in Pakistan",
    description:
      "Premium aluminium doors in Pakistan. Thermal break technology, custom designs, and expert installation in Lahore and nationwide by Azan Glass.",
    keywords: ["aluminium doors Pakistan", "aluminium doors Lahore", "aluminium door price Pakistan"],
    content:
      "Looking for premium aluminium doors in Pakistan? Azan Glass offers a complete range of aluminium door solutions including sliding doors, hinged doors, and automatic entrance systems. Our doors feature thermal break technology for superior insulation, multi-point locking for enhanced security, and powder-coated finishes that withstand Pakistan's climate.",
  },
  {
    slug: "glass-partition-solutions",
    title: "Glass Partition Solutions",
    description:
      "Professional glass partition solutions for offices and commercial spaces in Pakistan. Frameless and framed systems by Azan Glass.",
    keywords: ["glass partitions Pakistan", "office glass partitions Lahore", "glass partition walls"],
    content:
      "Transform your workspace with professional glass partition solutions from Azan Glass. Our partition systems create modern, light-filled environments while providing acoustic privacy and flexible space configuration.",
  },
  {
    slug: "shop-front-glass-installation",
    title: "Shop Front Glass Installation",
    description:
      "Expert shop front glass installation in Pakistan. Maximize visibility and attract customers with premium storefront glazing by Azan Glass.",
    keywords: ["shop front glass Pakistan", "storefront glass Lahore", "shop glass installation"],
    content:
      "Your shop front is your first impression. Azan Glass specializes in shop front glass installations that maximize product visibility while ensuring security and weather protection for retail businesses across Pakistan.",
  },
  {
    slug: "office-glass-systems",
    title: "Office Glass Systems",
    description:
      "Complete office glass systems in Pakistan. Partitions, conference rooms, and facade glazing for modern workplaces by Azan Glass.",
    keywords: ["office glass Pakistan", "office partitions Lahore", "corporate glass installation"],
    content:
      "Create inspiring workplaces with comprehensive office glass systems from Azan Glass. From executive floor partitions to complete facade glazing, we deliver solutions that enhance productivity and corporate image.",
  },
  {
    slug: "custom-aluminium-fabrication",
    title: "Custom Aluminium Fabrication",
    description:
      "Bespoke custom aluminium fabrication in Pakistan. Precision engineering for unique architectural projects by Azan Glass Lahore.",
    keywords: ["custom aluminium fabrication Pakistan", "aluminium fabrication Lahore", "bespoke glass aluminium"],
    content:
      "When standard solutions won't suffice, Azan Glass custom fabrication team delivers. We handle complex architectural requirements including curved glass, structural glazing, and intricate aluminium structures.",
  },
];

export function getSEOPageBySlug(slug: string): SEOPage | undefined {
  return seoPages.find((p) => p.slug === slug);
}
