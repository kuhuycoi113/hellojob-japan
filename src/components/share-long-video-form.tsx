'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/language-context';
import {
  UploadCloud,
  X,
  Video,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function ShareLongVideoForm() {
  const { t } = useLanguage();
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeVideo = () => {
    setVideoPreview(null);
  };
  
  const categories = [
    t.handbook.articles[0].category,
    t.handbook.articles[1].category,
    t.handbook.articles[2].category,
    t.handbook.articles[3].category,
    t.handbook.articles[4].category,
    t.handbook.articles[5].category,
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-red-400/10 text-red-500 p-3 rounded-lg mb-4">
            <Video className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.shareLongVideo.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.shareLongVideo.subtitle}
          </p>
        </div>
        
        <Card className="shadow-lg">
           <CardContent className="p-6">
                {!videoPreview ? (
                    <div className="relative flex flex-col items-center justify-center w-full h-80 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors p-4">
                        <UploadCloud className="w-12 h-12 text-gray-400 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-700">{t.shareLongVideo.uploadTitle}</h3>
                        <p className="text-sm text-gray-500 mt-1">{t.shareLongVideo.uploadPrompt}</p>
                        <Input id="video-upload" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="video/mp4,video/quicktime,video/x-msvideo" onChange={handleVideoChange} />
                         <Button asChild className="mt-4" variant="outline" onClick={(e) => e.stopPropagation()}>
                            <label htmlFor="video-upload" className="cursor-pointer">{t.shareLongVideo.uploadButton}</label>
                        </Button>
                    </div>
                ) : (
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-black group">
                        <video src={videoPreview} className="w-full h-full" controls autoPlay loop muted/>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                                variant="destructive"
                                size="icon"
                                className="h-8 w-8 rounded-full z-10"
                                onClick={removeVideo}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
          <CardHeader>
            <CardTitle>{t.shareLongVideo.detailsTitle}</CardTitle>
            <CardDescription>{t.shareLongVideo.detailsDescription}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="space-y-2">
                <Label htmlFor="title" className="font-semibold">{t.shareLongVideo.titleLabel}</Label>
                <Input id="title" placeholder={t.shareLongVideo.titlePlaceholder} className="text-base" />
            </div>
            
            <div className="space-y-2">
                <Label htmlFor="description" className="font-semibold">{t.shareLongVideo.descriptionLabel}</Label>
                <Textarea
                    id="description"
                    placeholder={t.shareLongVideo.descriptionPlaceholder}
                    className="min-h-[150px] text-base"
                />
            </div>
            
            <div className="space-y-2">
                <Label htmlFor="category" className="font-semibold">{t.shareLongVideo.categoryLabel}</Label>
                 <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder={t.sharePost.selectCategory} />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
            </div>

          </CardContent>
          <CardFooter className="flex justify-end">
              <Button size="lg">{t.shareLongVideo.submitButton}</Button>
          </CardFooter>
        </Card>

      </div>
    </section>
  );
}
