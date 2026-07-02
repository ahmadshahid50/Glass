import { generateSEO } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/constants";

export const metadata = generateSEO({
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_CONFIG.name}. Learn how we collect, use, and protect your personal information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="Legal" />
      <div className="section-padding container-custom mx-auto max-w-3xl">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground">Last updated: June 2024</p>
          <h2>Information We Collect</h2>
          <p>
            When you contact us through our website, we may collect your name, email address, phone
            number, and project details to respond to your inquiries and provide quotations.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            We use the information you provide to respond to inquiries, prepare quotations, deliver
            services, and improve our customer experience. We do not sell your personal information
            to third parties.
          </p>
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against
            unauthorized access, alteration, or disclosure.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at {SITE_CONFIG.email}
            .
          </p>
        </div>
      </div>
    </>
  );
}
