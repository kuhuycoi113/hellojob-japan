// This is a new file.
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { BookOpen } from 'lucide-react';

export function ShareCourseForm() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 text-accent p-3 rounded-lg mb-4">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.elearning.shareCourseButton}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.elearning.shareCourseSubtitle || "Contribute your knowledge to our community."}
          </p>
        </div>
        
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Course Details</CardTitle>
                <CardDescription>Fill in the details of the course you want to share.</CardDescription>
            </CardHeader>
          <CardContent className="p-6 space-y-6">
            <p className="text-center text-muted-foreground">The form to share a course will be built here based on your next instructions.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
