import { generateSEO } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/constants";

export const metadata = generateSEO({
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${SITE_CONFIG.name}. Read our service terms, warranties, and policies.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" subtitle="Legal" />
      <div className="section-padding container-custom mx-auto max-w-3xl">
        <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground">Last updated: June 2024</p>
          <h2>Service Agreement</h2>
          <p>
            By engaging {SITE_CONFIG.name} for glass or aluminium services, you agree to these
            terms and conditions. All quotations are valid for 30 days unless otherwise stated.
          </p>
          <h2>Payment Terms</h2>
          <p>
            A deposit is required upon project confirmation. Final payment is due upon project
            completion and client approval. Payment schedules for large projects will be outlined in
            the project agreement.
          </p>
          <h2>Warranty</h2>
          <p>
            We provide manufacturer warranty on all products and workmanship guarantee on
            installations. Warranty terms vary by product type and will be specified in your project
            agreement.
          </p>
          <h2>Cancellation Policy</h2>
          <p>
            Custom-fabricated items cannot be cancelled once manufacturing has begun. Standard
            cancellation terms apply to other services as outlined in individual project agreements.
          </p>
          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at {SITE_CONFIG.email} or {SITE_CONFIG.phone}
            .
          </p>
        </div>
      </div>
    </>
  );
}
