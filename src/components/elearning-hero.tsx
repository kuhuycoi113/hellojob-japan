'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';

export function ElearningHero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-secondary/80 text-white py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/1600/900?random=10"
          alt={t.elearningHero.imageAlt}
          fill
          className="object-cover opacity-20"
          data-ai-hint="students learning online"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-secondary/50" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold font-headline">
          {t.elearningHero.title}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
          {t.elearningHero.subtitle}
        </p>
        <div className="mt-8">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            {t.elearningHero.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
