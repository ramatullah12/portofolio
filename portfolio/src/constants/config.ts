import { personalInfo } from "../data/socials";

export const SITE_CONFIG = {
  siteName: `${personalInfo.name} — Portfolio`,
  author: personalInfo.name,
  university: personalInfo.university,
  major: personalInfo.major,
  gpa: personalInfo.gpa,
  email: personalInfo.email,
  phone: personalInfo.phone,
  githubUrl: personalInfo.github,
  linkedinUrl: personalInfo.linkedin,
} as const;

