"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-border py-3.5 shadow-xs"
          : "bg-background/70 backdrop-blur-xs border-transparent py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link
            href="/"
            className="font-heading font-bold text-xl tracking-tight text-text-primary hover:text-accent transition-colors"
            aria-label="ZEN® Home"
          >
            ZEN<span className="text-accent text-xs align-super ml-0.5">®</span>
          </Link>

          {/* Desktop Navigation Links with Animated Active Indicator */}
          <nav className="hidden md:flex items-center gap-1.5">
            {NAV_LINKS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/works" && pathname.startsWith("/works"));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-sm font-sans rounded-md transition-all duration-200 group",
                    isActive
                      ? "text-accent font-medium"
                      : "text-text-secondary hover:text-accent hover:-translate-y-0.5"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-md bg-surface border border-accent/40 shadow-[0_0_14px_rgba(185,242,39,0.12)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 transition-colors duration-200">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle & Contact Button */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-md text-xs font-medium bg-primary text-[#E8EDF2] border border-primary/50 hover:bg-primary-hover hover:border-accent hover:text-accent hover:shadow-[0_0_16px_rgba(185,242,39,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Get in Touch
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-md border border-border bg-surface text-text-primary hover:border-accent hover:text-accent hover:shadow-[0_0_12px_rgba(185,242,39,0.2)] cursor-pointer transition-all duration-200"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Smooth AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden md:hidden pt-3 pb-4 mt-3 border-t border-border flex flex-col gap-1.5"
            >
              {NAV_LINKS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href === "/works" && pathname.startsWith("/works"));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-3 py-2 text-sm font-sans rounded-md transition-all duration-200",
                      isActive
                        ? "bg-surface text-accent font-medium border-l-2 border-accent"
                        : "text-text-secondary hover:text-accent hover:bg-surface/50 hover:translate-x-1"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center h-10 w-full rounded-md bg-primary text-[#E8EDF2] border border-primary/50 hover:border-accent hover:text-accent hover:shadow-[0_0_16px_rgba(185,242,39,0.25)] text-xs font-medium transition-all duration-200"
              >
                Get in Touch
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
