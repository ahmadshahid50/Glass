import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
  secondary: "bg-secondary/20 text-primary hover:bg-secondary/30",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-primary hover:bg-muted",
  accent: "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  icon: Icon,
  iconPosition = "left",
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-5 w-5" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="h-5 w-5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
