// This is a new file.
'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { ArrowRight } from 'lucide-react';
import { allPartners } from '@/data/partners';
import Link from 'next/link';

export function YourPartners() {
  const { t, language } = useLanguage();
  const partners = allPartners.slice(0, 4); // Displaying first 4 for the dashboard
  const isJapanese = language === 'ja';

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
          {t.dashboard_employer.your_partners.title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          {t.dashboard_employer.your_partners.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <Card
            key={index}
            className="flex flex-col text-center items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-20 w-40 mb-4">
              <Image
                src={`https://picsum.photos/300/150?random=${50 + index}`}
                alt={isJapanese ? partner.name_ja : partner.name}
                fill
                className="object-contain"
                data-ai-hint="company logo"
              />
            </div>
            <CardContent className="flex flex-col flex-grow items-center">
              <h3 className="font-bold text-lg text-gray-800">{isJapanese ? partner.name_ja : partner.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4 flex-grow">{isJapanese ? partner.type_ja : partner.type}</p>
              <Button asChild variant="link" className="p-0 text-sm">
                <Link href="#">
                    {t.featuredPartners.viewProfile} <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
