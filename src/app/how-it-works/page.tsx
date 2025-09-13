
import { Header } from '@/components/header';
import { HowItWorks } from '@/components/how-it-works';
import { Footer } from '@/components/footer';
import { DevelopmentPath } from '@/components/development-path';

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <DevelopmentPath />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
