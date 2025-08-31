import vi from './vi.json';
import ja from './ja.json';
import en from './en.json';

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  status: string;
  partners: string;
  applications: string;
  date_posted: string;
  salary: string;
  image: string;
  tags: string[];
};


export const translations = {
  vi,
  ja,
  en,
};

export type Language = keyof typeof translations;
