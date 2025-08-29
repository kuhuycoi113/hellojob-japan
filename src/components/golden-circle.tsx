'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { Target, HelpCircle, Settings, Heart, ArrowRight, RefreshCw, Save, Sparkles, LoaderCircle } from 'lucide-react';
import Image from 'next/image';
import { analyzeGoldenCircle, GoldenCircleAnalysisInput, GoldenCircleAnalysisOutput } from '@/ai/flows/golden-circle-analysis';

type SessionState = 'idle' | 'in_progress' | 'completed';

interface GoldenCircleValues {
  why: string;
  how: string;
  what: string;
}

export function GoldenCircle() {
  const { t } = useLanguage();
  const [sessionState, setSessionState] = useState<SessionState>('idle');
  const [values, setValues] = useState<GoldenCircleValues>({ why: '', how: '', what: '' });
  const [analysis, setAnalysis] = useState<GoldenCircleAnalysisOutput | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);


  const handleStart = () => {
    setSessionState('in_progress');
  };
  
  const handleSave = (newValues: GoldenCircleValues) => {
    setValues(newValues);
    setSessionState('completed');
  };

  const handleReset = () => {
    setValues({ why: '', how: '', what: '' });
    setAnalysis(null);
    setIsAnalyzing(false);
    setSessionState('idle');
  }

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setAnalysis(null);
    try {
      const result = await analyzeGoldenCircle(values);
      setAnalysis(result);
    } catch (error) {
      console.error("Error analyzing Golden Circle:", error);
      // You could add a toast notification here to inform the user of the error
    } finally {
      setIsAnalyzing(false);
    }
  }

  const dimensions = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: t.goldenCircle.why.title,
      description: t.goldenCircle.why.description,
    },
    {
      icon: <Settings className="h-8 w-8 text-yellow-500" />,
      title: t.goldenCircle.how.title,
      description: t.goldenCircle.how.description,
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: t.goldenCircle.what.title,
      description: t.goldenCircle.what.description,
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-2xl rounded-2xl overflow-hidden">
          <div className="relative h-64">
            <Image
              src="https://picsum.photos/1200/400?random=12"
              alt={t.goldenCircle.title}
              fill
              className="object-cover"
              data-ai-hint="compass direction purpose"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
                <Badge variant="secondary" className="mb-2 w-fit bg-green-400 text-green-900">{t.recruitRight.goldenCircle.title}</Badge>
                <h1 className="text-3xl font-bold font-headline text-white">{t.goldenCircle.title}</h1>
            </div>
          </div>
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.goldenCircle.description}</p>
            
            {sessionState === 'idle' && (
              <>
                <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                    <div className="relative flex justify-center items-center h-72">
                        <div className="absolute w-72 h-72 border-2 border-dashed border-gray-300 rounded-full"></div>
                        <div className="absolute w-48 h-48 border-2 border-dashed border-gray-300 rounded-full"></div>
                        <div className="absolute w-24 h-24 border-2 border-dashed border-gray-300 rounded-full"></div>

                        <div className="relative z-10 w-24 h-24 bg-primary text-primary-foreground rounded-full flex flex-col justify-center items-center text-center p-2">
                            <span className="font-bold text-lg">WHY</span>
                        </div>
                        <div className="absolute z-10 w-48 h-48 rounded-full flex justify-center items-center pointer-events-none">
                            <span className="font-bold text-lg text-gray-600 bg-gray-50 px-2">HOW</span>
                        </div>
                        <div className="absolute z-10 w-72 h-72 rounded-full flex justify-center items-center pointer-events-none">
                            <span className="font-bold text-lg text-gray-600 bg-gray-50 px-2">WHAT</span>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold font-headline text-gray-800 mb-6">{t.goldenCircle.explanationTitle}</h3>
                    <div className="grid md:grid-cols-1 gap-6">
                        {dimensions.map((dim) => (
                        <Card key={dim.title} className="flex items-start gap-4 p-4 shadow-sm">
                            <div className="bg-primary/5 p-3 rounded-lg mt-1">
                            {dim.icon}
                            </div>
                            <div>
                            <h4 className="font-semibold text-gray-800 text-lg">{dim.title}</h4>
                            <p className="text-muted-foreground">{dim.description}</p>
                            </div>
                        </Card>
                        ))}
                    </div>
                </div>
              </>
            )}

            {sessionState === 'in_progress' && (
              <GoldenCircleForm onSave={handleSave} />
            )}

            {sessionState === 'completed' && (
              <GoldenCircleResults 
                values={values} 
                onReset={handleReset} 
                onAnalyze={handleAnalyze}
                analysisResult={analysis}
                isAnalyzing={isAnalyzing}
              />
            )}

            {sessionState === 'idle' && (
              <Card className="bg-primary/5 border-primary/20 shadow-sm">
                  <CardHeader>
                      <div className="flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                              <HelpCircle className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-primary font-headline">{t.goldenCircle.ctaTitle}</CardTitle>
                      </div>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground mb-4">{t.goldenCircle.ctaDescription}</p>
                      <Button onClick={handleStart}>
                          {t.goldenCircle.ctaButton} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <p className="text-sm text-muted-foreground mt-3">{t.goldenCircle.note}</p>
                  </CardContent>
              </Card>
            )}

          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function GoldenCircleForm({ onSave }: { onSave: (values: GoldenCircleValues) => void }) {
  const { t } = useLanguage();
  const [why, setWhy] = useState('');
  const [how, setHow] = useState('');
  const [what, setWhat] = useState('');

  const handleSubmit = () => {
    onSave({ why, how, what });
  }

  const formFields = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: t.goldenCircle.why.title,
      description: t.goldenCircle.why.formPrompt,
      value: why,
      setValue: setWhy,
    },
    {
      icon: <Settings className="h-8 w-8 text-yellow-500" />,
      title: t.goldenCircle.how.title,
      description: t.goldenCircle.how.formPrompt,
      value: how,
      setValue: setHow,
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: t.goldenCircle.what.title,
      description: t.goldenCircle.what.formPrompt,
      value: what,
      setValue: setWhat,
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold font-headline text-center text-gray-800">{t.goldenCircle.formTitle}</h2>
      {formFields.map(field => (
        <Card key={field.title} className="p-6 shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-primary/5 p-3 rounded-lg mt-1">{field.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{field.title}</h3>
              <p className="text-muted-foreground mb-4">{field.description}</p>
              <Textarea
                value={field.value}
                onChange={(e) => field.setValue(e.target.value)}
                rows={4}
                className="text-base"
              />
            </div>
          </div>
        </Card>
      ))}
      <div className="text-center">
        <Button size="lg" onClick={handleSubmit}>
          <Save className="mr-2 h-5 w-5" />
          {t.goldenCircle.saveButton}
        </Button>
      </div>
    </div>
  );
}

