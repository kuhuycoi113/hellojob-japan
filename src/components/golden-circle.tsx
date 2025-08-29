'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { Target, HelpCircle, Settings, Heart } from 'lucide-react';
import Image from 'next/image';

export function GoldenCircle() {
  const { t } = useLanguage();

  const dimensions = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: t.goldenCircle.why.title,
      description: t.goldenCircle.why.description,
    },
    {
      icon: <Settings className="h-8 w-8 text-yellow-500" />,
      title: t.goldenCircle.how.title,
      description: t.goldenCircle.how.description,
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: t.goldenCircle.what.title,
      description: t.goldenCircle.what.description,
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-2xl rounded-2xl overflow-hidden">
          <div className="relative h-64">
            <Image
              src="https://picsum.photos/1200/400?random=12"
              alt={t.goldenCircle.title}
              fill
              className="object-cover"
              data-ai-hint="compass direction purpose"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
                <Badge variant="secondary" className="mb-2 w-fit bg-green-400 text-green-900">{t.recruitRight.goldenCircle.title}</Badge>
                <h1 className="text-3xl font-bold font-headline text-white">{t.goldenCircle.title}</h1>
            </div>
          </div>
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.goldenCircle.description}</p>
            
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <div className="relative flex justify-center items-center">
                    <div className="absolute w-72 h-72 border-2 border-dashed border-gray-300 rounded-full"></div>
                    <div className="absolute w-48 h-48 border-2 border-dashed border-gray-300 rounded-full"></div>
                    <div className="absolute w-24 h-24 border-2 border-dashed border-gray-300 rounded-full"></div>

                    <div className="relative z-10 w-24 h-24 bg-primary text-primary-foreground rounded-full flex flex-col justify-center items-center text-center p-2">
                        <span className="font-bold text-lg">WHY</span>
                    </div>
                    <div className="absolute z-10 w-48 h-48 rounded-full flex justify-center items-center">
                        <span className="font-bold text-lg text-gray-600 bg-gray-50 px-2">HOW</span>
                    </div>
                    <div className="absolute z-10 w-72 h-72 rounded-full flex justify-center items-center">
                        <span className="font-bold text-lg text-gray-600 bg-gray-50 px-2">WHAT</span>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold font-headline text-gray-800 mb-6">{t.goldenCircle.explanationTitle}</h3>
                <div className="grid md:grid-cols-1 gap-6">
                    {dimensions.map((dim) => (
                    <Card key={dim.title} className="flex items-start gap-4 p-4 shadow-sm">
                        <div className="bg-primary/5 p-3 rounded-lg mt-1">
                          {dim.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-lg">{dim.title}</h4>
                          <p className="text-muted-foreground">{dim.description}</p>
                        </div>
                    </Card>
                    ))}
                </div>
            </div>

            <Card className="bg-primary/5 border-primary/20 shadow-sm">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            <HelpCircle className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-primary font-headline">{t.goldenCircle.ctaTitle}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">{t.goldenCircle.ctaDescription}</p>
                    <Button disabled>
                        {t.goldenCircle.ctaButton}
                    </Button>
                    <p className="text-sm text-muted-foreground mt-3">{t.goldenCircle.note}</p>
                </CardContent>
            </Card>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}
