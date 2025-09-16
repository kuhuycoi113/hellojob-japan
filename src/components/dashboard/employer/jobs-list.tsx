
'use client';

import { useEffect, useState } from 'react';
import type { Job } from '@/locales/translations';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, List, LayoutGrid } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { JobsTable } from './jobs-table';
import { JobsGallery } from './jobs-gallery';
import Link from 'next/link';
import { mockJobs } from '@/data/mock-jobs'; // Import mock data

export function JobsList() {
  const { t } = useLanguage();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
  const [activeTab, setActiveTab] = useState('all');
  const isMobile = useIsMobile();

  const loadJobs = () => {
    const storedJobsRaw = localStorage.getItem('postedJobs');
    const storedJobs: Job[] = storedJobsRaw ? JSON.parse(storedJobsRaw) : [];
    const allJobs = [...storedJobs, ...mockJobs].slice(0, 30); // Combine and limit to 30
     // Remove duplicates by id, giving priority to storedJobs
    const uniqueJobs = allJobs.filter((job, index, self) =>
        index === self.findIndex((j) => (
            j.id === job.id
        ))
    );

    setJobs(uniqueJobs);
  };
  
  useEffect(() => {
    loadJobs();
  }, []);

  const filteredJobs = jobs.filter(job => {
    if (activeTab === 'all') return true;
    if (activeTab === 'searching' && job.status === 'Searching') return true;
    if (activeTab === 'completed' && job.status === 'Completed') return true;
    return false;
  });
  
  const TABS = [
    { value: 'all', label: t.dashboard_employer.jobs_list.tabs.all },
    { value: 'searching', label: t.dashboard_employer.jobs_list.tabs.searching },
    { value: 'completed', label: t.dashboard_employer.jobs_list.tabs.completed },
  ];
  
  const getTabCount = (tabValue: string) => {
    if (tabValue === 'all') return jobs.length;
    return jobs.filter(j => j.status.toLowerCase() === tabValue).length;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-headline">
            {t.dashboard_employer.jobs_list.title}
          </h1>
          <p className="text-muted-foreground">
            {t.dashboard_employer.jobs_list.subtitle}
          </p>
        </div>
        <Button asChild size="lg" variant="secondary">
          <Link href="/post-job-ai">
            <PlusCircle className="mr-2 h-5 w-5" />
            {t.dashboard_employer.jobs_list.post_job_button}
          </Link>
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between">
          <TabsList>
            {TABS.map(tab => (
                 <TabsTrigger key={tab.value} value={tab.value}>
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
            {viewMode === 'list' && <JobsTable jobs={filteredJobs} />}
            {viewMode === 'grid' && <JobsGallery jobs={filteredJobs} />}
        </div>

      </Tabs>
    </div>
  );
}
