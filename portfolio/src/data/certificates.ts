import type { Certificate } from "../types/Certificate";

export const certificates: Certificate[] = [
  {
    id: "cert-dba-certified",
    title: "Sertifikat Kompetensi BNSP — Administrator Basis Data (Database Administrator)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP) • LSP Universitas Multi Data Palembang",
    date: "26 Oktober 2026",
    credentialId: "62019 2521 6 0000392 2026",
    regNumber: "No. Reg. TIK. 2385 00392 2026",
    validDuration: "Berlaku 3 (Tiga) Tahun",
    category: "Sertifikasi Kompetensi BNSP",
    skills: [
      "Mendesain Basis Data",
      "Membuat Basis Data",
      "Integrasi Data",
      "Kualitas Data",
      "Menggunakan SQL",
      "Akses Basis Data",
    ],
    description:
      "Dinyatakan Kompeten pada bidang Sistem Manajemen Data (Data Management System) dengan Kualifikasi/Kompetensi Administrator Basis Data (Database Administrator) oleh Badan Nasional Sertifikasi Profesi (BNSP) melalui LSP Universitas Multi Data Palembang.",
    accentColor: "from-amber-500 to-orange-600",
    fileUrl: "/sertifikat-dba-yuan-ramatullah.pdf",
    competencyUnits: [
      {
        code: "J.62DMS00.006.1",
        title: "Mendesain basis data",
        titleEn: "Designing a database",
      },
      {
        code: "J.62DMS00.010.1",
        title: "Membuat basis data",
        titleEn: "Creating a database",
      },
      {
        code: "J.62DMS00.011.1",
        title: "Membuat integrasi data",
        titleEn: "Creating data integration",
      },
      {
        code: "J.62DMS00.012.1",
        title: "Mengelola kualitas data",
        titleEn: "Managing data quality",
      },
      {
        code: "J.62DMS00.016.1",
        title: "Mengelola dokumen dan konten",
        titleEn: "Managing documents and content",
      },
      {
        code: "J.620100.020.02",
        title: "Menggunakan SQL",
        titleEn: "Using SQL",
      },
      {
        code: "J.620100.021.02",
        title: "Menerapkan akses basis data",
        titleEn: "Implementing database access",
      },
    ],
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
