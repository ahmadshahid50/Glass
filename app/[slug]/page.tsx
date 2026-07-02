import { notFound } from "next/navigation";
import { seoPages, getSEOPageBySlug } from "@/data/content";
import { generateSEO } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants";
import { getBreadcrumbSchema } from "@/lib/seo";

interface SEOPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SEOPageProps) {
  const { slug } = await params;
  const page = getSEOPageBySlug(slug);
  if (!page) return {};

  return generateSEO({
    title: page.title,
    description: page.description,
    path: `/${slug}`,
    keywords: page.keywords,
  });
}

export default async function SEOLandingPage({ params }: SEOPageProps) {
  const { slug } = await params;
  const page = getSEOPageBySlug(slug);
  if (!page) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: page.title, url: `${SITE_CONFIG.url}/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero title={page.title} subtitle="Azan Glass" />
      <div className="section-padding container-custom mx-auto">
        <Breadcrumbs items={[{ label: page.title }]} />
        <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
          <p className="text-lg leading-relaxed text-muted-foreground">{page.content}</p>
          <p className="mt-6 text-muted-foreground">
            At Azan Glass Aluminium, we bring over 16 years of experience serving clients
            across Lahore and Pakistan. Our team of skilled professionals ensures every installation
            meets international quality standards while offering competitive local pricing.
          </p>
          <p className="mt-4 text-muted-foreground">
            Contact us today for a free consultation and discover why thousands of homeowners,
            businesses, and developers trust Azan Glass for their glass and aluminium needs.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Button href="/contact" variant="accent" size="lg">
            Get Free Quote
          </Button>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
