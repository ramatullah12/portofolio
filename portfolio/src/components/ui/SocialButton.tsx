import React from "react";

interface SocialButtonProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const SocialButton = ({ href, label, children }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:bg-blue-600"
    >
      {children}
    </a>
  );
};

export default SocialButton;

