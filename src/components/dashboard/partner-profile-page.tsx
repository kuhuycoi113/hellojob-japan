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

export function PartnerProfilePage() {
  const { t } = useLanguage();
  const t_profile = t.partnerProfile;

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <div className="space-y-8">
        <ProfileHeader
          avatarSrc="https://i.pravatar.cc/150?u=companytvc"
          coverSrc="https://picsum.photos/seed/sky/1200/400"
          companyName={t_profile.companyName}
          companyType={t_profile.companyType}
          location={t_profile.location}
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
