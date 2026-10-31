import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLayers, FiCheckCircle } from "react-icons/fi";
import type { Project } from "../../types/Project";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectPreviewIllustration = ({
  previewType,
  accentColor,
}: {
  previewType: Project["previewType"];
  accentColor: string;
}) => {
  return (
    <div
      className={`relative h-52 w-full overflow-hidden bg-gradient-to-br ${accentColor} p-4 flex flex-col justify-between`}
    >
      {/* Ambient pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_60%)]" />

      {/* Mock Browser / App Window Header */}
      <div className="relative z-10 flex items-center justify-between rounded-t-xl border border-white/25 bg-slate-950/75 px-3 py-2 backdrop-blur-md">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="font-mono text-[10px] text-slate-300/90">
          {previewType === "absensi" && "smartpresence.app/dashboard"}
          {previewType === "fotografi" && "lensakarya.studio/booking"}
          {previewType === "rental" && "driveease.id/fleet-manager"}
          {previewType === "studyhub" && "campusflow.mobile/tasks"}
          {previewType === "fintrack" && "figma.com/finpulse-design-system"}
          {previewType === "pos" && "kopikita.pos/cashier"}
        </span>
        <span className="rounded bg-white/15 px-1.5 py-0.5 text-[9px] font-semibold text-white">
          LIVE UI
        </span>
      </div>

      {/* Mock UI Content per project type */}
      <div className="relative z-10 flex-1 rounded-b-xl border-x border-b border-white/20 bg-slate-950/85 p-3 text-white backdrop-blur-md flex flex-col justify-between">
        {previewType === "absensi" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] text-cyan-300 font-semibold">GPS GEOFENCING ACTIVE</div>
                <div className="text-xs font-bold mt-0.5">Rekap Kehadiran Hari Ini</div>
              </div>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 text-[10px] text-emerald-300">
                98.4% Hadir
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Check-In</div>
                <div className="text-xs font-bold text-cyan-300">07:45 WIB</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Radius GPS</div>
                <div className="text-xs font-bold text-emerald-300">12 Meter</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Status</div>
                <div className="text-xs font-bold text-white">Tepat Waktu</div>
              </div>
            </div>
          </>
        )}

        {previewType === "fotografi" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] text-fuchsia-300 font-semibold">STUDIO RESERVATION</div>
                <div className="text-xs font-bold mt-0.5">Katalog & Jadwal Sesi Foto</div>
              </div>
              <span className="rounded-full bg-fuchsia-500/25 px-2 py-0.5 text-[10px] text-fuchsia-200">
                4K Gallery
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-violet-500/20 p-2 border border-white/10">
                <div className="text-[9px] text-fuchsia-200">Graduation</div>
                <div className="text-xs font-bold">12 Slot</div>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-violet-500/30 to-indigo-500/20 p-2 border border-white/10">
                <div className="text-[9px] text-violet-200">Wedding</div>
                <div className="text-xs font-bold">Full Booked</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Rating Klien</div>
                <div className="text-xs font-bold text-amber-300">★ 4.95</div>
              </div>
            </div>
          </>
        )}

        {previewType === "rental" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] text-emerald-300 font-semibold">FLEET MANAGEMENT</div>
                <div className="text-xs font-bold mt-0.5">Ketersediaan Unit Kendaraan</div>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">
                24 Unit Ready
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">MPV / SUV</div>
                <div className="text-xs font-bold text-emerald-300">Tersedia</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Konflik Jadwal</div>
                <div className="text-xs font-bold text-cyan-300">0 Bentrok</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Verifikasi</div>
                <div className="text-xs font-bold text-white">Auto-KTP</div>
              </div>
            </div>
          </>
        )}

        {previewType === "studyhub" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] text-sky-300 font-semibold">FLUTTER MOBILE APP</div>
                <div className="text-xs font-bold mt-0.5">Jadwal & Tracker Akademik</div>
              </div>
              <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] text-sky-300">
                Target IPK 3.85
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Sprint Tugas</div>
                <div className="text-xs font-bold text-sky-300">8 Selesai</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Notifikasi</div>
                <div className="text-xs font-bold text-emerald-300">Aktif</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Performa</div>
                <div className="text-xs font-bold text-white">60 FPS</div>
              </div>
            </div>
          </>
        )}

        {previewType === "fintrack" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] text-amber-300 font-semibold">FIGMA DESIGN SYSTEM</div>
                <div className="text-xs font-bold mt-0.5">45+ Komponen UI & Token Warna</div>
              </div>
              <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] text-amber-300">
                WCAG AA
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Usability</div>
                <div className="text-xs font-bold text-amber-300">96% Pass</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Auto-Layout</div>
                <div className="text-xs font-bold text-white">100%</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Prototype</div>
                <div className="text-xs font-bold text-emerald-300">Interactive</div>
              </div>
            </div>
          </>
        )}

        {previewType === "pos" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] text-rose-300 font-semibold">CLOUD POS SYSTEM</div>
                <div className="text-xs font-bold mt-0.5">Kasir Layar Sentuh & Stok</div>
              </div>
              <span className="rounded-full bg-rose-500/20 px-2 py-0.5 text-[10px] text-rose-200">
                QRIS Ready
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Waktu Order</div>
                <div className="text-xs font-bold text-rose-300">&lt; 15 dtk</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Stok Bahan</div>
                <div className="text-xs font-bold text-emerald-300">Sinkron</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Struk</div>
                <div className="text-xs font-bold text-white">Thermal</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800/90 dark:bg-slate-900/80 dark:hover:border-blue-400/40"
    >
      {/* Visual Mockup Header */}
      <div className="relative overflow-hidden cursor-pointer" onClick={() => onSelect(project)}>
        <ProjectPreviewIllustration
          previewType={project.previewType}
          accentColor={project.accentColor}
        />
        {project.featured && (
          <span className="absolute top-7 right-7 z-20 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-bold text-amber-300 backdrop-blur-md border border-amber-400/30">
            ★ Proyek Unggulan
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <span className="inline-flex items-center gap-1.5">
              <FiLayers className="h-3.5 w-3.5" />
              {project.category}
            </span>
            <span className="font-mono text-slate-400 dark:text-slate-500">{project.year}</span>
          </div>

          <h3
            onClick={() => onSelect(project)}
            className="mt-2.5 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 cursor-pointer"
          >
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
            {project.description}
          </p>

          {/* Metrics Row */}
          {project.metrics && (
            <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-slate-100 bg-slate-50/80 p-3 dark:border-slate-800/80 dark:bg-slate-800/40">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                    {metric.value}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tech Tags & Actions */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
            >
              Lihat Studi Kasus
              <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Kode Sumber GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
                >
                  <FiGithub className="h-4 w-4" />
                </a>
              )}
              <button
                onClick={() => onSelect(project)}
                className="inline-flex items-center gap-1 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 cursor-pointer"
              >
                <FiCheckCircle className="h-3.5 w-3.5" />
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;

