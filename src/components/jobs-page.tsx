'use client';

import { useState, useEffect } from 'react';
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

const statusStyles: Record<string, string> = {
  Active: 'bg-green-100 text-green-800',
  'Awaiting Approval': 'bg-yellow-100 text-yellow-800',
  Closed: 'bg-red-100 text-red-800',
};

const JOBS_PER_PAGE = 9;

export function JobsPage() {
  const { t, language } = useLanguage();
  const [jobs, setJobs] = useState<MockJob[]>([]);
  const isMobile = useIsMobile();
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setJobs(mockJobs);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    if (activeTab === 'all') return true;
    return job.status.toLowerCase().replace(/\s/g, '-') === activeTab;
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
    { value: 'awaiting-approval', label: t.jobsPage.tabs.awaiting },
    { value: 'closed', label: t.jobsPage.tabs.closed },
  ];
  
  const getTabCount = (tabValue: string) => {
    if (tabValue === 'all') return jobs.length;
    return jobs.filter(j => j.status.toLowerCase().replace(/\s/g, '-') === tabValue).length;
  }

  const JobsGridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedJobs.map((job) => (
            <Link href={`/dashboard/jobs/${job.id}`} key={job.id} className="group">
                <Card className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full">
                    <div className="relative aspect-video">
                    <Image
                        src={job.image}
                        alt={job.title[language]}
                        fill
                        className="object-cover"
                        data-ai-hint={job.imageHint}
                    />
                    </div>
                    <CardHeader>
                        <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors">{job.title[language]}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.company[language]}</span>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <Badge className={statusStyles[job.status]}>{job.status}</Badge>
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
        ))}
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
                {paginatedJobs.map((job) => (
                    <TableRow key={job.id} className="hover:bg-muted/50 cursor-pointer" onClick={() => window.location.href = `/dashboard/jobs/${job.id}`}>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <Avatar className="hidden h-10 w-10 sm:flex rounded-md">
                                    <AvatarImage src={job.image} alt={job.title[language]} className="object-cover" />
                                    <AvatarFallback className="rounded-md">{job.company[language].charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium font-headline">{job.title[language]}</div>
                                    <div className="text-sm text-muted-foreground">{job.company[language]}</div>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{job.applicants}</TableCell>
                        <TableCell className="hidden sm:table-cell">
                            <Badge className={statusStyles[job.status]}>{job.status}</Badge>
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
                ))}
            </TableBody>
        </Table>
     </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-headline">
            {t.jobsPage.title}
          </h1>
          <p className="text-muted-foreground">
            {t.jobsPage.subtitle}
          </p>
        </div>
        <Button asChild size="lg">
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
            >
              <List className="h-5 w-5" />
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="mt-4">
            {viewMode === 'list' ? <JobsListView /> : <JobsGridView />}
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
