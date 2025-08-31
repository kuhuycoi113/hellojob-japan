
'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { MapPin, DollarSign, Building } from 'lucide-react';
import type { Job } from '@/locales/translations';
import { cn } from '@/lib/utils';

interface JobsGalleryProps {
    jobs: Job[];
}

export function JobsGallery({ jobs }: JobsGalleryProps) {
  const { t } = useLanguage();
  
  const getStatusVariant = (status: string): "secondary" | "outline" | "default" => {
    switch (status) {
      case 'Searching':
        return 'secondary';
      case 'Forwarding':
        return 'default';
      default:
        return 'outline';
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job, index) => (
        <Card key={index} className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="relative aspect-video">
                <Image
                    src={job.image || `https://picsum.photos/400/225?random=job${index}`}
                    alt={job.title}
                    fill
                    className="object-cover"
                    data-ai-hint="workplace factory"
                />
                <Badge variant="secondary" className="absolute top-2 left-2">{job.id}</Badge>
            </div>
          <CardContent className="p-4 space-y-3">
             <div className="flex flex-wrap gap-2">
                <Badge variant={getStatusVariant(job.status)}>
                    {job.status === 'Searching' ? t.dashboard_employer.job_status.searching : t.dashboard_employer.job_status.forwarding}
                </Badge>
                {job.tags?.map(tag => (
                     <Badge key={tag} variant="outline" className="font-normal">{tag}</Badge>
                ))}
             </div>
            <h3 className="font-bold text-lg leading-tight text-gray-800">{job.title}</h3>
            <div className="text-sm text-muted-foreground space-y-1">
                <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4"/>
                    <span>{job.salary}</span>
                </div>
                 <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4"/>
                    <span>{job.location}</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Building className="w-4 h-4"/>
                    <span>{job.company}</span>
                </div>
            </div>
            <Button variant="outline" className="w-full mt-2">{t.dashboard_employer.jobs_list.table.actions_items.details}</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
