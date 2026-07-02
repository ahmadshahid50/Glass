"use client";

import {
  Award,
  Wrench,
  Palette,
  BadgeDollarSign,
  Clock,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { viewportConfig } from "@/lib/seo";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Wrench,
  Palette,
  BadgeDollarSign,
  Clock,
  HeartHandshake,
};

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-muted/50 dark:bg-primary/20">
      <div className="container-custom mx-auto">
        <SectionHeading
          subtitle="Why Choose Us"
          title="The Azan Glass Difference"
          description="We combine international-quality materials with local expertise to deliver exceptional results for every project."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    {Icon && <Icon className="h-7 w-7 text-accent" />}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-primary dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
