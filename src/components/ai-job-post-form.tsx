'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/language-context';
import { FileText, Upload, Mic } from 'lucide-react';

export function AiJobPostForm() {
  const { t } = useLanguage();

  const suggestions = [
    {
      icon: <FileText className="h-8 w-8 text-yellow-500" />,
      title: t.aiJobPost.describeJob.title,
      description: t.aiJobPost.describeJob.description,
    },
    {
      icon: <Upload className="h-8 w-8 text-green-500" />,
      title: t.aiJobPost.uploadJob.title,
      description: t.aiJobPost.uploadJob.description,
    },
    {
      icon: <Mic className="h-8 w-8 text-blue-500" />,
      title: t.aiJobPost.voiceJob.title,
      description: t.aiJobPost.voiceJob.description,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.aiJobPost.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.aiJobPost.subtitle}
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <Textarea
            placeholder={t.aiJobPost.placeholder}
            className="min-h-[150px] text-base"
          />
          <div className="mt-4 flex justify-end">
            <Button size="lg">{t.aiJobPost.submit}</Button>
          </div>
        </div>
        
        <div className="text-center mt-12 mb-8">
            <h3 className="text-xl font-semibold text-gray-700">{t.aiJobPost.suggestionsTitle}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suggestions.map((suggestion) => (
                <Card key={suggestion.title} className="text-center p-6 shadow-md hover:shadow-xl transition-shadow">
                    <CardHeader className="flex justify-center items-center mb-2">
                        {suggestion.icon}
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="text-lg font-semibold mb-2 text-gray-800">{suggestion.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>

      </div>
    </section>
  );
}
