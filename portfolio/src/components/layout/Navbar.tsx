import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiDownload, FiMenu, FiX, FiCode } from "react-icons/fi";
import { navigation } from "../../data/navigation";
import { personalInfo } from "../../data/socials";
import { useScroll } from "../../hooks/useScroll";
import { useDarkMode } from "../../hooks/useDarkMode";
import ThemeToggle from "../ui/ThemeToggle";
import { downloadCV } from "../../utils/downloadCV";

const sectionIds = navigation.map((item) => item.sectionId);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrolled, scrollProgress, activeSection } = useScroll(sectionIds);
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/80 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80"
          : "bg-transparent py-5"
      }`}
    >
      {/* Top Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 transition-transform duration-300 group-hover:scale-105">
            <FiCode className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
              Yuan Ramatullah<span className="text-blue-600 dark:text-blue-400"></span>
            </span>
            <span className="font-mono text-[10px] font-medium text-slate-500 dark:text-slate-400">
              Frontend & UI/UX
            </span>
          </div>
        </a>

        {/* Desktop Pill Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-2xl border border-slate-200/80 bg-slate-100/75 p-1.5 backdrop-blur-md dark:border-slate-800/90 dark:bg-slate-900/75">
            {navigation.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <li key={item.id}>
                  <a
                    href={item.path}
                    className={`relative block rounded-xl px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        transition={{ type: "spring", duration: 0.45, bounce: 0.2 }}
                        className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm shadow-blue-500/30"
                      />
                    )}
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions: Theme Toggle + GitHub + Download CV */}
        <div className="hidden items-center gap-2.5 md:flex">
          <ThemeToggle isDark={isDark} onToggle={toggleDarkMode} />

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Yuan Ramatullah"
            title="GitHub @ramatullah12"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm backdrop-blur-md transition hover:border-blue-500/40 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          <button
            onClick={downloadCV}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] cursor-pointer"
          >
            <FiDownload className="h-4 w-4" />
            <span>Lihat CV</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleDarkMode} />
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Buka Menu Navigasi"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 cursor-pointer"
          >
            {mobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden dark:border-slate-800 dark:bg-slate-950/95"
          >
            <div className="mx-auto max-w-7xl space-y-2 px-4 py-5">
              {navigation.map((item) => {
                const isActive = activeSection === item.sectionId;
                return (
                  <a
                    key={item.id}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                    }`}
                  >
                    <span>{item.title}</span>
                    {isActive && <span className="h-2 w-2 rounded-full bg-white" />}
                  </a>
                );
              })}

              <div className="mt-4 flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-200"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    downloadCV();
                  }}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white cursor-pointer"
                >
                  <FiDownload className="h-4 w-4" />
                  Lihat CV
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
