'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Construction, UserCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function DevelopmentPath() {
    const { t } = useLanguage();
    const paths = t.developmentPath;

  const developmentPaths = [
    {
      icon: <Construction className="h-10 w-10 text-primary" />,
      title: paths.skillIntern.title,
      description: paths.skillIntern.description,
    },
    {
      icon: <UserCheck className="h-10 w-10 text-yellow-500" />,
      title: paths.specifiedSkill.title,
      description: paths.specifiedSkill.description,
    },
    {
      icon: <Briefcase className="h-10 w-10 text-blue-500" />,
      title: paths.engineer.title,
      description: paths.engineer.description,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {paths.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {paths.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {developmentPaths.map((path) => (
            <Card key={path.title} className="text-center shadow-lg rounded-lg p-8">
              <CardHeader className="flex justify-center items-center">
                {path.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl mb-2 text-gray-800">{path.title}</CardTitle>
                <p className="text-muted-foreground">{path.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
