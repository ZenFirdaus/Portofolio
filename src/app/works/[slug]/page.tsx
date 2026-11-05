import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { projectsData } from "@/data/projects";
import { GithubIcon } from "@/components/ui/Icons";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  User,
  CheckCircle2,
  Layers,
  AlertCircle,
} from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — ZEN®",
    };
  }

  return {
    title: `${project.name} — ZEN® Portfolio`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject =
    projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1
      ? projectsData[projectIndex + 1]
      : null;

  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Navigation Breadcrumb */}
        <FadeIn direction="down" duration={0.4}>
          <div className="mb-8">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-xs font-sans text-text-secondary hover:text-accent transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Kembali ke Portfolio</span>
            </Link>
          </div>
        </FadeIn>

        {/* Project Header */}
        <FadeIn duration={0.5}>
          <header className="space-y-6 pb-12 border-b border-border">
            <div className="flex flex-wrap items-center gap-3 text-xs text-text-secondary">
              <Badge variant="accent">{project.category}</Badge>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {project.year}
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-accent" />
                {project.role}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight leading-[1.15] break-words">
              {project.name}
            </h1>

            <p className="text-base sm:text-lg text-text-secondary font-sans leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>

            {/* External Action Links if available */}
            {(project.repositoryUrl || project.projectUrl) && (
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.projectUrl && (
                  <Button
                    href={project.projectUrl}
                    external
                    variant="primary"
                    size="sm"
                    className="group"
                  >
                    <span>Live Project</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </Button>
                )}
                {project.repositoryUrl && (
                  <Button
                    href={project.repositoryUrl}
                    external
                    variant="outline"
                    size="sm"
                  >
                    <GithubIcon className="w-4 h-4 mr-1.5" />
                    <span>Lihat Repository</span>
                  </Button>
                )}
              </div>
            )}
          </header>
        </FadeIn>

        {/* Main Cover Banner with Subtle Reveal */}
        <FadeIn delay={0.1} duration={0.6}>
          <div className="my-12 relative aspect-[16/9] w-full rounded-lg border border-border bg-elevated overflow-hidden group shadow-xs">
            <Image
              src={project.coverImage}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
        </FadeIn>

        {/* Structured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
          {/* Main Case Study Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* Disclaimer if applicable */}
            {project.disclaimer && (
              <FadeIn>
                <div className="p-5 rounded-lg border border-accent/40 bg-accent/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4 text-accent shrink-0" />
                    <span>Informasi Penting / Disclaimer</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                    {project.disclaimer}
                  </p>
                </div>
              </FadeIn>
            )}

            {/* 1. Project Overview */}
            <FadeIn>
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
                  Project Overview
                </h2>
                <p className="text-sm sm:text-base text-text-secondary font-sans leading-relaxed">
                  {project.overview}
                </p>
              </section>
            </FadeIn>

            {/* 2. Background & Problem */}
            <FadeIn>
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
                  Background & Problem
                </h2>
                <p className="text-sm sm:text-base text-text-secondary font-sans leading-relaxed">
                  {project.problem}
                </p>
              </section>
            </FadeIn>

            {/* 3. Objectives */}
            <FadeIn>
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
                  Objectives
                </h2>
                <div className="space-y-3">
                  {project.objectives.map((obj, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-lg border border-border bg-surface transition-all duration-200 hover:border-accent/50"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-sm text-text-secondary font-sans leading-relaxed">
                        {obj}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>

            {/* 4. My Role & Contribution */}
            <FadeIn>
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
                  My Role & Contribution
                </h2>
                <div className="space-y-2.5">
                  {project.contributions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm font-sans text-text-secondary">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>

            {/* 5. Design & Development Process */}
            <FadeIn>
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
                  Design & Development Process
                </h2>
                <div className="space-y-4">
                  {project.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border border-border bg-surface space-y-2 transition-all duration-200 hover:border-accent/50 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(185,242,39,0.06)]"
                    >
                      <h3 className="font-heading font-bold text-base text-text-primary">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text-secondary font-sans leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>

            {/* 6. Visual Showcase (Gallery) */}
            <FadeIn>
              <section className="space-y-6">
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
                    Visual Showcase
                  </h2>
                  <p className="text-sm text-text-secondary font-sans">
                    Koleksi artefak visual, diagram perancangan, dan tata letak antarmuka proyek.
                  </p>
                </div>

                <div className="space-y-6">
                  {project.gallery.map((item, idx) => (
                    <figure
                      key={idx}
                      className="group rounded-lg border border-border bg-surface overflow-hidden space-y-3 transition-all duration-300 hover:border-accent/60 hover:shadow-[0_8px_30px_rgba(185,242,39,0.1)]"
                    >
                      <div className="relative aspect-[16/10] bg-elevated overflow-hidden">
                        <Image
                          src={item.url}
                          alt={item.caption}
                          fill
                          className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                          sizes="(max-width: 1024px) 100vw, 800px"
                        />
                      </div>
                      <figcaption className="p-4 pt-1 flex items-center justify-between text-xs text-text-secondary border-t border-border">
                        <span>{item.caption}</span>
                        {item.type && (
                          <Badge variant="outline" className="text-[10px] uppercase">
                            {item.type}
                          </Badge>
                        )}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            </FadeIn>

            {/* 7. Results & Reflection */}
            <FadeIn>
              <section className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
                  Results & Reflection
                </h2>

                <div className="p-6 rounded-lg border border-border bg-surface space-y-3">
                  <h3 className="text-xs uppercase font-medium tracking-wider text-accent">
                    Hasil Proyek
                  </h3>
                  <p className="text-sm text-text-secondary font-sans leading-relaxed">
                    {project.results}
                  </p>
                </div>

                {project.reflection && (
                  <div className="p-6 rounded-lg border border-border bg-surface space-y-3">
                    <h3 className="text-xs uppercase font-medium tracking-wider text-text-primary">
                      Refleksi & Pembelajaran
                    </h3>
                    <p className="text-sm text-text-secondary font-sans leading-relaxed">
                      {project.reflection}
                    </p>
                  </div>
                )}
              </section>
            </FadeIn>
          </div>

          {/* Sidebar Metadata Column */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Tech Stack Card */}
            <FadeIn delay={0.15}>
              <div className="p-6 rounded-lg border border-border bg-surface space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-border">
                  <Layers className="w-4 h-4 text-accent" />
                  <h3 className="font-heading font-bold text-base text-text-primary">
                    Technology Stack
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Project Quick Specs Card */}
            <FadeIn delay={0.25}>
              <div className="p-6 rounded-lg border border-border bg-surface space-y-3 text-sm font-sans">
                <h3 className="font-heading font-bold text-sm text-text-primary pb-2 border-b border-border">
                  Spesifikasi Proyek
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-text-secondary">Kategori</span>
                    <span className="text-text-primary font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-text-secondary">Tahun</span>
                    <span className="text-text-primary font-medium">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-text-secondary">Peran</span>
                    <span className="text-text-primary font-medium text-right max-w-[180px]">
                      {project.role}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Back to all works */}
            <FadeIn delay={0.35}>
              <div className="p-6 rounded-lg border border-border bg-surface/50 text-center space-y-3">
                <p className="text-xs text-text-secondary font-sans">
                  Tertarik melihat proyek lainnya?
                </p>
                <Button href="/works" variant="outline" size="sm" className="w-full">
                  <span>Jelajahi Semua Proyek</span>
                </Button>
              </div>
            </FadeIn>
          </aside>
        </div>

        {/* Project Navigation (Previous / Next) with Smooth Hover Transition */}
        <FadeIn>
          <nav
            className="mt-20 pt-10 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4"
            aria-label="Navigasi Proyek"
          >
            {prevProject ? (
              <Link
                href={`/works/${prevProject.slug}`}
                className="p-6 rounded-lg border border-border bg-surface hover:border-accent/70 hover:shadow-[0_4px_24px_rgba(185,242,39,0.12)] hover:-translate-y-0.5 transition-all duration-200 space-y-1 text-left group"
              >
                <span className="text-xs text-text-secondary inline-flex items-center gap-1 group-hover:text-accent transition-colors duration-200">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-200" /> Proyek Sebelumnya
                </span>
                <div className="font-heading font-bold text-base text-text-primary group-hover:text-accent transition-colors duration-200">
                  {prevProject.name}
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/works/${nextProject.slug}`}
                className="p-6 rounded-lg border border-border bg-surface hover:border-accent/70 hover:shadow-[0_4px_24px_rgba(185,242,39,0.12)] hover:-translate-y-0.5 transition-all duration-200 space-y-1 text-right group sm:col-start-2"
              >
                <span className="text-xs text-text-secondary inline-flex items-center gap-1 justify-end group-hover:text-accent transition-colors duration-200">
                  Proyek Selanjutnya <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="font-heading font-bold text-base text-text-primary group-hover:text-accent transition-colors duration-200">
                  {nextProject.name}
                </div>
              </Link>
            ) : null}
          </nav>
        </FadeIn>
      </Container>
    </div>
  );
}
