import type { ExperienceItem, SocialLink } from "../types/Social";

export const personalInfo = {
  name: "Yuan Ramatullah",
  shortName: "YR",
  role: "Frontend & Fullstack Web Developer",
  roles: [
    "Frontend Developer (React.js)",
    "Fullstack Web Developer (Laravel)",
    "Certified Database Administrator",
    "Redux & TanStack Query Specialist",
  ],
  university: "Universitas Multi Data Palembang",
  major: "S1 Sistem Informasi (Information Systems)",
  educationPeriod: "Sep 2022 – Agu 2026",
  gpa: "3.47 / 4.00",
  location: "Palembang, Sumatera Selatan, Indonesia",
  phone: "085726260786",
  phoneFormatted: "+62 857-2626-0786",
  whatsappUrl: "https://wa.me/6285726260786",
  email: "yuantullah@gmail.com",
  linkedin: "https://www.linkedin.com/in/yuan-ramatullah-24980a36a/",
  github: "https://github.com/ramatullah12",
  githubUsername: "@ramatullah12",
  availability: "Siap Bekerja Full-Time / Kontrak / Kolaborasi Proyek",
  bio: "Saya adalah seorang Frontend & Fullstack Web Developer lulusan S1 Sistem Informasi dari Universitas Multi Data Palembang (IPK 3.47/4.00) serta Lulusan Sertifikasi Kompetensi Database Administrator (DBA). Memiliki spesialisasi dalam membangun aplikasi web responsif menggunakan React.js, mengelola state dengan Redux & TanStack Query (React Query), serta membangun arsitektur Fullstack menggunakan Laravel (MVC) dan basis data MySQL yang teroptimasi.",
  summaryEn:
    "I'm a passionate Frontend Developer with a degree in Information Systems, specializing in building responsive, user-centric applications with React.js. I have solid experience integrating REST APIs, efficiently managing state with Redux for client state and TanStack Query (React Query) for server state synchronization, and implementing clean coding practices. With hands-on experience from various internships and real-world projects, I'm committed to delivering high-quality, maintainable solutions and continually developing my skills in modern frontend technologies.",
  softSkills: [
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Critical Thinking",
    "Adaptability",
    "Time Management",
    "Fast Learner",
    "Attention to Detail",
  ],
  languages: [
    { name: "Bahasa Indonesia", level: "Native" },
    { name: "English", level: "Intermediate" },
  ],
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
    handle: "yuan-ramatullah-24980a36a",
    url: "https://www.linkedin.com/in/yuan-ramatullah-24980a36a/",
    iconKey: "linkedin",
    color: "hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    id: "whatsapp",
    name: "WhatsApp / Telepon",
    handle: "0857-2626-0786",
    url: "https://wa.me/6285726260786",
    iconKey: "whatsapp",
    color: "hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400",
  },
  {
    id: "email",
    name: "Email",
    handle: "yuantullah@gmail.com",
    url: "mailto:yuantullah@gmail.com",
    iconKey: "email",
    color: "hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400",
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-rks",
    period: "Jan 2026 – Jun 2026",
    title: "Fullstack Web Developer — Internship",
    organization: "PT Rachmat Kelantan Sakti",
    location: "Indonesia",
    type: "Proyek & Pengalaman",
    description:
      "Mengembangkan sistem informasi terintegrasi untuk reservasi armada alat berat, manajemen perawatan & perbaikan (maintenance), serta otomatisasi inventori suku cadang konstruksi.",
    highlights: [
      "Integrated Fleet Reservation: Mengembangkan modul booking alat berat secara real-time untuk mengoptimalkan alokasi armada di berbagai lokasi proyek konstruksi.",
      "Maintenance & Repair Tracking: Membangun sistem manajemen perbaikan komprehensif untuk mendokumentasikan waktu henti (downtime) alat, riwayat servis, dan jadwal pemeliharaan rutin.",
      "Inventory & Spare Parts Control: Mengimplementasikan sistem pelacakan inventori untuk mengelola stok perbaikan, memastikan ketersediaan suku cadang, dan menekan keterlambatan operasional.",
      "Automated Data Synchronization: Mengintegrasikan modul perbaikan dengan database inventori untuk otomatisasi pemotongan stok dan peringatan pengadaan (procurement alerts) saat pemeliharaan.",
    ],
    tags: [
      "Laravel",
      "MySQL",
      "Eloquent ORM",
      "Fleet Management",
      "Inventory System",
      "Fullstack",
    ],
  },
  {
    id: "exp-ksa",
    period: "Sep 2025 – Jan 2026",
    title: "Fullstack Web Developer — Internship",
    organization: "PT Kedaton Sejahtera Abadi",
    location: "Indonesia",
    type: "Proyek & Pengalaman",
    description:
      "Merancang dan membangun platform properti (real estate) berbasis arsitektur MVC dengan manajemen basis data relasional dan integrasi RESTful API.",
    highlights: [
      "Full-Stack Architecture: Mengembangkan platform real estate menggunakan Laravel (MVC), memastikan pemisahan logika yang bersih untuk pengalaman pengguna yang optimal.",
      "Database Management: Merancang skema database MySQL yang teroptimasi dengan Eloquent ORM untuk mengelola data properti kompleks, ketersediaan unit, dan prospek pembeli (buyer leads).",
      "API & Security: Membangun RESTful API untuk integrasi dengan frontend Angular, menerapkan validasi data yang kuat serta proteksi keamanan CSRF.",
      "Advanced Search: Mengimplementasikan logika pemfilteran berkinerja tinggi untuk pencarian properti instan berdasarkan rentang harga, luas tanah, dan spesifikasi.",
    ],
    tags: ["Laravel (MVC)", "MySQL", "Eloquent ORM", "RESTful API", "Angular Integration", "CSRF"],
  },
  {
    id: "exp-edu",
    period: "Sep 2022 – Agu 2026",
    title: "S1 Sistem Informasi (IPK: 3.47 / 4.00)",
    organization: "Universitas Multi Data Palembang",
    location: "Palembang, Indonesia",
    type: "Pendidikan",
    description:
      "Menempuh pendidikan Sarjana Sistem Informasi dengan fokus pada pengembangan aplikasi web modern (React.js, Laravel, Express.js), manajemen state (Redux & TanStack Query), desain database relasional, serta analisis visualisasi data.",
    highlights: [
      "Meraih Indeks Prestasi Kumulatif (IPK) 3.47 / 4.00 dengan penguasaan kuat di bidang Software Engineering & Information Systems.",
      "Lulus Sertifikasi Kompetensi Database Administrator (DBA) — menguasai perancangan skema relasional, optimasi SQL, dan administrasi basis data.",
      "Spesialisasi pada Frontend Development dengan React.js, Redux (client state), dan TanStack Query / React Query (server state synchronization).",
      "Menguasai siklus pengembangan aplikasi CRUD, MVC Architecture, Database Design, Responsive Web Design, serta UI/UX Prototyping di Figma.",
    ],
    tags: [
      "IPK 3.47/4.00",
      "Certified DBA",
      "Information Systems",
      "React.js",
      "Redux",
      "TanStack Query",
      "Database Design",
    ],
  },
];
