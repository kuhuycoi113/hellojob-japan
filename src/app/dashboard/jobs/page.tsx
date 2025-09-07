
import { JobsList } from '@/components/dashboard/employer/jobs-list';
import { Suspense } from 'react';

export default function JobsPage() {
  return (
    <Suspense fallback={<div>Loading jobs...</div>}>
      <JobsList />
    </Suspense>
  );
}
