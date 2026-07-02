import { generateSEO } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/constants";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Contact Us",
  description:
    "Contact Azan Glass Aluminium for free quotes on glass and aluminium solutions in Lahore and across Pakistan.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Contact", url: `${SITE_CONFIG.url}/contact` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero title="Contact Us" subtitle="Get In Touch" />
      <div className="container-custom mx-auto px-4 pt-8 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>
      <ContactSection showHeading={false} />

      <section className="section-padding bg-muted/50 pt-0 dark:bg-primary/20">
        <div className="container-custom mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Azan Glass Location"
              src={`https://maps.google.com/maps?q=${SITE_CONFIG.coordinates.lat},${SITE_CONFIG.coordinates.lng}&z=15&output=embed`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
