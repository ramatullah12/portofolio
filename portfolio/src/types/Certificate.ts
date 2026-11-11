export interface CompetencyUnit {
  code: string;
  title: string;
  titleEn: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  regNumber?: string;
  validDuration?: string;
  category: string;
  skills: string[];
  description: string;
  accentColor: string;
  fileUrl?: string;
  competencyUnits?: CompetencyUnit[];
}
