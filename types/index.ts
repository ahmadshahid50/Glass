export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  benefits: string[];
  features: string[];
  process: string[];
  faqs: FAQ[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  client: string;
  year: string;
  services: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface SEOPage {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