interface GoldenCircleResultsProps {
  values: GoldenCircleValues;
  onReset: () => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  analysisResult: GoldenCircleAnalysisOutput | null;
}

function GoldenCircleResults({ values, onReset, onAnalyze, isAnalyzing, analysisResult }: GoldenCircleResultsProps) {
  const { t } = useLanguage();
  
  const results = [
    { title: t.goldenCircle.why.title, value: values.why, icon: <Heart className="h-8 w-8 text-primary" />},
    { title: t.goldenCircle.how.title, value: values.how, icon: <Settings className="h-8 w-8 text-yellow-500" /> },
    { title: t.goldenCircle.what.title, value: values.what, icon: <Target className="h-8 w-8 text-blue-500" /> },
  ]
  
  return (
    <div className="space-y-6 text-center">
      <h2 className="text-2xl font-bold font-headline text-gray-800">{t.goldenCircle.resultsTitle}</h2>
      <p className="text-muted-foreground">{t.goldenCircle.resultsDescription}</p>
      <div className="space-y-4 text-left">
        {results.map(result => (
          <Card key={result.title} className="p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary/5 p-3 rounded-lg mt-1">{result.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{result.title}</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{result.value || t.goldenCircle.noResult}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {(isAnalyzing || analysisResult) && (
        <Card className="p-6 shadow-md text-left bg-blue-50/50">
           <CardTitle className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary"/>
            {t.goldenCircle.aiAnalysis.title}
          </CardTitle>
          {isAnalyzing && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <LoaderCircle className="w-5 h-5 animate-spin" />
              <p>{t.goldenCircle.aiAnalysis.loading}</p>
            </div>
          )}
          {analysisResult && (
            <div className="text-gray-700 whitespace-pre-wrap prose">
              {analysisResult.analysis}
            </div>
          )}
        </Card>
      )}


      <div className="flex justify-center gap-4">
        <Button onClick={onReset} variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" />
          {t.goldenCircle.resetButton}
        </Button>
        <Button onClick={onAnalyze} disabled={isAnalyzing}>
          {isAnalyzing ? (
            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          {t.goldenCircle.aiAnalysis.button}
        </Button>
      </div>
    </div>
  )
}
