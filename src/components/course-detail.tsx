
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { PlayCircle, GraduationCap, ListVideo, Users, Star, BookOpen, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const LOCAL_STORAGE_KEY = 'watched_lessons';

export function CourseDetail() {
  const { t } = useLanguage();
  const [selectedLesson, setSelectedLesson] = useState<number>(0);
  const [watchedLessons, setWatchedLessons] = useState<Set<number>>(new Set());

  // Load watched lessons from localStorage on mount
  useEffect(() => {
    const storedWatchedLessons = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedWatchedLessons) {
      setWatchedLessons(new Set(JSON.parse(storedWatchedLessons)));
    }
  }, []);

  // Handle lesson selection
  const handleLessonClick = (index: number) => {
    setSelectedLesson(index);
    const newWatchedLessons = new Set(watchedLessons);
    newWatchedLessons.add(index);
    setWatchedLessons(newWatchedLessons);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Array.from(newWatchedLessons)));
  };

  const course = {
    category: t.courseDetail.category,
    title: t.courseDetail.title,
    description: t.courseDetail.description,
  };
  
  const lessons = t.courseDetail.lessons;
  const info = t.courseDetail.info;

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
            <div className="lg:col-span-2 space-y-6">
                <Card className="overflow-hidden shadow-lg">
                    <div className="aspect-video bg-black flex items-center justify-center text-white">
                        <div className="text-center">
                            <PlayCircle className="mx-auto h-16 w-16 text-gray-400" />
                            <p className="mt-2 text-lg">{t.courseDetail.video.unavailable}</p>
                            <p className="text-sm text-gray-400">{t.courseDetail.video.notWorking}</p>
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold flex items-center gap-2">
                           <BookOpen className="w-6 h-6 text-primary"/>
                           {t.courseDetail.courseContent}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                           {lessons.map((lesson, index) => {
                                const isWatched = watchedLessons.has(index);
                                const isSelected = selectedLesson === index;
                                return (
                                <li key={index}>
                                    <Button 
                                        variant="ghost" 
                                        className={cn(
                                            "w-full justify-start h-auto p-4 text-left",
                                            isSelected && "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                                        )}
                                        onClick={() => handleLessonClick(index)}
                                    >
                                        {isWatched ? (
                                            <CheckCircle className="w-6 h-6 mr-4 text-green-500 flex-shrink-0"/>
                                        ) : (
                                            <PlayCircle className="w-6 h-6 mr-4 text-primary/80 flex-shrink-0"/>
                                        )}
                                        
                                        <div className="overflow-hidden">
                                            <p className="font-semibold truncate">{lesson.title}</p>
                                            <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                                        </div>
                                    </Button>
                                </li>
                           )})}
                        </ul>
                    </CardContent>
                </Card>
                 <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">{t.courseDetail.information}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                {icons.level}
                                <span className="font-medium text-gray-700">{info.level.label}:</span>
                                <span className="text-muted-foreground">{info.level.value}</span>
                            </li>
                             <li className="flex items-center gap-4">
                                {icons.lessons}
                                <span className="font-medium text-gray-700">{info.lessons.label}:</span>
                                <span className="text-muted-foreground">{info.lessons.value}</span>
                            </li>
                             <li className="flex items-center gap-4">
                                {icons.students}
                                <span className="font-medium text-gray-700">{info.students.label}:</span>
                                <span className="text-muted-foreground">{info.students.value}</span>
                            </li>
                             <li className="flex items-center gap-4">
                                {icons.rating}
                                <span className="font-medium text-gray-700">{info.rating.label}:</span>
                                <span className="text-muted-foreground">{info.rating.value}</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
