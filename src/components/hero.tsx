'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-32 bg-primary/90 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline tracking-tight">
          {t.hero.title}
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
          {t.hero.subtitle}
        </p>
        <div className="mt-10 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <form className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-center">
            <div className="text-left text-gray-500">
              <label className="text-sm font-medium">{t.hero.industry}</label>
              <Select>
                <SelectTrigger className="w-full border-0 border-b rounded-none text-gray-900">
                  <SelectValue placeholder={t.hero.allIndustries} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">{t.hero.it}</SelectItem>
                  <SelectItem value="manufacturing">{t.hero.manufacturing}</SelectItem>
                  <SelectItem value="construction">{t.hero.construction}</SelectItem>
                  <SelectItem value="agriculture">{t.hero.agriculture}</SelectItem>
                  <SelectItem value="caregiver">{t.hero.caregiver}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-left text-gray-500">
              <label className="text-sm font-medium">{t.hero.workerType}</label>
              <Select>
                <SelectTrigger className="w-full border-0 border-b rounded-none text-gray-900">
                  <SelectValue placeholder={t.hero.allTypes} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="intern">{t.hero.intern}</SelectItem>
                  <SelectItem value="skilled">{t.hero.skilled}</SelectItem>
                  <SelectItem value="engineer">{t.hero.engineer}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-left text-gray-500">
              <label className="text-sm font-medium">{t.hero.location}</label>
              <Select>
                <SelectTrigger className="w-full border-0 border-b rounded-none text-gray-900">
                  <SelectValue placeholder={t.hero.allJapan} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tokyo">{t.hero.tokyo}</SelectItem>
                  <SelectItem value="osaka">{t.hero.osaka}</SelectItem>
                  <SelectItem value="nagoya">{t.hero.nagoya}</SelectItem>
                  <SelectItem value="fukuoka">{t.hero.fukuoka}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" size="lg" className="h-12 w-full sm:w-auto text-base">
              <Search className="mr-2 h-5 w-5" />
              {t.hero.searchCandidates}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
