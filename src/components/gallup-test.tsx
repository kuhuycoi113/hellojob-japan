'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { ArrowRight, Check, Target } from 'lucide-react';
import Image from 'next/image';

export function GallupTest() {
  const { t } = useLanguage();

  const benefits = t.gallupTest.benefits;

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-2xl rounded-2xl overflow-hidden">
          <div className="relative h-64">
            <Image
              src="https://picsum.photos/1200/400?random=10"
              alt={t.gallupTest.title}
              fill
              className="object-cover"
              data-ai-hint="team collaboration puzzle"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
                <Badge variant="secondary" className="mb-2 w-fit bg-yellow-400 text-yellow-900">{t.recruitRight.gallup.title}</Badge>
                <h1 className="text-3xl font-bold font-headline text-white">{t.gallupTest.title}</h1>
            </div>
          </div>
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.gallupTest.description}</p>
            
            <div className="mb-8">
                <h3 className="text-xl font-bold font-headline text-gray-800 mb-4">{t.gallupTest.benefitsTitle}</h3>
                <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                        <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                    </li>
                    ))}
                </ul>
            </div>

            <Card className="bg-primary/5 border-primary/20 shadow-sm">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            <Target className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-primary font-headline">{t.gallupTest.ctaTitle}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">{t.gallupTest.ctaDescription}</p>
                    <Button disabled>
                        {t.gallupTest.ctaButton} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                     <p className="text-sm text-muted-foreground mt-3">{t.gallupTest.note}</p>
                </CardContent>
            </Card>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}
