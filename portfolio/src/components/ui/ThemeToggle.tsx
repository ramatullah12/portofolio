import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={onToggle}
      aria-label="Toggle Dark Mode"
      title={isDark ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap"}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm backdrop-blur-md transition hover:border-blue-500/40 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-blue-400/40 dark:hover:text-blue-400 cursor-pointer"
    >
      {isDark ? <FiSun className="h-5 w-5 text-amber-400" /> : <FiMoon className="h-5 w-5" />}
    </motion.button>
  );
};

export default ThemeToggle;

