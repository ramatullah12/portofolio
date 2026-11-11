import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiGithub,
  FiExternalLink,
  FiCpu,
  FiAlertCircle,
  FiSearch,
  FiFileText,
  FiDownload,
} from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import Modal from "../ui/Modal";
import { projects, projectCategories } from "../../data/projects";
import type { Project, ProjectCategory } from "../../types/Project";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showDocPreview, setShowDocPreview] = useState(false);

  const handleSelectProject = (proj: Project) => {
    setActiveProject(proj);
    setShowDocPreview(false);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "Semua" || project.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (category: ProjectCategory) => {
    if (category === "Semua") return projects.length;
    return projects.filter((p) => p.category === category).length;
  };

  return (
    <section
      id="projects"
      className="relative border-t border-slate-200/60 bg-slate-100/50 py-24 dark:border-slate-800/60 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Live Projects (Vercel)"
          title="Aplikasi Web Nyata yang"
          highlight="Telah Saya Bangun & Deploy"
          subtitle="Kumpulan 8 proyek aplikasi web yang telah di-deploy ke Vercel — mulai dari sistem enterprise magang industri (PT Rachmat Kelantan Sakti & PT Kedaton Sejahtera Abadi), aplikasi produk, hingga proyek akademik."
        />

        {/* Filter Tabs + Search Input */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {projectCategories.map((category) => {
              const isActive = selectedCategory === category;
              const count = getCategoryCount(category);
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition sm:text-sm cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                      : "border border-slate-200/80 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-xs">
            <FiSearch className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari proyek atau teknologi..."
              className="w-full rounded-xl border border-slate-200/80 bg-white py-2.5 pr-4 pl-10 text-xs font-medium text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 sm:text-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={handleSelectProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="rounded-3xl border border-slate-200/80 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900/60">
            <p className="text-base font-bold text-slate-800 dark:text-slate-200">
              Tidak ada proyek yang cocok dengan pencarian "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSelectedCategory("Semua");
                setSearchQuery("");
              }}
              className="mt-4 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-700 cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* Interactive Case Study Modal */}
      <Modal
        isOpen={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title}
      >
        {activeProject && (
          <div className="space-y-6">
            {/* Banner Header */}
            <div
              className={`rounded-2xl bg-gradient-to-r ${activeProject.accentColor} p-6 text-white`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider text-white/90">
                <span>
                  {activeProject.category} &bull; {activeProject.role}
                </span>
                <span className="rounded-full bg-black/25 px-3 py-1 font-mono">
                  {activeProject.year}
                </span>
              </div>
              <h4 className="mt-2 text-2xl font-extrabold">{activeProject.subtitle}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                {activeProject.description}
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 dark:bg-rose-500/10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-rose-600 dark:text-rose-400">
                  <FiAlertCircle className="h-4 w-4" />
                  Tantangan Masalah
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-700 sm:text-sm dark:text-slate-300">
                  {activeProject.challenge}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 dark:bg-emerald-500/10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400">
                  <FiCpu className="h-4 w-4" />
                  Solusi yang Dirancang
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-700 sm:text-sm dark:text-slate-300">
                  {activeProject.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                Fitur Utama Sistem:
              </h5>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {activeProject.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300"
                  >
                    <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Embedded Official Document PDF Viewer if available */}
            {activeProject.documentUrl && (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 dark:bg-emerald-500/10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-300">
                      Dokumen Resmi, HAKI & Dokumentasi Proyek
                    </div>
                    <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
                      Tersedia berkas PDF surat resmi perusahaan, sertifikat HAKI, dan dokumentasi lapangan.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowDocPreview((prev) => !prev)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 cursor-pointer"
                    >
                      <FiFileText className="h-3.5 w-3.5" />
                      <span>{showDocPreview ? "Sembunyikan Pratinjau PDF" : "Pratinjau PDF di Sini"}</span>
                    </button>
                    <a
                      href={activeProject.documentUrl}
                      download
                      className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-white px-3 py-2 text-xs font-bold text-emerald-700 transition hover:bg-emerald-50 dark:bg-slate-900 dark:text-emerald-300"
                    >
                      <FiDownload className="h-3.5 w-3.5" />
                      <span>Unduh</span>
                    </a>
                  </div>
                </div>

                {showDocPreview && (
                  <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800">
                    <iframe
                      src={activeProject.documentUrl}
                      title={`Dokumen ${activeProject.title}`}
                      className="h-[460px] w-full border-0"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Tech Stack & Live Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 dark:border-slate-800">
              <div className="flex flex-wrap gap-1.5">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {activeProject.documentUrl && (
                  <a
                    href={activeProject.documentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-700"
                  >
                    <span>Buka PDF di Tab Baru</span>
                    <FiExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}

                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
                  >
                    <span>Buka Live App (Vercel)</span>
                    <FiExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}

                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
                  >
                    <FiGithub className="h-4 w-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
