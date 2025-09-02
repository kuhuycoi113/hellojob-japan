'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations, Language } from '@/locales/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations.vi;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ 
  children,
  defaultLanguage = 'vi'
}: { 
  children: ReactNode,
  defaultLanguage?: Language 
}) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
