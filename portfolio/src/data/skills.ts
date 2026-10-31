import type { Skill, SkillCategory } from "../types/Skill";

export const skillCategories: SkillCategory[] = [
  "Semua",
  "Frontend",
  "Backend & DB",
  "Mobile & UI/UX",
  "Tools",
];

export const skills: Skill[] = [
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    level: 92,
    badge: "Core Stack",
    description:
      "Membangun SPA interaktif dengan custom hooks, state management modern, dan komponen reusable.",
    iconKey: "react",
    color: "#38bdf8",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    level: 88,
    badge: "Core Stack",
    description:
      "Menulis kode frontend yang aman secara tipe (type-safe), mudah dipelihara, dan skalabel.",
    iconKey: "typescript",
    color: "#3b82f6",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    level: 95,
    badge: "Core Stack",
    description:
      "Merancang desain antarmuka responsif, sistem desain konsisten, dan dark mode dengan cepat.",
    iconKey: "tailwind",
    color: "#06b6d4",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: 90,
    badge: "Advanced",
    description:
      "Penguasaan asynchronous programming, manipulasi DOM, REST API integration, dan performa web.",
    iconKey: "javascript",
    color: "#eab308",
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "Backend & DB",
    level: 86,
    badge: "Core Stack",
    description:
      "Pengembangan backend fullstack, autentikasi, Eloquent ORM, dan pembuatan RESTful API.",
    iconKey: "laravel",
    color: "#ef4444",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Backend & DB",
    level: 85,
    badge: "Advanced",
    description:
      "Perancangan skema database relasional, normalisasi data, dan optimasi query sistem informasi.",
    iconKey: "mysql",
    color: "#0284c7",
  },
  {
    id: "php",
    name: "PHP 8+",
    category: "Backend & DB",
    level: 84,
    badge: "Advanced",
    description:
      "Pemrograman berorientasi objek (OOP) untuk arsitektur MVC dan sistem informasi berbasis web.",
    iconKey: "php",
    color: "#8b5cf6",
  },
  {
    id: "flutter",
    name: "Flutter & Dart",
    category: "Mobile & UI/UX",
    level: 85,
    badge: "Core Stack",
    description:
      "Pengembangan aplikasi mobile lintas platform (Android & iOS) dengan UI mulus dan integrasi API.",
    iconKey: "flutter",
    color: "#0ea5e9",
  },
  {
    id: "figma",
    name: "Figma & UI/UX",
    category: "Mobile & UI/UX",
    level: 90,
    badge: "Core Stack",
    description:
      "Wireframing, high-fidelity prototyping, design system, serta riset alur pengguna (User Flow).",
    iconKey: "figma",
    color: "#f43f5e",
  },
  {
    id: "framer",
    name: "Framer Motion",
    category: "Mobile & UI/UX",
    level: 84,
    badge: "Intermediate",
    description:
      "Micro-interactions, transisi halaman yang halus, dan animasi antarmuka berbasis fisika.",
    iconKey: "framer",
    color: "#a855f7",
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "Tools",
    level: 88,
    badge: "Advanced",
    description:
      "Version control, kolaborasi tim dengan branching workflow, pull request, dan dokumentasi rilis.",
    iconKey: "git",
    color: "#f97316",
  },
  {
    id: "vite",
    name: "Vite & Modern Tooling",
    category: "Tools",
    level: 89,
    badge: "Advanced",
    description:
      "Konfigurasi build cepat, optimasi bundle frontend, ESLint, dan integrasi ekosistem React modern.",
    iconKey: "vite",
    color: "#6366f1",
  },
];

