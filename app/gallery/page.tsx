import { generateSEO } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { GallerySection } from "@/components/sections/GallerySection";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/constants";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Gallery",
  description:
    "View our gallery of glass and aluminium installations including doors, windows, partitions, and shop fronts across Pakistan.",
  path: "/gallery",
});

export default function GalleryPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Gallery", url: `${SITE_CONFIG.url}/gallery` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        title="Gallery"
        subtitle="Our Work"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />
      <div className="container-custom mx-auto px-4 pt-8 lg:px-8">
        <Breadcrumbs items={[{ label: "Gallery" }]} />
      </div>
      <GallerySection showHeading={false} />
      <CTABanner />
    </>
  );
}
