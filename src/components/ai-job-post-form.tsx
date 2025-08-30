'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/language-context';
import { Sparkles, LoaderCircle, FileText, Upload, Mic, Award, CheckCircle, Info } from 'lucide-react';
import { generateJobPost } from '@/ai/flows/generate-job-post';
import type { GenerateJobPostOutput } from '@/ai/schemas/generate-job-post-schema';
import { useToast } from "@/hooks/use-toast";
import { Badge } from '@/components/ui/badge';

type SessionState = 'idle' | 'loading' | 'completed';

export function AiJobPostForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const role = searchParams.get('role');
  const visaType = searchParams.get('visaType');
  const visaSubType = searchParams.get('visaSubType');
  
  const [state, setState] = useState<SessionState>('idle');
  const [description, setDescription] = useState('');
  const [jobPost, setJobPost] = useState<GenerateJobPostOutput | null>(null);

  const suggestionCards = [
    {
      icon: <FileText className="w-8 h-8 text-yellow-500" />,
      title: "Mô tả thông tin cá nhân",
      description: '"Tôi là sinh viên năm cuối trường X, chuyên ngành Y, đang tìm kiếm cơ hội thực tập..."'
    },
    {
      icon: <Upload className="w-8 h-8 text-green-500" />,
      title: "Đăng từ hồ sơ có sẵn",
      description: "Tải lên CV file PDF hoặc Word để AI tự động trích xuất và điền thông tin."
    },
    {
      icon: <Mic className="w-8 h-8 text-blue-500" />,
      title: "Tạo hồ sơ bằng giọng nói",
      description: "Chỉ cần bấm nút và mô tả về bản thân, chúng tôi sẽ lo phần còn lại."
    }
  ];
  
  const handleGenerate = async () => {
    if (!description.trim()) {
      toast({
        title: t.ai_job_post_form.error.title,
        description: t.ai_job_post_form.error.description,
        variant: "destructive",
      })
      return;
    }
    setState('loading');
    setJobPost(null);
    try {
      const result = await generateJobPost({ 
        description,
        role: role || undefined,
        visaType: visaType || undefined,
        visaSubType: visaSubType || undefined
      });
      setJobPost(result);
      setState('completed');
    } catch (error) {
      console.error("Error generating job post:", error);
      toast({
        title: t.ai_job_post_form.error.apiTitle,
        description: t.ai_job_post_form.error.apiDescription,
        variant: "destructive",
      })
      setState('idle');
    }
  };

  const handleReset = () => {
    setState('idle');
    setDescription('');
    setJobPost(null);
  }

  const hasSelections = role || visaType || visaSubType;

  return (
    <section className="py-16 sm:py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary p-3 rounded-lg mb-4">
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.aiJobPost.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.aiJobPost.subtitle}
          </p>
        </div>
        
        {hasSelections && (
          <Card className="mb-8 bg-blue-100/50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600"/>
                Your Selections
              </CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {role && <Badge variant="secondary">{role}</Badge>}
                {visaType && <Badge variant="secondary">{visaType}</Badge>}
                {visaSubType && <Badge variant="secondary">{visaSubType}</Badge>}
              </div>
            </CardHeader>
          </Card>
        )}


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Input Card */}
          <Card className="shadow-lg sticky top-24">
            <CardHeader>
              <CardTitle>{t.ai_job_post_form.input.title}</CardTitle>
              <CardDescription>{t.ai_job_post_form.input.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder={t.aiJobPost.placeholder}
                className="min-h-[150px] text-base"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={state === 'loading'}
              />
               <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">Thử một vài gợi ý:</h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {suggestionCards.map((card) => (
                      <Card key={card.title} className="text-center p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex justify-center mb-3">{card.icon}</div>
                        <h5 className="font-semibold text-sm mb-1">{card.title}</h5>
                        <p className="text-xs text-muted-foreground">{card.description}</p>
                      </Card>
                    ))}
                  </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              {state === 'completed' && (
                  <Button variant="outline" onClick={handleReset}>{t.ai_job_post_form.input.reset}</Button>
              )}
              <Button size="lg" onClick={handleGenerate} disabled={state === 'loading'}>
                {state === 'loading' ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  <Sparkles className="mr-2" />
                )}
                {t.aiJobPost.submit}
              </Button>
            </CardFooter>
          </Card>
          
          {/* Output Card */}
          <Card className="shadow-lg min-h-[500px]">
            <CardHeader>
              <CardTitle>{t.ai_job_post_form.output.title}</CardTitle>
              <CardDescription>{t.ai_job_post_form.output.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {state === 'loading' && (
                <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                  <LoaderCircle className="h-12 w-12 animate-spin text-primary mb-4" />
                  <p className="text-lg">{t.ai_job_post_form.output.loading}</p>
                </div>
              )}

              {state === 'idle' && (
                 <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground bg-gray-50 rounded-lg">
                  <Award className="h-12 w-12 text-yellow-400 mb-4" />
                  <p className="text-lg font-medium">{t.ai_job_post_form.output.idle.title}</p>
                  <p className="max-w-xs">{t.ai_job_post_form.output.idle.description}</p>
                </div>
              )}

              {state === 'completed' && jobPost && (
                <div className="space-y-6 animate-in fade-in-50">
                  <div>
                    <h2 className="text-2xl font-bold font-headline text-primary">{jobPost.jobTitle}</h2>
                    <p className="text-muted-foreground font-medium">{jobPost.companyName} - {jobPost.location}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.ai_job_post_form.output.jobDescription}</h3>
                    <p className="text-gray-700 whitespace-pre-wrap">{jobPost.jobDescription}</p>
                  </div>
                   <div>
                    <h3 className="text-lg font-semibold mb-2">{t.ai_job_post_form.output.requirements}</h3>
                    <ul className="space-y-2">
                      {jobPost.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                   <div>
                    <h3 className="text-lg font-semibold mb-2">{t.ai_job_post_form.output.benefits}</h3>
                    <ul className="space-y-2">
                      {jobPost.benefits.map((ben, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
