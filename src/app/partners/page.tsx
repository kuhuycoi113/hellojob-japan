// This is a new file.
import { PartnerListPage } from '@/components/partner-list-page';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function PartnersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <PartnerListPage />
      </main>
      <Footer />
    </div>
  );
}
