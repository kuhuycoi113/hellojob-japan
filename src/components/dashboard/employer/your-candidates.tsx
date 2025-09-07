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
type CandidateStatus = 'all' | 'new' | 'review' | 'hired' | 'archived';

const ITEMS_PER_PAGE = 6;

const PaginatedCandidateView = ({ candidates, view, t }: { candidates: Candidate[]; view: ViewMode; t: any }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(candidates.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [candidates]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentCandidates = candidates.slice(indexOfFirstItem, indexOfLastItem);
  
  if (candidates.length === 0) {
    return (
        <div className="text-center py-16 text-muted-foreground">
            <p>{t.dashboard_employer.your_candidates.tabs.empty}</p>
        </div>
    )
  }

  return (
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
      {totalPages > 1 && (
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }} aria-disabled={currentPage === 1}>
                {t.pagination.previous}
              </PaginationPrevious>
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <PaginationItem key={page}>
                <PaginationLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange(page); }} isActive={currentPage === page}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }} aria-disabled={currentPage === totalPages}>
                {t.pagination.next}
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  )
};


export function YourCandidates() {
  const { t } = useLanguage();
  const [view, setView] = useState<ViewMode>('list');
  const [activeTab, setActiveTab] = useState<CandidateStatus>('all');

  const [all, setAll] = useState<Candidate[]>([]);
  const [newCandidates, setNewCandidates] = useState<Candidate[]>([]);
  const [reviewingCandidates, setReviewingCandidates] = useState<Candidate[]>([]);
  const [hiredCandidates, setHiredCandidates] = useState<Candidate[]>([]);
  const [archivedCandidates, setArchivedCandidates] = useState<Candidate[]>([]);


  useEffect(() => {
    // Mock data splitting for different tabs
    setAll(allCandidates);
    setNewCandidates(allCandidates.slice(0, 15));
    setReviewingCandidates(allCandidates.slice(15, 25));
    setHiredCandidates(allCandidates.slice(25, 30));
    setArchivedCandidates([]);
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

  const candidatesMap: Record<CandidateStatus, Candidate[]> = {
    all,
    new: newCandidates,
    review: reviewingCandidates,
    hired: hiredCandidates,
    archived: archivedCandidates
  };
  
  const currentCandidates = candidatesMap[activeTab];

  return (
    <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as CandidateStatus)}>
      <Card>
        <CardHeader>
          <CardTitle>{t.dashboard_employer.your_candidates.title}</CardTitle>
          <CardDescription>{t.dashboard_employer.your_candidates.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <TabsList className="flex-wrap sm:flex-nowrap h-auto sm:h-10">
                  <TabsTrigger value="all">{t.dashboard_employer.your_candidates.tabs.all} ({all.length})</TabsTrigger>
                  <TabsTrigger value="new">{t.dashboard_employer.your_candidates.tabs.new} ({newCandidates.length})</TabsTrigger>
                  <TabsTrigger value="review">{t.dashboard_employer.your_candidates.tabs.review} ({reviewingCandidates.length})</TabsTrigger>
                  <TabsTrigger value="hired">{t.dashboard_employer.your_candidates.tabs.hired} ({hiredCandidates.length})</TabsTrigger>
                  <TabsTrigger value="archived">{t.dashboard_employer.your_candidates.tabs.archived} ({archivedCandidates.length})</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center justify-end gap-2 w-full sm:w-auto">
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

          <div className="mt-4">
            <PaginatedCandidateView candidates={currentCandidates} view={view} t={t} />
          </div>
        </CardContent>
      </Card>
    </Tabs>
  );
}
