'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { Target, BarChart, Globe, Compass, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function RecruitRightSection() {
  const { t } = useLanguage();

  const tools = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: t.recruitRight.barrett.title,
      description: t.recruitRight.barrett.description,
      image: "https://picsum.photos/600/400?random=1",
      hint: "abstract values chart",
      href: "/recruit-right/barrett-test"
    },
    {
      icon: <BarChart className="h-10 w-10 text-yellow-500" />,
      title: t.recruitRight.gallup.title,
      description: t.recruitRight.gallup.description,
      image: "https://picsum.photos/600/400?random=2",
      hint: "team strengths collaboration",
      href: "/recruit-right/gallup-test"
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-500" />,
      title: t.recruitRight.hofstede.title,
      description: t.recruitRight.hofstede.description,
      image: "https://picsum.photos/600/400?random=3",
      hint: "global culture map",
      href: "/recruit-right/hofstede-scan"
    },
    {
      icon: <Compass className="h-10 w-10 text-green-500" />,
      title: t.recruitRight.goldenCircle.title,
      description: t.recruitRight.goldenCircle.description,
      image: "https://picsum.photos/600/400?random=4",
      hint: "motivational presentation why",
      href: "/recruit-right/golden-circle"
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.recruitRight.title}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {t.recruitRight.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tools.map((tool) => (
                <Card key={tool.title} className="flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="relative aspect-w-16 aspect-h-9">
                        <Image 
                            src={tool.image}
                            alt={tool.title}
                            width={600}
                            height={400}
                            className="object-cover"
                            data-ai-hint={tool.hint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <CardHeader className="flex-row items-center gap-4">
                         <div className="bg-white p-3 rounded-full shadow-md">
                            {tool.icon}
                        </div>
                        <CardTitle className="font-headline text-xl text-gray-800">{tool.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                        <CardDescription className="flex-grow">{tool.description}</CardDescription>
                        <Button asChild className="mt-6 self-start">
                          <Link href={tool.href}>
                            {t.recruitRight.start} <ArrowRight className="ml-2 h-4 w-4"/>
                          </Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
