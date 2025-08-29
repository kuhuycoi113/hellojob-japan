import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HofstedeScan } from '@/components/hofstede-scan';

export default function HofstedeScanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <HofstedeScan />
      </main>
      <Footer />
    </div>
  );
}
