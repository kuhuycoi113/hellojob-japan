import vi from './vi.json';
import ja from './ja.json';
import en from './en.json';

export const translations = {
  vi,
  ja,
  en,
};

export type Language = keyof typeof translations;
