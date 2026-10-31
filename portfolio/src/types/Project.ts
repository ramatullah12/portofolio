export type ProjectCategory = "Semua" | "Web App" | "Mobile App" | "UI/UX Design";

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
  githubUrl?: string;
  accentColor: string;
  previewType: "absensi" | "fotografi" | "rental" | "studyhub" | "fintrack" | "pos";
  metrics?: {
    label: string;
    value: string;
  }[];
}

