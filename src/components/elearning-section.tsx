'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function ElearningSection() {
  const { t } = useLanguage();

  const course = {
    category: t.elearning.category,
    title: t.elearning.title,
    description: t.elearning.description,
    features: [
      t.elearning.feature1,
      t.elearning.feature2,
      t.elearning.feature3,
      t.elearning.feature4,
    ],
    cta: t.elearning.cta,
  };

  return (
    <section className="py-16 sm:py-24 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary p-3 rounded-lg mb-4">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.elearning.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.elearning.heroSubtitle}
          </p>
        </div>

        <Card className="max-w-5xl mx-auto shadow-lg rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src="https://picsum.photos/600/800"
                alt={course.title}
                fill
                className="object-cover"
                data-ai-hint="business meeting diverse"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-primary font-semibold text-sm mb-2">{course.category}</span>
              <h2 className="text-2xl font-bold font-headline mb-4 text-gray-800">{course.title}</h2>
              <p className="text-muted-foreground mb-6">{course.description}</p>
              <ul className="space-y-3 mb-8">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full md:w-auto self-start">
                {course.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
