import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GallupTest } from '@/components/gallup-test';

export default function GallupTestPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <GallupTest />
      </main>
      <Footer />
    </div>
  );
}
