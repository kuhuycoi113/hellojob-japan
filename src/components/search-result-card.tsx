'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, MessageCircle, Video, FileText } from 'lucide-react';
import type { Candidate } from '@/data/candidates';
import { useLanguage } from '@/contexts/language-context';
import { Badge } from './ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function SearchResultCard({ candidate }: { candidate: Candidate }) {
  const { t, language } = useLanguage();

  const skills = {
    vi: ["Kinh nghiệm 3 năm", "Tiếng Nhật N3", "Chăm chỉ", "Sức khoẻ tốt"],
    en: ["3 Yrs Exp", "Japanese N3", "Hardworking", "Good Health"],
    ja: ["経験3年", "日本語N3", "勤勉", "健康"],
  }
  
  const getDisplayName = () => {
    if (language === 'ja') {
      return (
        <>
          <span>{candidate.name_ja}</span>
          <span className="text-sm font-normal text-muted-foreground ml-2">({candidate.name_vi})</span>
        </>
      )
    }
    if (language === 'en') {
      return candidate.name_en;
    }
    return candidate.name_vi;
  }

  return (
    <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-6">
                <div className="flex flex-col items-center">
                    <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                        <AvatarImage src={candidate.avatar} alt={candidate.name_vi} />
                        <AvatarFallback>{candidate.name_vi.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex gap-2 mt-4">
                       <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" className="h-9 w-9"><FileText className="w-4 h-4"/></Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t.common.viewProfile}</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                             <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" className="h-9 w-9"><Video className="w-4 h-4"/></Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t.common.watchIntroVideo}</p>
                            </TooltipContent>
                        </Tooltip>
                       </TooltipProvider>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 flex items-baseline">
                                {getDisplayName()}
                            </h3>
                            <p className="text-sm text-muted-foreground">{candidate.details[language]}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-500 h-8 w-8">
                                <Heart />
                            </Button>
                        </div>
                    </div>
                    <div className="mt-3">
                         <p className="text-sm font-semibold text-primary">{candidate.visa_type[language]} - {candidate.specialty[language]}</p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {skills[language].map(skill => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                    </div>

                     <div className="mt-4 border-t pt-4 flex items-center justify-between">
                         <div>
                            <p className="text-sm font-semibold text-gray-700">{t.common.desiredSalary}</p>
                            <p className="text-sm text-muted-foreground">{candidate.desired_salary[language]}</p>
                         </div>
                        <div className="flex gap-2">
                            <Button variant="outline">{t.common.sendMessage}</Button>
                            <Button>{t.common.viewProfile}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
