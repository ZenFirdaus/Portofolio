"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroScene } from "@/components/three/HeroScene";
import { personalInfo } from "@/data/personal";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative pt-12 md:pt-20 pb-20 md:pb-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Headline & Intro with Framer Motion Stagger */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline */}
            <motion.div variants={itemVariants}>
              <span className="text-xs font-medium text-accent tracking-wider uppercase block">
                {personalInfo.tagline}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-text-primary leading-[1.15] break-words">
                Hi, I&apos;m <span className="text-primary">ZEN</span>
                <span className="text-accent">.</span>
                <br />
                I design &amp; build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-text-primary to-accent">
                  digital experiences
                </span>
                <span className="text-accent">.</span>
              </h1>
            </motion.div>

            {/* Short Bio / Description */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-text-secondary max-w-xl font-sans leading-relaxed">
                {personalInfo.shortBio}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                href="/works"
                variant="primary"
                size="lg"
                className="group"
              >
                <span>View Works</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:text-accent transition-all duration-200" />
              </Button>

              <Button href="/contact" variant="outline" size="lg">
                <span>Contact Me</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Focal Sculpture with Fade-In */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroScene />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
