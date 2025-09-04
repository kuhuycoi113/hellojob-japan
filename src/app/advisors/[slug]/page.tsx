// This is a new file.
import { AdvisorProfile } from '@/components/advisor-profile';
import { translations } from '@/locales/translations';

export default function AdvisorProfilePage({ params }: { params: { slug: string } }) {
  const { advisorsList } = translations.en.advisors;
  
  // Find the advisor data by slug (which is derived from the English name)
  const advisorData = translations.vi.advisors.advisorsList.find(
    (advisor, index) => advisorsList[index].name.toLowerCase().replace(/\s+/g, '-') === params.slug
  );
  
  if (!advisorData) {
    return <div>Advisor not found</div>;
  }

  return <AdvisorProfile advisorSlug={params.slug} />;
}

export async function generateStaticParams() {
  const { advisorsList } = translations.en.advisors;
  return advisorsList.map(advisor => ({
    slug: advisor.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}
