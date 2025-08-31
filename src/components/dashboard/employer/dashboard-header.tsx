
'use client';

import { useLanguage } from '@/contexts/language-context';
import { LayoutDashboard } from 'lucide-react';

export function DashboardHeader() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-primary/10 text-primary p-3 rounded-lg mb-4">
            <LayoutDashboard className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.dashboard_employer.header.title}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {t.dashboard_employer.header.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
