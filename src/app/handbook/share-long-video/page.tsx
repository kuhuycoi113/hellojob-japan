import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ShareLongVideoForm } from '@/components/share-long-video-form';

export default function ShareLongVideoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <ShareLongVideoForm />
      </main>
      <Footer />
    </div>
  );
}
