import type { Project, ProjectCategory } from "../types/Project";

export const projectCategories: ProjectCategory[] = [
  "Semua",
  "Web App",
  "Mobile App",
  "UI/UX Design",
];

export const projects: Project[] = [
  {
    id: "rks-fleet-system",
    title: "Heavy Equipment Fleet & Maintenance System — PT Rachmat Kelantan Sakti",
    subtitle: "Integrated Fleet Reservation, Repair Tracking & Spare Parts Inventory",
    description:
      "Sistem informasi manajemen alat berat terintegrasi yang dikembangkan saat magang di PT Rachmat Kelantan Sakti untuk mengelola reservasi armada lintas lokasi konstruksi, pelacakan jadwal perbaikan, serta sinkronisasi stok suku cadang otomatis.",
    challenge:
      "Alokasi alat berat di berbagai lokasi proyek konstruksi membutuhkan koordinasi real-time, sementara pencatatan downtime alat dan ketersediaan suku cadang perbaikan sebelumnya rentan mengalami keterlambatan sinkronisasi.",
    solution:
      "Mengembangkan modul reservasi armada real-time, sistem pelacakan riwayat servis & downtime, serta integrasi otomatis antara modul perbaikan dan database inventori untuk pemotongan stok otomatis dan peringatan pengadaan (procurement alerts).",
    category: "Web App",
    technologies: ["Laravel", "PHP", "MySQL", "Eloquent ORM", "REST API", "Tailwind CSS"],
    features: [
      "Integrated Fleet Reservation: Modul booking alat berat real-time untuk optimasi alokasi armada di berbagai lokasi proyek konstruksi",
      "Maintenance & Repair Tracking: Dokumentasi komprehensif downtime alat, riwayat servis, dan jadwal pemeliharaan rutin",
      "Inventory & Spare Parts Control: Sistem pelacakan stok suku cadang untuk mencegah keterlambatan operasional",
      "Automated Data Synchronization: Pemotongan stok otomatis & procurement alerts saat aktivitas maintenance berlangsung",
    ],
    year: "Jan – Jun 2026",
    role: "Fullstack Web Developer (Internship)",
    featured: true,
    githubUrl: "https://github.com/ramatullah12",
    liveUrl: "#projects",
    accentColor: "from-emerald-600 to-teal-500",
    previewType: "rental",
    metrics: [
      { label: "Alokasi Armada", value: "Real-Time" },
      { label: "Sinkronisasi Stok", value: "Otomatis" },
      { label: "Periode", value: "Jan–Jun 2026" },
    ],
  },
  {
    id: "ksa-real-estate",
    title: "Real Estate & Property Platform — PT Kedaton Sejahtera Abadi",
    subtitle: "Full-Stack MVC Property Management & Advanced Search API",
    description:
      "Platform real estate komprehensif yang dikembangkan saat magang di PT Kedaton Sejahtera Abadi menggunakan arsitektur Laravel (MVC), skema MySQL teroptimasi dengan Eloquent ORM, serta RESTful API yang terintegrasi dengan frontend Angular.",
    challenge:
      "Pengelolaan data properti yang kompleks, status ketersediaan unit, dan data prospek pembeli (buyer leads) memerlukan struktur database yang efisien serta fitur pencarian properti yang instan.",
    solution:
      "Membangun arsitektur backend Laravel (MVC) dan skema MySQL dengan Eloquent ORM, menyediakan RESTful API aman dengan validasi data & proteksi CSRF untuk frontend Angular, serta mengimplementasikan fitur Advanced Search berkinerja tinggi.",
    category: "Web App",
    technologies: ["Laravel (MVC)", "MySQL", "Eloquent ORM", "RESTful API", "Angular Integration", "CSRF Security"],
    features: [
      "Full-Stack MVC Architecture: Pemisahan logika bisnis yang bersih untuk performa dan pengalaman pengguna optimal",
      "Optimized Database Management: Skema MySQL & Eloquent ORM untuk mengelola unit properti, ketersediaan, dan buyer leads",
      "Secure RESTful API: Endpoint terintegrasi dengan frontend Angular dilengkapi validasi ketat & proteksi CSRF",
      "High-Performance Advanced Search: Filter instan berdasarkan rentang harga, luas tanah, dan spesifikasi bangunan",
    ],
    year: "Sep 2025 – Jan 2026",
    role: "Fullstack Web Developer (Internship)",
    featured: true,
    githubUrl: "https://github.com/ramatullah12",
    liveUrl: "#projects",
    accentColor: "from-blue-600 to-cyan-500",
    previewType: "absensi",
    metrics: [
      { label: "Arsitektur", value: "Laravel MVC" },
      { label: "Integrasi API", value: "Angular + REST" },
      { label: "Keamanan", value: "CSRF + Validasi" },
    ],
  },
  {
    id: "react-state-architecture",
    title: "Enterprise React Dashboard — Redux & TanStack Query",
    subtitle: "Client & Server State Synchronization Web Application",
    description:
      "Aplikasi dashboard manajemen data responsif berbasis React.js yang mengimplementasikan pemisahan state modern menggunakan Redux untuk client state dan TanStack Query (React Query) untuk caching serta sinkronisasi data dari REST API.",
    challenge:
      "Aplikasi web yang intensif berinteraksi dengan REST API sering mengalami duplikasi request, loading state yang tidak konsisten, dan pengelolaan state global yang rumit.",
    solution:
      "Menerapkan TanStack Query untuk background fetching, caching, dan optimistic updates dari server, dipadukan dengan Redux untuk state UI klien serta Tailwind CSS untuk antarmuka responsif.",
    category: "Web App",
    technologies: ["React.js", "Redux", "TanStack Query", "JavaScript (ES6+)", "Tailwind CSS", "REST API"],
    features: [
      "Sinkronisasi data server otomatis, caching pintar, dan pagination dengan TanStack Query (React Query)",
      "Manajemen state global klien (autentikasi, preferensi tema, filter aktif) menggunakan Redux",
      "Desain antarmuka responsif dan berpusat pada pengguna (user-centric) dengan Tailwind CSS",
      "Struktur kode modular dengan praktik Clean Code yang mudah dipelihara",
    ],
    year: "2026",
    role: "Frontend Developer",
    featured: true,
    githubUrl: "https://github.com/ramatullah12",
    liveUrl: "#projects",
    accentColor: "from-violet-600 to-fuchsia-500",
    previewType: "fotografi",
    metrics: [
      { label: "Client State", value: "Redux" },
      { label: "Server State", value: "TanStack Query" },
      { label: "Standar Kode", value: "Clean Code" },
    ],
  },
  {
    id: "express-crud-api",
    title: "RESTful CRUD & Analytics Service — Express.js & Tableau",
    subtitle: "Backend API Service & Business Intelligence Visualization",
    description:
      "Pengembangan layanan REST API dan aplikasi CRUD menggunakan Express.js dan MySQL, dilengkapi integrasi visualisasi analitik data interaktif menggunakan Tableau untuk mendukung pengambilan keputusan berbasis data.",
    challenge:
      "Kebutuhan akan layanan API yang ringan untuk operasi CRUD cepat sekaligus penyajian laporan analitik yang mudah dipahami oleh pemangku kepentingan.",
    solution:
      "Membangun endpoint RESTful menggunakan Express.js & MySQL yang diuji secara menyeluruh dengan Postman, serta menyusun dashboard analitik visual di Tableau.",
    category: "Web App",
    technologies: ["Express.js", "React.js", "MySQL", "REST API", "Postman", "Tableau"],
    features: [
      "Operasi CRUD lengkap dengan arsitektur RESTful API menggunakan Express.js dan MySQL",
      "Pengujian dan dokumentasi koleksi endpoint API menggunakan Postman",
      "Visualisasi tren data dan metrik kinerja operasional menggunakan Tableau",
      "Antarmuka web responsif menggunakan Bootstrap & Tailwind CSS",
    ],
    year: "2025",
    role: "Frontend & Backend Developer",
    featured: false,
    githubUrl: "https://github.com/ramatullah12",
    liveUrl: "#projects",
    accentColor: "from-rose-500 to-pink-600",
    previewType: "pos",
    metrics: [
      { label: "API Testing", value: "Postman" },
      { label: "BI Analytics", value: "Tableau" },
      { label: "Database", value: "MySQL" },
    ],
  },
  {
    id: "figma-uiux-system",
    title: "User-Centric Web UI/UX & Responsive Design System",
    subtitle: "High-Fidelity Prototyping & Frontend Implementation",
    description:
      "Perancangan antarmuka web modern di Figma yang diterjemahkan langsung menjadi komponen React.js, HTML5, CSS3, dan Tailwind CSS yang 100% responsif di berbagai ukuran layar.",
    challenge:
      "Menjaga konsistensi desain antara prototipe di Figma dengan hasil akhir implementasi kode HTML5/CSS3/React di browser.",
    solution:
      "Menyusun komponen UI yang terstandarisasi di Figma dan mengimplementasikannya dengan pendekatan Mobile-First Responsive Web Design.",
    category: "UI/UX Design",
    technologies: ["Figma", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    features: [
      "Desain prototipe interaktif berpusat pada kenyamanan pengguna (User-Centric Design)",
      "Implementasi kode presisi tinggi (pixel-accurate) ke React.js & Tailwind CSS",
      "Tata letak responsif penuh untuk perangkat Mobile, Tablet, dan Desktop",
      "Penerapan hierarki tipografi dan kontras warna yang ramah aksesibilitas",
    ],
    year: "2025",
    role: "Frontend Developer & UI/UX Designer",
    featured: false,
    githubUrl: "https://github.com/ramatullah12",
    liveUrl: "#projects",
    accentColor: "from-amber-500 to-orange-600",
    previewType: "fintrack",
    metrics: [
      { label: "Design Tool", value: "Figma" },
      { label: "Layout", value: "Responsive" },
      { label: "Styling", value: "Tailwind & CSS3" },
    ],
  },
];
