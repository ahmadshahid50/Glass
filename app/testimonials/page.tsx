import { generateSEO } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/constants";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Testimonials",
  description:
    "Read what our clients say about Azan Glass Aluminium. Trusted by homeowners, builders, and businesses across Pakistan.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Testimonials", url: `${SITE_CONFIG.url}/testimonials` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero title="Testimonials" subtitle="Client Reviews" />
      <div className="container-custom mx-auto px-4 pt-8 lg:px-8">
        <Breadcrumbs items={[{ label: "Testimonials" }]} />
      </div>
      <TestimonialsSection limit={6} />
      <CTABanner />
    </>
  );
}
