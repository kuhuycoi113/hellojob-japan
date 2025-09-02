
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LayoutGrid, List, PlusCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { CandidateCard } from './candidate-card';
import { CandidatesTable } from './candidates-table';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type ViewMode = 'list' | 'gallery';

export function YourCandidates() {
  const { t } = useLanguage();
  const candidates = t.dashboard_employer.candidates;
  const [view, setView] = useState<ViewMode>('list');
  
  useEffect(() => {
    const savedView = localStorage.getItem('candidates-view-mode') as ViewMode;
    if (savedView) {
      setView(savedView);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('candidates-view-mode', view);
  }, [view]);


  return (
    <Tabs defaultValue="all">
      <Card>
        <CardHeader>
          <CardTitle>{t.dashboard_employer.your_candidates.title}</CardTitle>
          <CardDescription>{t.dashboard_employer.your_candidates.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-center gap-4">
              <TabsList className="w-full sm:w-auto overflow-x-auto justify-start">
                  <TabsTrigger value="all">{t.dashboard_employer.your_candidates.tabs.all}</TabsTrigger>
                  <TabsTrigger value="new">{t.dashboard_employer.your_candidates.tabs.new}</TabsTrigger>
                  <TabsTrigger value="review">{t.dashboard_employer.your_candidates.tabs.review}</TabsTrigger>
                  <TabsTrigger value="hired">{t.dashboard_employer.your_candidates.tabs.hired}</TabsTrigger>
                  <TabsTrigger value="archived">{t.dashboard_employer.your_candidates.tabs.archived}</TabsTrigger>
              </TabsList>
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

          <TabsContent value="all" className="mt-4">
            {view === 'gallery' ? (
              <div className="space-y-4">
                {candidates.map((candidate, index) => (
                    <CandidateCard key={index} candidate={candidate} />
                ))}
              </div>
            ) : (
              <CandidatesTable candidates={candidates} />
            )}
          </TabsContent>
          <TabsContent value="new" className="mt-4 text-center text-muted-foreground py-12">
            <p>{t.dashboard_employer.your_candidates.tabs.new} ({t.dashboard_employer.your_candidates.tabs.empty})</p>
          </TabsContent>
           <TabsContent value="review" className="mt-4 text-center text-muted-foreground py-12">
            <p>{t.dashboard_employer.your_candidates.tabs.review} ({t.dashboard_employer.your_candidates.tabs.empty})</p>
          </TabsContent>
           <TabsContent value="hired" className="mt-4 text-center text-muted-foreground py-12">
            <p>{t.dashboard_employer.your_candidates.tabs.hired} ({t.dashboard_employer.your_candidates.tabs.empty})</p>
          </TabsContent>
           <TabsContent value="archived" className="mt-4 text-center text-muted-foreground py-12">
            <p>{t.dashboard_employer.your_candidates.tabs.archived} ({t.dashboard_employer.your_candidates.tabs.empty})</p>
          </TabsContent>

        </CardContent>
      </Card>
    </Tabs>
  );
}
