"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";
import { experienceData } from "@/data/experience";
import { achievementsData } from "@/data/achievements";
import { Award } from "lucide-react";
import { cn } from "@/lib/utils";

type FilterType = "All" | "Organization" | "Committee";

export default function ExperiencePage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredExperience =
    activeFilter === "All"
      ? experienceData
      : experienceData.filter((item) => item.type === activeFilter);

  return (
    <div className="py-16 md:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            subtitle="Aktivitas & Kepanitiaan"
            title="Pengalaman Organisasi & Kepanitiaan"
            description="Rekam jejak kepemimpinan, koordinasi tim, dan keterlibatan aktif dalam kepanitiaan serta organisasi mahasiswa."
          />
        </FadeIn>

        {/* Filter with animated layout indicator */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-border">
          {(["All", "Organization", "Committee"] as FilterType[]).map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "relative px-3.5 py-1.5 rounded-md text-xs font-sans transition-all duration-200 cursor-pointer select-none",
                  isSelected
                    ? "text-white dark:text-[#101820] font-semibold"
                    : "text-text-secondary hover:text-accent hover:border-accent/60 border border-border bg-surface hover:-translate-y-0.5"
                )}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeExpFilter"
                    className="absolute inset-0 rounded-md bg-accent shadow-[0_0_16px_rgba(36,87,255,0.25)] dark:shadow-[0_0_16px_rgba(185,242,39,0.25)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {filter === "All" ? "Semua Pengalaman" : filter}
                </span>
              </button>
            );
          })}
        </div>

        {/* Experience List with Smooth Transitions */}
        <motion.div layout className="pt-10 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredExperience.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 md:p-8 rounded-lg border border-border bg-surface space-y-4 transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(36,87,255,0.08)] dark:hover:shadow-[0_8px_30px_rgba(185,242,39,0.08)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-heading font-bold text-lg md:text-xl text-text-primary break-words">
                        {item.role}
                      </h3>
                      <Badge variant="default" className="text-[11px]">
                        {item.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-text-secondary font-sans">
                      {item.organization} {item.location && `— ${item.location}`}
                    </div>
                  </div>

                  <span className="text-xs text-text-secondary font-sans shrink-0">
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-2 text-sm text-text-secondary font-sans leading-relaxed">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1 text-xs">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {item.technology && item.technology.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                    {item.technology.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[11px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Achievements Section: Only render if valid achievements exist */}
        {achievementsData.length > 0 && (
          <div className="mt-20 pt-16 border-t border-border space-y-8">
            <FadeIn>
              <SectionHeading
                subtitle="Distinctions"
                title="Achievements"
                description="Verified awards and honors received."
              />
            </FadeIn>

            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievementsData.map((ach) => (
                <FadeInStaggerItem key={ach.id}>
                  <div className="p-6 rounded-lg border border-border bg-surface space-y-2.5 transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(36,87,255,0.08)] dark:hover:shadow-[0_8px_30px_rgba(185,242,39,0.08)] h-full flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs text-text-secondary">
                        <span className="flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-accent" />
                          {ach.issuer}
                        </span>
                        <span>{ach.year}</span>
                      </div>
                      <h4 className="font-heading font-bold text-base text-text-primary">
                        {ach.title}
                      </h4>
                    </div>
                    <div className="text-sm text-accent font-semibold pt-1 border-t border-border/60">
                      {ach.award}
                    </div>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        )}
      </Container>
    </div>
  );
}
