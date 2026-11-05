export type ProjectCategory =
  | "UI/UX Design"
  | "Web Development"
  | "Mobile Development"
  | "System Analysis";

export interface ProjectGalleryItem {
  url: string;
  caption: string;
  type?: "screenshot" | "figma" | "diagram" | "branding" | "mockup";
}

export interface ProjectProcessStep {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: ProjectCategory;
  year: string;
  role: string;
  shortDescription: string;
  overview: string;
  problem: string;
  objectives: string[];
  contributions: string[];
  process: ProjectProcessStep[];
  technology: string[];
  gallery: ProjectGalleryItem[];
  results: string;
  reflection?: string;
  disclaimer?: string;
  coverImage: string;
  projectUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: "Work" | "Organization" | "Committee";
  location?: string;
  description: string[];
  technology?: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
}

export interface AchievementItem {
  id: string;
  year: string;
  title: string;
  award: string;
  issuer: string;
  category?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
