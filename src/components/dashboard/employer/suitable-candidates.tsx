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

export function SuitableCandidates({ jobId }: SuitableCandidatesProps) {
  const { t } = useLanguage();

  const candidateCount = jobId === 'JOB001' ? 30 : 6;
  const suitableCandidates = allCandidates.slice(0, candidateCount);

  const freeCandidates = suitableCandidates.slice(0, FREE_DISPLAY_COUNT);
  const lockedCandidates = suitableCandidates.slice(FREE_DISPLAY_COUNT);
  
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
                {freeCandidates.map(candidate => (
                    <CandidateCard key={candidate.id} candidate={candidate} />
                ))}

                {lockedCandidates.map(candidate => (
                    <CandidateCard key={candidate.id} candidate={candidate} isLocked={true} />
                ))}
            </div>
        </CardContent>
    </Card>
  )
}
