import { useState } from "react";
import { FiDownload, FiExternalLink, FiCheckCircle, FiAward } from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import CertificateCard from "../ui/CertificateCard";
import Modal from "../ui/Modal";
import { certificates } from "../../data/certificates";
import type { Certificate } from "../../types/Certificate";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Lisensi & Sertifikasi Resmi"
          title="Sertifikat Kompetensi BNSP &"
          highlight="Pencapaian Akademik"
          subtitle="Bukti kompetensi resmi sebagai Database Administrator (DBA) tersertifikasi BNSP serta rekam jejak akademik dan magang industri."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
              onPreview={(cert) => setSelectedCertificate(cert)}
            />
          ))}
        </div>
      </div>

      {/* Modal Preview File Sertifikat PDF & Unit Kompetensi */}
      <Modal
        isOpen={Boolean(selectedCertificate)}
        onClose={() => setSelectedCertificate(null)}
        title={selectedCertificate?.title}
      >
        {selectedCertificate && (
          <div className="space-y-6">
            {/* Metadata Header */}
            <div
              className={`rounded-2xl bg-gradient-to-r ${selectedCertificate.accentColor} p-5 text-white`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-white/90">
                <span className="inline-flex items-center gap-1.5">
                  <FiAward className="h-4 w-4" />
                  {selectedCertificate.issuer}
                </span>
                <span className="rounded-full bg-black/25 px-3 py-1 font-mono">
                  {selectedCertificate.date}
                </span>
              </div>
              <div className="mt-3 grid gap-2 text-xs sm:grid-cols-3">
                <div className="rounded-xl bg-black/20 p-2.5">
                  <div className="text-white/75">No. Sertifikat</div>
                  <div className="font-mono font-bold">{selectedCertificate.credentialId}</div>
                </div>
                {selectedCertificate.regNumber && (
                  <div className="rounded-xl bg-black/20 p-2.5">
                    <div className="text-white/75">No. Registrasi</div>
                    <div className="font-mono font-bold">{selectedCertificate.regNumber}</div>
                  </div>
                )}
                {selectedCertificate.validDuration && (
                  <div className="rounded-xl bg-black/20 p-2.5">
                    <div className="text-white/75">Masa Berlaku</div>
                    <div className="font-bold">{selectedCertificate.validDuration}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            {selectedCertificate.fileUrl && (
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                    Pratinjau Dokumen Resmi (3 Halaman)
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={selectedCertificate.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-blue-700"
                    >
                      <FiExternalLink className="h-3.5 w-3.5" />
                      Buka Layar Penuh
                    </a>
                    <a
                      href={selectedCertificate.fileUrl}
                      download="Sertifikat-BNSP-DBA-Yuan-Ramatullah.pdf"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      <FiDownload className="h-3.5 w-3.5" />
                      Unduh PDF
                    </a>
                  </div>
                </div>
                <iframe
                  src={selectedCertificate.fileUrl}
                  title={selectedCertificate.title}
                  className="h-[480px] w-full border-0"
                />
              </div>
            )}

            {/* 7 Competency Units Table */}
            {selectedCertificate.competencyUnits && (
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Daftar 7 Unit Kompetensi (Skema Sertifikasi Administrator Basis Data):
                </h4>
                <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      <tr>
                        <th className="px-3 py-2.5 font-bold">No</th>
                        <th className="px-3 py-2.5 font-bold">Kode Unit</th>
                        <th className="px-3 py-2.5 font-bold">Judul Unit Kompetensi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      {selectedCertificate.competencyUnits.map((unit, idx) => (
                        <tr
                          key={unit.code}
                          className="bg-white dark:bg-slate-900/60"
                        >
                          <td className="px-3 py-2.5 font-mono text-slate-500">{idx + 1}</td>
                          <td className="px-3 py-2.5 font-mono font-semibold text-blue-600 dark:text-blue-400">
                            {unit.code}
                          </td>
                          <td className="px-3 py-2.5">
                            <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white">
                              <FiCheckCircle className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                              <span>{unit.title}</span>
                            </div>
                            <div className="pl-5 italic text-slate-500 dark:text-slate-400">
                              {unit.titleEn}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certificates;
