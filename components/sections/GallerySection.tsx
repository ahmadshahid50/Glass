"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/content";
import { GALLERY_CATEGORIES } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { cn } from "@/lib/utils";

export function GallerySection({ showHeading = true }: { showHeading?: boolean }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        {showHeading && (
          <SectionHeading
            subtitle="Gallery"
            title="Our Work in Pictures"
            description="Browse our portfolio of completed glass and aluminium installations."
          />
        )}

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-accent text-white"
                  : "bg-muted text-primary hover:bg-accent/10 dark:bg-primary/50 dark:text-white",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mb-4 break-inside-avoid"
              >
                <button
                  onClick={() => setLightboxIndex(index)}
                  className="group relative block w-full overflow-hidden rounded-xl"
                  aria-label={`View ${image.alt}`}
                >
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-sm font-medium text-white">{image.alt}</span>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            className="absolute left-4 text-white hover:text-accent"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + filtered.length) % filtered.length : null,
              );
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <div className="relative max-h-[80vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <OptimizedImage
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <p className="mt-4 text-center text-white">{filtered[lightboxIndex].alt}</p>
          </div>
          <button
            className="absolute right-4 text-white hover:text-accent"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % filtered.length : null,
              );
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </section>
  );
}
