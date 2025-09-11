
import { PartnerDetailPage } from '@/components/dashboard/partner-detail-page';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function PartnerDetail({ params }: { params: { slug: string } }) {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex-1">
        <PartnerDetailPage slug={params.slug} />
      </main>
      <Footer />
    </div>
  );
}

// Optional: Generate static paths for featured partners if you want faster initial loads
// You can expand this to include all partners if needed
export async function generateStaticParams() {
  const slugs = [
    'global-support-union',
    'sakura-support-org',
    'vietnam-link-co-ltd',
    'vietproud-manpower-jsc'
  ];

  return slugs.map(slug => ({
    slug: slug,
  }));
}
