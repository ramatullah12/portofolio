import { motion } from "framer-motion";
import { FiBriefcase, FiBook, FiStar, FiMapPin, FiCheckCircle } from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import { experiences } from "../../data/socials";

const Experience = () => {
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
          highlight="Pengembangan Proyek"
          subtitle="Perjalanan belajar di Universitas Multi Data Palembang serta pengalaman merancang dan membangun berbagai sistem aplikasi."
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

                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

