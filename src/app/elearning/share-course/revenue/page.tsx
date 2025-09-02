import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { RevenueDashboard } from '@/components/revenue-dashboard';

export default function RevenueDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1 py-12 sm:py-16">
        <RevenueDashboard />
      </main>
      <Footer />
    </div>
  );
}
