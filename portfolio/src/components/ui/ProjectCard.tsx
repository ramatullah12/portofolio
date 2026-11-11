import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLayers,
  FiExternalLink,
  FiInfo,
} from "react-icons/fi";
import type { Project } from "../../types/Project";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectPreviewIllustration = ({
  project,
}: {
  project: Project;
}) => {
  const { previewType, accentColor, liveDomain } = project;

  return (
    <div
      className={`relative flex h-56 w-full flex-col justify-between overflow-hidden bg-gradient-to-br ${accentColor} p-4`}
    >
      {/* Ambient pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.26),transparent_60%)]" />

      {/* Mock Browser Header with Actual Vercel URL */}
      <div className="relative z-10 flex items-center justify-between rounded-t-xl border border-white/25 bg-slate-950/80 px-3 py-2 backdrop-blur-md">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="truncate px-2 font-mono text-[10px] text-slate-200">
          https://{liveDomain}
        </span>
        <span className="inline-flex items-center gap-1 rounded bg-emerald-500/25 px-1.5 py-0.5 text-[9px] font-bold text-emerald-300 border border-emerald-400/30">
          ● VERCEL LIVE
        </span>
      </div>

      {/* Mock UI Content per project type */}
      <div className="relative z-10 flex flex-1 flex-col justify-between rounded-b-xl border-x border-b border-white/20 bg-slate-950/85 p-3.5 text-white backdrop-blur-md">
        {previewType === "rakentra" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  PT RACHMAT KELANTAN SAKTI
                </div>
                <div className="mt-0.5 text-xs font-bold">
                  Rakentra • Fleet & Maintenance Portal
                </div>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                Heavy Equipment
              </span>
            </div>
            <div className="my-2 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Fleet Booking</div>
                <div className="text-xs font-bold text-emerald-300">Real-Time</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Repair Log</div>
                <div className="text-xs font-bold text-cyan-300">Terjadwal</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Spare Parts</div>
                <div className="text-xs font-bold text-white">Auto-Sync</div>
              </div>
            </div>
          </>
        )}

        {previewType === "kedaton" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-sky-300">
                  PT KEDATON SEJAHTERA ABADI
                </div>
                <div className="mt-0.5 text-xs font-bold">
                  Kedaton Property • Real Estate Platform
                </div>
              </div>
              <span className="rounded-full border border-sky-400/40 bg-sky-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-sky-200">
                Property MVC
              </span>
            </div>
            <div className="my-2 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Katalog Unit</div>
                <div className="text-xs font-bold text-sky-300">Tersedia</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Filter Harga</div>
                <div className="text-xs font-bold text-emerald-300">Instant</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Buyer Leads</div>
                <div className="text-xs font-bold text-white">Eloquent ORM</div>
              </div>
            </div>
          </>
        )}

        {previewType === "jobportal" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-fuchsia-300">
                  CAREER & RECRUITMENT PLATFORM
                </div>
                <div className="mt-0.5 text-xs font-bold">
                  Job Portal • Explore Tech & Career Jobs
                </div>
              </div>
              <span className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-fuchsia-200">
                React + Query
              </span>
            </div>
            <div className="my-2 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Client State</div>
                <div className="text-xs font-bold text-fuchsia-300">Redux</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Server State</div>
                <div className="text-xs font-bold text-cyan-300">TanStack</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Pencarian</div>
                <div className="text-xs font-bold text-white">Multi-Filter</div>
              </div>
            </div>
          </>
        )}

        {previewType === "uassi4b" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                  UNIVERSITAS MULTI DATA PALEMBANG
                </div>
                <div className="mt-0.5 text-xs font-bold">
                  Project UAS SI4B • Yuan & Dimas
                </div>
              </div>
              <span className="rounded-full border border-cyan-400/40 bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-200">
                SI4B Web App
              </span>
            </div>
            <div className="my-2 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Program Studi</div>
                <div className="text-xs font-bold text-cyan-300">Sistem Info</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">UI Design</div>
                <div className="text-xs font-bold text-emerald-300">Responsive</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Deployment</div>
                <div className="text-xs font-bold text-white">Vercel Cloud</div>
              </div>
            </div>
          </>
        )}

        {previewType === "rpl" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  SOFTWARE ENGINEERING PROJECT
                </div>
                <div className="mt-0.5 text-xs font-bold">
                  RPL Web App • System & UI Workflow
                </div>
              </div>
              <span className="rounded-full border border-amber-400/40 bg-amber-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-amber-200">
                RPL Project
              </span>
            </div>
            <div className="my-2 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Arsitektur</div>
                <div className="text-xs font-bold text-amber-300">Clean UI</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Metodologi</div>
                <div className="text-xs font-bold text-emerald-300">SDLC / RPL</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Status</div>
                <div className="text-xs font-bold text-white">Live App</div>
              </div>
            </div>
          </>
        )}

        {previewType === "smartpresence" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                  ATTENDANCE & GEOFENCING
                </div>
                <div className="mt-0.5 text-xs font-bold">
                  SmartPresence • Live Dashboard
                </div>
              </div>
              <span className="rounded-full border border-cyan-400/40 bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-200">
                99.4% Akurat
              </span>
            </div>
            <div className="my-2 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Check-In</div>
                <div className="text-xs font-bold text-cyan-300">GPS & QR</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Analitik</div>
                <div className="text-xs font-bold text-emerald-300">Real-Time</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Laporan</div>
                <div className="text-xs font-bold text-white">Auto-Rekap</div>
              </div>
            </div>
          </>
        )}

        {previewType === "lensakarya" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-fuchsia-300">
                  PHOTOGRAPHY STUDIO PLATFORM
                </div>
                <div className="mt-0.5 text-xs font-bold">
                  LensaKarya • Gallery & Booking
                </div>
              </div>
              <span className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-fuchsia-200">
                4K Portfolio
              </span>
            </div>
            <div className="my-2 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Katalog</div>
                <div className="text-xs font-bold text-fuchsia-300">Paket Foto</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Jadwal Sesi</div>
                <div className="text-xs font-bold text-amber-300">Online Slot</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Rating</div>
                <div className="text-xs font-bold text-white">★ 4.95/5</div>
              </div>
            </div>
          </>
        )}

        {previewType === "driveease" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  VEHICLE RENTAL & FLEET
                </div>
                <div className="mt-0.5 text-xs font-bold">
                  DriveEase • Reservasi Kendaraan
                </div>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-200">
                24/7 Booking
              </span>
            </div>
            <div className="my-2 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Unit Armada</div>
                <div className="text-xs font-bold text-emerald-300">Ready Stock</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Jadwal Sewa</div>
                <div className="text-xs font-bold text-cyan-300">0 Bentrok</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[9px] text-slate-300">Kalkulasi</div>
                <div className="text-xs font-bold text-white">Transparan</div>
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
      <div className="relative cursor-pointer overflow-hidden" onClick={() => onSelect(project)}>
        <ProjectPreviewIllustration project={project} />
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
            className="mt-2.5 cursor-pointer text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
          >
            {project.title}
          </h3>

          {project.liveDomain && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-emerald-600 hover:underline dark:text-emerald-400"
            >
              <span>https://{project.liveDomain}</span>
              <FiExternalLink className="h-3 w-3" />
            </a>
          )}

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
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
        <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800/80">
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

          <div className="mt-5 flex items-center justify-between gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition hover:from-blue-700 hover:to-indigo-700"
              >
                <span>Buka Live App</span>
                <FiArrowUpRight className="h-4 w-4" />
              </a>
            )}

            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-bold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400 cursor-pointer"
            >
              <FiInfo className="h-3.5 w-3.5" />
              <span>Detail</span>
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Kode Sumber GitHub"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                <FiGithub className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
