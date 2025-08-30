'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, ShieldCheck, Target, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function AboutSection() {
  const { t } = useLanguage();

  const coreValues = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: t.aboutPage.coreValues.userCentric.title,
      description: t.aboutPage.coreValues.userCentric.description,
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: t.aboutPage.coreValues.sustainableGrowth.title,
      description: t.aboutPage.coreValues.sustainableGrowth.description,
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: t.aboutPage.coreValues.trustedPartner.title,
      description: t.aboutPage.coreValues.trustedPartner.description,
    },
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 sm:py-28 bg-secondary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-headline">
            {t.aboutPage.title}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
            {t.aboutPage.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-blue-50/50">
        <div className="container mx-auto px-4">
          
          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-24">
            <div className="relative aspect-square">
                <Image 
                    src="https://picsum.photos/600/600" 
                    alt="HelloJob Mission"
                    fill
                    className="rounded-xl shadow-2xl object-cover"
                    data-ai-hint="team collaboration office"
                />
            </div>
            <div className="space-y-10">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <Target className="h-8 w-8 text-primary"/>
                        </div>
                        <h2 className="text-3xl font-bold font-headline text-gray-800">{t.aboutPage.mission.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{t.aboutPage.mission.description}</p>
                </div>
                 <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-yellow-400/10 rounded-full">
                            <Lightbulb className="h-8 w-8 text-yellow-500"/>
                        </div>
                        <h2 className="text-3xl font-bold font-headline text-gray-800">{t.aboutPage.vision.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{t.aboutPage.vision.description}</p>
                </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
              {t.aboutPage.coreValues.title}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              {t.aboutPage.coreValues.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value) => (
              <Card key={value.title} className="text-center shadow-lg rounded-xl p-8 border-t-4 border-primary">
                <CardHeader className="flex justify-center items-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {value.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="font-headline text-xl mb-2 text-gray-800">{value.title}</CardTitle>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

       {/* Team Section */}
       <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
              {t.aboutPage.team.title}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {t.aboutPage.team.subtitle}
            </p>
        </div>
      </section>
    </div>
  );
}
