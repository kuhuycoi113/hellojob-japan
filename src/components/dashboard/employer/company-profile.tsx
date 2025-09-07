
'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { JobsList } from './jobs-list';
import { YourCandidates } from './your-candidates';
import { YourPartners } from './your-partners';
import { DashboardHeader } from './dashboard-header';
import { DashboardStats } from './dashboard-stats';
import { OverviewChart } from './overview-chart';
import { RecentApplications } from './recent-applications';
import { Overview } from '../partner/overview';
import type { Job, Opportunity } from '@/locales/translations';

export function CompanyProfile() {
  const { t } = useLanguage();
  
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [acceptedJobs, setAcceptedJobs] = useState<Job[]>([]);
  const [declinedJobs, setDeclinedJobs] = useState<Opportunity[]>([]);

  useEffect(() => {
    // Set initial data from translations
    const initialJobs = t.dashboard_employer.activeJobs.jobs;

    // Check localStorage for newly posted jobs
    const newJobsRaw = localStorage.getItem('postedJobs');
    if (newJobsRaw) {
      try {
        const newJobs = JSON.parse(newJobsRaw);
        // Combine new jobs with existing ones, ensuring no duplicates if the page is reloaded
        const allJobs = [...newJobs, ...initialJobs];
        const uniqueJobs = allJobs.filter((job, index, self) =>
            index === self.findIndex((j) => (
                j.id === job.id
            ))
        );
        setAcceptedJobs(uniqueJobs);
        // Optionally clear the new jobs from localStorage after adding them to state
        // localStorage.removeItem('newlyPostedJobs');
      } catch (error) {
        console.error("Failed to parse jobs from localStorage", error);
        setAcceptedJobs(initialJobs);
      }
    } else {
      setAcceptedJobs(initialJobs);
    }
    
    setOpportunities(t.dashboard_partner.newOpportunities.opportunities);
  }, [t]);


  const handleAcceptJob = (jobId: string) => {
    const jobToMove = opportunities.find(job => job.id === jobId);
    if (jobToMove) {
      const newJob: Job = {
        id: jobToMove.id,
        title: jobToMove.title,
        company: jobToMove.company,
        location: jobToMove.location,
        status: 'Forwarding',
        partners: "0",
        applications: "0",
        date_posted: new Date().toISOString().split('T')[0],
        salary: "N/A",
        image: `https://picsum.photos/400/225?random=job${acceptedJobs.length + 1}`,
        tags: [jobToMove.visa],
      };
      setAcceptedJobs(prev => [newJob, ...prev]);
      setOpportunities(prev => prev.filter(job => job.id !== jobId));
    }
  };

  const handleDeclineJob = (jobId: string) => {
    const jobToDecline = opportunities.find(job => job.id === jobId);
    if (jobToDecline) {
      setDeclinedJobs(prev => [jobToDecline, ...prev]);
      setOpportunities(prev => prev.filter(job => job.id !== jobId));
    }
  };


  return (
    <div className="flex w-full flex-col">
      <DashboardHeader />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-7xl gap-4 md:gap-6">
          <div className="mt-4">
            <Overview 
              pendingOpportunities={opportunities}
              acceptedOpportunities={acceptedJobs}
              declinedOpportunities={declinedJobs}
              onAccept={handleAcceptJob}
              onDecline={handleDeclineJob}
            />
          </div>
          
          <div className="mt-4">
            <JobsList jobs={acceptedJobs} />
          </div>

          <div className="mt-4">
            <YourCandidates />
          </div>

           <div className="mt-4">
            <YourPartners />
          </div>

          <DashboardStats />
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-3">
             <div className="lg:col-span-2">
                <OverviewChart />
            </div>
            <div className="lg:col-span-1">
                <RecentApplications />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
