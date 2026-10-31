export type SkillCategory = "Semua" | "Frontend" | "Backend & DB" | "Mobile & UI/UX" | "Tools";

export interface Skill {
  id: string;
  name: string;
  category: Exclude<SkillCategory, "Semua">;
  level: number;
  badge: "Advanced" | "Intermediate" | "Core Stack";
  description: string;
  iconKey: string;
  color: string;
}

