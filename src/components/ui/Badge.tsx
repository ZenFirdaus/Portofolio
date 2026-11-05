import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "primary" | "outline";
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-surface text-text-secondary border border-border",
    accent:
      "bg-accent/10 text-accent border border-accent/20",
    primary:
      "bg-primary/10 text-primary border border-primary/20",
    outline:
      "bg-transparent text-text-secondary border border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-sans rounded-md font-normal transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
