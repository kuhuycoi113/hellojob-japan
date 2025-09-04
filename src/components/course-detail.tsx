'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { PlayCircle, GraduationCap, ListVideo, Users, Star, BookOpen, CheckCircle, Video, Lock, Gem, UserPlus, Wallet, CreditCard, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { UnlockDialog2 } from './unlock-dialog-2';


const LOCAL_STORAGE_KEY_PREFIX = 'watched_lessons_';

export function CourseDetail() {
  const { t, language } = useLanguage();
  const courseId = 'vietnamese_cultural_guide';
  const localStorageKey = `${LOCAL_STORAGE_KEY_PREFIX}${courseId}`;

  const [selectedLesson, setSelectedLesson] = useState<{ chapterIndex: number; lessonIndex: number } | null>(null);
  const [watchedLessons, setWatchedLessons] = useState<Set<string>>(new Set());
  const [isUnlockDialogOpen, setIsUnlockDialogOpen] = useState(false);
  const [isUnlockDialog2Open, setIsUnlockDialog2Open] = useState(false);


  useEffect(() => {
    const storedWatchedLessons = localStorage.getItem(localStorageKey);
    if (storedWatchedLessons) {
      setWatchedLessons(new Set(JSON.parse(storedWatchedLessons)));
    }
  }, [localStorageKey]);

  const course = t.courseDetail;
  const totalLessons = course.chapters.reduce((acc, chapter) => acc + chapter.lessons.length, 0);
  const freeLessonsCount = Math.floor(totalLessons / 2);

  let lessonCounter = 0;

  const handleLessonClick = (chapterIndex: number, lessonIndex: number, isLocked: boolean) => {
    if (isLocked) {
      setIsUnlockDialogOpen(true);
      return;
    }
    const lessonId = `${chapterIndex}-${lessonIndex}`;
    setSelectedLesson({ chapterIndex, lessonIndex });
    const newWatchedLessons = new Set(watchedLessons);
    newWatchedLessons.add(lessonId);
    setWatchedLessons(newWatchedLessons);
    localStorage.setItem(localStorageKey, JSON.stringify(Array.from(newWatchedLessons)));
  };
  
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
    <>
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
                            {course.chapters.map((chapter, chapterIndex) => {
                                const chapterLessons = chapter.lessons.map((lesson, lessonIndex) => {
                                    const isLocked = lessonCounter >= freeLessonsCount;
                                    lessonCounter++;
                                    const lessonId = `${chapterIndex}-${lessonIndex}`;
                                    const isWatched = watchedLessons.has(lessonId);
                                    const isSelected = selectedLesson?.chapterIndex === chapterIndex && selectedLesson?.lessonIndex === lessonIndex;

                                    return (
                                        <li key={lessonIndex}>
                                            <Button 
                                                variant="ghost" 
                                                className={cn(
                                                    "w-full justify-start h-auto p-3 text-left text-sm",
                                                    isSelected && "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary",
                                                    isLocked && "text-muted-foreground hover:bg-gray-100 cursor-pointer"
                                                )}
                                                onClick={() => handleLessonClick(chapterIndex, lessonIndex, isLocked)}
                                            >
                                                {isLocked ? (
                                                    <Lock className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0"/>
                                                ) : isWatched ? (
                                                    <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0"/>
                                                ) : (
                                                    <PlayCircle className="w-5 h-5 mr-3 text-primary/80 flex-shrink-0"/>
                                                )}
                                                <div className="overflow-hidden flex-1">
                                                    <p className={cn("font-medium truncate", isLocked && "text-gray-500")} title={lesson.title}>{lesson.title}</p>
                                                    <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                                                </div>
                                            </Button>
                                        </li>
                                    )
                                });
                                return (
                                    <AccordionItem value={`item-${chapterIndex}`} key={chapterIndex}>
                                        <AccordionTrigger className="font-semibold text-base hover:no-underline">{chapter.title}</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-2 pt-2">
                                                {chapterLessons}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            })}
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
      <Dialog open={isUnlockDialogOpen} onOpenChange={setIsUnlockDialogOpen}>
        <DialogContent>
            <DialogHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <Lock className="w-8 h-8 text-primary"/>
                </div>
                <DialogTitle className="text-2xl font-bold font-headline">{t.courseDetail.unlock.title}</DialogTitle>
                <DialogDescription>
                    {t.courseDetail.unlock.description}
                </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
                <Button size="lg" className="w-full h-auto flex flex-col items-center py-3" onClick={() => { setIsUnlockDialogOpen(false); setIsUnlockDialog2Open(true); }}>
                    <div className="flex items-center gap-2">
                       <CreditCard className="mr-2 h-5 w-5"/>
                       <span className="text-base font-semibold">{t.courseDetail.unlock.option1}</span>
                    </div>
                    <span className="text-xs opacity-80 mt-1">{t.courseDetail.unlock.price}</span>
                </Button>
                 <Button size="lg" variant="link" className="w-full text-muted-foreground">
                    <Gift className="mr-2 h-4 w-4"/>
                    {t.courseDetail.unlock.option4}
                </Button>
            </div>
            <hr className="my-4"/>
            <div className="space-y-4">
                <Button size="lg" variant="secondary" className="w-full">
                    <Gem className="mr-2 h-5 w-5"/>
                    {t.courseDetail.unlock.option2}
                </Button>
                 <Button size="lg" variant="outline" className="w-full">
                    <UserPlus className="mr-2 h-5 w-5"/>
                    {t.courseDetail.unlock.option3}
                </Button>
            </div>
        </DialogContent>
      </Dialog>

      <UnlockDialog2 open={isUnlockDialog2Open} onOpenChange={setIsUnlockDialog2Open} />
    </>
  );
}
