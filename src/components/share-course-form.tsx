'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { BookOpen, Presentation, DollarSign, PenSquare, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ShareCourseForm() {
  const { t } = useLanguage();

  const options = [
      {
          icon: <PenSquare className="w-10 h-10 text-primary"/>,
          title: t.shareCourse.tabs.build,
          description: t.shareCourse.build.description,
          href: "/elearning/share-course/build"
      },
      {
          icon: <Presentation className="w-10 h-10 text-yellow-500"/>,
          title: t.shareCourse.tabs.promote,
          description: t.shareCourse.promote.description,
          href: "#"
      },
      {
          icon: <DollarSign className="w-10 h-10 text-green-500"/>,
          title: t.shareCourse.tabs.revenue,
          description: t.shareCourse.revenue.description,
          href: "/elearning/share-course/revenue"
      }
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 text-accent p-3 rounded-lg mb-4">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.elearning.shareCourseButton}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.elearning.shareCourseSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {options.map((option, index) => (
                <Link href={option.href} key={index} className="group">
                    <Card className="h-full text-center p-8 rounded-2xl shadow-lg border-transparent border-b-4 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                        <CardHeader className="flex items-center justify-center">
                            <div className="p-4 bg-primary/5 rounded-full transition-transform duration-300 group-hover:scale-110">
                                {option.icon}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-xl font-headline text-gray-800 mb-3">{option.title}</CardTitle>
                            <CardDescription className="text-muted-foreground mb-4 h-20">{option.description}</CardDescription>
                            <span className="font-semibold text-primary inline-flex items-center">
                                Bắt đầu <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </span>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
