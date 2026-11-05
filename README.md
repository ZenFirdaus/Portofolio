# ZEN® — Minimalist Creative Portfolio
> **DESIGN × TECHNOLOGY**

A personal portfolio built for a **Designer & Developer** operating at the intersection of digital product design and modern software engineering.

## Architecture & Technology Stack

| Technology | Role |
|---|---|
| **Next.js 16 (App Router)** | Framework, SSR & static generation |
| **TypeScript** | Strict end-to-end typing |
| **Tailwind CSS v4** | Design token system & responsive layout |
| **Three.js** | Interactive 3D geometric hero focal point |
| **Lucide Icons** | SVG iconography |
| **next-themes** | Dark mode (default) & Light mode (alternative) |

## Visual Design System
- **Direction:** Minimalist Creative (Clean, modern, professional, purposeful)
- **Palette:**
  - Dark Mode: `#101820` (Background), `#1C2732` (Surface), `#2457FF` (Primary), `#B9F227` (Accent)
  - Light Mode: `#F4F6F2` (Background), `#FFFFFF` (Surface), `#2457FF` (Primary), `#A8DF16` (Accent)
- **Typography:**
  - **Space Grotesk** (Headlines & Section titles)
  - **Inter** (Body text, navigation, and interface labels)

## Project Structure

```text
portofolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── backgrounds/
│   │   └── icons/
│   ├── fonts/
│   └── models/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── about/
│   │   ├── works/
│   │   ├── experience/
│   │   └── contact/
│   ├── components/
│   │   ├── layout/ (Navbar, Footer, ThemeProvider, ThemeToggle)
│   │   ├── home/ (Hero, FeaturedWorks, AboutPreview, WhatIDo, ContactCTA)
│   │   ├── ui/ (Button, Badge, Card, Container, SectionHeading, Icons)
│   │   └── three/ (HeroScene interactive WebGL focal point)
│   ├── data/ (projects, experience, achievements, skills, personal)
│   ├── lib/
│   └── types/
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

```bash
# Run local dev server
npm run dev

# Type check
npx tsc --noEmit

# Lint
npm run lint

# Production build
npm run build
```
