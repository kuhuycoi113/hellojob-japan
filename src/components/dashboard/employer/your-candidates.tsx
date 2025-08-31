// This is a new file.
'use client';

import { useLanguage } from '@/contexts/language-context';
import { CandidateCard } from './candidate-card';

export function YourCandidates() {
  const { t } = useLanguage();
  const candidates = t.dashboard_employer.candidates;

  return (
    <div className="space-y-4">
        {candidates.map((candidate, index) => (
            <CandidateCard key={index} candidate={candidate} />
        ))}
    </div>
  );
}
