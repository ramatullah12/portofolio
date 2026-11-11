import { personalInfo } from "../data/socials";

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function buildMailtoUrl(payload: ContactPayload): string {
  const subject = encodeURIComponent(
    payload.subject || `Kolaborasi Proyek dari ${payload.name}`
  );
  const body = encodeURIComponent(
    `Halo Yuan,\n\nSaya ${payload.name} (${payload.email}).\n\n${payload.message}`
  );
  return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
}

