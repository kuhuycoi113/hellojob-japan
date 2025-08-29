import { Header } from '@/components/header';
import { ElearningSection } from '@/components/elearning-section';
import { Footer } from '@/components/footer';

export default function ElearningPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ElearningSection />
      </main>
      <Footer />
    </div>
  );
}
