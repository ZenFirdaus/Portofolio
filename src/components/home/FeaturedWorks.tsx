"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";
import { projectsData } from "@/data/projects";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function FeaturedWorks() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section className="py-20 md:py-28 border-t border-border" id="works">
      <Container>
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <SectionHeading
              subtitle="Selected Works"
              title="Featured Projects"
              description="A selection of recent projects in digital design and web development."
              className="mb-0"
            />

            <Button
              href="/works"
              variant="ghost"
              size="sm"
              className="self-start sm:self-auto group"
            >
              <span>All Projects</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </FadeIn>

        {/* Clean Project Grid with Framer Motion Stagger */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <FadeInStaggerItem key={project.id}>
              <div className="group flex flex-col justify-between h-full rounded-lg border border-border bg-surface overflow-hidden transition-all duration-300 ease-out hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(36,87,255,0.08)] dark:hover:shadow-[0_8px_30px_rgba(185,242,39,0.1)]">
                <Link
                  href={`/works/${project.slug}`}
                  className="block relative aspect-[16/10] bg-elevated overflow-hidden border-b border-border"
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
                      {project.technology.slice(0, 3).map((tech) => (
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

                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
