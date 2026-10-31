import { motion } from "framer-motion";

interface SectionTitleProps {
  badge: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
}

const SectionTitle = ({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
}: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left"}`}
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:border-blue-400/25 dark:bg-blue-500/15 dark:text-blue-400`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
        {badge}
      </div>

      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;

