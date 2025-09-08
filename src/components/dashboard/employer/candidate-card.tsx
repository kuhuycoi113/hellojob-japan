'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import type { Candidate } from '@/data/candidates';
import { Briefcase, Eye, Lock, UserCheck } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CandidateCardProps {
  candidate: Candidate;
  isLocked?: boolean;
}

export function CandidateCard({ candidate, isLocked = false }: CandidateCardProps) {
  const { t, language } = useLanguage();

  const getDisplayName = () => {
    if (language === 'ja') {
      return candidate.name_ja;
    }
    if (language === 'en') {
      return candidate.name_en;
    }
    return candidate.name_vi;
  };

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
      <div className={cn('p-4 flex items-center gap-4', isLocked && 'blur-sm pointer-events-none')}>
        <Avatar className="h-20 w-20 border-2 border-white shadow-sm">
          <AvatarImage src={candidate.avatar} alt={getDisplayName()} />
          <AvatarFallback>{getDisplayName().charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <h4 className="font-bold text-lg text-gray-800">{getDisplayName()}</h4>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            {candidate.specialty[language]}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-2">
             <Button size="xs" variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                {t.common.viewProfile}
            </Button>
             <Button size="xs">
                <UserCheck className="w-4 h-4 mr-2" />
                {t.jobDetail.invite}
            </Button>
          </div>
        </div>
      </div>
      {isLocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
           <Button size="lg">
                <Lock className="w-4 h-4 mr-2" />
                {t.unlockCandidates.buttonText}
            </Button>
        </div>
      )}
    </Card>
  );
}
