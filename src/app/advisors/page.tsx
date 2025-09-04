
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AdvisorsPage } from '@/components/advisors-page';

export default function Advisors() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <AdvisorsPage />
      </main>
      <Footer />
    </div>
  );
}
