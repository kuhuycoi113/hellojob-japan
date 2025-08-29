'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, FileText, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: t.whyChooseUs.searchFilter,
      description: t.whyChooseUs.searchFilterDesc,
    },
    {
      icon: <FileText className="h-10 w-10 text-yellow-500" />,
      title: t.whyChooseUs.profileManagement,
      description: t.whyChooseUs.profileManagementDesc,
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: t.whyChooseUs.comprehensiveSupport,
      description: t.whyChooseUs.comprehensiveSupportDesc,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white -mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.whyChooseUs.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.whyChooseUs.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <Card key={reason.title} className="text-center shadow-lg rounded-lg p-8">
              <CardHeader className="flex justify-center items-center">
                {reason.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl mb-2 text-gray-800">{reason.title}</CardTitle>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
