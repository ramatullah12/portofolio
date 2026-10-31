import type { ExperienceItem, SocialLink } from "../types/Social";

export const personalInfo = {
  name: "Yuan Ramatullah",
  shortName: "YR",
  role: "Frontend Developer & UI/UX Enthusiast",
  roles: [
    "Frontend Developer",
    "React & TypeScript Builder",
    "UI/UX Designer",
    "Laravel & Flutter Developer",
  ],
  university: "Universitas Multi Data Palembang",
  major: "S1 Sistem Informasi",
  location: "Palembang, Sumatera Selatan, Indonesia",
  email: "yuanramatullah@gmail.com",
  github: "https://github.com/ramatullah12",
  githubUsername: "@ramatullah12",
  availability: "Tersedia untuk Magang, Kolaborasi & Proyek Freelance",
  bio: "Mahasiswa Sistem Informasi di Universitas Multi Data Palembang yang berfokus pada pengembangan antarmuka web modern, cepat, dan intuitif. Menggabungkan keahlian Frontend Engineering (React, TypeScript, Tailwind CSS) dengan kemampuan Fullstack (Laravel, MySQL), Mobile (Flutter), serta kepekaan desain UI/UX.",
};

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    handle: "github.com/ramatullah12",
    url: "https://github.com/ramatullah12",
    iconKey: "github",
    color: "hover:border-slate-500 hover:text-slate-900 dark:hover:text-white",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "Yuan Ramatullah",
    url: "https://www.linkedin.com/in/yuan-ramatullah",
    iconKey: "linkedin",
    color: "hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@yuanramatullah",
    url: "https://www.instagram.com/",
    iconKey: "instagram",
    color: "hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400",
  },
  {
    id: "email",
    name: "Email",
    handle: "yuanramatullah@gmail.com",
    url: "mailto:yuanramatullah@gmail.com",
    iconKey: "email",
    color: "hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400",
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2023 — Sekarang",
    title: "Mahasiswa S1 Sistem Informasi",
    organization: "Universitas Multi Data Palembang (MDP)",
    location: "Palembang, Indonesia",
    type: "Pendidikan",
    description:
      "Mendalami analisis & perancangan sistem informasi, rekayasa perangkat lunak, pemrograman web & mobile, manajemen basis data, serta desain pengalaman pengguna (UI/UX).",
    highlights: [
      "Aktif membangun berbagai proyek aplikasi web dan mobile berbasis studi kasus nyata",
      "Fokus pada integrasi proses bisnis sistem informasi dengan antarmuka modern yang ramah pengguna",
      "Menguasai siklus pengembangan perangkat lunak mulai dari analisis kebutuhan, ERD/UML, desain Figma, hingga implementasi kode",
    ],
    tags: ["Sistem Informasi", "Software Engineering", "Database Design", "UI/UX"],
  },
  {
    id: "exp-2",
    period: "2025 — Sekarang",
    title: "Frontend & Fullstack Project Developer",
    organization: "Independent & Academic Software Projects",
    location: "Palembang / Remote",
    type: "Proyek & Pengalaman",
    description:
      "Merancang dan mengembangkan berbagai solusi web dan aplikasi mobile seperti Sistem Absensi Geolocation, Platform Booking Studio Fotografi, dan Sistem Manajemen Rental Kendaraan.",
    highlights: [
      "Membangun arsitektur komponen React + TypeScript + Tailwind CSS yang modular dan responsif",
      "Mengintegrasikan RESTful API berbasis Laravel & MySQL dengan validasi data yang ketat",
      "Menerapkan prinsip performa web, aksesibilitas, dan animasi interaktif menggunakan Framer Motion",
    ],
    tags: ["React", "TypeScript", "Laravel", "Tailwind CSS", "MySQL"],
  },
  {
    id: "exp-3",
    period: "2024 — Sekarang",
    title: "Mobile App & UI/UX Exploration",
    organization: "UI/UX & Cross-Platform Development",
    location: "Palembang, Indonesia",
    type: "Pencapaian",
    description:
      "Mengeksplorasi perancangan sistem desain (Design System) di Figma dan pengembangan aplikasi mobile multi-platform menggunakan Flutter.",
    highlights: [
      "Merancang prototipe high-fidelity dengan alur pengguna yang terstruktur sebelum tahap coding",
      "Mengembangkan aplikasi mobile produktivitas dan utilitas menggunakan Flutter & Dart",
      "Konsisten menerapkan standar kode bersih (Clean Code) dan dokumentasi repositori di GitHub",
    ],
    tags: ["Flutter", "Dart", "Figma", "Design System", "Prototyping"],
  },
];

