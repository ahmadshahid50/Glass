import { homeFaqs } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function FAQSection() {
  return (
    <section className="section-padding bg-muted/50 dark:bg-primary/20">
      <div className="container-custom mx-auto">
        <SectionHeading
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products and services."
        />
        <div className="mx-auto max-w-3xl">
          <FAQAccordion faqs={homeFaqs} />
        </div>
      </div>
    </section>
  );
}
