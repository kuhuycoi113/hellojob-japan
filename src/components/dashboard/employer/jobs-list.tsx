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
import { MoreHorizontal, PlusCircle, List } from 'lucide-react';
import { useState } from 'react';
import { JobsGallery } from './jobs-gallery';
import { cn } from '@/lib/utils';

const GalleryViewIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="7" height="7" rx="1"></rect>
      <rect x="3" y="14" width="7" height="7" rx="1"></rect>
      <line x1="14" x2="21" y1="5.5" y2="5.5"></line>
      <line x1="14" x2="21" y1="10.5" y2="10.5"></line>
      <line x1="14" x2="21" y1="15.5" y2="15.5"></line>
      <line x1="14" x2="21" y1="20.5" y2="20.5"></line>
    </svg>
  );

export function JobsList() {
  const { t } = useLanguage();
  const jobs = t.dashboard_employer.activeJobs.jobs;
  const [view, setView] = useState<'list' | 'gallery'>('list');

  const getStatusVariant = (status: string): "secondary" | "outline" | "default" => {
    switch (status) {
      case 'Searching':
        return 'secondary';
      case 'Forwarding':
        return 'default';
      default:
        return 'outline';
    }
  }

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">{t.dashboard_employer.jobs_list.tabs.all}</TabsTrigger>
          <TabsTrigger value="active">{t.dashboard_employer.jobs_list.tabs.active}</TabsTrigger>
          <TabsTrigger value="draft">{t.dashboard_employer.jobs_list.tabs.draft}</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            {t.dashboard_employer.jobs_list.tabs.archived}
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
           <div className="flex items-center gap-1 rounded-md bg-muted p-1">
             <Button
                variant={view === 'gallery' ? 'default' : 'ghost'}
                size="icon"
                className={cn("h-7 w-7", view === 'gallery' && "shadow-sm bg-background text-foreground")}
                onClick={() => setView('gallery')}
              >
                <GalleryViewIcon className="h-4 w-4" />
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
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              {t.dashboard_employer.jobs_list.add_job}
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <Card>
          <CardHeader>
            <CardTitle>{t.dashboard_employer.jobs_list.title}</CardTitle>
            <CardDescription>{t.dashboard_employer.jobs_list.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {view === 'list' ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t.dashboard_employer.activeJobs.table.jobTitle}</TableHead>
                    <TableHead>{t.dashboard_employer.activeJobs.table.status}</TableHead>
                    <TableHead className="hidden md:table-cell">
                      {t.dashboard_employer.activeJobs.table.partners}
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      {t.dashboard_employer.activeJobs.table.applications}
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      {t.dashboard_employer.jobs_list.table.date_posted}
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">{t.dashboard_employer.activeJobs.table.actions}</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs.map((job) => (
                    <TableRow key={job.title}>
                      <TableCell className="font-medium">
                        <div className="font-medium">{job.title}</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          {job.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(job.status)}>
                          {job.status === 'Searching' ? t.dashboard_employer.job_status.searching : t.dashboard_employer.job_status.forwarding}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{job.partners}</TableCell>
                      <TableCell className="hidden md:table-cell">{job.applications}</TableCell>
                      <TableCell className="hidden md:table-cell">
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
                            <DropdownMenuItem>{t.dashboard_employer.jobs_list.table.actions_items.details}</DropdownMenuItem>
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
            ) : (
              <JobsGallery jobs={jobs} />
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
