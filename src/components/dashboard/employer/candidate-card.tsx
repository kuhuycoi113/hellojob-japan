// This is a new file.
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import type { Candidate } from '@/data/candidates';
import { Briefcase, Eye, Mail, Phone, UserCheck } from 'lucide-react';
import Link from 'next/link';

interface CandidateCardProps {
  candidate: Candidate;
}

export function CandidateCard({ candidate }: CandidateCardProps) {
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
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4 flex items-center gap-4">
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
          <div className="flex items-center gap-2 pt-2">
             <Button size="sm" variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                {t.common.viewProfile}
            </Button>
             <Button size="sm">
                <UserCheck className="w-4 h-4 mr-2" />
                {t.jobDetail.invite}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
