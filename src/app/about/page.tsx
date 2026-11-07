"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";
import { personalInfo } from "@/data/personal";
import { skillsData } from "@/data/skills";
import { educationData } from "@/data/experience";
import { GithubIcon, LinkedinIcon, FigmaIcon } from "@/components/ui/Icons";
import { GraduationCap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            subtitle="Profile"
            title="About Me"
            description="A brief look into my background, approach, education, and technical toolkit."
          />
        </FadeIn>

        {/* Profile Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-20 border-b border-border">
          {/* Portrait Visual */}
          <div className="lg:col-span-4 space-y-6">
            <FadeIn direction="right">
              <div className="relative aspect-square rounded-lg border border-border bg-surface overflow-hidden group shadow-xs">
                <Image
                  src="/images/profile/zen-portrait.png"
                  alt="Muhammad Zain Aulia Firdaus"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority
                />
              </div>

              <div className="p-4 rounded-lg border border-border bg-surface space-y-1.5 text-sm font-sans mt-6">
                <div className="text-text-primary font-semibold">{personalInfo.fullName}</div>
                <div className="text-xs text-accent font-medium">{personalInfo.role}</div>
                <div className="text-text-secondary text-xs">{personalInfo.educationSummary}</div>
                <div className="text-text-secondary text-xs">{personalInfo.location}</div>
              </div>

              <div className="flex items-center gap-3 text-text-secondary mt-4">
                <a
                  href={personalInfo.socials[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-md border border-border hover:border-accent hover:text-accent hover:bg-accent/10 hover:shadow-[0_0_16px_rgba(36,87,255,0.18)] dark:hover:shadow-[0_0_16px_rgba(185,242,39,0.2)] hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials[1].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-md border border-border hover:border-accent hover:text-accent hover:bg-accent/10 hover:shadow-[0_0_16px_rgba(36,87,255,0.18)] dark:hover:shadow-[0_0_16px_rgba(185,242,39,0.2)] hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials[2].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-md border border-border hover:border-accent hover:text-accent hover:bg-accent/10 hover:shadow-[0_0_16px_rgba(36,87,255,0.18)] dark:hover:shadow-[0_0_16px_rgba(185,242,39,0.2)] hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="Figma"
                >
                  <FigmaIcon className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Narrative & Philosophy */}
          <div className="lg:col-span-8 space-y-6">
            <FadeIn direction="left" delay={0.1}>
              <h3 className="text-2xl font-heading font-bold text-text-primary">
                Information Systems Student, UI/UX Designer &amp; Developer.
              </h3>

              <p className="text-base text-text-secondary leading-relaxed font-sans mt-4">
                {personalInfo.about}
              </p>

              <p className="text-base text-text-secondary leading-relaxed font-sans mt-3">
                Fokus utama saya meliputi UI/UX Design, Mobile Development dengan Flutter, Web Development menggunakan Laravel dan PHP, serta System Analysis menggunakan metodologi BPMN dan UML.
              </p>

              {/* Education Section */}
              <div className="pt-8 space-y-4">
                <h4 className="text-xs font-semibold text-accent uppercase tracking-wider">
                  Pendidikan
                </h4>

                <div className="space-y-4">
                  {educationData.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-6 rounded-lg border border-border bg-surface space-y-2 transition-all duration-200 hover:border-accent/60 hover:-translate-y-0.5 hover:shadow-xs"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-2 text-text-primary font-medium text-base">
                          <GraduationCap className="w-4 h-4 text-accent" />
                          <span>{edu.degree}</span>
                        </div>
                        <span className="text-xs text-text-secondary shrink-0">
                          {edu.period}
                        </span>
                      </div>

                      <div className="text-sm text-text-secondary font-medium">
                        {edu.institution}
                      </div>

                      {edu.description && (
                        <p className="text-xs text-text-secondary leading-relaxed pt-1">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Skills Section */}
        <div className="pt-16 space-y-8">
          <FadeIn>
            <SectionHeading
              subtitle="Capabilities"
              title="Skills &amp; Technologies"
              description="The tools and technologies I use to design and build digital products."
            />
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((group, idx) => (
              <FadeInStaggerItem key={idx}>
                <Card className="space-y-4 p-6 h-full transition-all duration-200 hover:border-accent/60 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(36,87,255,0.06)] dark:hover:shadow-[0_4px_20px_rgba(185,242,39,0.06)]">
                  <h4 className="font-heading font-bold text-base text-text-primary pb-2 border-b border-border">
                    {group.category}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </div>
  );
}
