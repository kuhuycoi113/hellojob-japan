import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SharePostForm } from '@/components/share-post-form';

export default function SharePostPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <SharePostForm />
      </main>
      <Footer />
    </div>
  );
}
