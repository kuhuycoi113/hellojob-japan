import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { DevelopmentPath } from '@/components/development-path';
import { Cta } from '@/components/cta';
import { TopRecruiters } from '@/components/top-recruiters';
import { Elearning } from '@/components/elearning';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <DevelopmentPath />
        <Cta />
        <TopRecruiters />
        <Elearning />
      </main>
      <Footer />
    </div>
  );
}
