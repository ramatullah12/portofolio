export type ProjectCategory = "Semua" | "Internship & Enterprise" | "Web App" | "Academic Project";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  category: Exclude<ProjectCategory, "Semua">;
  technologies: string[];
  features: string[];
  year: string;
  role: string;
  featured: boolean;
  liveUrl?: string;
  liveDomain?: string;
  githubUrl?: string;
  accentColor: string;
  previewType: "rakentra" | "kedaton" | "jobportal" | "uassi4b";
  metrics?: {
    label: string;
    value: string;
  }[];
}
