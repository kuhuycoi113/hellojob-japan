'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';

export function CandidateQuality() {
  const { t } = useLanguage();

  const features = [
    {
      title: t.candidateQuality.thoroughScreening,
      description: t.candidateQuality.thoroughScreeningDesc,
      image: 'https://picsum.photos/600/400?random=1',
      hint: 'job interview professional',
    },
    {
      title: t.candidateQuality.detailedProfiles,
      description: t.candidateQuality.detailedProfilesDesc,
      image: 'https://picsum.photos/600/400?random=2',
      hint: 'resume document',
    },
    {
      title: t.candidateQuality.inDepthTraining,
      description: t.candidateQuality.inDepthTrainingDesc,
      image: 'https://picsum.photos/600/400?random=3',
      hint: 'classroom learning',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.candidateQuality.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.candidateQuality.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                 <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="object-cover"
                  data-ai-hint={feature.hint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
