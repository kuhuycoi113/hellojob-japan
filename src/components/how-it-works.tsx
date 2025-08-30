'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FilePlus2, UserSearch, FileCheck2, UserCheck, Compass, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Compass className="h-10 w-10 text-primary" />,
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
    },
    {
      icon: <BookOpen className="h-10 w-10 text-yellow-500" />,
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
    },
    {
      icon: <FilePlus2 className="h-10 w-10 text-blue-500" />,
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
    },
    {
      icon: <UserSearch className="h-10 w-10 text-green-500" />,
      title: t.howItWorks.step4.title,
      description: t.howItWorks.step4.description,
    },
     {
      icon: <FileCheck2 className="h-10 w-10 text-purple-500" />,
      title: t.howItWorks.step5.title,
      description: t.howItWorks.step5.description,
    },
    {
      icon: <UserCheck className="h-10 w-10 text-red-500" />,
      title: t.howItWorks.step6.title,
      description: t.howItWorks.step6.description,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.howItWorks.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card className="text-center shadow-lg rounded-lg p-8 h-full">
                 <CardHeader className="flex justify-center items-center">
                   <div className="bg-primary/10 p-4 rounded-full">
                     {step.icon}
                   </div>
                 </CardHeader>
                <CardContent>
                  <CardTitle className="font-headline text-xl mb-2 text-gray-800">{step.title}</CardTitle>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
