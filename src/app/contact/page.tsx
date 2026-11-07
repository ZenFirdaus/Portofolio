"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { personalInfo } from "@/data/personal";
import { GithubIcon, LinkedinIcon, FigmaIcon } from "@/components/ui/Icons";
import { Check, Copy, Send, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setError("Silakan masukkan nama yang valid (minimal 2 karakter).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Silakan masukkan format alamat email yang valid.");
      return;
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      setError("Silakan tulis pesan minimal 10 karakter.");
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-16 md:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            subtitle="Get in Touch"
            title="Contact"
            description="Have a question or a project proposal? Send a message directly or connect via social channels."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="right">
              <div className="p-6 rounded-lg border border-border bg-surface space-y-4">
                <h3 className="font-heading font-bold text-lg text-text-primary">
                  Direct Contact
                </h3>

                <div className="space-y-3 text-sm text-text-secondary font-sans">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent shrink-0" />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="hover:text-accent transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 text-text-secondary hover:text-accent transition-colors cursor-pointer"
                      aria-label="Copy Email"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-accent" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>

                  {personalInfo.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="hover:text-accent transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  )}
                </div>

                <div className="pt-2 text-xs text-text-secondary border-t border-border">
                  {personalInfo.availability}
                </div>
              </div>

              {/* Social channels */}
              <div className="p-6 rounded-lg border border-border bg-surface space-y-3 mt-6">
                <h3 className="font-heading font-bold text-sm text-text-primary">
                  Social Profiles
                </h3>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={personalInfo.socials[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-md border border-border hover:border-accent hover:text-accent hover:bg-accent/10 hover:shadow-[0_0_16px_rgba(36,87,255,0.18)] dark:hover:shadow-[0_0_16px_rgba(185,242,39,0.2)] hover:-translate-y-0.5 text-text-secondary transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.socials[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-md border border-border hover:border-accent hover:text-accent hover:bg-accent/10 hover:shadow-[0_0_16px_rgba(36,87,255,0.18)] dark:hover:shadow-[0_0_16px_rgba(185,242,39,0.2)] hover:-translate-y-0.5 text-text-secondary transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.socials[2].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-md border border-border hover:border-accent hover:text-accent hover:bg-accent/10 hover:shadow-[0_0_16px_rgba(36,87,255,0.18)] dark:hover:shadow-[0_0_16px_rgba(185,242,39,0.2)] hover:-translate-y-0.5 text-text-secondary transition-all duration-200"
                    aria-label="Figma"
                  >
                    <FigmaIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Simple Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" delay={0.1}>
              <div className="p-8 rounded-lg border border-border bg-surface">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-text-primary">
                      Message Sent
                    </h3>
                    <p className="text-sm text-text-secondary max-w-sm mx-auto font-sans">
                      Thank you for reaching out. I will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-accent hover:underline font-medium cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {error && (
                      <div className="p-3 rounded-md border border-red-500/30 bg-red-500/10 text-xs text-red-400 font-sans">
                        {error}
                      </div>
                    )}
                    <div className="space-y-2">
                      <label className="block text-xs font-medium text-text-primary uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your name"
                        className="w-full h-10 px-3.5 rounded-md border border-border bg-background text-text-primary text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-medium text-text-primary uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your.email@example.com"
                        className="w-full h-10 px-3.5 rounded-md border border-border bg-background text-text-primary text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-medium text-text-primary uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Brief details about your project or inquiry..."
                        className="w-full p-3.5 rounded-md border border-border bg-background text-text-primary text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-11 rounded-md bg-primary text-[#E8EDF2] border border-primary/50 text-sm font-medium hover:bg-primary-hover hover:border-accent hover:text-accent hover:shadow-[0_4px_20px_rgba(36,87,255,0.25)] dark:hover:shadow-[0_4px_20px_rgba(185,242,39,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </form>
                )}
            </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  );
}
