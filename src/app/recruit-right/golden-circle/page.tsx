import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GoldenCircle } from '@/components/golden-circle';

export default function GoldenCirclePage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <GoldenCircle />
      </main>
      <Footer />
    </div>
  );
}
