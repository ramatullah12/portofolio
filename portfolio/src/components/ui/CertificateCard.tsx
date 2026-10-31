import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiCheck } from "react-icons/fi";
import type { Certificate } from "../../types/Certificate";

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const CertificateCard = ({ certificate, index }: CertificateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl dark:border-slate-800/90 dark:bg-slate-900/75"
    >
      {/* Top Gradient Accent Bar */}
      <div
        className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${certificate.accentColor}`}
      />

      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${certificate.accentColor} text-white shadow-md`}
        >
          <FiAward className="h-6 w-6" />
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-300">
          <FiCalendar className="h-3.5 w-3.5 text-blue-500" />
          {certificate.date}
        </span>
      </div>

      <div className="mt-5">
        <div className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
          {certificate.category} &bull; {certificate.issuer}
        </div>
        <h3 className="mt-1.5 text-lg font-bold text-slate-900 dark:text-white">
          {certificate.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {certificate.description}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {certificate.skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            <FiCheck className="h-3 w-3 text-emerald-500" />
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
        <span className="font-mono">ID: {certificate.credentialId}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
          ● Terverifikasi
        </span>
      </div>
    </motion.div>
  );
};

export default CertificateCard;

