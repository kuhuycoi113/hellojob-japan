// This is a new file.
'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/language-context';
import {
  Book,
  PlusCircle,
  UploadCloud,
  Video,
  Trash2,
  Banknote,
  Info
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface Lesson {
    id: number;
    title: string;
    videoFile: File | null;
}

interface Chapter {
    id: number;
    title: string;
    lessons: Lesson[];
}

export function BuildCourseForm() {
  const { t } = useLanguage();
  const [chapters, setChapters] = useState<Chapter[]>([
    { id: 1, title: 'Chương 1: Giới thiệu', lessons: [{ id: 1, title: '', videoFile: null }] },
  ]);

  const addChapter = () => {
    const newChapterId = chapters.length > 0 ? Math.max(...chapters.map(c => c.id)) + 1 : 1;
    setChapters([
      ...chapters,
      { id: newChapterId, title: `Chương ${chapters.length + 1}`, lessons: [{ id: 1, title: '', videoFile: null }] },
    ]);
  };
  
  const addLesson = (chapterId: number) => {
    setChapters(chapters.map(chapter => {
      if (chapter.id === chapterId) {
        const newLessonId = chapter.lessons.length > 0 ? Math.max(...chapter.lessons.map(l => l.id)) + 1 : 1;
        return {
          ...chapter,
          lessons: [...chapter.lessons, { id: newLessonId, title: '', videoFile: null }],
        };
      }
      return chapter;
    }));
  };

  const removeChapter = (chapterId: number) => {
    setChapters(chapters.filter(chapter => chapter.id !== chapterId));
  }

  const removeLesson = (chapterId: number, lessonId: number) => {
     setChapters(chapters.map(chapter => {
      if (chapter.id === chapterId) {
        return {
          ...chapter,
          lessons: chapter.lessons.filter(lesson => lesson.id !== lessonId),
        };
      }
      return chapter;
    }));
  }


  return (
    <div className="container mx-auto px-4 max-w-4xl space-y-8">
      <div className="text-center">
        <div className="inline-block bg-primary/10 text-primary p-3 rounded-lg mb-4">
          <Book className="h-8 w-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
          {t.shareCourse.build.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          {t.shareCourse.build.description}
        </p>
      </div>

      {/* Course Info */}
      <Card>
        <CardHeader>
          <CardTitle>{t.shareCourse.build.info.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="course-title">{t.shareCourse.build.info.courseTitleLabel}</Label>
            <Input id="course-title" placeholder={t.shareCourse.build.info.courseTitlePlaceholder} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="course-description">{t.shareCourse.build.info.courseDescriptionLabel}</Label>
            <Textarea id="course-description" placeholder={t.shareCourse.build.info.courseDescriptionPlaceholder} className="min-h-[120px]" />
          </div>
        </CardContent>
      </Card>
      
      {/* Curriculum */}
      <Card>
        <CardHeader>
          <CardTitle>{t.shareCourse.build.curriculum.title}</CardTitle>
          <CardDescription>{t.shareCourse.build.curriculum.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {chapters.map((chapter, chapterIndex) => (
            <Card key={chapter.id} className="p-4 bg-gray-50/50">
               <div className="flex justify-between items-center mb-4">
                 <Input 
                    defaultValue={chapter.title} 
                    className="text-lg font-semibold border-0 shadow-none focus-visible:ring-0 p-1 -ml-1"
                 />
                 <Button variant="ghost" size="icon" onClick={() => removeChapter(chapter.id)}>
                    <Trash2 className="w-4 h-4 text-destructive"/>
                 </Button>
               </div>
               <div className="space-y-4">
                {chapter.lessons.map((lesson, lessonIndex) => (
                    <div key={lesson.id} className="flex items-center gap-4 pl-4 border-l-2 border-primary">
                       <div className="flex-grow space-y-2">
                         <Label htmlFor={`lesson-title-${chapter.id}-${lesson.id}`}>{t.shareCourse.build.curriculum.lesson} {lessonIndex + 1}</Label>
                         <Input id={`lesson-title-${chapter.id}-${lesson.id}`} placeholder={t.shareCourse.build.curriculum.lessonTitlePlaceholder} />
                       </div>
                       <div className="flex-shrink-0">
                         <Button variant="outline" asChild>
                            <label htmlFor={`lesson-video-${chapter.id}-${lesson.id}`} className="cursor-pointer">
                                <UploadCloud className="w-4 h-4 mr-2"/>
                                {t.shareCourse.build.curriculum.uploadVideo}
                            </label>
                         </Button>
                         <Input id={`lesson-video-${chapter.id}-${lesson.id}`} type="file" accept="video/*" className="hidden"/>
                       </div>
                        <Button variant="ghost" size="icon" onClick={() => removeLesson(chapter.id, lesson.id)}>
                            <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive"/>
                        </Button>
                    </div>
                ))}
                 <Button variant="secondary" onClick={() => addLesson(chapter.id)}>
                    <PlusCircle className="w-4 h-4 mr-2"/>
                    {t.shareCourse.build.curriculum.addLesson}
                 </Button>
               </div>
            </Card>
          ))}
          <Button onClick={addChapter}>
            <PlusCircle className="w-4 h-4 mr-2"/>
            {t.shareCourse.build.curriculum.addChapter}
          </Button>
        </CardContent>
      </Card>
      
      {/* Pricing and Payout */}
       <Card>
        <CardHeader>
          <CardTitle>{t.shareCourse.build.payment.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="space-y-2">
                <Label htmlFor="course-price">{t.shareCourse.build.payment.priceLabel}</Label>
                <div className="relative">
                    <Banknote className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"/>
                    <Input id="course-price" type="number" placeholder="e.g., 2000000" className="pl-10"/>
                </div>
            </div>
            
            <Separator />
            
            <div>
                <h3 className="font-medium mb-2">{t.shareCourse.build.payment.payoutTitle}</h3>
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-sm text-blue-800 flex items-start gap-3">
                    <Info className="w-5 h-5 mt-0.5 flex-shrink-0"/>
                    <p>{t.shareCourse.build.payment.payoutDescription}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                        <Label htmlFor="bank-name">{t.shareCourse.build.payment.bankNameLabel}</Label>
                        <Input id="bank-name" placeholder={t.shareCourse.build.payment.bankNamePlaceholder} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="account-number">{t.shareCourse.build.payment.accountNumberLabel}</Label>
                        <Input id="account-number" placeholder={t.shareCourse.build.payment.accountNumberPlaceholder} />
                    </div>
                     <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="account-name">{t.shareCourse.build.payment.accountNameLabel}</Label>
                        <Input id="account-name" placeholder={t.shareCourse.build.payment.accountNamePlaceholder} />
                    </div>
                </div>
            </div>

        </CardContent>
        <CardFooter className="flex justify-end">
            <Button size="lg">{t.shareCourse.build.submitButton}</Button>
        </CardFooter>
      </Card>

    </div>
  );
}
