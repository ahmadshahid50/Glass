import { OptimizedImage } from "@/components/ui/OptimizedImage";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHero({
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
}: PageHeroProps) {
  return (
    <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage src={image} alt={title} fill priority sizes="100vw" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="container-custom relative z-10 mx-auto px-4 pt-20 text-center">
        {subtitle && (
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            {subtitle}
          </span>
        )}
        <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
      </div>
    </section>
  );
}
