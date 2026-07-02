import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { generateSEO } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SITE_CONFIG } from "@/constants";
import {
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
} from "@/lib/seo";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return generateSEO({
    title: service.seoTitle || service.title,
    description: service.seoDescription || service.shortDescription,
    path: `/services/${slug}`,
    image: service.image,
    keywords: [service.title, "Pakistan", "Lahore"],
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Services", url: `${SITE_CONFIG.url}/services` },
    { name: service.title, url: `${SITE_CONFIG.url}/services/${slug}` },
  ]);

  const serviceSchema = getServiceSchema(service);
  const faqSchema = getFAQSchema(service.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero title={service.title} subtitle="Our Services" image={service.image} />
      <div className="section-padding container-custom mx-auto">
        <Breadcrumbs
          items={[{ label: "Services", href: "/services" }, { label: service.title }]}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white">Overview</h2>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <OptimizedImage src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-primary dark:text-white">Benefits</h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold text-primary dark:text-white">Features</h2>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading subtitle="Process" title="How We Deliver" centered={false} className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((step, index) => (
              <div
                key={step}
                className="rounded-xl border border-border p-4 dark:border-white/10"
              >
                <span className="text-sm font-bold text-accent">Step {index + 1}</span>
                <p className="mt-1 text-sm text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading subtitle="FAQ" title="Common Questions" />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion faqs={service.faqs} />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-medium text-accent hover:underline"
          >
            Request a Quote for {service.title} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <ProjectsSection limit={3} />
      <CTABanner
        title={`Ready for ${service.title}?`}
        description="Contact us today for a free consultation and detailed quotation."
      />
    </>
  );
}
