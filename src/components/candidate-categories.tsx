'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building, Handshake, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function CandidateCategories() {
  const { t } = useLanguage();
  
  const categories = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: t.candidateCategories.skillIntern,
      description: t.candidateCategories.skillInternDesc,
    },
    {
      icon: <Handshake className="h-10 w-10 text-yellow-500" />,
      title: t.candidateCategories.specifiedSkill,
      description: t.candidateCategories.specifiedSkillDesc,
    },
    {
      icon: <Briefcase className="h-10 w-10 text-green-500" />,
      title: t.candidateCategories.engineerKnowledge,
      description: t.candidateCategories.engineerKnowledgeDesc,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.candidateCategories.title}
          </h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.candidateCategories.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <Card key={category.title} className="text-center shadow-lg rounded-lg p-8">
              <CardHeader className="flex justify-center items-center">
                {category.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl mb-2 text-gray-800">{category.title}</CardTitle>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
