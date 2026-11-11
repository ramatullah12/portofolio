import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiBook,
  FiStar,
  FiMapPin,
  FiCheckCircle,
  FiFileText,
  FiExternalLink,
  FiDownload,
} from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import Modal from "../ui/Modal";
import { experiences } from "../../data/socials";
import type { ExperienceItem } from "../../types/Social";

const Experience = () => {
  const [selectedExpDoc, setSelectedExpDoc] = useState<ExperienceItem | null>(null);

  const getIcon = (type: string) => {
    if (type === "Pendidikan") return FiBook;
    if (type === "Proyek & Pengalaman") return FiBriefcase;
    return FiStar;
  };

  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Pendidikan & Perjalanan"
          title="Jejak Akademik &"
          highlight="Pengalaman Magang Industri"
          subtitle="Perjalanan studi di Universitas Multi Data Palembang serta pengalaman membangun sistem di PT Rachmat Kelantan Sakti dan PT Kedaton Sejahtera Abadi."
        />

        <div className="relative space-y-8 before:absolute before:top-4 before:bottom-4 before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-cyan-400 md:before:left-1/2 md:before:-translate-x-1/2">
          {experiences.map((item, index) => {
            const Icon = getIcon(item.type);
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-start`}
              >
                {/* Timeline Node Icon */}
                <div className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-2xl border-4 border-slate-50 bg-blue-600 text-white shadow-md md:left-1/2 md:-translate-x-1/2 dark:border-slate-950">
                  <Icon className="h-4 w-4" />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-14 w-[calc(100%-3.5rem)] md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    isEven ? "md:pr-4" : "md:pl-4"
                  }`}
                >
                  <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-blue-500/40 hover:shadow-xl dark:border-slate-800/90 dark:bg-slate-900/80">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600 dark:bg-blue-400/15 dark:text-blue-400">
                        {item.type}
                      </span>
                      <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-extrabold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <div className="mt-1 flex flex-wrap items-center gap-3 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      <span>{item.organization}</span>
                      <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <FiMapPin className="h-3 w-3" />
                        {item.location}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300"
                        >
                          <FiCheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3 dark:border-slate-800">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Document PDF Preview Button if available */}
                    {item.documentUrl && (
                      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                        <button
                          onClick={() => setSelectedExpDoc(item)}
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-500/20 transition hover:from-emerald-700 hover:to-teal-700 cursor-pointer"
                        >
                          <FiFileText className="h-4 w-4" />
                          <span>Lihat File Surat & Dokumentasi (PDF)</span>
                        </button>

                        <a
                          href={item.documentUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="Buka PDF di Tab Baru"
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200"
                        >
                          <FiExternalLink className="h-3.5 w-3.5" />
                          <span>Buka PDF</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Preview Dokumen Internship PT Rachmat Kelantan Sakti */}
      <Modal
        isOpen={Boolean(selectedExpDoc)}
        onClose={() => setSelectedExpDoc(null)}
        title={selectedExpDoc?.documentTitle || selectedExpDoc?.title}
      >
        {selectedExpDoc && selectedExpDoc.documentUrl && (
          <div className="space-y-5">
            <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-5 text-white">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-white/90">
                <span>{selectedExpDoc.organization}</span>
                <span className="rounded-full bg-black/25 px-3 py-1 font-mono">
                  {selectedExpDoc.period}
                </span>
              </div>
              <h4 className="mt-2 text-lg font-extrabold">
                Rancang Bangun Sistem Informasi Penyewaan Alat Berat Berbasis Web di PT Rachmat
                Kelantan Sakti
              </h4>
              {selectedExpDoc.documentMeta && (
                <p className="mt-1 font-mono text-xs text-white/90">
                  {selectedExpDoc.documentMeta}
                </p>
              )}
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                  Surat Pengantar, Izin Survei & Dokumentasi Lapangan PT RKS (3 Halaman)
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedExpDoc.documentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700"
                  >
                    <FiExternalLink className="h-3.5 w-3.5" />
                    Buka Layar Penuh
                  </a>
                  <a
                    href={selectedExpDoc.documentUrl}
                    download="Dokumen-Internship-PT-Rachmat-Kelantan-Sakti-Yuan.pdf"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    <FiDownload className="h-3.5 w-3.5" />
                    Unduh PDF
                  </a>
                </div>
              </div>
              <iframe
                src={selectedExpDoc.documentUrl}
                title={selectedExpDoc.documentTitle}
                className="h-[500px] w-full border-0"
              />
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Experience;
