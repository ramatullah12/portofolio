import React from "react";
import { cn } from "../../utils/helpers";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-blue-500/40 hover:shadow-xl dark:border-slate-800/90 dark:bg-slate-900/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

