import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiCopy,
  FiCheck,
  FiCheckCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import { personalInfo, socialLinks } from "../../data/socials";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Kolaborasi Proyek dari ${formData.name}`
    )}&body=${encodeURIComponent(
      `Halo Yuan,\n\nSaya ${formData.name} (${formData.email}).\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const getSocialIcon = (key: string) => {
    switch (key) {
      case "github":
        return FaGithub;
      case "linkedin":
        return FaLinkedin;
      case "instagram":
        return FaInstagram;
      default:
        return FiMail;
    }
  };

  return (
    <section
      id="contact"
      className="relative border-t border-slate-200/60 bg-slate-100/50 py-24 dark:border-slate-800/60 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Mari Berkolaborasi"
          title="Tertarik Bekerja Sama atau"
          highlight="Berdiskusi Proyek?"
          subtitle="Saya selalu terbuka untuk peluang magang (internship), proyek freelance web/mobile, maupun kolaborasi pengembangan UI/UX."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column: Contact Info & Direct Socials (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex flex-col justify-between space-y-6 lg:col-span-5"
          >
            <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/80">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Informasi Kontak Langsung
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Jangan ragu untuk menghubungi saya melalui email atau kanal sosial media di bawah
                ini.
              </p>

              {/* Email Copy Box */}
              <div className="mt-6 rounded-2xl border border-slate-200/80 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Alamat Email
                </div>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <span className="truncate font-mono text-sm font-bold text-slate-900 dark:text-white">
                    {personalInfo.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-700 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="h-3.5 w-3.5" />
                        Tersalin
                      </>
                    ) : (
                      <>
                        <FiCopy className="h-3.5 w-3.5" />
                        Salin
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Box */}
              <div className="mt-4 flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <FiMapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Domisili & Kampus
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">
                    {personalInfo.university}
                  </div>
                </div>
              </div>

              {/* Social Links List */}
              <div className="mt-6 space-y-2.5">
                {socialLinks.map((social) => {
                  const Icon = getSocialIcon(social.iconKey);
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white px-4 py-3 transition hover:border-blue-500/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-400/50"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-slate-700 group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-blue-400 transition-colors" />
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white">
                            {social.name}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {social.handle}
                          </div>
                        </div>
                      </div>
                      <FiArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm sm:p-9 lg:col-span-7 dark:border-slate-800/90 dark:bg-slate-900/80"
          >
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Kirim Pesan Cepat
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Isi formulir di bawah ini untuk mendiskusikan ide proyek, tawaran magang, atau
              pertanyaan teknis.
            </p>

            {submitted && (
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-700 sm:text-sm dark:text-emerald-300">
                <FiCheckCircle className="h-5 w-5 shrink-0 text-emerald-500" />
                <span>
                  Terima kasih! Aplikasi email Anda telah dibuka untuk mengirim pesan langsung ke
                  Yuan Ramatullah.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Budi Santoso"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/70 dark:text-white dark:focus:border-blue-400 dark:focus:bg-slate-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Alamat Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/70 dark:text-white dark:focus:border-blue-400 dark:focus:bg-slate-900"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  Subjek / Keperluan
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Pembuatan Web App / Tawaran Internship / Desain UI/UX"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/70 dark:text-white dark:focus:border-blue-400 dark:focus:bg-slate-900"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ceritakan singkat mengenai proyek atau kolaborasi yang ingin Anda diskusikan..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/70 dark:text-white dark:focus:border-blue-400 dark:focus:bg-slate-900"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.99] cursor-pointer"
              >
                <FiSend className="h-4 w-4" />
                <span>Kirim Pesan Sekarang</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

