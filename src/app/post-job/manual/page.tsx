import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ManualJobPostForm } from '@/components/manual-job-post-form';
import { Suspense } from 'react';

export default function ManualPostJobPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <Suspense fallback={<div>Loading...</div>}>
          <ManualJobPostForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
