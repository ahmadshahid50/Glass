import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Calendar, User, ArrowLeft } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { generateSEO } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/constants";
import { getBreadcrumbSchema } from "@/lib/seo";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return generateSEO({
    title: project.title,
    description: project.description,
    path: `/projects/${slug}`,
    image: project.image,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Projects", url: `${SITE_CONFIG.url}/projects` },
    { name: project.title, url: `${SITE_CONFIG.url}/projects/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero title={project.title} subtitle={project.category} image={project.image} />
      <div className="section-padding container-custom mx-auto">
        <Breadcrumbs
          items={[{ label: "Projects", href: "/projects" }, { label: project.title }]}
        />

        <div className="mb-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" /> {project.location}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-accent" /> {project.year}
          </span>
          <span className="flex items-center gap-2">
            <User className="h-4 w-4 text-accent" /> {project.client}
          </span>
        </div>

        <p className="mb-12 max-w-3xl text-lg text-muted-foreground">{project.description}</p>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white">Services Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {project.beforeImage && project.afterImage && (
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-primary dark:text-white">Before & After</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-medium text-muted-foreground">Before</p>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <OptimizedImage
                    src={project.beforeImage}
                    alt={`${project.title} before`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-muted-foreground">After</p>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <OptimizedImage
                    src={project.afterImage}
                    alt={`${project.title} after`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div>
          <h2 className="mb-6 text-2xl font-bold text-primary dark:text-white">Project Gallery</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.images.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <OptimizedImage
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
