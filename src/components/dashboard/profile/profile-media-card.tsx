// This is a new file.
'use client';

import Image from 'next/image';
import { Camera, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

interface MediaItem {
  src: string;
  hint: string;
}

interface ProfileMediaCardProps {
  items: MediaItem[];
  type: 'video' | 'image';
}

export function ProfileMediaCard({ items, type }: ProfileMediaCardProps) {
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index} className="relative aspect-video rounded-lg overflow-hidden group">
          <Image
            src={item.src}
            alt={`${type} ${index + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            data-ai-hint={item.hint}
          />
           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            {type === 'video' && (
              <Video className="w-8 h-8 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
             {type === 'image' && (
              <Camera className="w-8 h-8 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
