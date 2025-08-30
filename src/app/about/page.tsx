import { Header } from '@/components/header';
import { AboutSection } from '@/components/about-section';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
