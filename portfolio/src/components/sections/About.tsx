import { motion } from "framer-motion";
import {
  FiLayout,
  FiCode,
  FiDatabase,
  FiBookOpen,
  FiTarget,
  FiGlobe,
  FiUsers,
  FiServer,
} from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import { personalInfo } from "../../data/socials";

const focusAreas = [
  {
    icon: FiCode,
    title: "Frontend Architecture (React.js)",
    description:
      "Membangun aplikasi web responsif dan user-centric dengan React.js, Redux (client state), dan TanStack Query (server state synchronization).",
    color: "text-blue-600 bg-blue-500/10 dark:text-blue-400",
  },
  {
    icon: FiServer,
    title: "Fullstack Laravel (MVC)",
    description:
      "Mengembangkan sistem informasi enterprise menggunakan Laravel (MVC), PHP, Express.js, dan RESTful API dengan proteksi keamanan CSRF.",
    color: "text-emerald-600 bg-emerald-500/10 dark:text-emerald-400",
  },
  {
    icon: FiDatabase,
    title: "Database Design & Eloquent ORM",
    description:
      "Merancang skema database MySQL yang teroptimasi, sinkronisasi inventori otomatis, serta kueri pencarian berkinerja tinggi.",
    color: "text-sky-600 bg-sky-500/10 dark:text-sky-400",
  },
  {
    icon: FiLayout,
    title: "UI/UX & Data Visualization",
    description:
      "Menerapkan Responsive Web Design dengan Tailwind CSS, Bootstrap, desain prototipe Figma, serta analitik data di Tableau.",
    color: "text-fuchsia-600 bg-fuchsia-500/10 dark:text-fuchsia-400",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Ringkasan Profil (CV)"
          title="Dedikasi pada Clean Code &"
          highlight="Solusi Web Berpusat Pengguna"
          subtitle="Menggabungkan fondasi S1 Sistem Informasi dengan pengalaman langsung membangun sistem industri melalui program magang Fullstack & Frontend."
        />

        {/* Bento Grid Layout */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Card 1: Main Summary from CV (7 cols) */}
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
                Professional Summary
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
                Frontend & Fullstack Web Developer dengan Pengalaman Industri Nyata
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
                {personalInfo.bio}
              </p>

              <blockquote className="mt-4 rounded-2xl border-l-4 border-blue-600 bg-slate-50 p-4 text-xs italic leading-relaxed text-slate-600 dark:border-blue-400 dark:bg-slate-800/50 dark:text-slate-300">
                "{personalInfo.summaryEn}"
              </blockquote>
            </div>

            {/* Education Card Strip */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <FiBookOpen className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    Pendidikan ({personalInfo.educationPeriod})
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {personalInfo.university}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {personalInfo.major}
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-emerald-500/10 px-3.5 py-2 text-right">
                <div className="text-[10px] font-semibold uppercase text-emerald-700 dark:text-emerald-400">
                  Indeks Prestasi
                </div>
                <div className="text-sm font-extrabold text-emerald-600 dark:text-emerald-300">
                  IPK: {personalInfo.gpa}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Soft Skills, Languages & Code Profile (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-col justify-between gap-6 lg:col-span-5"
          >
            {/* Soft Skills Card */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/80">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <FiUsers className="h-4 w-4" />
                Soft Skills (Dari CV)
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {personalInfo.softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-slate-200/80 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  <FiGlobe className="h-4 w-4" />
                  Bahasa (Languages)
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {personalInfo.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/50"
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {lang.name}
                      </div>
                      <div className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
                        {lang.level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Developer Terminal Snippet */}
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-5 text-slate-200 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="font-mono text-[11px] text-slate-400">yuan-cv.json</span>
              </div>
              <pre className="mt-3 overflow-x-auto font-mono text-xs leading-5">
                <code>
                  {"{\n"}
                  {"  "}
                  <span className="text-sky-300">"name"</span>:{" "}
                  <span className="text-emerald-300">"Yuan Ramatullah"</span>,{"\n"}
                  {"  "}
                  <span className="text-sky-300">"gpa"</span>:{" "}
                  <span className="text-amber-300">"3.47 / 4.00"</span>,{"\n"}
                  {"  "}
                  <span className="text-sky-300">"stateManagement"</span>: [
                  <span className="text-emerald-300">"Redux"</span>,{" "}
                  <span className="text-emerald-300">"TanStack Query"</span>],{"\n"}
                  {"  "}
                  <span className="text-sky-300">"backend"</span>: [
                  <span className="text-emerald-300">"Laravel MVC"</span>,{" "}
                  <span className="text-emerald-300">"Express.js"</span>,{" "}
                  <span className="text-emerald-300">"MySQL"</span>]{"\n}"}
                </code>
              </pre>
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
