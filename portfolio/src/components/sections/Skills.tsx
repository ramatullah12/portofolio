import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import SkillCard from "../ui/SkillCard";
import { skills, skillCategories } from "../../data/skills";
import type { SkillCategory } from "../../types/Skill";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("Semua");

  const filteredSkills =
    selectedCategory === "Semua"
      ? skills
      : skills.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="skills"
      className="relative border-y border-slate-200/60 bg-slate-100/50 py-24 dark:border-slate-800/60 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Tech Stack & Keahlian"
          title="Teknologi yang Saya Gunakan untuk"
          highlight="Membangun Produk Modern"
          subtitle="Kombinasi keahlian Frontend, Backend, Mobile, dan Design Tools untuk menghasilkan solusi perangkat lunak yang komprehensif."
        />

        {/* Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {skillCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative rounded-xl px-4 py-2 text-xs font-bold transition sm:text-sm cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "border border-slate-200/80 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

