import { motion } from "framer-motion";
import {
  FiAward,
  FiCalendar,
  FiCheck,
  FiFileText,
  FiExternalLink,
  FiDownload,
} from "react-icons/fi";
import type { Certificate } from "../../types/Certificate";

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
  onPreview?: (certificate: Certificate) => void;
}

const CertificateCard = ({ certificate, index, onPreview }: CertificateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl dark:bg-slate-900/75 ${
        certificate.fileUrl
          ? "border-amber-500/40 ring-1 ring-amber-500/20 hover:border-amber-500 dark:border-amber-400/40"
          : "border-slate-200/80 hover:border-blue-500/40 dark:border-slate-800/90"
      }`}
    >
      {/* Top Gradient Accent Bar */}
      <div
        className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${certificate.accentColor}`}
      />

      <div>
        <div className="flex items-start justify-between gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${certificate.accentColor} text-white shadow-md`}
          >
            <FiAward className="h-6 w-6" />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {certificate.fileUrl && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-700 dark:text-amber-300">
                ★ {certificate.id === "cert-dba-certified" ? "Dokumen Resmi BNSP" : "Dokumen & Bukti Resmi"}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-300">
              <FiCalendar className="h-3.5 w-3.5 text-blue-500" />
              {certificate.date}
            </span>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {certificate.category} &bull; {certificate.issuer}
          </div>
          <h3 className="mt-1.5 text-lg font-bold text-slate-900 dark:text-white">
            {certificate.title}
          </h3>
          {certificate.regNumber && (
            <div className="mt-1 font-mono text-xs font-semibold text-amber-600 dark:text-amber-400">
              No. Sertifikat: {certificate.credentialId} &bull; {certificate.regNumber}
            </div>
          )}
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
      </div>

      {/* Bottom Footer & File Preview Action */}
      <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800/80">
        {certificate.fileUrl ? (
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <button
              onClick={() => onPreview?.(certificate)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-amber-500/20 transition hover:from-amber-600 hover:to-orange-700 cursor-pointer"
            >
              <FiFileText className="h-4 w-4" />
              <span>Lihat File Sertifikat (PDF)</span>
            </button>

            <a
              href={certificate.fileUrl}
              target="_blank"
              rel="noreferrer"
              title="Buka PDF di Tab Baru"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-bold text-slate-700 transition hover:border-amber-500 hover:text-amber-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-amber-400 dark:hover:text-amber-400"
            >
              <FiExternalLink className="h-3.5 w-3.5" />
              <span>Buka PDF</span>
            </a>

            <a
              href={certificate.fileUrl}
              download="Sertifikat-BNSP-DBA-Yuan-Ramatullah.pdf"
              title="Unduh Sertifikat PDF"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-amber-500 hover:text-amber-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-amber-400 dark:hover:text-amber-400"
            >
              <FiDownload className="h-4 w-4" />
            </a>
          </div>
        ) : (
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="font-mono">ID: {certificate.credentialId}</span>
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
              ● Terverifikasi
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CertificateCard;
