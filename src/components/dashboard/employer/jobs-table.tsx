
'use client';

import type { Job } from '@/locales/translations';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, FileText, Users, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


interface JobsTableProps {
  jobs: Job[];
}

export function JobsTable({ jobs }: JobsTableProps) {
    const { t } = useLanguage();

    const job_table_t = t.dashboard_employer.jobs_list.table;

    if (jobs.length === 0) {
        return (
            <div className="text-center py-12 text-muted-foreground">
                <FileText className="mx-auto h-12 w-12" />
                <h3 className="mt-4 text-lg font-semibold">{job_table_t.no_jobs_title}</h3>
                <p className="mt-2 text-sm">{job_table_t.no_jobs_description}</p>
                <Button asChild className="mt-4">
                    <Link href="/post-job-ai">{job_table_t.post_job_button}</Link>
                </Button>
            </div>
        )
    }

  return (
    <div className="rounded-lg border overflow-hidden">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[30%]">{job_table_t.job_title}</TableHead>
                    <TableHead>{job_table_t.status}</TableHead>
                    <TableHead>{job_table_t.partners}</TableHead>
                    <TableHead>{job_table_t.applications}</TableHead>
                    <TableHead>{job_table_t.date_posted}</TableHead>
                    <TableHead>
                        <span className="sr-only">{job_table_t.actions}</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {jobs.map(job => (
                    <TableRow key={job.id}>
                        <TableCell className="font-medium">
                           <Link href={`/dashboard/jobs/${job.id}`} className="hover:underline">
                             {job.title}
                           </Link>
                           <p className="text-xs text-muted-foreground">{job.location}</p>
                        </TableCell>
                        <TableCell>
                            <Badge variant={job.status === 'Searching' ? 'default' : 'secondary'}>
                                {job.status === 'Searching' ? job_table_t.status_searching : job.status}
                            </Badge>
                        </TableCell>
                        <TableCell>{job.partners}</TableCell>
                        <TableCell className="flex items-center gap-2">
                             <div className="flex -space-x-2 mr-1">
                                {Array.from({ length: Math.min(Number(job.applications), 3) }).map((_, i) => (
                                <Avatar key={i} className="h-6 w-6 border-2 border-white">
                                    <AvatarImage src={`https://i.pravatar.cc/30?u=app${job.id}${i}`} />
                                    <AvatarFallback>A</AvatarFallback>
                                </Avatar>
                                ))}
                            </div>
                            <span>{job.applications}</span>
                        </TableCell>
                        <TableCell>{job.date_posted}</TableCell>
                        <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                        <span className="sr-only">Open menu</span>
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>{job_table_t.actions}</DropdownMenuLabel>
                                    <DropdownMenuItem asChild>
                                      <Link href={`/dashboard/jobs/${job.id}`} className="flex items-center">
                                        <FileText className="mr-2 h-4 w-4" />
                                        {job_table_t.actions_items.view_details}
                                      </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                      <Link href={`/dashboard/jobs/${job.id}/find-candidates`} className="flex items-center">
                                        <Users className="mr-2 h-4 w-4" />
                                        {job_table_t.actions_items.view_candidates}
                                      </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50">
                                      <Trash2 className="mr-2 h-4 w-4" />
                                      {job_table_t.actions_items.delete}
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  );
}

