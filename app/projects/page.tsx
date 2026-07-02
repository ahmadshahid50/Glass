import { generateSEO } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/constants";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Our Projects",
  description:
    "Browse our portfolio of completed glass and aluminium projects across residential and commercial sectors in Pakistan.",
  path: "/projects",
});

export default function ProjectsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Projects", url: `${SITE_CONFIG.url}/projects` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        title="Our Projects"
        subtitle="Portfolio"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />
      <div className="container-custom mx-auto px-4 pt-8 lg:px-8">
        <Breadcrumbs items={[{ label: "Projects" }]} />
      </div>
      <ProjectsSection />
      <CTABanner />
    </>
  );
}
