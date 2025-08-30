'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { PlayCircle, GraduationCap, ListVideo, Users, Star, BookOpen, CheckCircle, Video } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const LOCAL_STORAGE_KEY_PREFIX = 'watched_lessons_';

export function CourseDetail() {
  const { t, language } = useLanguage();
  // Using a courseId to make localStorage key unique per course if there were multiple courses.
  const courseId = 'vietnamese_cultural_guide';
  const localStorageKey = `${LOCAL_STORAGE_KEY_PREFIX}${courseId}`;

  const [selectedLesson, setSelectedLesson] = useState<{ chapterIndex: number; lessonIndex: number } | null>(null);
  const [watchedLessons, setWatchedLessons] = useState<Set<string>>(new Set());

  useEffect(() => {
    const storedWatchedLessons = localStorage.getItem(localStorageKey);
    if (storedWatchedLessons) {
      setWatchedLessons(new Set(JSON.parse(storedWatchedLessons)));
    }
  }, [localStorageKey]);

  const handleLessonClick = (chapterIndex: number, lessonIndex: number) => {
    const lessonId = `${chapterIndex}-${lessonIndex}`;
    setSelectedLesson({ chapterIndex, lessonIndex });
    const newWatchedLessons = new Set(watchedLessons);
    newWatchedLessons.add(lessonId);
    setWatchedLessons(newWatchedLessons);
    localStorage.setItem(localStorageKey, JSON.stringify(Array.from(newWatchedLessons)));
  };
  
  const course = t.courseDetail;
  
  const featuredLessons = [
    course.chapters[0].lessons[0],
    course.chapters[1].lessons[2],
    course.chapters[2].lessons[0],
    course.chapters[3].lessons[4],
  ];

  const icons = {
    level: <GraduationCap className="w-5 h-5 text-muted-foreground" />,
    lessons: <ListVideo className="w-5 h-5 text-muted-foreground" />,
    students: <Users className="w-5 h-5 text-muted-foreground" />,
    rating: <Star className="w-5 h-5 text-muted-foreground" />,
  }

  return (
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                <Card className="overflow-hidden shadow-lg">
                    <div className="aspect-video bg-black flex items-center justify-center text-white">
                        <div className="text-center">
                            <PlayCircle className="mx-auto h-16 w-16 text-gray-400" />
                            <p className="mt-2 text-lg">{course.video.unavailable}</p>
                            <p className="text-sm text-gray-400">{course.video.notWorking}</p>
                        </div>
                    </div>
                </Card>
                 <Card className="shadow-lg">
                    <CardContent className="p-6">
                        <Badge className="mb-4 bg-accent/20 text-accent-foreground font-semibold">{course.category}</Badge>
                        <h1 className="text-3xl font-bold font-headline text-gray-800 mb-3">{course.title}</h1>
                        <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                    </CardContent>
                </Card>

                 <div>
                    <h2 className="text-2xl font-bold font-headline text-gray-800 mb-6 flex items-center gap-3">
                        <Video className="w-7 h-7 text-primary"/>
                        {course.featuredLessonsTitle}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {featuredLessons.map((lesson, index) => (
                           <Card key={index} className="overflow-hidden shadow-md rounded-xl group cursor-pointer hover:shadow-xl transition-shadow">
                                <div className="relative aspect-video">
                                    <Image 
                                        src={`https://picsum.photos/600/338?random=${20 + index}`}
                                        alt={lesson.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint="person talking presentation"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                        <PlayCircle className="w-12 h-12 text-white/80 transform transition-transform group-hover:scale-110" />
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-gray-800 leading-snug truncate" title={lesson.title}>{lesson.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{lesson.duration}</p>
                                </CardContent>
                           </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold flex items-center gap-2">
                           <BookOpen className="w-6 h-6 text-primary"/>
                           {course.courseContent}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="multiple" defaultValue={course.chapters.map((_, index) => `item-${index}`)} className="w-full">
                           {course.chapters.map((chapter, chapterIndex) => (
                                <AccordionItem value={`item-${chapterIndex}`} key={chapterIndex}>
                                    <AccordionTrigger className="font-semibold text-base hover:no-underline">{chapter.title}</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="space-y-2 pt-2">
                                            {chapter.lessons.map((lesson, lessonIndex) => {
                                                const lessonId = `${chapterIndex}-${lessonIndex}`;
                                                const isWatched = watchedLessons.has(lessonId);
                                                const isSelected = selectedLesson?.chapterIndex === chapterIndex && selectedLesson?.lessonIndex === lessonIndex;
                                                return (
                                                    <li key={lessonIndex}>
                                                        <Button 
                                                            variant="ghost" 
                                                            className={cn(
                                                                "w-full justify-start h-auto p-3 text-left text-sm",
                                                                isSelected && "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                                                            )}
                                                            onClick={() => handleLessonClick(chapterIndex, lessonIndex)}
                                                        >
                                                            {isWatched ? (
                                                                <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0"/>
                                                            ) : (
                                                                <PlayCircle className="w-5 h-5 mr-3 text-primary/80 flex-shrink-0"/>
                                                            )}
                                                            <div className="overflow-hidden flex-1">
                                                                <p className="font-medium truncate" title={lesson.title}>{lesson.title}</p>
                                                                <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                                                            </div>
                                                        </Button>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                           ))}
                        </Accordion>
                    </CardContent>
                </Card>
                 <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">{course.information}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                {icons.level}
                                <span className="font-medium text-gray-700">{course.info.level.label}:</span>
                                <span className="text-muted-foreground">{course.info.level.value}</span>
                            </li>
                             <li className="flex items-center gap-4">
                                {icons.lessons}
                                <span className="font-medium text-gray-700">{course.info.lessons.label}:</span>
                                <span className="text-muted-foreground">{course.info.lessons.value}</span>
                            </li>
                             <li className="flex items-center gap-4">
                                {icons.students}
                                <span className="font-medium text-gray-700">{course.info.students.label}:</span>
                                <span className="text-muted-foreground">{course.info.students.value}</span>
                            </li>
                             <li className="flex items-center gap-4">
                                {icons.rating}
                                <span className="font-medium text-gray-700">{course.info.rating.label}:</span>
                                <span className="text-muted-foreground">{course.info.rating.value}</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
