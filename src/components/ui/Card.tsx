import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outline";
  interactive?: boolean;
}

export function Card({
  children,
  variant = "default",
  interactive = false,
  className,
  ...props
}: CardProps) {
  const variants = {
    default: "bg-surface border border-border",
    elevated: "bg-elevated border border-border",
    outline: "bg-transparent border border-border",
  };

  return (
    <div
      className={cn(
        "rounded-lg p-6 transition-all duration-300 ease-out",
        variants[variant],
        interactive &&
          "hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(185,242,39,0.08)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
