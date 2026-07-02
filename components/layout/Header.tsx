"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, SITE_CONFIG } from "@/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-md dark:bg-primary/95"
          : "bg-transparent",
      )}
    >
      <div className="container-custom mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <span className="text-lg font-bold text-white">MG</span>
          </div>
          <div className="hidden sm:block">
            <span
              className={cn(
                "text-lg font-bold",
                isScrolled ? "text-primary dark:text-white" : "text-white",
              )}
            >
              Azan Glass
            </span>
            <span
              className={cn(
                "block text-xs",
                isScrolled ? "text-muted-foreground" : "text-white/80",
              )}
            >
              Aluminium
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-accent"
                  : isScrolled
                    ? "text-primary hover:text-accent dark:text-white dark:hover:text-accent"
                    : "text-white/90 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/contact"
            variant="accent"
            size="sm"
            className="hidden md:inline-flex"
            icon={Phone}
          >
            Get Quote
          </Button>
          <button
            className={cn(
              "relative z-50 flex h-10 w-10 items-center justify-center rounded-lg xl:hidden",
              isScrolled || isOpen
                ? "text-primary dark:text-white"
                : "text-white",
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 z-40 bg-white xl:hidden"
          >
            <nav className="flex h-full flex-col px-6 pt-24 pb-8" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block border-b border-border py-4 text-lg font-medium transition-colors dark:border-white/10",
                      pathname === item.href
                        ? "text-accent"
                        : "text-primary hover:text-accent dark:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-auto space-y-4">
                <Button href="/contact" variant="accent" className="w-full" icon={Phone}>
                  Get Free Quote
                </Button>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-center gap-2 text-primary dark:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
