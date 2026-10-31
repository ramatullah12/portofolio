export interface NavItem {
  id: number;
  title: string;
  path: string;
  sectionId: string;
}

export const navigation: NavItem[] = [
  {
    id: 1,
    title: "Beranda",
    path: "#home",
    sectionId: "home",
  },
  {
    id: 2,
    title: "Tentang",
    path: "#about",
    sectionId: "about",
  },
  {
    id: 3,
    title: "Keahlian",
    path: "#skills",
    sectionId: "skills",
  },
  {
    id: 4,
    title: "Perjalanan",
    path: "#experience",
    sectionId: "experience",
  },
  {
    id: 5,
    title: "Proyek",
    path: "#projects",
    sectionId: "projects",
  },
  {
    id: 6,
    title: "Sertifikasi",
    path: "#certificates",
    sectionId: "certificates",
  },
  {
    id: 7,
    title: "Kontak",
    path: "#contact",
    sectionId: "contact",
  },
];
