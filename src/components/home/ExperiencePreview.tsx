"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";
import { experienceData } from "@/data/experience";
import { ArrowRight } from "lucide-react";

export function ExperiencePreview() {
  const recentExperience = experienceData.slice(0, 3);

  return (
    <section className="py-20 md:py-28 border-t border-border" id="experience">
      <Container>
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <SectionHeading
              subtitle="Background"
              title="Experience"
              description="Recent professional roles, organizational leadership, and committee work."
              className="mb-0"
            />

            <Button
              href="/experience"
              variant="ghost"
              size="sm"
              className="self-start sm:self-auto group"
            >
              <span>Full Timeline</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </FadeIn>

        <FadeInStagger className="space-y-4">
          {recentExperience.map((item) => (
            <FadeInStaggerItem key={item.id}>
              <div className="p-6 rounded-lg border border-border bg-surface flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(185,242,39,0.08)]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-heading font-bold text-base md:text-lg text-text-primary">
                      {item.role}
                    </h3>
                    <Badge variant="default" className="text-[11px]">
                      {item.type}
                    </Badge>
                  </div>
                  <div className="text-sm text-text-secondary">
                    {item.organization} {item.location && `— ${item.location}`}
                  </div>
                </div>

                <span className="text-xs text-text-secondary shrink-0">
                  {item.period}
                </span>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
