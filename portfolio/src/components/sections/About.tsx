import { motion } from "framer-motion";
import {
  FiLayout,
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiBookOpen,
  FiTarget,
} from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import { personalInfo } from "../../data/socials";

const focusAreas = [
  {
    icon: FiCode,
    title: "Frontend Engineering",
    description:
      "Membangun aplikasi web interaktif menggunakan React, TypeScript, dan Tailwind CSS dengan arsitektur komponen yang bersih dan mudah diskalakan.",
    color: "text-blue-600 bg-blue-500/10 dark:text-blue-400",
  },
  {
    icon: FiLayout,
    title: "UI/UX & Product Design",
    description:
      "Merancang wireframe, prototipe interaktif di Figma, dan sistem desain yang mengutamakan kenyamanan pengguna serta estetika modern.",
    color: "text-fuchsia-600 bg-fuchsia-500/10 dark:text-fuchsia-400",
  },
  {
    icon: FiDatabase,
    title: "Fullstack Web (Laravel & MySQL)",
    description:
      "Mengembangkan sistem informasi terintegrasi, RESTful API, autentikasi aman, dan perancangan basis data relasional.",
    color: "text-emerald-600 bg-emerald-500/10 dark:text-emerald-400",
  },
  {
    icon: FiSmartphone,
    title: "Cross-Platform Mobile (Flutter)",
    description:
      "Mewujudkan aplikasi mobile Android & iOS yang responsif dan mulus menggunakan ekosistem Flutter & Dart.",
    color: "text-sky-600 bg-sky-500/10 dark:text-sky-400",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Tentang Saya"
          title="Menggabungkan Logika Sistem &"
          highlight="Keindahan Desain UI/UX"
          subtitle="Mengenal lebih dekat latar belakang akademik, pendekatan rekayasa perangkat lunak, dan bidang spesialisasi yang saya tekuni."
        />

        {/* Bento Grid Layout */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Card 1: Main Story (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm sm:p-8 lg:col-span-7 dark:border-slate-800/90 dark:bg-slate-900/80"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-blue-500/10 px-3 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                <FiTarget className="h-4 w-4" />
                Visi & Dedikasi
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
                Membangun Solusi Digital yang Intuitif, Cepat, dan Terstruktur
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
                Perkenalkan, saya <strong>{personalInfo.name}</strong>, mahasiswa program studi{" "}
                <strong>Sistem Informasi</strong> di{" "}
                <strong>Universitas Multi Data Palembang (MDP)</strong>. Latar belakang Sistem
                Informasi memberi saya pemahaman kuat tentang bagaimana menganalisis kebutuhan
                proses bisnis dan menerjemahkannya menjadi perangkat lunak yang tepat guna.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
                Saya percaya bahwa sistem yang hebat tidak hanya harus kuat di sisi database dan
                backend, tetapi juga harus menyenangkan saat digunakan. Oleh karena itu, saya
                mendalami <strong>Frontend Development (React & TypeScript)</strong>,{" "}
                <strong>Laravel</strong>, <strong>Flutter</strong>, serta{" "}
                <strong>UI/UX Design</strong> untuk menghadirkan pengalaman digital yang utuh dari
                ujung ke ujung.
              </p>
            </div>

            {/* Academic Highlight Strip */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <FiBookOpen className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    Pendidikan Saat Ini
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {personalInfo.university}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {personalInfo.major}
                  </div>
                </div>
              </div>

              <span className="rounded-xl bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                Aktif Berkuliah & Berkarya
              </span>
            </div>
          </motion.div>

          {/* Card 2: Developer Profile Code Window (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-200 shadow-xl lg:col-span-5"
          >
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <span className="font-mono text-xs text-slate-400">yuan-profile.ts</span>
              </div>

              <pre className="mt-5 overflow-x-auto font-mono text-xs leading-6 sm:text-[13px]">
                <code>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-sky-300">developer</span> = {"{\n"}
                  {"  "}name:{" "}
                  <span className="text-emerald-300">"Yuan Ramatullah"</span>,{"\n"}
                  {"  "}campus:{" "}
                  <span className="text-emerald-300">"Univ. Multi Data Palembang"</span>,{"\n"}
                  {"  "}major:{" "}
                  <span className="text-emerald-300">"Sistem Informasi"</span>,{"\n"}
                  {"  "}coreStack: [{"\n"}
                  {"    "}
                  <span className="text-amber-300">"React"</span>,{" "}
                  <span className="text-amber-300">"TypeScript"</span>,{"\n"}
                  {"    "}
                  <span className="text-amber-300">"Tailwind CSS"</span>,{" "}
                  <span className="text-amber-300">"Laravel"</span>,{"\n"}
                  {"    "}
                  <span className="text-amber-300">"Flutter"</span>,{" "}
                  <span className="text-amber-300">"MySQL"</span>
                  {"\n  "}],{"\n"}
                  {"  "}passion:{" "}
                  <span className="text-emerald-300">"Modern UI/UX & Clean Code"</span>,{"\n"}
                  {"  "}openToWork: <span className="text-sky-400">true</span>
                  {"\n};"}
                </code>
              </pre>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/90 p-3.5 text-xs text-slate-400">
              <span className="font-mono text-emerald-400">$ status:</span> Siap berkolaborasi dalam
              pengembangan aplikasi web, sistem informasi, maupun desain UI/UX.
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-blue-500/40 hover:shadow-lg dark:border-slate-800/90 dark:bg-slate-900/80"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${area.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
                  {area.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

