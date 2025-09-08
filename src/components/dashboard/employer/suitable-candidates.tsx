'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { allCandidates } from '@/data/candidates';
import { CandidateCard } from './candidate-card';
import { Users, Lock } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface SuitableCandidatesProps {
    jobId: string;
}

const FREE_DISPLAY_COUNT = 3;
const INITIAL_DISPLAY_COUNT = 8;


export function SuitableCandidates({ jobId }: SuitableCandidatesProps) {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const candidateCount = jobId === 'JOB001' ? 30 : 6;
  const suitableCandidates = allCandidates.slice(0, candidateCount);

  const displayedCandidates = isExpanded ? suitableCandidates : suitableCandidates.slice(0, INITIAL_DISPLAY_COUNT);
  const remainingCount = suitableCandidates.length - displayedCandidates.length;
  
  return (
    <Card className="shadow-lg">
        <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold font-headline">
                <Users className="w-6 h-6 text-primary" />
                {t.jobDetail.suitableCandidates.title}
            </CardTitle>
            <CardDescription>
                {t.jobDetail.suitableCandidates.description}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {displayedCandidates.map((candidate, index) => (
                    <CandidateCard 
                        key={candidate.id} 
                        candidate={candidate} 
                        isLocked={index >= FREE_DISPLAY_COUNT}
                    />
                ))}
            </div>
            {!isExpanded && remainingCount > 0 && (
                 <div className="text-center mt-6">
                    <Button variant="outline" onClick={() => setIsExpanded(true)}>
                       {t.jobDetail.suitableCandidates.loadMore.replace('{count}', remainingCount.toString())}
                    </Button>
                </div>
            )}
        </CardContent>
    </Card>
  )
}
