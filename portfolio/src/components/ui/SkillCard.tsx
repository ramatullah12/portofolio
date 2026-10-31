import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiFlutter,
  SiFigma,
  SiFramer,
  SiGit,
  SiVite,
} from "react-icons/si";
import type { Skill } from "../../types/Skill";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  javascript: SiJavascript,
  laravel: SiLaravel,
  mysql: SiMysql,
  php: SiPhp,
  flutter: SiFlutter,
  figma: SiFigma,
  framer: SiFramer,
  git: SiGit,
  vite: SiVite,
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const Icon = iconMap[skill.iconKey] || SiReact;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 dark:border-slate-800/90 dark:bg-slate-900/75 dark:hover:border-blue-400/40"
    >
      {/* Top Row: Icon + Badge */}
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 transition-transform duration-300 group-hover:scale-110 dark:border-slate-800 dark:bg-slate-800/80"
          style={{ boxShadow: `0 8px 24px -8px ${skill.color}40` }}
        >
          <Icon className="h-6 w-6" style={{ color: skill.color }} />
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${
            skill.badge === "Core Stack"
              ? "bg-blue-500/10 text-blue-600 dark:bg-blue-400/15 dark:text-blue-400"
              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          {skill.badge}
        </span>
      </div>

      {/* Name & Category */}
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">
            {skill.name}
          </h3>
          <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
            {skill.level}%
          </span>
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
          {skill.description}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 + index * 0.04, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;

