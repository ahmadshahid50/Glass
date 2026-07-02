"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("space-y-4", className)}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-border bg-card dark:border-white/10 dark:bg-primary/50"
        >
          <button
            className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-muted/50"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="pr-4 font-semibold text-primary dark:text-white">{faq.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-accent transition-transform duration-300",
                openIndex === index && "rotate-180",
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-300",
              openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-4 text-muted-foreground">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
