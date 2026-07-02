"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { viewportConfig } from "@/lib/seo";

export function ProcessSection() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom mx-auto">
        <SectionHeading
          subtitle="Our Process"
          title="How We Work"
          description="A streamlined process ensuring quality results from consultation to completion."
          className="[&_h2]:text-white [&_p]:text-white/70"
        />
        <div className="relative">
          <div className="absolute top-8 right-0 left-0 hidden h-0.5 bg-white/20 lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-white/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
