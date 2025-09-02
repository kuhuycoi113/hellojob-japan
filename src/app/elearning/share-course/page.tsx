import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ShareCourseForm } from '@/components/share-course-form';

export default function ShareCoursePage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <ShareCourseForm />
      </main>
      <Footer />
    </div>
  );
}
