"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { personalInfo } from "@/data/personal";
import { ArrowRight, Check, Copy } from "lucide-react";

export function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 md:py-32 border-t border-border" id="contact">
      <Container>
        <FadeIn className="max-w-2xl mx-auto text-center space-y-6">
          <span className="text-xs font-medium text-accent uppercase tracking-wider block">
            Let&apos;s Connect
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Interested in collaborating on a project?
          </h2>

          <p className="text-base sm:text-lg text-text-secondary font-sans leading-relaxed">
            Whether you have an inquiry, a new opportunity, or just want to chat about design and technology, feel free to reach out.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="/contact" variant="primary" size="lg" className="group">
              <span>Send a Message</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:text-accent transition-all duration-200" />
            </Button>

            <button
              onClick={handleCopy}
              className="h-11 md:h-12 px-5 rounded-md border border-border bg-surface hover:border-accent hover:text-accent hover:bg-accent/10 hover:shadow-[0_4px_20px_rgba(36,87,255,0.15)] dark:hover:shadow-[0_4px_20px_rgba(185,242,39,0.18)] hover:-translate-y-0.5 active:translate-y-0 text-sm font-sans text-text-primary flex items-center gap-2 transition-all duration-200 cursor-pointer group"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-accent text-xs font-medium">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-text-secondary group-hover:text-accent transition-colors" />
                  <span>{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
