import { Hero } from "@/components/home/Hero";
import { FeaturedWorks } from "@/components/home/FeaturedWorks";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhatIDo } from "@/components/home/WhatIDo";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWorks />
      <AboutPreview />
      <WhatIDo />
      <ContactCTA />
    </>
  );
}
