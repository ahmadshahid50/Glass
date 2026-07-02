"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import type { ContactFormData } from "@/types";

export function ContactSection({ showHeading = true }: { showHeading?: boolean }) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Email integration ready - replace with your API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="section-padding" id="contact">
      <div className="container-custom mx-auto">
        {showHeading && (
          <SectionHeading
            subtitle="Contact Us"
            title="Get In Touch"
            description="Ready to start your project? Contact us for a free consultation and quote."
          />
        )}
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                { icon: MapPin, label: "Address", value: SITE_CONFIG.address },
                { icon: Clock, label: "Business Hours", value: SITE_CONFIG.businessHours.weekdays },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-primary hover:text-accent dark:text-white">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-primary dark:text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="mb-3 font-semibold text-primary dark:text-white">Service Areas</h4>
              <div className="flex flex-wrap gap-2">
                {SITE_CONFIG.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground dark:bg-primary/50"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center dark:border-white/10 dark:bg-primary/50">
              <CheckCircle className="mb-4 h-16 w-16 text-accent" />
              <h3 className="mb-2 text-2xl font-semibold text-primary dark:text-white">
                Thank You!
              </h3>
              <p className="text-muted-foreground">
                We&apos;ve received your inquiry and will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-8 dark:border-white/10 dark:bg-primary/50"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-accent focus:outline-none dark:border-white/10"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-accent focus:outline-none dark:border-white/10"
                    placeholder="+92 326 850 6921"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-accent focus:outline-none dark:border-white/10"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="mt-6">
                <label htmlFor="service" className="mb-2 block text-sm font-medium">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-accent focus:outline-none dark:border-white/10"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-accent focus:outline-none dark:border-white/10"
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              <Button
                type="submit"
                variant="accent"
                className="mt-6 w-full"
                icon={Send}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
