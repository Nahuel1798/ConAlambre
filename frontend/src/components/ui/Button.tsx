import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glass";
  children: ReactNode;
  icon?: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  children,
  icon,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center gap-2 font-label-lg py-4 px-6 rounded-lg transition-all active:scale-95";

  const variantClasses = {
    // Primary = Primary CTA from theme
    primary:
      "bg-primary-cta text-white shadow-md shadow-primary-cta/20 hover:bg-primary-cta/90",
    // Secondary = Primary (Teal) per DESIGN.md
    secondary:
      "bg-primary text-on-primary hover:bg-primary/90",
    outline:
      "border border-outline hover:bg-surface-container-low",
    glass:
      "bg-white border border-outline-variant/50 hover:bg-surface-container-low",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </button>
  );
}