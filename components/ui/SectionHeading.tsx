import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12 lg:mb-16", className)}>
      {subtitle && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
