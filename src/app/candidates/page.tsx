// This is a new file.
import { CandidateSearchPage } from '@/components/candidate-search-page';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function CandidatesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <CandidateSearchPage />
      </main>
      <Footer />
    </div>
  );
}
