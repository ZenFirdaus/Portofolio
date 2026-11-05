import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {subtitle && (
        <span className="block text-xs font-medium text-accent uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-text-primary tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm md:text-base text-text-secondary leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
