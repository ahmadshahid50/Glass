import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export function CTABanner({
  title = "Ready to Transform Your Space?",
  description = "Get a free consultation and quote for your glass or aluminium project. Our experts are ready to help.",
}: CTABannerProps) {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/90 px-8 py-16 text-center md:px-16">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')] bg-cover bg-center opacity-10" />
          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{title}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">{description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="accent" size="lg" icon={ArrowRight} iconPosition="right">
                Get Free Quote
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phone}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={Phone}
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
