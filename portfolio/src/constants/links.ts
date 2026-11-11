import { personalInfo } from "../data/socials";

export const EXTERNAL_LINKS = {
  github: personalInfo.github,
  linkedin: personalInfo.linkedin,
  whatsapp: personalInfo.whatsappUrl,
  email: `mailto:${personalInfo.email}`,
  projects: {
    rakentra: "https://rakentra.vercel.app/login",
    kedaton: "https://kedaton-gamma.vercel.app/",
    smartpresence: "https://smartpresence-phi.vercel.app/dashboard",
    lensakarya: "https://lensakarya.vercel.app/",
    driveease: "https://driveeasee.vercel.app/",
    jobPortal: "https://job-portal-wine-mu.vercel.app/",
    rpl: "https://rpl-umber.vercel.app/",
    uasSi4b: "https://project-uas-si4b-yuandimas.vercel.app/",
  },
} as const;

