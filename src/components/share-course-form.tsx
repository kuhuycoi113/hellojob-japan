'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { BookOpen, Presentation, DollarSign, PenSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ShareCourseForm() {
  const { t } = useLanguage();

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
        
        <Tabs defaultValue="build" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto">
                <TabsTrigger value="build" className="py-3 px-4 text-base">
                   <PenSquare className="mr-2 h-5 w-5"/> {t.shareCourse.tabs.build}
                </TabsTrigger>
                <TabsTrigger value="promote" className="py-3 px-4 text-base">
                   <Presentation className="mr-2 h-5 w-5"/> {t.shareCourse.tabs.promote}
                </TabsTrigger>
                <TabsTrigger value="revenue" className="py-3 px-4 text-base">
                   <DollarSign className="mr-2 h-5 w-5"/> {t.shareCourse.tabs.revenue}
                </TabsTrigger>
            </TabsList>
            <Card className="mt-4 shadow-lg">
                <TabsContent value="build">
                    <CardHeader>
                        <CardTitle>{t.shareCourse.build.title}</CardTitle>
                        <CardDescription>{t.shareCourse.build.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        <p className="text-center text-muted-foreground py-12">{t.shareCourse.build.placeholder}</p>
                    </CardContent>
                </TabsContent>
                <TabsContent value="promote">
                    <CardHeader>
                        <CardTitle>{t.shareCourse.promote.title}</CardTitle>
                        <CardDescription>{t.shareCourse.promote.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        <p className="text-center text-muted-foreground py-12">{t.shareCourse.promote.placeholder}</p>
                    </CardContent>
                </TabsContent>
                <TabsContent value="revenue">
                    <CardHeader>
                        <CardTitle>{t.shareCourse.revenue.title}</CardTitle>
                        <CardDescription>{t.shareCourse.revenue.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        <p className="text-center text-muted-foreground py-12">{t.shareCourse.revenue.placeholder}</p>
                    </CardContent>
                </TabsContent>
            </Card>
        </Tabs>
      </div>
    </section>
  );
}
