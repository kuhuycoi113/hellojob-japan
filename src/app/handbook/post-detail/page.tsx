import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PostDetailSection } from '@/components/post-detail-section';

export default function PostDetailPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <PostDetailSection />
      </main>
      <Footer />
    </div>
  );
}
