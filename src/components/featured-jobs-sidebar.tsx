// This is a new file.
'use client';

import { useLanguage } from '@/contexts/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';
import Link from 'next/link';

export function FeaturedJobsSidebar() {
  const { t } = useLanguage();
  const jobs = t.postDetail.featuredJobs.jobs;

  return (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-xl">
               <Briefcase className="w-5 h-5 text-primary" />
               {t.postDetail.featuredJobs.title}
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            {jobs.map((job, index) => (
                <div key={index} className="p-3 rounded-lg bg-blue-50/50">
                    <h4 className="font-semibold text-sm text-gray-800">{job.title}</h4>
                    <p className="text-xs text-muted-foreground">{job.company}</p>
                </div>
            ))}
             <Button asChild variant="link" className="p-0">
              <Link href="#">{t.postDetail.featuredJobs.viewMore}</Link>
            </Button>
        </CardContent>
    </Card>
  );
}
