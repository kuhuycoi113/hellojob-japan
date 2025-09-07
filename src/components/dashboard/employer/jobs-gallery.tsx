
'use client';

import type { Job } from '@/locales/translations';
import { useLanguage } from '@/contexts/language-context';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


interface JobsGalleryProps {
  jobs: Job[];
}

export function JobsGallery({ jobs }: JobsGalleryProps) {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {jobs.map((job, index) => (
        <Card key={job.id} className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
          <CardHeader className="p-4">
             <div className="relative aspect-video">
                <Link href={`/dashboard/jobs/${job.id}`}>
                    <Image
                        src={job.image || `https://picsum.photos/400/225?random=job${index}`}
                        alt={job.title || 'Job image'}
                        fill
                        className="object-cover rounded-t-lg"
                    />
                </Link>
            </div>
          </CardHeader>
          <CardContent className="p-4 flex-grow">
            <div className="flex justify-between items-start">
              <Link href={`/dashboard/jobs/${job.id}`} className="hover:underline">
                <CardTitle className="text-lg font-bold leading-tight">{job.title}</CardTitle>
              </Link>
              <Badge variant={job.status === 'Searching' ? 'default' : 'secondary'}>
                  {job.status === 'Searching' ? t.dashboard_employer.jobs_list.table.status_searching : job.status}
              </Badge>
            </div>
            <CardDescription className="mt-1">{job.location}</CardDescription>
            
            <div className="mt-4 pt-4 border-t">
                <div className="text-sm font-semibold mb-2">{t.dashboard_employer.candidates_table.title} ({job.applications})</div>
                <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2">
                        {Array.from({ length: Math.min(Number(job.applications), 3) }).map((_, i) => (
                           <Avatar key={i} className="h-8 w-8 border-2 border-white">
                                <AvatarImage src={`https://i.pravatar.cc/40?u=app${job.id}${i}`} />
                                <AvatarFallback>A</AvatarFallback>
                            </Avatar>
                        ))}
                    </div>
                </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 bg-gray-50">
             <Button asChild className="w-full" variant="default">
                <Link href={`/dashboard/jobs/${job.id}/find-candidates`} className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {t.dashboard_employer.jobs_list.table.actions_items.view_candidates}
                </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
