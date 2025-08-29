import { Header } from '@/components/header';
import { RecruitRightSection } from '@/components/recruit-right-section';
import { Footer } from '@/components/footer';

export default function RecruitRightPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <RecruitRightSection />
      </main>
      <Footer />
    </div>
  );
}
