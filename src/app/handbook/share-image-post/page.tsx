import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ShareImagePostForm } from '@/components/share-image-post-form';

export default function ShareImagePostPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <ShareImagePostForm />
      </main>
      <Footer />
    </div>
  );
}
