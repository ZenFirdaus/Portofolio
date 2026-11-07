import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "default",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans text-sm font-medium transition-all duration-200 ease-out rounded-md select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:-translate-y-0.5 active:translate-y-0";

  const variants = {
    primary:
      "bg-primary text-[#E8EDF2] border border-primary/40 hover:bg-primary-hover hover:border-accent/50 hover:shadow-[0_4px_20px_rgba(36,87,255,0.3)]",
    accent:
      "bg-accent text-white dark:text-[#101820] hover:bg-accent-muted shadow-[0_4px_20px_rgba(36,87,255,0.25)] dark:shadow-[0_4px_20px_rgba(185,242,39,0.3)] font-semibold border border-accent",
    outline:
      "bg-transparent text-text-primary border border-border hover:border-accent hover:text-accent hover:bg-accent/10 hover:shadow-[0_4px_20px_rgba(36,87,255,0.15)] dark:hover:shadow-[0_4px_20px_rgba(185,242,39,0.18)]",
    ghost:
      "bg-transparent text-text-secondary hover:text-accent hover:bg-accent/10 hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "h-9 px-3.5 gap-2 text-xs",
    default: "h-10 md:h-11 px-5 gap-2",
    lg: "h-11 md:h-12 px-6 gap-2.5 text-base",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
