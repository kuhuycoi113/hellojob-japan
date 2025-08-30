// This is a new file.
'use client';

import { useLanguage } from '@/contexts/language-context';
import { BookOpen } from 'lucide-react';

export function ElearningHero() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-primary/10 text-primary p-3 rounded-lg mb-4">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.elearning.heroTitle}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {t.elearning.heroSubtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
