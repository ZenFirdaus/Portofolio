"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { projectsData } from "@/data/projects";
import { ProjectCategory } from "@/types";
import { GithubIcon } from "@/components/ui/Icons";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "UI/UX Design",
  "Web Development",
  "Mobile Development",
];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="py-16 md:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            subtitle="Portfolio"
            title="Selected Works"
            description="A collection of digital products, interface designs, and web applications."
          />
        </FadeIn>

        {/* Filter categories with animated sliding indicator */}
        <div className="flex flex-wrap items-center gap-2 pb-10 border-b border-border">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "relative px-3.5 py-1.5 rounded-md text-xs font-sans transition-all duration-200 cursor-pointer select-none",
                  isSelected
                    ? "text-white dark:text-[#101820] font-semibold"
                    : "text-text-secondary hover:text-accent hover:border-accent/60 border border-border bg-surface hover:-translate-y-0.5"
                )}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-md bg-accent shadow-[0_0_16px_rgba(36,87,255,0.25)] dark:shadow-[0_0_16px_rgba(185,242,39,0.25)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Works Grid with Smooth AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between rounded-lg border border-border bg-surface overflow-hidden transition-all duration-300 ease-out hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(36,87,255,0.08)] dark:hover:shadow-[0_8px_30px_rgba(185,242,39,0.1)]"
              >
                <Link
                  href={`/works/${project.slug}`}
                  className="block relative aspect-[16/10] bg-elevated border-b border-border overflow-hidden"
                >
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-text-secondary">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-text-primary group-hover:text-accent transition-colors duration-200 break-words">
                      <Link href={`/works/${project.slug}`}>
                        {project.name}
                      </Link>
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed font-sans line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technology.map((tech) => (
                        <Badge key={tech} variant="default">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border text-xs">
                      <Link
                        href={`/works/${project.slug}`}
                        className="inline-flex items-center gap-1.5 font-medium text-text-primary hover:text-accent transition-colors duration-200 group/link"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </Link>

                      <div className="flex items-center gap-3">
                        {project.repositoryUrl && (
                          <a
                            href={project.repositoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent hover:scale-110 transition-all duration-200"
                            aria-label="Repository"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.projectUrl && (
                          <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent hover:scale-110 transition-all duration-200"
                            aria-label="Live Project"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </div>
  );
}
