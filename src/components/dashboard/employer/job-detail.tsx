'use client';

import { useLanguage } from '@/contexts/language-context';
import { translations, type Job, type Opportunity } from '@/locales/translations';
import { notFound, useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, MapPin, Users, Calendar, DollarSign, Briefcase, FileText, CheckCircle, ArrowLeft, Send, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type CombinedJob = Partial<Job> & Partial<Opportunity>;

export function JobDetail({ jobId }: { jobId: string }) {
  const { t, language } = useLanguage();
  const router = useRouter();
  const jobDetail_t = t.dashboard_employer.job_detail;

  const [job, setJob] = useState<CombinedJob | null>(null);
  const [isOpportunity, setIsOpportunity] = useState(false);

  useEffect(() => {
    // 1. Check opportunities
    const opportunity = t.dashboard_partner.newOpportunities.opportunities.find(j => j.id === jobId);
    if (opportunity) {
      setJob(opportunity);
      setIsOpportunity(true);
      return;
    }

    // 2. Check active jobs from translations
    const activeJob = t.dashboard_employer.activeJobs.jobs.find(j => j.id === jobId);
    if (activeJob) {
      setJob(activeJob);
      setIsOpportunity(false);
      return;
    }

    // 3. Check jobs from localStorage
    const storedJobsRaw = localStorage.getItem('postedJobs');
    if (storedJobsRaw) {
      try {
        const storedJobs: Job[] = JSON.parse(storedJobsRaw);
        const storedJob = storedJobs.find(j => j.id === jobId);
        if (storedJob) {
          setJob(storedJob);
          setIsOpportunity(false);
          return;
        }
      } catch (e) {
        console.error("Failed to parse jobs from local storage", e);
      }
    }
    
    // 4. If not found, return null to trigger notFound()
    setJob(null);

  }, [jobId, t]);

  if (job === null) {
      // Temporary state while loading, or permanent if not found
      const storedJobsRaw = typeof window !== 'undefined' ? localStorage.getItem('postedJobs') : null;
      if (storedJobsRaw) {
        try {
            const storedJobs = JSON.parse(storedJobsRaw);
            if (storedJobs.find((j: Job) => j.id === jobId)) {
                 // It exists, so we're just waiting for useEffect to set it.
                 return null; // or a loading spinner
            }
        } catch(e) {}
      }
      // If it's not in localStorage and not in translations, it's a 404
      if(!job) return notFound();
  }

  // Define properties based on type for cleaner access
  const title = job.title || '';
  const company = job.company || '';
  const location = job.location || '';
  const visa = isOpportunity ? (job as Opportunity).visa : (job as Job).tags?.join(', ');
  const quantity = isOpportunity ? (job as Opportunity).quantity : (job as Job).applications + " ứng viên";
  const deadline = isOpportunity ? (job as Opportunity).expires : job.date_posted;
  const description = job.description || 'Chưa có mô tả chi tiết.';
  const requirements = job.requirements || [];
  const benefits = job.benefits || [];

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
        <div className="mb-6">
            <Button asChild variant="outline" onClick={() => router.back()}>
                <Link href="#">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {jobDetail_t.backButton}
                </Link>
            </Button>
        </div>

      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
                {visa && <Badge variant="secondary" className="mb-2">{visa}</Badge>}
                <CardTitle className="text-3xl font-bold font-headline">{title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">{company}</CardDescription>
            </div>
             <div className="flex gap-2 flex-shrink-0">
                {isOpportunity ? (
                    <>
                        <Button variant="destructive">{t.dashboard_partner.decline}</Button>
                        <Button className="bg-green-600 hover:bg-green-700">{t.dashboard_partner.accept}</Button>
                    </>
                ) : (
                    <Button asChild>
                       <Link href={`/dashboard/jobs/${job.id}/find-candidates`}>
                           <Users className="mr-2 h-4 w-4" />
                           {t.dashboard_employer.jobs_list.table.actions_items.view_candidates}
                       </Link>
                    </Button>
                )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary"/><span className="font-semibold">{jobDetail_t.location}:</span> {location}</div>
                <div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary"/><span className="font-semibold">{isOpportunity ? jobDetail_t.quantity : t.dashboard_employer.activeJobs.table.applications}:</span> {quantity}</div>
                <div className="flex items-center gap-2"><Briefcase className="w-5 h-5 text-primary"/><span className="font-semibold">{jobDetail_t.visaType}:</span> {visa}</div>
                <div className="flex items-center gap-2"><Calendar className="w-5 h-5 text-primary"/><span className="font-semibold">{isOpportunity ? jobDetail_t.deadline : t.dashboard_employer.jobs_list.table.date_posted}:</span> {deadline}</div>
            </div>

            <div className="prose prose-blue max-w-none dark:prose-invert">
                <h3 className="text-xl font-bold font-headline">{jobDetail_t.jobDescription}</h3>
                <p>{description}</p>
            </div>

             <div>
                <h3 className="text-xl font-bold font-headline mb-4">{jobDetail_t.requirements}</h3>
                <ul className="space-y-2">
                    {requirements.length > 0 ? requirements.map((req, index) => (
                         <li key={index} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>{req}</li>
                    )) : <p className="text-muted-foreground">Chưa có yêu cầu chi tiết.</p>}
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold font-headline mb-4">{jobDetail_t.benefits}</h3>
                 <ul className="space-y-2">
                    {benefits.length > 0 ? benefits.map((ben, index) => (
                         <li key={index} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>{ben}</li>
                    )) : <p className="text-muted-foreground">Chưa có phúc lợi chi tiết.</p>}
                </ul>
            </div>

            {!isOpportunity && (
                <div>
                    <h3 className="text-xl font-bold font-headline mb-4">{jobDetail_t.moreInfo.title}</h3>
                    <p className="text-muted-foreground">{jobDetail_t.moreInfo.content_employer}</p>
                </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
