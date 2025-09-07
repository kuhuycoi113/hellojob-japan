'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { MapPin, DollarSign, Building, Users } from 'lucide-react';
import type { Job } from '@/locales/translations';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
        <Card key={index} className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="relative aspect-video">
                <Link href={`/dashboard/jobs/${job.id}`}>
                    <Image
                        src={job.image || `https://picsum.photos/400/225?random=job${index}`}
                        alt={job.title || 'Job image'}
                        fill
                        className="object-cover"
                        data-ai-hint="workplace factory"
                    />
                </Link>
                <Badge variant="secondary" className="absolute top-2 left-2">{job.id}</Badge>
            </div>
          <CardContent className="p-4 space-y-3 flex-grow flex flex-col">
             <div className="flex flex-wrap gap-2">
                <Badge variant={getStatusVariant(job.status)}>
                    {job.status === 'Searching' ? t.dashboard_employer.job_status.searching : t.dashboard_employer.job_status.forwarding}
                </Badge>
                {job.tags?.map(tag => (
                     <Badge key={tag} variant="outline" className="font-normal">{tag}</Badge>
                ))}
             </div>
             <Link href={`/dashboard/jobs/${job.id}`} className="hover:underline flex-grow">
                <h3 className="font-bold text-lg leading-tight text-gray-800">{job.title}</h3>
             </Link>
            <div className="text-sm text-muted-foreground space-y-1">
                 <div className="flex items-center gap-2">
                    <Building className="w-4 h-4"/>
                    <span>{job.company} - {job.location}</span>
                </div>
            </div>
            <div className="border-t pt-3 mt-auto">
                 <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4"/>
                        <span>{job.applications} ứng viên phù hợp</span>
                    </div>
                    <div className="flex -space-x-2 overflow-hidden">
                        <Avatar className="inline-block h-6 w-6 rounded-full border-2 border-background">
                            <AvatarImage src="https://i.pravatar.cc/40?u=candidate1"/>
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <Avatar className="inline-block h-6 w-6 rounded-full border-2 border-background">
                            <AvatarImage src="https://i.pravatar.cc/40?u=candidate2"/>
                            <AvatarFallback>B</AvatarFallback>
                        </Avatar>
                        <Avatar className="inline-block h-6 w-6 rounded-full border-2 border-background">
                            <AvatarImage src="https://i.pravatar.cc/40?u=candidate3"/>
                            <AvatarFallback>C</AvatarFallback>
                        </Avatar>
                    </div>
                 </div>
                 <Button asChild variant="outline" className="w-full mt-3">
                    <Link href={`/dashboard/jobs/${job.id}/find-candidates`}>
                        {t.dashboard_employer.jobs_list.table.actions_items.view_candidates}
                    </Link>
                </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
