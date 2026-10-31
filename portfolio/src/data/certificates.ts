import type { Certificate } from "../types/Certificate";

export const certificates: Certificate[] = [
  {
    id: "cert-frontend-react",
    title: "Modern Frontend Web Development with React & TypeScript",
    issuer: "Dicoding / Kampus Merdeka Competency",
    date: "2026",
    credentialId: "YR-FE-2026-089",
    category: "Frontend Engineering",
    skills: ["React.js", "TypeScript", "State Management", "Clean Architecture"],
    description:
      "Sertifikasi kompetensi pengembangan aplikasi web modern menggunakan ekosistem React, TypeScript, custom hooks, dan optimasi performa antarmuka.",
    accentColor: "from-blue-500 to-cyan-500",
  },
  {
    id: "cert-uiux-design",
    title: "UI/UX Design Mastery: Wireframing to Design System",
    issuer: "Google UX / Design Track",
    date: "2025",
    credentialId: "YR-UX-2025-142",
    category: "UI/UX Design",
    skills: ["Figma", "User Research", "Interactive Prototyping", "Usability Testing"],
    description:
      "Perancangan pengalaman pengguna berpusat pada manusia (Human-Centered Design), penyusunan komponen Design System, dan validasi prototipe interaktif.",
    accentColor: "from-fuchsia-500 to-rose-500",
  },
  {
    id: "cert-laravel-fullstack",
    title: "Fullstack Web Development with Laravel & MySQL",
    issuer: "Web Programming Certification",
    date: "2025",
    credentialId: "YR-BE-2025-311",
    category: "Backend & Database",
    skills: ["Laravel", "PHP 8", "MySQL", "RESTful API", "Authentication"],
    description:
      "Pengembangan arsitektur backend MVC, perancangan skema database relasional MySQL, keamanan endpoint API, dan integrasi frontend-backend.",
    accentColor: "from-emerald-500 to-teal-500",
  },
  {
    id: "cert-flutter-mobile",
    title: "Cross-Platform Mobile App Development with Flutter",
    issuer: "Mobile Developer Academy",
    date: "2025",
    credentialId: "YR-MB-2025-204",
    category: "Mobile Development",
    skills: ["Flutter", "Dart", "Responsive Mobile UI", "REST API Integration"],
    description:
      "Pembuatan aplikasi mobile multi-platform dengan widget kustom, manajemen state yang efisien, serta integrasi layanan REST API.",
    accentColor: "from-sky-500 to-indigo-500",
  },
];

