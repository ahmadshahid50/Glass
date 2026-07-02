"use client";

import {
  Home,
  Building2,
  Briefcase,
  Store,
  UtensilsCrossed,
  HardHat,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { INDUSTRIES } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { viewportConfig } from "@/lib/seo";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Briefcase,
  Store,
  UtensilsCrossed,
  HardHat,
};

export function IndustriesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        <SectionHeading
          subtitle="Industries We Serve"
          title="Solutions for Every Sector"
          description="Trusted by homeowners, businesses, and developers across Pakistan."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: index * 0.1 }}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg dark:border-white/10 dark:bg-primary/50"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary transition-colors group-hover:bg-accent">
                  {Icon && <Icon className="h-7 w-7 text-white" />}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-primary dark:text-white">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
