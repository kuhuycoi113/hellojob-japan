'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { notFound, useSearchParams } from 'next/navigation';
import { type GenerateJobPostOutput } from '@/ai/schemas/generate-job-post-schema';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, CheckCircle, FileText, Users, ArrowLeft, Send, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { allCandidates, type Candidate } from '@/data/candidates';
import { CandidateCard } from '@/components/dashboard/employer/candidate-card';

export default function FindCandidatesPage({ params }: { params: { id: string } }) {
  const { t, language } = useLanguage();
  const [jobPost, setJobPost] = useState<GenerateJobPostOutput | null>(null);
  const [matchingCandidates, setMatchingCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    try {
      const storedJobPost = localStorage.getItem('latestJobPost');
      if (storedJobPost) {
        const parsedJobPost: GenerateJobPostOutput = JSON.parse(storedJobPost);
        setJobPost(parsedJobPost);
        // Simulate finding matching candidates
        setMatchingCandidates(allCandidates.slice(0, 10));
      }
    } catch (error) {
      console.error("Failed to parse job post from localStorage", error);
    }
  }, []);

  if (!jobPost) {
    // This can be a loading state as well
    return null;
  }

  return (
    <div className="bg-blue-50/50">
        <div className="container mx-auto max-w-7xl py-12 px-4">
            <div className="mb-6">
                <Button asChild variant="outline">
                    <Link href="/dashboard">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Quay lại trang quản lý
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left Column: Job Details */}
                <aside className="lg:col-span-1 lg:sticky lg:top-24 space-y-6">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <div className="flex items-center gap-2 text-primary">
                                <Sparkles className="h-5 w-5"/>
                                <p className="font-semibold">Tin tuyển dụng của bạn</p>
                            </div>
                            <CardTitle className="text-2xl font-bold font-headline pt-2">{jobPost.jobTitle}</CardTitle>
                            <CardDescription className="text-md text-muted-foreground">{jobPost.companyName} - {jobPost.location}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2"><FileText className="w-4 h-4 text-primary"/> Mô tả công việc</h4>
                                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{jobPost.jobDescription}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary"/> Yêu cầu</h4>
                                <ul className="space-y-1.5 text-sm text-muted-foreground">
                                {jobPost.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 mt-1 text-green-500 flex-shrink-0"/>
                                        <span>{req}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                             <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary"/> Phúc lợi</h4>
                                <ul className="space-y-1.5 text-sm text-muted-foreground">
                                {jobPost.benefits.map((ben, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 mt-1 text-green-500 flex-shrink-0"/>
                                        <span>{ben}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </aside>

                {/* Right Column: Matching Candidates */}
                <main className="lg:col-span-2 space-y-6">
                     <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl font-bold font-headline"><Users className="w-6 h-6 text-primary"/> Ứng viên phù hợp</CardTitle>
                            <CardDescription>Dựa trên tin tuyển dụng của bạn, chúng tôi đã tìm thấy {matchingCandidates.length} ứng viên tiềm năng.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {matchingCandidates.map(candidate => (
                                <CandidateCard key={candidate.id} candidate={candidate} />
                            ))}
                             <div className="text-center pt-6">
                                <Button variant="outline">Xem thêm ứng viên</Button>
                            </div>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    </div>
  );
}
