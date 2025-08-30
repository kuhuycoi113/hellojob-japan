'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/language-context';
import {
  UploadCloud,
  X,
  Smartphone,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ShareShortVideoForm() {
  const { t } = useLanguage();
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideoPreview(reader.result as string);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeVideo = () => {
    setVideoPreview(null);
    setFileName('');
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-400/10 text-green-500 p-3 rounded-lg mb-4">
            <Smartphone className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.shareShortVideo.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.shareShortVideo.subtitle}
          </p>
        </div>
        
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                     {!videoPreview ? (
                        <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[400px] border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors p-4">
                            <UploadCloud className="w-10 h-10 text-gray-400 mb-2" />
                            <p className="text-sm text-center text-gray-500 font-semibold">{t.shareShortVideo.uploadPrompt}</p>
                            <p className="text-xs text-center text-gray-400 mt-2">{t.shareShortVideo.uploadHint}</p>
                            <Input id="video-upload" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="video/mp4,video/quicktime,video/x-msvideo" onChange={handleVideoChange} />
                        </div>
                    ) : (
                         <div className="relative w-full h-full rounded-lg overflow-hidden border bg-black flex items-center justify-center">
                            <video src={videoPreview} className="max-h-[500px] aspect-[9/16]" controls autoPlay loop muted/>
                            <Button
                                variant="destructive"
                                size="icon"
                                className="absolute top-2 right-2 h-8 w-8 rounded-full z-10"
                                onClick={removeVideo}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    )}
                </div>
                <div className="md:col-span-2 space-y-6">
                     <div>
                        <Label htmlFor="caption" className="font-semibold text-lg">{t.shareShortVideo.captionLabel}</Label>
                        <Textarea
                            id="caption"
                            placeholder={t.shareShortVideo.captionPlaceholder}
                            className="min-h-[150px] mt-2 text-base"
                        />
                    </div>
                     <div className="flex justify-end">
                        <Button size="lg">{t.shareShortVideo.submitButton}</Button>
                    </div>
                </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
