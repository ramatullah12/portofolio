export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  iconKey: "github" | "linkedin" | "instagram" | "email" | "whatsapp";
  color: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  type: "Pendidikan" | "Proyek & Pengalaman" | "Pencapaian";
  description: string;
  highlights: string[];
  tags: string[];
}

