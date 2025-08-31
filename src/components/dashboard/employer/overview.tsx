'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { ArrowUpRight, Search, Users } from 'lucide-react';
import Link from 'next/link';

export function Overview() {
  const { t } = useLanguage();
  const jobs = t.dashboard_employer.activeJobs.jobs;
  const stats = t.dashboard_employer.stats;

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stats.activeJobs.title}</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeJobs.value}</div>
            <p className="text-xs text-muted-foreground">{stats.activeJobs.change}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stats.applications.title}</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.applications.value}</div>
            <p className="text-xs text-muted-foreground">{stats.applications.change}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stats.interviews.title}</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.interviews.value}</div>
            <p className="text-xs text-muted-foreground">{stats.interviews.change}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stats.hires.title}</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.hires.value}</div>
            <p className="text-xs text-muted-foreground">{stats.hires.change}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t.dashboard_employer.activeJobs.title}</CardTitle>
          <CardDescription>{t.dashboard_employer.activeJobs.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t.dashboard_employer.activeJobs.table.jobTitle}</TableHead>
                <TableHead className="hidden sm:table-cell">{t.dashboard_employer.activeJobs.table.status}</TableHead>
                <TableHead className="hidden md:table-cell">{t.dashboard_employer.activeJobs.table.partners}</TableHead>
                <TableHead className="hidden md:table-cell">{t.dashboard_employer.activeJobs.table.applications}</TableHead>
                <TableHead>
                  <span className="sr-only">{t.dashboard_employer.activeJobs.table.actions}</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.title}>
                  <TableCell>
                    <div className="font-medium">{job.title}</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">{job.location}</div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant={job.status === 'Searching' ? 'secondary' : 'default'}>
                      {job.status === 'Searching' ? t.dashboard_employer.job_status.searching : t.dashboard_employer.job_status.forwarding}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{job.partners}</TableCell>
                  <TableCell className="hidden md:table-cell">{job.applications}</TableCell>
                  <TableCell>
                     <Button asChild size="sm" variant="outline">
                        <Link href="#">
                            {t.dashboard_employer.activeJobs.table.view}
                        </Link>
                     </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
