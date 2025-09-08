
'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  List,
  LayoutGrid,
  PlusCircle,
  MoreHorizontal,
  Users,
  Briefcase,
} from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { useIsMobile } from '@/hooks/use-mobile';
import { mockJobs, type MockJob } from '@/data/mock-jobs';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import dynamic from 'next/dynamic';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';
import { Opportunity, opportunities as initialOpportunities } from '@/data/opportunities';


const PartnershipOpportunities = dynamic(
  () => import('./partnership-opportunities').then(mod => mod.PartnershipOpportunities),
  { 
    ssr: false,
    loading: () => (
      <div className="mb-8">
        <Skeleton className="h-8 w-1/3 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full hidden md:block" />
          <Skeleton className="h-64 w-full hidden lg:block" />
        </div>
      </div>
    )
  }
);


const statusStyles: Record<string, string> = {
  Active: 'bg-green-100 text-green-800',
  'Awaiting Approval': 'bg-yellow-100 text-yellow-800',
  Closed: 'bg-red-100 text-red-800',
  'Searching': 'bg-blue-100 text-blue-800',
  'Completed': 'bg-gray-100 text-gray-800'
};

const JOBS_PER_PAGE = 9;

export function JobsPage() {
  const { t, language } = useLanguage();
  const [jobs, setJobs] = useState<MockJob[]>([]);
  const isMobile = useIsMobile();
  const [viewMode, setViewMode] = useState<'list' | 'grid' | null>(null);
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [userRole, setUserRole] = useState('union'); // 'union', 'support_org', or 'company'
  const jobsListRef = useRef<HTMLDivElement>(null);
  const [highlightedJobId, setHighlightedJobId] = useState<string | null>(null);

  useEffect(() => {
    setViewMode(isMobile ? 'list' : 'grid');
  }, [isMobile]);

  const loadJobs = () => {
    const storedJobsRaw = localStorage.getItem('postedJobs');
    const storedJobs = storedJobsRaw ? JSON.parse(storedJobsRaw) : [];
    const allJobs = [...storedJobs, ...mockJobs].filter(
      (job, index, self) => index === self.findIndex(j => j.id === job.id)
    );
    setJobs(allJobs);
  };
  
  useEffect(() => {
    loadJobs();

    const handleJobsUpdated = (event: Event) => {
        loadJobs();
        const customEvent = event as CustomEvent;
        if (customEvent.detail?.jobId) {
            setHighlightedJobId(customEvent.detail.jobId);
            setTimeout(() => {
                jobsListRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            setTimeout(() => {
                setHighlightedJobId(null);
            }, 3000); // Highlight for 3 seconds
        }
    };

    window.addEventListener('jobsUpdated', handleJobsUpdated);

    return () => {
      window.removeEventListener('jobsUpdated', handleJobsUpdated);
    };
  }, []);

  const filteredJobs = jobs.filter((job) => {
    if (activeTab === 'all') return true;
    const jobStatus = (job.status || '').toLowerCase().replace(/\s/g, '-');
    return jobStatus === activeTab;
  });

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const TABS = [
    { value: 'all', label: t.jobsPage.tabs.all },
    { value: 'active', label: t.jobsPage.tabs.active },
    { value: 'searching', label: t.jobsPage.tabs.searching },
    { value: 'awaiting-approval', label: t.jobsPage.tabs.awaiting },
    { value: 'completed', label: t.jobsPage.tabs.completed },
    { value: 'closed', label: t.jobsPage.tabs.closed },
  ];
  
  const getTabCount = (tabValue: string) => {
    if (tabValue === 'all') return jobs.length;
    return jobs.filter(j => (j.status || '').toLowerCase().replace(/\s/g, '-') === tabValue).length;
  }

  const JobsGridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedJobs.map((job) => {
            const isHighlighted = job.id === highlightedJobId;
            return (
            <Link href={`/dashboard/jobs/${job.id}`} key={job.id} className="group">
                <Card className={cn("flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full",
                    isHighlighted && "border-2 border-accent shadow-lg animate-pulse-once"
                )}>
                    <div className="relative aspect-video">
                    <Image
                        src={job.image}
                        alt={job.title?.[language] || ''}
                        fill
                        className="object-cover"
                        data-ai-hint={job.imageHint}
                    />
                    </div>
                    <CardHeader>
                        <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors">{job.title?.[language]}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.company?.[language]}</span>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <Badge className={cn(statusStyles[job.status], 'bg-opacity-80')}>{job.status}</Badge>
                        <div className="flex items-center gap-4 mt-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-muted-foreground" />
                                <span>{job.applicants} {t.jobsPage.applicants}</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                        <div className="w-full flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">{t.jobsPage.postedOn} {job.postedDate}</span>
                            <Button variant="outline" size="sm" asChild>
                                <div className="group-hover:text-primary transition-colors">{t.jobsPage.viewDetails}</div>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </Link>
        )})}
    </div>
  );

  const JobsListView = () => (
     <Card>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>{t.jobsPage.table.jobTitle}</TableHead>
                    <TableHead className="hidden md:table-cell">{t.jobsPage.table.applicants}</TableHead>
                    <TableHead className="hidden sm:table-cell">{t.jobsPage.table.status}</TableHead>
                    <TableHead className="hidden lg:table-cell">{t.jobsPage.table.postedDate}</TableHead>
                    <TableHead><span className="sr-only">{t.jobsPage.table.actions}</span></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {paginatedJobs.map((job) => {
                  const isHighlighted = job.id === highlightedJobId;
                  return (
                    <TableRow key={job.id} 
                      className={cn("hover:bg-muted/50 cursor-pointer", isHighlighted && "bg-accent/10 animate-pulse-once")} 
                      onClick={() => window.location.href = `/dashboard/jobs/${job.id}`}>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <Avatar className="hidden h-10 w-10 sm:flex rounded-md">
                                    <AvatarImage src={job.image} alt={job.title?.[language]} className="object-cover" />
                                    <AvatarFallback className="rounded-md">{job.company?.[language]?.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium font-headline">{job.title?.[language]}</div>
                                    <div className="text-sm text-muted-foreground">{job.company?.[language]}</div>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{job.applicants}</TableCell>
                        <TableCell className="hidden sm:table-cell">
                            <Badge className={cn(statusStyles[job.status], 'bg-opacity-80')}>{job.status}</Badge>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">{job.postedDate}</TableCell>
                        <TableCell>
                             <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">{t.jobsPage.table.toggleMenu}</span>
                                </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                <DropdownMenuItem>{t.jobsPage.table.viewDetails}</DropdownMenuItem>
                                <DropdownMenuItem>{t.jobsPage.table.edit}</DropdownMenuItem>
                                <DropdownMenuItem>{t.jobsPage.table.archive}</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                )})}
            </TableBody>
        </Table>
     </Card>
  );

  return (
    <div className="space-y-6">
      { (userRole === 'union' || userRole === 'support_org') && (
        <PartnershipOpportunities />
      )}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" ref={jobsListRef}>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-headline">
            {t.jobsPage.title}
          </h1>
          <p className="text-muted-foreground">
            {t.jobsPage.subtitle}
          </p>
        </div>
        <Button asChild size="lg" variant="secondary">
          <Link href="/post-job-ai">
            <PlusCircle className="mr-2 h-5 w-5" />
            {t.jobsPage.postNewJob}
          </Link>
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={(value) => { setActiveTab(value); setCurrentPage(1); }}>
        <div className="flex items-center justify-between">
          <TabsList className="flex-wrap h-auto">
            {TABS.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="flex-shrink-0">
                {tab.label} ({getTabCount(tab.value)})
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'list' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('list')}
              disabled={!viewMode}
            >
              <List className="h-5 w-5" />
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('grid')}
              disabled={!viewMode}
            >
              <LayoutGrid className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="mt-4">
            {viewMode === 'list' ? <JobsListView /> : viewMode === 'grid' ? <JobsGridView /> : 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, i) => <Skeleton key={i} className="h-80 w-full" />)}
            </div>
            }
        </div>
      </Tabs>
      
      {totalPages > 1 && (
        <Pagination className="mt-8">
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious 
                    href="#"
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                    aria-disabled={currentPage <= 1}
                    className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
                >
                  {t.pagination.previous}
                </PaginationPrevious>
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <PaginationItem key={page}>
                        <PaginationLink 
                            href="#"
                            onClick={(e) => { e.preventDefault(); handlePageChange(page); }}
                            isActive={currentPage === page}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                <PaginationNext 
                    href="#"
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                    aria-disabled={currentPage >= totalPages}
                    className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
                >
                   {t.pagination.next}
                </PaginationNext>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}

    