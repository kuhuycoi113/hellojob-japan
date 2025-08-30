import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ShareShortVideoForm } from '@/components/share-short-video-form';

export default function ShareShortVideoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <ShareShortVideoForm />
      </main>
      <Footer />
    </div>
  );
}
