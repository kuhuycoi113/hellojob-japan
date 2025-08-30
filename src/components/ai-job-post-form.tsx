'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/language-context';
import { Sparkles, LoaderCircle, FileText, Upload, Mic, Award, CheckCircle } from 'lucide-react';
import { generateJobPost } from '@/ai/flows/generate-job-post';
import type { GenerateJobPostOutput } from '@/ai/flows/generate-job-post';
import { useToast } from "@/hooks/use-toast";

type SessionState = 'idle' | 'loading' | 'completed';

export function AiJobPostForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [state, setState] = useState<SessionState>('idle');
  const [description, setDescription] = useState('');
  const [jobPost, setJobPost] = useState<GenerateJobPostOutput | null>(null);

  const suggestions = [
    t.aiJobPost.suggestions.s1,
    t.ai_job_post_form.suggestions.s2,
    t.ai_job_post_form.suggestions.s3,
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setDescription(suggestion);
  };
  
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
      const result = await generateJobPost({ description });
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
               <div className="mt-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">{t.aiJobPost.suggestionsTitle}</h4>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((s) => (
                      <Button key={s} variant="outline" size="sm" onClick={() => handleSuggestionClick(s)} disabled={state === 'loading'}>
                        {s}
                      </Button>
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
