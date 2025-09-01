
'use client';

import { useLanguage } from '@/contexts/language-context';
import { JobsList } from './jobs-list';
import { YourCandidates } from './your-candidates';
import { YourPartners } from './your-partners';
import { DashboardHeader } from './dashboard-header';
import { DashboardStats } from './dashboard-stats';
import { OverviewChart } from './overview-chart';
import { RecentApplications } from './recent-applications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function CompanyProfile() {
  const { t } = useLanguage();
  const profile = t.dashboard_employer.company_profile;

  return (
    <div className="flex w-full flex-col">
      <DashboardHeader />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-7xl gap-6">
          <DashboardStats />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
             <div className="lg:col-span-2">
                <OverviewChart />
            </div>
            <div className="lg:col-span-1">
                <RecentApplications />
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-4">{profile.yourJobs}</h2>
            <JobsList />
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-4">{profile.yourCandidates}</h2>
            <YourCandidates />
          </div>

           <div className="mt-4">
            <YourPartners />
          </div>
        </div>
      </main>
    </div>
  );
}
