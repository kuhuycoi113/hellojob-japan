
'use client';

import { useLanguage } from '@/contexts/language-context';
import { notFound, useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, MapPin, Users, Calendar, DollarSign, Briefcase, FileText, CheckCircle, ArrowLeft, Send, Sparkles, Clock, CalendarOff } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { mockJobs, type MockJob } from '@/data/mock-jobs';
import { SuitableCandidates } from './suitable-candidates';

export function JobDetail({ jobId }: { jobId: string }) {
  const { t, language } = useLanguage();
  const router = useRouter();
  const jobDetail_t = t.jobDetail;

  const [job, setJob] = useState<any | null>(null);

  useEffect(() => {
    const storedJobsRaw = localStorage.getItem('postedJobs');
    const storedJobs = storedJobsRaw ? JSON.parse(storedJobsRaw) : [];
    const allJobs = [...storedJobs, ...mockJobs];
    const foundJob = allJobs.find(j => j.id === jobId);
    setJob(foundJob || null);
  }, [jobId]);

  if (job === null) {
      return null;
  }
   if (!job) return notFound();

  const title = job.title?.[language] || job.title || '';
  const company = job.company?.[language] || job.companyName || '';
  const location = job.location?.[language] || 'Nhật Bản';
  const applicants = job.applicants || 0;
  const postedDate = job.postedDate || job.date_posted;
  const description = job.description?.[language] || job.jobDescription || 'Chưa có mô tả chi tiết.';
  const requirements = job.requirements?.[language] || job.requirements || [];
  const benefits = job.benefits?.[language] || job.benefits || [];
  const status = job.status || 'N/A';
  const salary = job.salary?.[language] || 'Thương lượng';
  const visaType = job.visaType?.[language] || 'N/A';
  const contractType = job.contractType?.[language] || 'N/A';
  const workingHours = job.workingHours?.[language] || 'N/A';
  const holidays = job.holidays?.[language] || 'N/A';


  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
        <div className="mb-6">
            <Button variant="outline" onClick={() => router.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {jobDetail_t.backButton}
            </Button>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                    <Badge variant="secondary" className="mb-2">{status}</Badge>
                    <CardTitle className="text-3xl font-bold font-headline">{title}</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground flex items-center gap-2 pt-1"><Building className="w-5 h-5"/> {company}</CardDescription>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                    <Button asChild>
                       <Link href={`/dashboard/jobs/${job.id}/find-candidates`}>
                           <Users className="mr-2 h-4 w-4" />
                           {jobDetail_t.findCandidates}
                       </Link>
                    </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
                {description && (
                    <div className="prose prose-blue max-w-none dark:prose-invert">
                        <h3 className="text-xl font-bold font-headline">{jobDetail_t.jobDescription}</h3>
                        <p>{description}</p>
                    </div>
                )}

                {requirements.length > 0 && (
                    <div>
                        <h3 className="text-xl font-bold font-headline mb-4">{jobDetail_t.requirements}</h3>
                        <ul className="space-y-2">
                            {requirements.map((req: string, index: number) => (
                                <li key={index} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/><span>{req}</span></li>
                            ))}
                        </ul>
                    </div>
                )}

                {benefits.length > 0 && (
                    <div>
                        <h3 className="text-xl font-bold font-headline mb-4">{jobDetail_t.benefits}</h3>
                        <ul className="space-y-2">
                            {benefits.map((ben: string, index: number) => (
                                <li key={index} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/><span>{ben}</span></li>
                            ))}
                        </ul>
                    </div>
                )}
            </CardContent>
          </Card>
           <SuitableCandidates jobId={jobId} />
        </div>

        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>{jobDetail_t.jobInformation}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                    <div className="flex items-start gap-3"><DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"/><div className="flex flex-col"><span className="font-semibold text-muted-foreground">{jobDetail_t.salary}</span><span className="font-medium">{salary}</span></div></div>
                    <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"/><div className="flex flex-col"><span className="font-semibold text-muted-foreground">{jobDetail_t.location}</span><span className="font-medium">{location}</span></div></div>
                    <div className="flex items-start gap-3"><Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"/><div className="flex flex-col"><span className="font-semibold text-muted-foreground">{jobDetail_t.visaType}</span><span className="font-medium">{visaType}</span></div></div>
                     <div className="flex items-start gap-3"><FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"/><div className="flex flex-col"><span className="font-semibold text-muted-foreground">{jobDetail_t.contractType}</span><span className="font-medium">{contractType}</span></div></div>
                    <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"/><div className="flex flex-col"><span className="font-semibold text-muted-foreground">{jobDetail_t.workingHours}</span><span className="font-medium">{workingHours}</span></div></div>
                    <div className="flex items-start gap-3"><CalendarOff className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"/><div className="flex flex-col"><span className="font-semibold text-muted-foreground">{jobDetail_t.holidays}</span><span className="font-medium">{holidays}</span></div></div>
                    <div className="flex items-start gap-3"><Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"/><div className="flex flex-col"><span className="font-semibold text-muted-foreground">{jobDetail_t.applicants}</span><span className="font-medium">{applicants}</span></div></div>
                    <div className="flex items-start gap-3"><Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"/><div className="flex flex-col"><span className="font-semibold text-muted-foreground">{jobDetail_t.postedDate}</span><span className="font-medium">{postedDate}</span></div></div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
