import { Header } from '@/components/header';
import { AiJobPostForm } from '@/components/ai-job-post-form';
import { Footer } from '@/components/footer';

export default function PostJobAiPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <AiJobPostForm />
      </main>
      <Footer />
    </div>
  );
}
