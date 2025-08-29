'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Brain, Hand, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function PersonnelTraining() {
  const { t } = useLanguage();

  const trainingPoints = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: t.personnelTraining.attitude,
      description: t.personnelTraining.attitudeDesc,
    },
    {
      icon: <Brain className="h-10 w-10 text-yellow-500" />,
      title: t.personnelTraining.awareness,
      description: t.personnelTraining.awarenessDesc,
    },
    {
      icon: <Hand className="h-10 w-10 text-blue-500" />,
      title: t.personnelTraining.etiquette,
      description: t.personnelTraining.etiquetteDesc,
    },
    {
      icon: <Award className="h-10 w-10 text-green-500" />,
      title: t.personnelTraining.dedication,
      description: t.personnelTraining.dedicationDesc,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.personnelTraining.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.personnelTraining.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {trainingPoints.map((point) => (
            <Card key={point.title} className="text-center shadow-lg rounded-lg p-8">
              <CardHeader className="flex justify-center items-center">
                {point.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl mb-2 text-gray-800">{point.title}</CardTitle>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
