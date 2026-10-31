import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiGithub, FiExternalLink, FiCpu, FiAlertCircle } from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import Modal from "../ui/Modal";
import { projects, projectCategories } from "../../data/projects";
import type { Project, ProjectCategory } from "../../types/Project";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("Semua");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "Semua"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative border-t border-slate-200/60 bg-slate-100/50 py-24 dark:border-slate-800/60 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Karya & Portofolio"
          title="Proyek Pilihan yang"
          highlight="Telah Saya Bangun"
          subtitle="Studi kasus pengembangan aplikasi web, sistem informasi, aplikasi mobile Flutter, serta eksplorasi desain UI/UX."
        />

        {/* Category Filter Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition sm:text-sm cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "border border-slate-200/80 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setActiveProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
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
                  Tahun {activeProject.year}
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

            {/* Tech Stack & Links */}
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

              <div className="flex items-center gap-3">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600"
                  >
                    <FiGithub className="h-4 w-4" />
                    Lihat Repositori GitHub
                    <FiExternalLink className="h-3.5 w-3.5" />
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

