import type { Project, ProjectCategory } from "../types/Project";

export const projectCategories: ProjectCategory[] = [
  "Semua",
  "Web App",
  "Mobile App",
  "UI/UX Design",
];

export const projects: Project[] = [
  {
    id: "smart-absensi",
    title: "SmartPresence — Sistem Absensi Digital & Geolocation",
    subtitle: "Web App & Manajemen Kehadiran Real-time",
    description:
      "Aplikasi sistem informasi presensi berbasis web yang dirancang untuk memodernisasi pencatatan kehadiran pegawai dan mahasiswa dengan validasi lokasi GPS, QR Code dinamis, serta rekapitulasi analitik otomatis.",
    challenge:
      "Proses absensi manual sering mengalami kendala antrean, titip absen, serta kesulitan rekapitulasi laporan bulanan oleh admin akademik maupun HR.",
    solution:
      "Membangun antarmuka dashboard reaktif menggunakan React & Tailwind CSS yang terintegrasi dengan backend Laravel & MySQL, dilengkapi fitur verifikasi radius lokasi (Geofencing) dan ekspor laporan instan.",
    category: "Web App",
    technologies: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS"],
    features: [
      "Presensi masuk & pulang dengan validasi koordinat Geolocation & QR Code",
      "Dashboard analitik kehadiran harian, izin, dan keterlambatan secara real-time",
      "Manajemen jadwal shift/kelas dan pengajuan cuti atau izin online",
      "Ekspor laporan presensi otomatis ke format PDF & Excel",
    ],
    year: "2026",
    role: "Fullstack / Lead Frontend Developer",
    featured: true,
    githubUrl: "https://github.com/ramatullah12",
    liveUrl: "#projects",
    accentColor: "from-blue-600 to-cyan-500",
    previewType: "absensi",
    metrics: [
      { label: "Efisiensi Rekap", value: "+85%" },
      { label: "Akurasi Validasi", value: "99.4%" },
      { label: "Waktu Check-in", value: "< 3 dtk" },
    ],
  },
  {
    id: "lensa-fotografi",
    title: "LensaKarya — Platform Booking & Galeri Fotografi",
    subtitle: "Interactive Portfolio & Studio Booking System",
    description:
      "Platform web modern untuk studio fotografi profesional yang menggabungkan galeri visual beresolusi tinggi, katalog paket pemotretan, pemilihan jadwal fotografer, dan sistem reservasi online yang intuitif.",
    challenge:
      "Klien sering kesulitan melihat ketersediaan jadwal studio dan membandingkan paket layanan fotografi secara transparan tanpa harus menunggu balasan chat manual.",
    solution:
      "Merancang pengalaman UI/UX bergaya editorial dengan galeri filterable, kalkulator estimasi paket interaktif, dan alur booking 3 langkah yang responsif di perangkat mobile maupun desktop.",
    category: "Web App",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "REST API"],
    features: [
      "Galeri masonry interaktif dengan filter kategori (Wedding, Portrait, Graduation, Commercial)",
      "Sistem kalender ketersediaan jadwal sesi foto secara real-time",
      "Kustomisasi paket layanan & add-on cetak album dengan estimasi harga otomatis",
      "Portal klien untuk memilih & mengunduh hasil foto beresolusi tinggi",
    ],
    year: "2026",
    role: "Frontend Developer & UI/UX Designer",
    featured: true,
    githubUrl: "https://github.com/ramatullah12",
    liveUrl: "#projects",
    accentColor: "from-violet-600 to-fuchsia-500",
    previewType: "fotografi",
    metrics: [
      { label: "Skor Lighthouse UI", value: "98/100" },
      { label: "Konversi Booking", value: "+60%" },
      { label: "Kecepatan Muat", value: "0.8s" },
    ],
  },
  {
    id: "drive-rental",
    title: "DriveEase — Sistem Informasi Rental & Armada",
    subtitle: "Platform Reservasi Kendaraan & Monitoring Unit",
    description:
      "Sistem informasi manajemen penyewaan kendaraan terpadu yang memudahkan pelanggan mencari armada, memeriksa ketersediaan tanggal sewa, serta membantu pemilik rental mengelola status unit dan transaksi.",
    challenge:
      "Pencatatan ketersediaan unit kendaraan yang tidak sinkron sering memicu bentrok jadwal sewa (double booking) dan keterlambatan pelacakan pengembalian unit.",
    solution:
      "Mengembangkan sistem berbasis Laravel, MySQL, dan React dengan mesin pengecekan konflik tanggal otomatis, pelacakan status unit (Tersedia, Disewa, Servis), dan manajemen invoice digital.",
    category: "Web App",
    technologies: ["Laravel", "React", "MySQL", "Tailwind CSS", "REST API"],
    features: [
      "Katalog kendaraan lengkap dengan filter transmisi, kapasitas penumpang, dan harga sewa",
      "Validasi ketersediaan tanggal otomatis untuk mencegah double-booking",
      "Manajemen verifikasi dokumen penyewa (KTP/SIM) & perhitungan denda keterlambatan",
      "Dashboard admin untuk monitoring pendapatan bulanan dan jadwal perawatan armada",
    ],
    year: "2025",
    role: "Fullstack Web Developer",
    featured: true,
    githubUrl: "https://github.com/ramatullah12",
    liveUrl: "#projects",
    accentColor: "from-emerald-600 to-teal-500",
    previewType: "rental",
    metrics: [
      { label: "Zero Double-Book", value: "100%" },
      { label: "Manajemen Unit", value: "Real-time" },
      { label: "Responsivitas", value: "Mobile-First" },
    ],
  },
  {
    id: "mdp-studyhub",
    title: "CampusFlow — Aplikasi Mobile Produktivitas Mahasiswa",
    subtitle: "Cross-Platform Mobile App dengan Flutter",
    description:
      "Aplikasi mobile lintas platform untuk membantu mahasiswa Sistem Informasi mengelola jadwal kuliah, pengingat tenggat tugas, catatan kolaboratif, serta pelacakan target IPK per semester.",
    challenge:
      "Mahasiswa kerap melewatkan tenggat tugas proyek kelompok dan kesulitan memantau progres akademik dalam satu aplikasi yang ringan dan bebas iklan.",
    solution:
      "Membangun aplikasi mobile menggunakan Flutter & Dart dengan desain Material 3 yang bersih, fitur notifikasi pintar, mode gelap nyaman di mata, dan sinkronisasi data cepat.",
    category: "Mobile App",
    technologies: ["Flutter", "Dart", "Figma", "REST API", "Local Storage"],
    features: [
      "Timeline jadwal kuliah harian & pengingat otomatis sebelum kelas dimulai",
      "Kanban board tugas kuliah dengan prioritas dan indikator progres kelompok",
      "Kalkulator simulasi IPK & tracker SKS semester",
      "Antarmuka adaptif dengan dukungan Dark Mode penuh",
    ],
    year: "2026",
    role: "Mobile Developer & UI Designer",
    featured: false,
    githubUrl: "https://github.com/ramatullah12",
    liveUrl: "#projects",
    accentColor: "from-sky-500 to-indigo-600",
    previewType: "studyhub",
    metrics: [
      { label: "Frame Rate UI", value: "60 FPS" },
      { label: "Platform", value: "Android & iOS" },
      { label: "Kepuasan User", value: "4.9/5" },
    ],
  },
  {
    id: "fintrack-ui",
    title: "FinPulse — Design System & UI/UX Dompet Digital",
    subtitle: "High-Fidelity UI/UX Case Study & Interactive Prototype",
    description:
      "Eksplorasi desain UI/UX komprehensif untuk aplikasi manajemen keuangan generasi muda, berfokus pada kemudahan pencatatan pengeluaran harian, visualisasi anggaran, dan aksesibilitas warna.",
    challenge:
      "Banyak aplikasi pencatat keuangan memiliki tampilan tabel yang rumit sehingga pengguna baru malas mencatat transaksi harian mereka.",
    solution:
      "Merancang Design System modular di Figma dan mengimplementasikan prototipe interaktif berbasis komponen React dengan grafik visual yang mudah dipahami dalam sekali lihat.",
    category: "UI/UX Design",
    technologies: ["Figma", "UI/UX Research", "Design System", "React", "Tailwind CSS"],
    features: [
      "Sistem token warna, tipografi, dan 40+ komponen UI reusable di Figma",
      "Alur input transaksi cepat hanya dalam 3 ketukan (Quick-Add Expense)",
      "Visualisasi grafik kesehatan finansial & peringatan batas anggaran kategori",
      "Pengujian usability (Usability Testing) dengan tingkat keberhasilan tugas tinggi",
    ],
    year: "2025",
    role: "UI/UX Designer",
    featured: false,
    githubUrl: "https://github.com/ramatullah12",
    liveUrl: "#projects",
    accentColor: "from-amber-500 to-orange-600",
    previewType: "fintrack",
    metrics: [
      { label: "Komponen UI", value: "45+ Kit" },
      { label: "Task Success", value: "96%" },
      { label: "Standar Kontras", value: "WCAG AA" },
    ],
  },
  {
    id: "kopikita-pos",
    title: "KopiKita POS — Sistem Kasir & Inventori Modern",
    subtitle: "Point of Sale Web Application untuk UMKM F&B",
    description:
      "Aplikasi kasir (Point of Sale) berbasis web dengan antarmuka layar sentuh yang cepat untuk mengelola pesanan pelanggan, stok bahan baku, dan laporan penjualan harian kedai kopi.",
    challenge:
      "Kasir membutuhkan antarmuka pemesanan yang sangat responsif saat jam sibuk tanpa perlu berpindah-pindah halaman.",
    solution:
      "Mengembangkan layar kasir single-page menggunakan React dan backend Laravel dengan fitur pencarian menu instan, kustomisasi level gula/es, dan cetak struk termal.",
    category: "Web App",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    features: [
      "Antarmuka kasir ramah layar sentuh (Touch-friendly POS) dengan shortcut keyboard",
      "Manajemen varian menu, diskon promo, dan metode pembayaran (QRIS/Tunai)",
      "Peringatan otomatis saat stok bahan baku mencapai batas minimum",
      "Ringkasan omzet harian dan produk terlaris secara real-time",
    ],
    year: "2025",
    role: "Frontend & Backend Developer",
    featured: false,
    githubUrl: "https://github.com/ramatullah12",
    liveUrl: "#projects",
    accentColor: "from-rose-500 to-pink-600",
    previewType: "pos",
    metrics: [
      { label: "Kecepatan Order", value: "2x Lebih Cepat" },
      { label: "Akurasi Stok", value: "99%" },
      { label: "Uptime Sistem", value: "99.9%" },
    ],
  },
];

