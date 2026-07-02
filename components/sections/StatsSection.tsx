"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { STATS } from "@/constants";
import { useCounter } from "@/hooks/useScrollAnimation";
import { viewportConfig } from "@/lib/seo";

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  index,
  isVisible,
}: {
  stat: (typeof STATS)[number];
  index: number;
  isVisible: boolean;
}) {
  const count = useCounter(stat.value, 2000, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <div className="mb-2 text-4xl font-bold text-accent md:text-5xl lg:text-6xl">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <p className="text-lg text-muted-foreground">{stat.label}</p>
    </motion.div>
  );
}
