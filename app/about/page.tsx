import { generateSEO } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CORE_VALUES, SITE_CONFIG } from "@/constants";
import { teamMembers, timeline } from "@/data/content";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = generateSEO({
  title: "About Us",
  description:
    "Learn about Azan Glass Aluminium — Lahore's trusted glass and aluminium company with 16+ years of excellence in Pakistan.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "About", url: `${SITE_CONFIG.url}/about` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero title="About Us" subtitle="Our Story" />
      <div className="section-padding container-custom mx-auto">
        <Breadcrumbs items={[{ label: "About" }]} />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              subtitle="Who We Are"
              title="Pakistan's Premier Glass & Aluminium Company"
              description=""
              centered={false}
              className="mb-6"
            />
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in {SITE_CONFIG.foundedYear}, Azan Glass Aluminium has grown from a
                small workshop in Lahore to one of Pakistan&apos;s most trusted names in glass and
                aluminium solutions. Our commitment to quality, innovation, and customer
                satisfaction has earned us the trust of thousands of homeowners, businesses, and
                developers nationwide.
              </p>
              <p>
                We combine international-quality materials with skilled local craftsmanship to
                deliver solutions that meet global standards while understanding the unique needs of
                the Pakistani market. From luxury residential projects to large commercial
                installations, we approach every project with the same dedication to excellence.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
              alt="Azan Glass team at work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          <Card className="bg-primary text-white">
            <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
            <p className="text-white/80">
              To deliver world-class glass and aluminiumons that transform spaces and
              exceed customer expectations, while maintaining the highest standards of quality,
              integrity, and service across Pakistan.
            </p>
          </Card>
          <Card className="bg-accent text-white">
            <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
            <p className="text-white/90">
              To be recognized as Pakistan&apos;s leading glass and aluminium company, setting
              industry benchmarks for quality, innovation, and customer satisfaction while expanding
              our reach to serve clients nationwide.
            </p>
          </Card>
        </div>

        <div className="mt-24">
          <SectionHeading subtitle="Core Values" title="What Drives Us" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value) => (
              <Card key={value.title} className="text-center">
                <h3 className="mb-2 text-lg font-semibold text-primary dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading
            subtitle="Our Journey"
            title="Why We Started"
            description="Azan Glass was born from a simple belief: Pakistani homes and businesses deserve access to the same premium glass and aluminium solutions found in international markets."
          />
        </div>

        <div className="mt-24">
          <SectionHeading subtitle="Timeline" title="Our Growth Story" />
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-accent/30 md:left-1/2" />
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card>
                      <span className="text-sm font-bold text-accent">{event.year}</span>
                      <h3 className="mt-1 text-lg font-semibold text-primary dark:text-white">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent md:left-1/2">
                    <div className="h-3 w-3 rounded-full bg-white" />
                  </div>
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
