

'use client';

import { JobsPage } from '@/components/jobs-page';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function JobsDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <JobsPage />
      </main>
      <Footer />
    </div>
  );
}
