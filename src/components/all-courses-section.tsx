'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, BarChart, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function AllCoursesSection() {
    const { t } = useLanguage();
    const courses = t.allCourses;

  return (
    <section className="py-16 sm:py-24 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.allCoursesTitle}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.allCoursesSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg group">
              <div className="relative aspect-video">
                 <Image
                  src={`https://picsum.photos/600/400?random=${20 + index}`}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={course.hint}
                />
                 <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">{course.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl text-gray-800 h-14 group-hover:text-primary transition-colors">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{course.description}</CardDescription>
                 <div className="mt-4 flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {course.duration}</div>
                    <div className="flex items-center gap-1.5"><BarChart className="w-4 h-4" /> {course.level}</div>
                 </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center bg-gray-50/50 p-4">
                 <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-gray-300" />
                    <span className="ml-2 text-sm text-muted-foreground">({course.reviews})</span>
                 </div>
                 <Button variant="secondary" size="sm">{t.enrollNow}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
