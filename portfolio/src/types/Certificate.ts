export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  category: string;
  skills: string[];
  description: string;
  accentColor: string;
  verifiedUrl?: string;
}

