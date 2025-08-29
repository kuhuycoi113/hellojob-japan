import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BarrettTest } from '@/components/barrett-test';

export default function BarrettTestPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <BarrettTest />
      </main>
      <Footer />
    </div>
  );
}
