'use client';

import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/locales/translations';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, MapPin, Users, Calendar, DollarSign, Briefcase, FileText, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function JobDetail({ jobId }: { jobId: string }) {
  const { t, language } = useLanguage();
  const jobDetail_t = t.dashboard_employer.job_detail;
  
  const allOpportunities = [
      ...translations.vi.dashboard_partner.newOpportunities.opportunities,
      ...translations.en.dashboard_partner.newOpportunities.opportunities,
      ...translations.ja.dashboard_partner.newOpportunities.opportunities
  ];

  const job = t.dashboard_partner.newOpportunities.opportunities.find(j => j.id === jobId);

  if (!job) {
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
        <div className="mb-6">
            <Button asChild variant="outline">
                <Link href="/dashboard/partner">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {jobDetail_t.backButton}
                </Link>
            </Button>
        </div>

      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
                <Badge variant="secondary" className="mb-2">{job.visa}</Badge>
                <CardTitle className="text-3xl font-bold font-headline">{job.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">{job.company}</CardDescription>
            </div>
            <div className="flex gap-2 flex-shrink-0">
                <Button variant="destructive">{t.dashboard_partner.decline}</Button>
                <Button className="bg-green-600 hover:bg-green-700">{t.dashboard_partner.accept}</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary"/><span className="font-semibold">{jobDetail_t.location}:</span> {job.location}</div>
                <div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary"/><span className="font-semibold">{jobDetail_t.quantity}:</span> {job.quantity}</div>
                <div className="flex items-center gap-2"><Briefcase className="w-5 h-5 text-primary"/><span className="font-semibold">{jobDetail_t.visaType}:</span> {job.visa}</div>
                <div className="flex items-center gap-2"><Calendar className="w-5 h-5 text-primary"/><span className="font-semibold">{jobDetail_t.deadline}:</span> {job.expires}</div>
            </div>

            <div className="prose prose-blue max-w-none">
                <h3 className="text-xl font-bold font-headline">{jobDetail_t.jobDescription}</h3>
                <p>{job.description}</p>
            </div>

             <div>
                <h3 className="text-xl font-bold font-headline mb-4">{jobDetail_t.requirements}</h3>
                <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                         <li key={index} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>{req}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold font-headline mb-4">{jobDetail_t.benefits}</h3>
                 <ul className="space-y-2">
                    {job.benefits.map((ben, index) => (
                         <li key={index} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>{ben}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold font-headline mb-4">{jobDetail_t.moreInfo.title}</h3>
                <p className="text-muted-foreground">{jobDetail_t.moreInfo.content}</p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
