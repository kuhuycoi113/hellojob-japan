// This is a new file.
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LayoutGrid, List, PlusCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { CandidateCard } from './candidate-card';
import { CandidatesTable } from './candidates-table';
import { cn } from '@/lib/utils';

export function YourCandidates() {
  const { t } = useLanguage();
  const candidates = t.dashboard_employer.candidates;
  const [view, setView] = useState<'gallery' | 'list'>('gallery');

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.dashboard_employer.your_candidates.title}</CardTitle>
        <CardDescription>{t.dashboard_employer.your_candidates.description}</CardDescription>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <div className="flex-1">
                {/* Search input can be added here in the future */}
            </div>
            <div className="ml-auto flex w-full sm:w-auto items-center justify-end gap-2">
                <div className="flex items-center gap-1 rounded-md bg-muted p-1">
                    <Button
                        variant={view === 'gallery' ? 'default' : 'ghost'}
                        size="icon"
                        className={cn("h-7 w-7", view === 'gallery' && "shadow-sm bg-background text-foreground")}
                        onClick={() => setView('gallery')}
                    >
                        <LayoutGrid className="h-4 w-4" />
                    </Button>
                    <Button
                        variant={view === 'list' ? 'default' : 'ghost'}
                        size="icon"
                        className={cn("h-7 w-7", view === 'list' && "shadow-sm bg-background text-foreground")}
                        onClick={() => setView('list')}
                    >
                        <List className="h-4 w-4" />
                    </Button>
                </div>
                <Button size="sm" className="h-8 gap-1 bg-accent text-accent-foreground hover:bg-accent/90">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="whitespace-nowrap">
                    {t.dashboard_employer.your_candidates.add_candidate}
                    </span>
                </Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        {view === 'gallery' ? (
          <div className="space-y-4">
            {candidates.map((candidate, index) => (
                <CandidateCard key={index} candidate={candidate} />
            ))}
          </div>
        ) : (
          <CandidatesTable candidates={candidates} />
        )}
      </CardContent>
    </Card>
  );
}
