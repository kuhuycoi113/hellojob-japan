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
import { allCandidates, type Candidate } from '@/data/candidates';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext, PaginationEllipsis } from '@/components/ui/pagination';


type ViewMode = 'list' | 'gallery';
const ITEMS_PER_PAGE = 10;

export function YourCandidates() {
  const { t } = useLanguage();
  const [view, setView] = useState<ViewMode>('list');
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCandidates(allCandidates);
  }, []);
  
  useEffect(() => {
    const savedView = localStorage.getItem('candidates-view-mode') as ViewMode;
    if (savedView) {
      setView(savedView);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('candidates-view-mode', view);
  }, [view]);

  const totalPages = Math.ceil(candidates.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentCandidates = candidates.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  return (
    <Tabs defaultValue="all">
      <Card>
        <CardHeader>
          <CardTitle>{t.dashboard_employer.your_candidates.title}</CardTitle>
          <CardDescription>{t.dashboard_employer.your_candidates.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
              <TabsList>
                  <TabsTrigger value="all">{t.dashboard_employer.your_candidates.tabs.all} ({candidates.length})</TabsTrigger>
                  <TabsTrigger value="new">{t.dashboard_employer.your_candidates.tabs.new}</TabsTrigger>
                  <TabsTrigger value="review">{t.dashboard_employer.your_candidates.tabs.review}</TabsTrigger>
                  <TabsTrigger value="hired">{t.dashboard_employer.your_candidates.tabs.hired}</TabsTrigger>
                  <TabsTrigger value="archived">{t.dashboard_employer.your_candidates.tabs.archived}</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center justify-end gap-2">
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
            {currentCandidates.length > 0 ? (
              <>
                {view === 'gallery' ? (
                  <div className="space-y-4">
                      {currentCandidates.map((candidate, index) => (
                          <CandidateCard key={index} candidate={candidate} />
                      ))}
                  </div>
                  ) : (
                  <CandidatesTable candidates={currentCandidates} />
                )}
                <Pagination className="mt-6">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }} aria-disabled={currentPage === 1} />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <PaginationItem key={page}>
                            <PaginationLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange(page); }} isActive={currentPage === page}>
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }} aria-disabled={currentPage === totalPages} />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </>
            ) : (
                 <div className="text-center py-16 text-muted-foreground">
                    <p>{t.dashboard_employer.your_candidates.tabs.empty}</p>
                 </div>
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
