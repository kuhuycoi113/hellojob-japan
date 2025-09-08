'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { allCandidates } from '@/data/candidates';
import { CandidateCard } from './candidate-card';
import { Users } from 'lucide-react';

interface SuitableCandidatesProps {
    jobId: string;
}

export function SuitableCandidates({ jobId }: SuitableCandidatesProps) {
  const { t } = useLanguage();

  // For demonstration, we'll just take the first few candidates.
  // In a real app, this would involve a matching algorithm.
  const candidateCount = jobId === 'JOB001' ? 30 : 6;
  const suitableCandidates = allCandidates.slice(0, candidateCount);

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
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suitableCandidates.map(candidate => (
                <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
        </CardContent>
    </Card>
  )
}
