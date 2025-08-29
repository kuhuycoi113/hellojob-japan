'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { ArrowRight, Globe, TrendingUp, Users, Clock, Anchor, Award } from 'lucide-react';
import Image from 'next/image';

export function HofstedeScan() {
  const { t } = useLanguage();

  const dimensions = [
    { icon: <TrendingUp className="h-6 w-6 text-primary" />, title: t.hofstedeTest.dimensions.powerDistance.title, description: t.hofstedeTest.dimensions.powerDistance.description },
    { icon: <Users className="h-6 w-6 text-primary" />, title: t.hofstedeTest.dimensions.individualism.title, description: t.hofstedeTest.dimensions.individualism.description },
    { icon: <Award className="h-6 w-6 text-primary" />, title: t.hofstedeTest.dimensions.masculinity.title, description: t.hofstedeTest.dimensions.masculinity.description },
    { icon: <Anchor className="h-6 w-6 text-primary" />, title: t.hofstedeTest.dimensions.uncertaintyAvoidance.title, description: t.hofstedeTest.dimensions.uncertaintyAvoidance.description },
    { icon: <Clock className="h-6 w-6 text-primary" />, title: t.hofstedeTest.dimensions.longTermOrientation.title, description: t.hofstedeTest.dimensions.longTermOrientation.description },
    { icon: <Globe className="h-6 w-6 text-primary" />, title: t.hofstedeTest.dimensions.indulgence.title, description: t.hofstedeTest.dimensions.indulgence.description },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-2xl rounded-2xl overflow-hidden">
          <div className="relative h-64">
            <Image
              src="https://picsum.photos/1200/400?random=11"
              alt={t.hofstedeTest.title}
              fill
              className="object-cover"
              data-ai-hint="world map connections"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
                <Badge variant="secondary" className="mb-2 w-fit bg-blue-400 text-blue-900">{t.recruitRight.hofstede.title}</Badge>
                <h1 className="text-3xl font-bold font-headline text-white">{t.hofstedeTest.title}</h1>
            </div>
          </div>
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.hofstedeTest.description}</p>
            
            <div className="mb-8">
                <h3 className="text-xl font-bold font-headline text-gray-800 mb-6">{t.hofstedeTest.dimensionsTitle}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {dimensions.map((dim) => (
                    <div key={dim.title} className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg mt-1">
                          {dim.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{dim.title}</h4>
                          <p className="text-sm text-muted-foreground">{dim.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <Card className="bg-primary/5 border-primary/20 shadow-sm">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            <Globe className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-primary font-headline">{t.hofstedeTest.ctaTitle}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">{t.hofstedeTest.ctaDescription}</p>
                    <Button disabled>
                        {t.hofstedeTest.ctaButton} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                     <p className="text-sm text-muted-foreground mt-3">{t.hofstedeTest.note}</p>
                </CardContent>
            </Card>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}
