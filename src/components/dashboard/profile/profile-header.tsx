// This is a new file.
'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Camera, MapPin, Pencil } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

interface ProfileHeaderProps {
  avatarSrc: string;
  coverSrc: string;
  companyName: string;
  companyType: string;
  location: string;
}

export function ProfileHeader({
  avatarSrc,
  coverSrc,
  companyName,
  companyType,
  location,
}: ProfileHeaderProps) {
  const { t } = useLanguage();
  return (
    <div className="relative rounded-xl shadow-lg bg-card overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={coverSrc}
          alt={`${companyName} cover image`}
          fill
          className="object-cover"
        />
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 right-4 h-8 w-8 bg-black/50 text-white hover:bg-black/70"
        >
          <Camera className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute top-24 left-8">
        <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
          <AvatarImage src={avatarSrc} alt={companyName} />
          <AvatarFallback>{companyName.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="pt-20 px-8 pb-6">
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-3xl font-bold font-headline">{companyName}</h1>
                <p className="text-md text-muted-foreground">{companyType}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{location}</span>
                </div>
            </div>
             <Button variant="ghost" size="icon">
                <Pencil className="h-5 w-5"/>
            </Button>
        </div>
      </div>
    </div>
  );
}
