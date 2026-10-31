import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiArrowUp, FiMail, FiMapPin, FiCode, FiHeart, FiPhone } from "react-icons/fi";
import { navigation } from "../../data/navigation";
import { personalInfo } from "../../data/socials";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200/80 bg-white pt-16 pb-10 dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-slate-200/70 pb-12 md:grid-cols-12 dark:border-slate-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                <FiCode className="h-5 w-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Yuan Ramatullah
              </span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Frontend & Fullstack Web Developer lulusan{" "}
              <span className="font-semibold text-slate-900 dark:text-slate-200">
                S1 Sistem Informasi Universitas Multi Data Palembang (IPK {personalInfo.gpa})
              </span>
              . Berfokus pada React.js, Redux, TanStack Query, Laravel (MVC), dan MySQL.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <span className="h-2 w-2 animate-ping rounded-full bg-emerald-500" />
              {personalInfo.availability}
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigasi Cepat
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Socials */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Informasi Kontak
            </h3>
            <div className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <p className="flex items-center gap-2.5">
                <FiMapPin className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                <span>{personalInfo.location}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <FiPhone className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {personalInfo.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <FiMail className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {personalInfo.email}
                </a>
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-blue-600"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-blue-600"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-emerald-500 hover:bg-emerald-600 hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:bg-emerald-600"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row dark:text-slate-400">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} <strong>Yuan Ramatullah</strong>. Dibuat dengan{" "}
            <FiHeart className="inline h-3.5 w-3.5 text-rose-500" /> menggunakan React, TypeScript &
            Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400 cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <FiArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
