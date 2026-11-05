"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { personalInfo } from "@/data/personal";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 border-t border-border" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <FadeIn direction="right">
              <SectionHeading
                subtitle="About Me"
                title="Design × Technology"
                description="A multidisciplinary mindset combining visual empathy with engineering rigor."
                className="mb-0"
              />
            </FadeIn>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="left" delay={0.1}>
              <p className="text-base sm:text-lg text-text-primary leading-relaxed font-sans mb-4">
                {personalInfo.about}
              </p>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans mb-6">
                Berfokus pada perancangan antarmuka pengguna yang intuitif, analisis dan pemodelan proses bisnis, serta pengembangan aplikasi web dan mobile yang fungsional.
              </p>

              <div className="pt-2">
                <Button href="/about" variant="outline" size="sm" className="group">
                  <span>More About Me</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
