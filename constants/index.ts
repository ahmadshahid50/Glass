export const SITE_CONFIG = {
  name: "Azan Glass Aluminium",
  shortName: "Azan Glass",
  description:
    "Premium glass and aluminium solutions for residential and commercial spaces across Pakistan. Expert installation in Lahore and nationwide.",
  url: "https://azanglass.com.pk",
  locale: "en_PK",
  phone: "+92 326 850 6921",
  whatsapp: "923268506921",
  email: "info@azanglass.com.pk",
  address: "Liberty Market, Gulberg III, Lahore, Punjab, Pakistan",
  city: "Lahore",
  country: "Pakistan",
  coordinates: {
    lat: 31.5204,
    lng: 74.3587,
  },
  businessHours: {
    weekdays: "Monday - Saturday: 9:00 AM - 7:00 PM",
    sunday: "Sunday: Closed",
  },
  serviceAreas: [
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Sialkot",
    "Gujranwala",
    "All Pakistan",
  ],
  social: {
    facebook: "https://facebook.com/mianglass",
    instagram: "https://instagram.com/mianglass",
    linkedin: "https://linkedin.com/company/mianglass",
    youtube: "https://youtube.com/@mianglass",
  },
  foundedYear: 2008,
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Premium Materials",
    description: "We source only the finest glass and aluminium from trusted international suppliers.",
    icon: "Award",
  },
  {
    title: "Skilled Craftsmanship",
    description: "Our expert team delivers precision fabrication and flawless installation every time.",
    icon: "Wrench",
  },
  {
    title: "Custom Designs",
    description: "Tailored solutions designed to match your architectural vision and functional needs.",
    icon: "Palette",
  },
  {
    title: "Affordable Pricing",
    description: "Premium quality at competitive rates with transparent, no-hidden-cost quotations.",
    icon: "BadgeDollarSign",
  },
  {
    title: "On-Time Delivery",
    description: "We respect your timeline with efficient project management and punctual completion.",
    icon: "Clock",
  },
  {
    title: "Customer Satisfaction",
    description: "Dedicated after-sales support ensuring your complete peace of mind.",
    icon: "HeartHandshake",
  },
] as const;

export const INDUSTRIES = [
  { title: "Residential", icon: "Home", description: "Beautiful homes with modern glass and aluminium solutions." },
  { title: "Commercial", icon: "Building2", description: "Large-scale commercial glazing and facade systems." },
  { title: "Offices", icon: "Briefcase", description: "Professional office partitions and glass installations." },
  { title: "Retail Shops", icon: "Store", description: "Eye-catching shop fronts that attract customers." },
  { title: "Restaurants", icon: "UtensilsCrossed", description: "Elegant dining spaces with premium glass features." },
  { title: "Builders & Developers", icon: "HardHat", description: "Reliable partner for construction and development projects." },
] as const;

export const PROCESS_STEPS = [
  { step: 1, title: "Consultation", description: "We discuss your requirements, budget, and timeline." },
  { step: 2, title: "Design", description: "Custom designs and detailed quotations prepared for approval." },
  { step: 3, title: "Manufacturing", description: "Precision fabrication in our state-of-the-art facility." },
  { step: 4, title: "Installation", description: "Professional on-site installation by certified technicians." },
  { step: 5, title: "Delivery", description: "Final inspection, handover, and after-sales support." },
] as const;

export const STATS = [
  { label: "Years Experience", value: 16, suffix: "+" },
  { label: "Projects Completed", value: 2500, suffix: "+" },
  { label: "Happy Clients", value: 1800, suffix: "+" },
  { label: "Team Members", value: 45, suffix: "+" },
] as const;

export const CORE_VALUES = [
  { title: "Quality First", description: "Uncompromising standards in every product and installation." },
  { title: "Integrity", description: "Honest pricing, transparent processes, and ethical business practices." },
  { title: "Innovation", description: "Embracing modern technology and design trends." },
  { title: "Customer Focus", description: "Your satisfaction is the measure of our success." },
] as const;

export const PROJECT_CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Office",
  "Retail",
  "Restaurant",
] as const;

export const GALLERY_CATEGORIES = [
  "All",
  "Doors & Windows",
  "Glass Partitions",
  "Shop Fronts",
  "Shower Enclosures",
  "Office Glass",
] as const;
