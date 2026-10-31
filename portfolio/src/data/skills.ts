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
    level: 94,
    badge: "Core Stack",
    description:
      "Spesialisasi utama membangun aplikasi web responsif, user-centric, dan modular dengan Clean Code.",
    iconKey: "react",
    color: "#38bdf8",
  },
  {
    id: "redux-query",
    name: "Redux & TanStack Query",
    category: "Frontend",
    level: 90,
    badge: "Core Stack",
    description:
      "Manajemen client state dengan Redux serta sinkronisasi & caching server state menggunakan React Query.",
    iconKey: "redux",
    color: "#764abc",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: 92,
    badge: "Core Stack",
    description:
      "Penguasaan mendalam asynchronous JS, integrasi REST API, manipulasi DOM, dan logika pemfilteran cepat.",
    iconKey: "javascript",
    color: "#eab308",
  },
  {
    id: "tailwind-bootstrap",
    name: "Tailwind CSS & Bootstrap",
    category: "Frontend",
    level: 95,
    badge: "Core Stack",
    description:
      "Implementasi Responsive Web Design modern dengan utility-first CSS maupun komponen Bootstrap.",
    iconKey: "tailwind",
    color: "#06b6d4",
  },
  {
    id: "html-css",
    name: "HTML5 & CSS3",
    category: "Frontend",
    level: 95,
    badge: "Advanced",
    description:
      "Struktur semantik HTML5, layout Flexbox/Grid modern, aksesibilitas, dan animasi antarmuka web.",
    iconKey: "html5",
    color: "#f97316",
  },
  {
    id: "laravel",
    name: "Laravel (MVC & Eloquent)",
    category: "Backend & DB",
    level: 92,
    badge: "Core Stack",
    description:
      "Pengembangan platform enterprise dengan arsitektur MVC, Eloquent ORM, validasi data, & proteksi CSRF.",
    iconKey: "laravel",
    color: "#ef4444",
  },
  {
    id: "mysql",
    name: "MySQL & Database Design",
    category: "Backend & DB",
    level: 90,
    badge: "Core Stack",
    description:
      "Perancangan skema database relasional teroptimasi, sinkronisasi inventori otomatis, dan query cepat.",
    iconKey: "mysql",
    color: "#0284c7",
  },
  {
    id: "php",
    name: "PHP & CRUD Development",
    category: "Backend & DB",
    level: 89,
    badge: "Advanced",
    description:
      "Pemrograman backend berorientasi objek (OOP), pembuatan aplikasi CRUD, dan logika bisnis server-side.",
    iconKey: "php",
    color: "#8b5cf6",
  },
  {
    id: "express",
    name: "Express.js & REST API",
    category: "Backend & DB",
    level: 85,
    badge: "Advanced",
    description:
      "Pembuatan dan integrasi RESTful API lintas frontend (React/Angular) dengan autentikasi & validasi aman.",
    iconKey: "express",
    color: "#10b981",
  },
  {
    id: "figma",
    name: "Figma & Responsive UI/UX",
    category: "Mobile & UI/UX",
    level: 88,
    badge: "Core Stack",
    description:
      "Perancangan antarmuka berpusat pada pengguna (user-centric), wireframing, dan prototyping desain.",
    iconKey: "figma",
    color: "#f43f5e",
  },
  {
    id: "git-github",
    name: "Git, GitHub & VS Code",
    category: "Tools",
    level: 90,
    badge: "Core Stack",
    description:
      "Version control kolaboratif, manajemen repositori kode bersih, dan workflow pengembangan modern.",
    iconKey: "git",
    color: "#f97316",
  },
  {
    id: "postman-tableau",
    name: "Postman, Tableau & XAMPP",
    category: "Tools",
    level: 87,
    badge: "Advanced",
    description:
      "Pengujian endpoint REST API dengan Postman, manajemen server lokal XAMPP, dan visualisasi data Tableau.",
    iconKey: "postman",
    color: "#ff6c37",
  },
];
