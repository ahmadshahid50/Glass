"use client";

import Link from "next/link";
import {
  DoorOpen,
  LayoutGrid,
  Columns,
  Droplets,
  Store,
  Hammer,
  MoveHorizontal,
  Building,
  Shield,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { services, additionalServices } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { viewportConfig } from "@/lib/seo";

const iconMap: Record<string, LucideIcon> = {
  DoorOpen,
  LayoutGrid,
  Columns,
  Droplets,
  Store,
  Hammer,
  MoveHorizontal,
  Building,
  Shield,
};

export function ServicesSection({ showAll = false }: { showAll?: boolean }) {
  const displayServices = showAll ? services : services.slice(0, 6);
  const extras = showAll ? additionalServices : [];

  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        <SectionHeading
          subtitle="Our Services"
          title="Comprehensive Glass & Aluminium Solutions"
          description="From residential windows to commercial facades, we deliver premium solutions tailored to your needs."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <Card className="group h-full overflow-hidden p-0">
                    <div className="relative h-48 overflow-hidden">
                      <OptimizedImage
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                        {Icon && <Icon className="h-6 w-6 text-white" />}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-semibold text-primary group-hover:text-accent dark:text-white">
                        {service.title}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground">{service.shortDescription}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
          {extras.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: (displayServices.length + index) * 0.1 }}
              >
                <Card className="h-full">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    {Icon && <Icon className="h-7 w-7 text-accent" />}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-primary dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
        {!showAll && (
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-medium text-accent hover:underline"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
