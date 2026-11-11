import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function scrollToSection(sectionId: string): void {
  const el = document.getElementById(sectionId.replace(/^#/, ""));
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

