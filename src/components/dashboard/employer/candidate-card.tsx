'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import type { Candidate } from '@/data/candidates';
import { useLanguage } from '@/contexts/language-context';

const LineIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.0001 0H3.00006C1.34319 0 0 1.34314 0 3V21C0 22.6569 1.34319 24 3.00006 24H21.0001C22.6569 24 24.0001 22.6569 24.0001 21V3C24.0001 1.34314 22.6569 0 21.0001 0Z" fill="#06C755"/>
        <path d="M10.3341 17.3333H8.00078V10.8333H10.3341V17.3333Z" fill="white"/>
        <path d="M12.8334 10.8333C12.0417 10.8333 11.5 11.2917 11.5 12.0833V17.3333H9.16669V7.5H11.5V8.5C11.9167 7.83334 12.6667 7.5 13.5 7.5C15.5 7.5 16 9 16 10.5833V17.3333H13.6667V11.5C13.6667 11.0833 13.5 10.8333 12.8334 10.8333Z" fill="white"/>
        <path d="M8.58341 7.16667C7.66675 7.16667 7.00008 7.83334 7.00008 8.75C7.00008 9.66667 7.66675 10.3333 8.58341 10.3333C9.50008 10.3333 10.1667 9.66667 10.1667 8.75C10.1667 7.83334 9.50008 7.16667 8.58341 7.16667Z" fill="white"/>
        <path d="M17.0001 13.5833C17.0001 12.6667 17.6668 12 18.5834 12C19.5001 12 20.1668 12.6667 20.1668 13.5833C20.1668 14.5 19.5001 15.1667 18.5834 15.1667V17.3333H16.1668V16C16.1668 15 17.0001 14.5 17.0001 13.5833Z" fill="white"/>
    </svg>
)

const VietnamFlagIcon = () => (
  <svg width="16" height="12" viewBox="0 0 900 600" className="inline-block">
    <rect width="900" height="600" fill="#da251d" />
    <path
      d="M450 115.6l81.3 249.4h262.2l-212.1 154.1 81.3 249.4L450 614.4l-212.1 154.1 81.3-249.4-212.1-154.1h262.2z"
      fill="#ff0"
    />
  </svg>
);


interface CandidateCardProps {
    candidate: Candidate;
}

export function CandidateCard({ candidate }: CandidateCardProps) {
  const { language } = useLanguage();

  return (
    <Card className="p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center flex-shrink-0">
          <Avatar className="h-24 w-24 border">
            <AvatarImage src={candidate.avatar} alt={candidate.name_vi} />
            <AvatarFallback>{candidate.name_vi.charAt(0)}</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm" className="mt-2 w-full">
            <LineIcon />
            <span className="ml-2">Liên hệ</span>
          </Button>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                <span>{candidate.name_ja}</span>
                <span className="text-primary mx-1">•</span>
                <span>{candidate.name_vi}</span>
                <span className="text-primary mx-1">•</span>
                <span className="text-sm font-normal text-muted-foreground ml-1">
                  <VietnamFlagIcon /> {candidate.id}
                </span>
              </h3>
              <p className="text-sm text-muted-foreground">{candidate.details[language]}</p>
            </div>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-500">
              <Heart />
            </Button>
          </div>

          <div className="mt-2 space-y-1 text-sm">
            <p>
              <span className="font-semibold text-accent">{candidate.visa_type[language]}</span>
              <span className="mx-1">•</span>
              <span className="font-bold">{candidate.specialty[language]}</span>
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-gray-700">Mức lương mong muốn:</span>
              <span> {candidate.desired_salary[language]}</span>
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {candidate.jobs.images.map((src, i) => (
                    <Image key={i} src={src} width={24} height={24} alt={`job-${i}`} className="rounded-full border-2 border-white"/>
                ))}
              </div>
              <span className="text-primary font-semibold underline">{candidate.jobs.count} công việc phù hợp</span>
            </div>
            <p className="text-xs text-muted-foreground">Ngày tạo: {candidate.created_date}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
