"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Premium glass and aluminium installation"
          fill
          priority
          sizes="100vw"
          className="scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <div className="container-custom relative z-10 mx-auto px-4 pt-32 pb-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
            Lahore&apos;s Premier Glass & Aluminium Experts
          </span>
          <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl">
            Premium Glass & Aluminium Solutions for Modern Spaces
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
            Transforming homes and commercial spaces with high-quality glass and aluminium
            installations across Pakistan.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="accent" size="lg" icon={ArrowRight} iconPosition="right">
              Get Free Quote
            </Button>
            <Button
              href="/projects"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View Projects
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute right-8 bottom-8 hidden lg:block"
        >
          <button
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label="Play video"
          >
            <Play className="h-6 w-6 fill-white text-white" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
