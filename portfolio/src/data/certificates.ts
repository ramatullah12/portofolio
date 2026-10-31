import type { Certificate } from "../types/Certificate";

export const certificates: Certificate[] = [
  {
    id: "cert-dba-certified",
    title: "Lulus Sertifikasi Kompetensi — Database Administrator (DBA)",
    issuer: "Sertifikasi Kompetensi Profesi / BNSP",
    date: "2025 – 2026",
    credentialId: "DBA-CERT-LULUS",
    category: "Professional Certification",
    skills: [
      "Database Administration",
      "MySQL & Relational DB",
      "SQL Query Optimization",
      "Database Design & Security",
      "Backup & Data Integrity",
    ],
    description:
      "Dinyatakan Kompeten / Lulus Sertifikasi Database Administrator (DBA), mencakup perancangan skema basis data relasional, administrasi server database, optimasi kueri SQL, keamanan akses data, serta pemeliharaan integritas data.",
    accentColor: "from-amber-500 to-orange-600",
  },
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
];
