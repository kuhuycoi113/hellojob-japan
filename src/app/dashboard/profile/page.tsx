// This is a new file.
import { PartnerProfilePage } from '@/components/dashboard/partner-profile-page';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <PartnerProfilePage />
      </main>
      <Footer />
    </div>
  );
}
