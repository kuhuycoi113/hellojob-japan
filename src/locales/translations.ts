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

export type Candidate = {
    id: string;
    name_ja: string;
    name_vi: string;
    avatar: string;
    details: string;
    visa_type: string;
    specialty: string;
    desired_salary: string;
    jobs: {
        count: number;
        images: string[];
    };
    created_date: string;
}


export const translations = {
  vi,
  ja,
  en,
};

export type Language = keyof typeof translations;
