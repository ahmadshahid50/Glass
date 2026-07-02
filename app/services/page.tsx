import { generateSEO } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/constants";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Our Services",
  description:
    "Explore our comprehensive glass and aluminium services including doors, windows, partitions, shower enclosures, and custom fabrication in Pakistan.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Services", url: `${SITE_CONFIG.url}/services` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        title="Our Services"
        subtitle="What We Offer"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
      />
      <div className="container-custom mx-auto px-4 pt-8 lg:px-8">
        <Breadcrumbs items={[{ label: "Services" }]} />
      </div>
      <ServicesSection showAll />
      <CTABanner />
    </>
  );
}
