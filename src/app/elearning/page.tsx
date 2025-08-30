import { Header } from '@/components/header';
import { ElearningHero } from '@/components/elearning-hero';
import { AllCoursesSection } from '@/components/all-courses-section';
import { Footer } from '@/components/footer';

export default function ElearningPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ElearningHero />
        <AllCoursesSection />
      </main>
      <Footer />
    </div>
  );
}
