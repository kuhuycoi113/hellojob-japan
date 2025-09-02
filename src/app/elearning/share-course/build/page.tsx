import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BuildCourseForm } from '@/components/build-course-form';

export default function BuildCoursePage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <BuildCourseForm />
      </main>
      <Footer />
    </div>
  );
}
