
import { JobsList } from '@/components/dashboard/employer/jobs-list';
import { Suspense } from 'react';

export default function EmployerDashboardPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <Suspense fallback={<div>Loading...</div>}>
        <JobsList />
      </Suspense>
    </div>
  );
}
