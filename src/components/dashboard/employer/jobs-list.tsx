'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { MoreHorizontal, PlusCircle, List, LayoutGrid } from 'lucide-react';
import { useState, useEffect } from 'react';
import { JobsGallery } from './jobs-gallery';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { Job } from '@/locales/translations';
import Link from 'next/link';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination';


interface JobsListProps {
  jobs: Job[];
}

type ViewMode = 'list' | 'gallery';
const ITEMS_PER_PAGE = 5;

const JobsView = ({ jobs, view, t }: { jobs: Job[]; view: ViewMode; t: any }) => {
  const getStatusVariant = (status: string): "secondary" | "outline" | "default" => {
    switch (status) {
      case 'Searching':
        return 'secondary';
      case 'Forwarding':
        return 'default';
      default:
        return 'outline';
    }
  };

  if (jobs.length === 0) {
    return (
        <div className="text-center py-16 text-muted-foreground">
            {t.dashboard_employer.your_candidates.tabs.empty}
        </div>
    )
  }

  if (view === 'list') {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t.dashboard_employer.activeJobs.table.jobTitle}</TableHead>
            <TableHead className="hidden sm:table-cell">{t.dashboard_employer.activeJobs.table.status}</TableHead>
            <TableHead className="hidden md:table-cell">
              {t.dashboard_employer.activeJobs.table.partners}
            </TableHead>
            <TableHead className="hidden md:table-cell">
              {t.dashboard_employer.activeJobs.table.applications}
            </TableHead>
            <TableHead className="hidden lg:table-cell">
              {t.dashboard_employer.jobs_list.table.date_posted}
            </TableHead>
            <TableHead>
              <span className="sr-only">{t.dashboard_employer.activeJobs.table.actions}</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job, index) => (
            <TableRow key={job.id}>
              <TableCell className="font-medium">
                <Link href={`/dashboard/jobs/${job.id}`} className="hover:underline">
                  <div className="flex items-center gap-3">
                    <Image
                      src={job.image || `https://picsum.photos/400/225?random=job${index}`}
                      alt={job.title}
                      width={64}
                      height={36}
                      className="object-cover rounded-md hidden sm:block"
                      data-ai-hint="workplace factory"
                    />
                    <div>
                      <div className="font-medium">{job.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {job.location}
                      </div>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge variant={getStatusVariant(job.status)}>
                  {job.status === 'Searching' ? t.dashboard_employer.job_status.searching : t.dashboard_employer.job_status.forwarding}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">{job.partners}</TableCell>
              <TableCell className="hidden md:table-cell">{job.applications}</TableCell>
              <TableCell className="hidden lg:table-cell">
                {job.date_posted}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">{t.dashboard_employer.jobs_list.table.toggle_menu}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>{t.dashboard_employer.activeJobs.table.actions}</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/jobs/${job.id}`}>{t.dashboard_employer.jobs_list.table.actions_items.details}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>{t.dashboard_employer.jobs_list.table.actions_items.manage}</DropdownMenuItem>
                    <DropdownMenuItem>{t.dashboard_employer.jobs_list.table.actions_items.view_candidates}</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">{t.dashboard_employer.jobs_list.table.actions_items.archive}</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  return <JobsGallery jobs={jobs} />;
};

const PaginatedJobsView = ({ jobs, view, t }: { jobs: Job[]; view: ViewMode; t: any }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <JobsView jobs={currentJobs} view={view} t={t} />
      {totalPages > 1 && (
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
      )}
    </>
  );
};


export function JobsList({ jobs }: JobsListProps) {
  const { t } = useLanguage();
  const [view, setView] = useState<ViewMode>('list');

  useEffect(() => {
    const savedView = localStorage.getItem('jobs-view-mode') as ViewMode;
    if (savedView) {
      setView(savedView);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jobs-view-mode', view);
  }, [view]);

  const activeJobs = jobs.filter(job => job.status === 'Forwarding');
  const draftJobs: Job[] = []; // Placeholder
  const archivedJobs: Job[] = []; // Placeholder
  
  return (
     <Card>
        <CardHeader>
            <CardTitle>{t.dashboard_employer.jobs_list.title}</CardTitle>
            <CardDescription>{t.dashboard_employer.jobs_list.description}</CardDescription>
        </CardHeader>
        <CardContent>
            <Tabs defaultValue="all">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <TabsList className="w-full sm:w-auto overflow-x-auto justify-start">
                  <TabsTrigger value="all">{t.dashboard_employer.jobs_list.tabs.all}</TabsTrigger>
                  <TabsTrigger value="active">{t.dashboard_employer.jobs_list.tabs.active}</TabsTrigger>
                  <TabsTrigger value="draft">{t.dashboard_employer.jobs_list.tabs.draft}</TabsTrigger>
                  <TabsTrigger value="archived">
                    {t.dashboard_employer.jobs_list.tabs.archived}
                  </TabsTrigger>
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
                      {t.dashboard_employer.jobs_list.add_job}
                    </span>
                  </Button>
                </div>
              </div>
              <TabsContent value="all" className="mt-4">
                 <PaginatedJobsView jobs={jobs} view={view} t={t} />
              </TabsContent>
               <TabsContent value="active" className="mt-4">
                 <PaginatedJobsView jobs={activeJobs} view={view} t={t} />
              </TabsContent>
               <TabsContent value="draft" className="mt-4">
                 <PaginatedJobsView jobs={draftJobs} view={view} t={t} />
              </TabsContent>
               <TabsContent value="archived" className="mt-4">
                 <PaginatedJobsView jobs={archivedJobs} view={view} t={t} />
              </TabsContent>
            </Tabs>
        </CardContent>
    </Card>
  );
}
