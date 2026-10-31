import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiMail,
  FiMapPin,
  FiCheckCircle,
  FiCode,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { SiReact, SiTypescript, SiLaravel, SiFlutter } from "react-icons/si";
import profile from "../../assets/images/profile.png";
import { personalInfo } from "../../data/socials";
import { downloadCV } from "../../utils/downloadCV";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 pb-16 sm:px-6 lg:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Typography & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-700 backdrop-blur-md dark:border-emerald-400/25 dark:bg-emerald-500/15 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {personalInfo.availability}
          </div>

          {/* Greeting & Name */}
          <p className="mt-6 text-base font-bold tracking-wide text-blue-600 sm:text-lg dark:text-blue-400">
            Halo, Saya 👋
          </p>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
            {personalInfo.name}
          </h1>

          {/* Animated Role Switcher */}
          <div className="mt-4 flex h-10 items-center gap-2 text-xl font-bold sm:text-2xl lg:text-3xl">
            <span className="text-slate-500 dark:text-slate-400">Seorang</span>
            <div className="relative inline-flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={personalInfo.roles[roleIndex]}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400"
                >
                  {personalInfo.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bio Paragraph */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            Mahasiswa <strong className="text-slate-900 dark:text-white">Sistem Informasi</strong>{" "}
            di{" "}
            <strong className="text-blue-600 dark:text-blue-400">
              Universitas Multi Data Palembang
            </strong>{" "}
            yang memiliki minat mendalam pada{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Frontend Development, React, TypeScript, Laravel, Flutter, dan UI/UX Design
            </span>
            . Berfokus menciptakan produk digital yang cepat, estetik, dan berdampak nyata.
          </p>

          {/* Location & University Meta */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 sm:text-sm dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin className="h-4 w-4 text-blue-500" />
              Palembang, Indonesia
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="inline-flex items-center gap-1.5">
              <FiCheckCircle className="h-4 w-4 text-emerald-500" />
              S1 Sistem Informasi — Universitas MDP
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/35"
            >
              <span>Jelajahi Proyek</span>
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={downloadCV}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:border-blue-500/50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-400/50 dark:hover:text-blue-400 cursor-pointer"
            >
              <FiDownload className="h-4 w-4" />
              <span>Download CV</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-transparent px-4 py-3.5 text-sm font-bold text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              <FiMail className="h-4 w-4" />
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-200/80 pt-8 sm:max-w-lg dark:border-slate-800/80">
            <div>
              <div className="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
                10<span className="text-blue-600 dark:text-blue-400">+</span>
              </div>
              <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                Proyek Web & Mobile
              </div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
                12<span className="text-indigo-500">+</span>
              </div>
              <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                Teknologi & Tools
              </div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
                100<span className="text-cyan-500">%</span>
              </div>
              <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                Fokus Kualitas UI/UX
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center lg:col-span-5"
        >
          {/* Glowing Ring Backdrop */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-cyan-400/25 blur-2xl" />

          {/* Main Profile Card Frame */}
          <div className="relative z-10 w-full rounded-[2.25rem] border border-slate-200/80 bg-white/80 p-4 shadow-2xl backdrop-blur-xl dark:border-slate-800/90 dark:bg-slate-900/80">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-blue-500/10 via-slate-100 to-slate-200 dark:from-blue-500/15 dark:via-slate-800/60 dark:to-slate-900">
              <img
                src={profile}
                alt="Yuan Ramatullah - Frontend Developer"
                className="mx-auto h-88 w-full object-cover object-top transition-transform duration-500 hover:scale-105 sm:h-96"
              />

              {/* Bottom Overlay Info Bar inside photo frame */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl border border-white/20 bg-slate-950/75 px-4 py-3 text-white backdrop-blur-md">
                <div>
                  <div className="text-xs font-bold">Yuan Ramatullah</div>
                  <div className="text-[11px] text-slate-300">Sistem Informasi • Univ. MDP</div>
                </div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-600"
                >
                  <FaGithub className="h-3.5 w-3.5" />
                  <span>@ramatullah12</span>
                </a>
              </div>
            </div>

            {/* Floating Tech Stack Pills */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 hidden items-center gap-2 rounded-2xl border border-slate-200/90 bg-white px-3.5 py-2 shadow-lg sm:flex dark:border-slate-800 dark:bg-slate-900"
            >
              <SiReact className="h-5 w-5 text-sky-400" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                React + TS
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-4 top-12 hidden items-center gap-2 rounded-2xl border border-slate-200/90 bg-white px-3.5 py-2 shadow-lg sm:flex dark:border-slate-800 dark:bg-slate-900"
            >
              <SiLaravel className="h-5 w-5 text-rose-500" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Laravel Fullstack
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 left-8 hidden items-center gap-2 rounded-2xl border border-slate-200/90 bg-white px-3.5 py-2 shadow-lg sm:flex dark:border-slate-800 dark:bg-slate-900"
            >
              <SiFlutter className="h-4 w-4 text-sky-500" />
              <SiTypescript className="h-4 w-4 text-blue-600" />
              <FiCode className="h-4 w-4 text-indigo-500" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Flutter & UI/UX
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
