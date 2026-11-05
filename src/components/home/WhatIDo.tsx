"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";
import { Palette, Code2, Smartphone, Workflow } from "lucide-react";

const SERVICES = [
  {
    title: "UI/UX Design",
    icon: Palette,
    description:
      "Perancangan antarmuka pengguna yang bersih, wireframing, interactive prototyping di Figma, serta perancangan visual design yang intuitif.",
  },
  {
    title: "Web Development",
    icon: Code2,
    description:
      "Pengembangan aplikasi web berbasis framework Laravel, PHP, dan modern frontend dengan fokus pada fungsionalitas dan skalabilitas.",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description:
      "Pembuatan aplikasi mobile cross-platform menggunakan Flutter dan Dart yang terhubung dengan RESTful API dan basis data terstruktur.",
  },
  {
    title: "System Analysis",
    icon: Workflow,
    description:
      "Analisis kebutuhan perangkat lunak dan pemodelan proses bisnis menggunakan standar diagram BPMN, UML, dan perancangan basis data.",
  },
];

export function WhatIDo() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <Container>
        <FadeIn>
          <SectionHeading
            subtitle="Focus & Capabilities"
            title="What I Do"
            description="Fokus utama dalam perancangan antarmuka, rekayasa perangkat lunak, dan analisis sistem."
          />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInStaggerItem key={index}>
                <Card
                  interactive
                  className="space-y-4 p-6 h-full flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_8px_30px_rgba(185,242,39,0.08)]"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-md bg-elevated border border-border flex items-center justify-center text-accent group-hover:scale-105 group-hover:border-accent transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-text-primary group-hover:text-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>
      </Container>
    </section>
  );
}
