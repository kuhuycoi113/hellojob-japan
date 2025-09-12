// This is a new file.
'use client';

import { useLanguage } from '@/contexts/language-context';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';
import { ProfileHeader } from './profile/profile-header';
import { ProfileSection } from './profile/profile-section';
import { ProfileInfoCard } from './profile/profile-info-card';
import { ProfileMediaCard } from './profile/profile-media-card';
import { ProfileTimelineCard } from './profile/profile-timeline-card';
import { ProfileSimpleListCard } from './profile/profile-simple-list-card';
import { mockPartners } from '@/data/mock-partners';
import { notFound } from 'next/navigation';

const partnerDataMap: Record<string, any> = {
    'global-support-union': {
      avatarSrc: "https://i.pravatar.cc/150?u=globalsupport",
      coverSrc: "https://picsum.photos/seed/union/1200/400",
      companyNameKey: "partners.0.name",
      companyTypeKey: "partners.0.type",
      location: "Tokyo, Japan",
    },
    'sakura-support-org': {
       avatarSrc: "https://i.pravatar.cc/150?u=sakuraorg",
      coverSrc: "https://picsum.photos/seed/sakura/1200/400",
      companyNameKey: "partners.1.name",
      companyTypeKey: "partners.1.type",
      location: "Osaka, Japan",
    },
     'vietnam-link-co-ltd': {
       avatarSrc: "https://i.pravatar.cc/150?u=vietnamlink",
      coverSrc: "https://picsum.photos/seed/vlink/1200/400",
      companyNameKey: "partners.2.name",
      companyTypeKey: "partners.2.type",
      location: "Hanoi, Vietnam",
    },
     'vietproud-manpower-jsc': {
       avatarSrc: "https://i.pravatar.cc/150?u=vietproud",
       coverSrc: "https://picsum.photos/seed/proud/1200/400",
       companyNameKey: "partners.3.name",
       companyTypeKey: "partners.3.type",
       location: "Ho Chi Minh City, Vietnam",
    }
};


export function PartnerDetailPage({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const t_profile = t.partnerProfile; // Re-use the same translations as the main profile page
  
  const partnerStaticData = partnerDataMap[slug];

  const getDeepValue = (obj: any, path: string) => path.split('.').reduce((o, k) => (o || {})[k], obj);
  
  if (!partnerStaticData) {
      return (
        <div className="container mx-auto max-w-5xl py-12 px-4 text-center">
            <h1 className="text-2xl font-bold">{t.partnerDetailPage.partnerNotFound}</h1>
        </div>
      )
  }

  const companyName = getDeepValue(t.featuredPartners, partnerStaticData.companyNameKey);
  const companyType = getDeepValue(t.featuredPartners, partnerStaticData.companyTypeKey);


  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <div className="space-y-8">
        <ProfileHeader
          avatarSrc={partnerStaticData.avatarSrc}
          coverSrc={partnerStaticData.coverSrc}
          companyName={companyName}
          companyType={companyType}
          location={partnerStaticData.location}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
                <ProfileSection title={t_profile.about.title}>
                    <p className="text-muted-foreground leading-relaxed">{t_profile.about.description}</p>
                </ProfileSection>

                <ProfileSection title={t_profile.videos.title}>
                    <ProfileMediaCard items={t_profile.videos.items} type="video" />
                </ProfileSection>

                <ProfileSection title={t_profile.images.title}>
                    <ProfileMediaCard items={t_profile.images.items} type="image" />
                </ProfileSection>
                 <ProfileSection title={t_profile.history.title}>
                    <ProfileTimelineCard items={t_profile.history.items} />
                </ProfileSection>
                 <ProfileSection title={t_profile.licenses.title}>
                    <ProfileSimpleListCard items={t_profile.licenses.items} />
                </ProfileSection>

            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-24">
                 <ProfileSection title={t_profile.info.title}>
                    <ProfileInfoCard items={t_profile.info.items} />
                </ProfileSection>
                 <ProfileSection title={t_profile.industry.title}>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-gray-800">{t_profile.industry.main.title}</h4>
                             <div className="flex flex-wrap gap-2 mt-2">
                                {t_profile.industry.main.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                         <div>
                            <h4 className="font-semibold text-gray-800">{t_profile.industry.fields.title}</h4>
                            <p className="text-muted-foreground mt-1">{t_profile.industry.fields.description}</p>
                        </div>
                    </div>
                </ProfileSection>
                 <ProfileSection title={t_profile.benefits.title}>
                    <ProfileSimpleListCard items={t_profile.benefits.items} />
                </ProfileSection>
                <div className="text-center">
                    <Button variant="outline">
                        <LogOut className="mr-2 h-4 w-4" />
                        {t_profile.logout}
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
