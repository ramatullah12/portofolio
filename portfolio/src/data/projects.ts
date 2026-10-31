import type { Project, ProjectCategory } from "../types/Project";

export const projectCategories: ProjectCategory[] = [
  "Semua",
  "Internship & Enterprise",
  "Web App",
  "Academic Project",
];

export const projects: Project[] = [
  {
    id: "rakentra-app",
    title: "Rakentra — Heavy Equipment Fleet & Maintenance System",
    subtitle: "PT Rachmat Kelantan Sakti • Fleet Reservation, Repair & Inventory",
    description:
      "Aplikasi sistem informasi manajemen alat berat terintegrasi untuk PT Rachmat Kelantan Sakti. Mengelola reservasi armada lintas lokasi konstruksi secara real-time, pelacakan riwayat perbaikan (maintenance), serta kontrol stok suku cadang otomatis.",
    challenge:
      "Alokasi alat berat di berbagai lokasi proyek konstruksi membutuhkan koordinasi real-time, sementara pencatatan downtime alat dan stok suku cadang perbaikan membutuhkan sinkronisasi data otomatis agar tidak menghambat operasional.",
    solution:
      "Membangun sistem web terintegrasi dengan modul booking alat berat real-time, pelacakan jadwal servis & downtime, serta sinkronisasi otomatis antara modul perbaikan dan database inventori untuk pemotongan stok & peringatan pengadaan (procurement alerts).",
    category: "Internship & Enterprise",
    technologies: [
      "React.js",
      "Laravel",
      "MySQL",
      "Eloquent ORM",
      "REST API",
      "Tailwind CSS",
    ],
    features: [
      "Integrated Fleet Reservation: Modul booking alat berat real-time lintas lokasi konstruksi",
      "Maintenance & Repair Tracking: Dokumentasi downtime alat, riwayat servis, dan jadwal pemeliharaan rutin",
      "Inventory & Spare Parts Control: Pelacakan stok suku cadang untuk mencegah keterlambatan operasional",
      "Automated Data Synchronization: Pemotongan stok otomatis & procurement alerts saat aktivitas pemeliharaan",
    ],
    year: "Jan – Jun 2026",
    role: "Fullstack Web Developer (Internship)",
    featured: true,
    liveUrl: "https://rakentra.vercel.app/login",
    liveDomain: "rakentra.vercel.app/login",
    githubUrl: "https://github.com/ramatullah12",
    accentColor: "from-emerald-600 to-teal-500",
    previewType: "rakentra",
    metrics: [
      { label: "Status App", value: "Live di Vercel" },
      { label: "Sinkronisasi Stok", value: "Otomatis" },
      { label: "Perusahaan", value: "PT RKS" },
    ],
  },
  {
    id: "kedaton-app",
    title: "Kedaton Property — Real Estate & Property Platform",
    subtitle: "PT Kedaton Sejahtera Abadi • Property Catalogue & Advanced Search",
    description:
      "Platform real estate modern yang dikembangkan untuk PT Kedaton Sejahtera Abadi. Menampilkan katalog unit properti, ketersediaan kavling/hunian, pengelolaan prospek pembeli (buyer leads), serta fitur pencarian properti cepat berdasarkan spesifikasi.",
    challenge:
      "Calon pembeli membutuhkan akses cepat untuk mencari properti berdasarkan rentang harga, luas tanah, dan spesifikasi bangunan, sementara tim internal memerlukan manajemen ketersediaan unit dan leads yang terstruktur.",
    solution:
      "Mengembangkan arsitektur fullstack dengan pemisahan logika MVC yang bersih, skema database MySQL & Eloquent ORM yang teroptimasi, integrasi RESTful API aman dengan validasi & proteksi CSRF, serta fitur Advanced Search.",
    category: "Internship & Enterprise",
    technologies: [
      "Laravel (MVC)",
      "React.js",
      "MySQL",
      "Eloquent ORM",
      "RESTful API",
      "Tailwind CSS",
    ],
    features: [
      "Full-Stack Architecture: Platform properti modern dengan pemisahan logika yang bersih dan responsif",
      "Database Management: Pengelolaan data properti kompleks, ketersediaan unit, dan buyer leads",
      "Advanced Property Search: Filter pencarian instan berdasarkan harga, luas tanah, dan spesifikasi unit",
      "API & Security: Integrasi RESTful API dengan validasi data ketat dan proteksi keamanan CSRF",
    ],
    year: "Sep 2025 – Jan 2026",
    role: "Fullstack Web Developer (Internship)",
    featured: true,
    liveUrl: "https://kedaton-gamma.vercel.app/",
    liveDomain: "kedaton-gamma.vercel.app",
    githubUrl: "https://github.com/ramatullah12",
    accentColor: "from-blue-600 to-indigo-600",
    previewType: "kedaton",
    metrics: [
      { label: "Status App", value: "Live di Vercel" },
      { label: "Pencarian", value: "Instant Filter" },
      { label: "Perusahaan", value: "PT KSA" },
    ],
  },
  {
    id: "job-portal-app",
    title: "Job Portal — Platform Pencarian Kerja & Rekrutmen Karir",
    subtitle: "Modern Career Portal with Redux & TanStack Query",
    description:
      "Aplikasi web Job Portal interaktif yang memudahkan pencari kerja menjelajahi lowongan berdasarkan kategori, lokasi, dan tipe pekerjaan, dilengkapi pengelolaan state klien & server modern yang responsif.",
    challenge:
      "Menyajikan daftar lowongan kerja yang dinamis dengan fitur pencarian, filter multi-kriteria, dan detail lowongan tanpa membebani performa halaman atau menyebabkan pemuatan berulang.",
    solution:
      "Membangun antarmuka pengguna responsif menggunakan React.js dan Tailwind CSS, dipadukan dengan pengelolaan client state (Redux), server state synchronization (TanStack Query), serta integrasi REST API.",
    category: "Web App",
    technologies: [
      "React.js",
      "Redux",
      "TanStack Query",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "REST API",
    ],
    features: [
      "Eksplorasi & pencarian lowongan kerja real-time dengan filter posisi, lokasi, dan tipe karir",
      "Halaman detail perusahaan, kualifikasi kandidat, dan alur pengajuan lamaran yang intuitif",
      "Manajemen state efisien dengan Redux & caching data cepat menggunakan TanStack Query",
      "Desain antarmuka user-centric yang sepenuhnya responsif di perangkat mobile dan desktop",
    ],
    year: "2025 – 2026",
    role: "Frontend Web Developer",
    featured: true,
    liveUrl: "https://job-portal-wine-mu.vercel.app/",
    liveDomain: "job-portal-wine-mu.vercel.app",
    githubUrl: "https://github.com/ramatullah12",
    accentColor: "from-violet-600 to-fuchsia-600",
    previewType: "jobportal",
    metrics: [
      { label: "Status App", value: "Live di Vercel" },
      { label: "State Mgmt", value: "Redux + Query" },
      { label: "Desain", value: "Responsive UI" },
    ],
  },
  {
    id: "project-uas-si4b",
    title: "Project UAS SI4B — Aplikasi Web Sistem Informasi (Yuan & Dimas)",
    subtitle: "Universitas Multi Data Palembang • Information Systems Web Project",
    description:
      "Proyek pengembangan aplikasi web Sistem Informasi (SI4B) di Universitas Multi Data Palembang yang menerapkan prinsip rekayasa perangkat lunak, desain antarmuka responsif, dan pengelolaan data terstruktur.",
    challenge:
      "Mengintegrasikan kebutuhan fungsional akademik Sistem Informasi ke dalam aplikasi web yang mudah digunakan, cepat diakses secara online, dan memiliki struktur kode yang rapi.",
    solution:
      "Merancang antarmuka web modern yang responsif dengan komponen terstruktur, alur navigasi yang jelas, dan deployment produksi di Vercel.",
    category: "Academic Project",
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Git & GitHub",
    ],
    features: [
      "Implementasi arsitektur antarmuka web Sistem Informasi yang bersih dan terstruktur",
      "Tata letak responsif (Responsive Web Design) yang optimal di layar desktop maupun smartphone",
      "Kolaborasi tim pengembangan (Yuan & Dimas) menggunakan workflow Git, GitHub, dan Vercel",
      "Pengalaman pengguna interaktif dengan pemuatan halaman yang cepat",
    ],
    year: "2024 – 2025",
    role: "Frontend Developer",
    featured: true,
    liveUrl: "https://project-uas-si4b-yuandimas.vercel.app/",
    liveDomain: "project-uas-si4b-yuandimas.vercel.app",
    githubUrl: "https://github.com/ramatullah12",
    accentColor: "from-sky-500 to-cyan-500",
    previewType: "uassi4b",
    metrics: [
      { label: "Status App", value: "Live di Vercel" },
      { label: "Kampus", value: "Univ. MDP (SI4B)" },
      { label: "Kolaborasi", value: "Teamwork" },
    ],
  },
];
