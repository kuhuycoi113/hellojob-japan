import { Header } from '@/components/header';
import { HandbookSection } from '@/components/handbook-section';
import { Footer } from '@/components/footer';

export default function HandbookPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <HandbookSection />
      </main>
      <Footer />
    </div>
  );
}
