import { HeroSection } from "@/components/sections/HeroSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUs";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { getFAQSchema } from "@/lib/seo";
import { homeFaqs } from "@/data/content";

export default function HomePage() {
  const faqSchema = getFAQSchema(homeFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProjectsSection limit={3} />
      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <StatsSection />
      <CTABanner />
      <FAQSection />
      <ContactSection />
    </>
  );
}
