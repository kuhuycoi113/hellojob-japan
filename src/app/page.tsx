import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { JobListings } from '@/components/job-listings';
import { CuratedResources } from '@/components/curated-resources';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <JobListings />
        <CuratedResources />
      </main>
      <Footer />
    </div>
  );
}
