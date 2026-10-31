import type { Certificate } from "../types/Certificate";

export const certificates: Certificate[] = [
  {
    id: "cert-mdp-is",
    title: "Sarjana Sistem Informasi (S1) — IPK 3.47 / 4.00",
    issuer: "Universitas Multi Data Palembang",
    date: "Sep 2022 – Agu 2026",
    credentialId: "MDP-SI-3.47",
    category: "Academic Degree",
    skills: [
      "Information Systems",
      "Software Engineering",
      "Database Design",
      "MVC Architecture",
    ],
    description:
      "Pendidikan tinggi S1 Sistem Informasi di Universitas Multi Data Palembang dengan capaian IPK 3.47 / 4.00, berfokus pada rekayasa perangkat lunak, manajemen basis data, dan pengembangan web.",
    accentColor: "from-blue-600 to-cyan-500",
  },
  {
    id: "cert-intern-rks",
    title: "Fullstack Web Developer Internship — Fleet & Maintenance System",
    issuer: "PT Rachmat Kelantan Sakti",
    date: "Jan 2026 – Jun 2026",
    credentialId: "RKS-INTERN-2026",
    category: "Industrial Experience",
    skills: [
      "Fleet Reservation",
      "Repair Tracking",
      "Inventory Control",
      "Automated Data Sync",
    ],
    description:
      "Pengalaman industri membangun sistem reservasi alat berat real-time, pelacakan pemeliharaan & perbaikan, serta otomatisasi sinkronisasi inventori suku cadang.",
    accentColor: "from-emerald-500 to-teal-500",
  },
  {
    id: "cert-intern-ksa",
    title: "Fullstack Web Developer Internship — Real Estate Platform",
    issuer: "PT Kedaton Sejahtera Abadi",
    date: "Sep 2025 – Jan 2026",
    credentialId: "KSA-INTERN-2025",
    category: "Industrial Experience",
    skills: ["Laravel (MVC)", "MySQL & Eloquent ORM", "RESTful API", "CSRF Security"],
    description:
      "Pengalaman industri mengembangkan platform properti berbasis Laravel (MVC), perancangan skema database MySQL, integrasi RESTful API dengan frontend Angular, dan fitur pencarian cepat.",
    accentColor: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "cert-frontend-react",
    title: "Modern Frontend Engineering: React.js, Redux & TanStack Query",
    issuer: "Core Technical Specialization",
    date: "2025 – 2026",
    credentialId: "FE-REACT-SPEC",
    category: "Frontend Specialization",
    skills: ["React.js", "Redux", "TanStack Query", "Tailwind CSS", "Clean Code"],
    description:
      "Spesialisasi teknis dalam pengembangan aplikasi web responsif menggunakan React.js, pengelolaan state klien dengan Redux, dan sinkronisasi state server dengan TanStack Query.",
    accentColor: "from-sky-500 to-indigo-500",
  },
];
