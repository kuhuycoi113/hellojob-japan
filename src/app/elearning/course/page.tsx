import { Header } from '@/components/header';
import { CourseDetail } from '@/components/course-detail';
import { Footer } from '@/components/footer';

export default function ElearningCoursePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <main className="flex-1 py-8">
        <CourseDetail />
      </main>
      <Footer />
    </div>
  );
}
