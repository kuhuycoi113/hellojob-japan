'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { ArrowRight, Send } from 'lucide-react';

export function AllCoursesSection() {
  const { t } = useLanguage();
  const courses = t.elearning.courses;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.elearning.allCoursesTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={`https://picsum.photos/600/338?random=${index + 10}`}
                    alt={course.title}
                    fill
                    className="object-cover"
                    data-ai-hint={course.hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline text-xl text-gray-800 mb-2">
                  {course.title}
                </CardTitle>
                <p className="text-muted-foreground flex-grow">
                  {course.description}
                </p>
                <Button asChild className="mt-6 self-start">
                  <Link href="/elearning/course">
                    {t.elearning.viewCourse}{' '}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            variant="default"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-base shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1"
          >
            <Link href="/elearning/share-course">
              {t.elearning.shareCourseButton}{' '}
              <Send className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
