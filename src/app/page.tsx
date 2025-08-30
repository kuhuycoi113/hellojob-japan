import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { CandidateCategories } from '@/components/candidate-categories';
import { Cta } from '@/components/cta';
import { WhyChooseUs } from '@/components/why-choose-us';
import { CandidateQuality } from '@/components/candidate-quality';
import { Footer } from '@/components/footer';
import { PersonnelTraining } from '@/components/personnel-training';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <CandidateCategories />
        <CandidateQuality />
        <PersonnelTraining />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
