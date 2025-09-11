// This is a new file.
import { PartnerDetailPage } from '@/components/dashboard/partner-detail-page';

export default function PartnerDetail({ params }: { params: { slug: string } }) {
  return <PartnerDetailPage slug={params.slug} />;
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
