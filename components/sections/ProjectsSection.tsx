"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import { PROJECT_CATEGORIES } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { cn } from "@/lib/utils";

export function ProjectsSection({ limit }: { limit?: number }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  const filtered =
    activeCategory === "All"
      ? displayProjects
      : displayProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding bg-muted/50 dark:bg-primary/20">
      <div className="container-custom mx-auto">
        <SectionHeading
          subtitle="Our Work"
          title="Featured Projects"
          description="Explore our portfolio of completed residential and commercial installations across Pakistan."
        />

        {!limit && (
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "bg-white text-primary hover:bg-accent/10 dark:bg-primary/50 dark:text-white",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-lg dark:bg-primary/50">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-semibold text-primary group-hover:text-accent dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                        View Project <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {limit && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-medium text-accent hover:underline"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
