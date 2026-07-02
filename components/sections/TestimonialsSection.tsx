"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { viewportConfig } from "@/lib/seo";

export function TestimonialsSection({ limit }: { limit?: number }) {
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (limit) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [displayTestimonials.length, limit]);

  if (limit) {
    return (
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from our satisfied customers."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const testimonial = displayTestimonials[activeIndex];

  return (
    <section className="section-padding bg-muted/50 dark:bg-primary/20">
      <div className="container-custom mx-auto">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from our satisfied customers."
        />
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Quote className="mx-auto mb-6 h-12 w-12 text-accent/30" />
          <p className="mb-8 text-xl leading-relaxed text-primary md:text-2xl dark:text-white">
            &ldquo;{testimonial.content}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <OptimizedImage
                src={testimonial.image}
                alt={testimonial.name}
                fill
                sizes="56px"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold text-primary dark:text-white">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
        </motion.div>
        <div className="mt-8 flex justify-center gap-2">
          {displayTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-accent" : "w-2 bg-secondary/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl border border-border bg-card p-6 dark:border-white/10 dark:bg-primary/50"
    >
      <div className="mb-4 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="mb-6 text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <OptimizedImage src={testimonial.image} alt={testimonial.name} fill sizes="48px" />
        </div>
        <div>
          <p className="font-semibold text-primary dark:text-white">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
