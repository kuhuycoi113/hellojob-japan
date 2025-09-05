// This is a new file.
'use client';

import { Hero } from '@/components/hero';
import { CandidateFilterSidebar } from './candidate-filter-sidebar';
import { useLanguage } from '@/contexts/language-context';
import { allCandidates } from '@/data/candidates';
import { SearchResultCard } from './search-result-card';
import { Button } from './ui/button';

export function CandidateSearchPage() {
  const { t } = useLanguage();
  const candidates = allCandidates.slice(0, 10); // Show first 10 for example

  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold font-headline">
              {t.candidateSearch.title} ({allCandidates.length} {t.candidateSearch.candidates})
            </h2>
             {/* TODO: Add sorting options */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-1">
            <CandidateFilterSidebar />
          </div>
          <div className="lg:col-span-3 space-y-6">
            {candidates.map((candidate, index) => (
              <SearchResultCard key={index} candidate={candidate} />
            ))}
             <div className="text-center pt-6">
                <Button variant="outline">{t.candidateSearch.loadMore}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
