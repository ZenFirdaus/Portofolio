"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { personalInfo } from "@/data/personal";
import { GithubIcon, LinkedinIcon, FigmaIcon } from "@/components/ui/Icons";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border mt-auto">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-border">
          {/* Brand & Brief statement */}
          <div className="space-y-2 max-w-md">
            <Link
              href="/"
              className="font-heading font-bold text-lg text-text-primary hover:text-accent transition-colors"
            >
              ZEN<span className="text-accent text-xs align-super ml-0.5">®</span>
            </Link>
            <p className="text-sm text-text-secondary font-sans leading-relaxed">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Quick links & socials */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-sans">
            <Link
              href="/works"
              className="text-text-secondary hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
            >
              Works
            </Link>
            <Link
              href="/about"
              className="text-text-secondary hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
            >
              About
            </Link>
            <Link
              href="/experience"
              className="text-text-secondary hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="text-text-secondary hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact
            </Link>

            <div className="h-4 w-px bg-border hidden sm:block" />

            <div className="flex items-center gap-3 text-text-secondary">
              <a
                href={personalInfo.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials[2].href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Figma"
              >
                <FigmaIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-text-secondary">
          <p>© 2026 ZEN®. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-accent hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
