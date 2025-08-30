'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/language-context';
import {
  ImageIcon,
  UploadCloud,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function ShareImagePostForm() {
  const { t } = useLanguage();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400/10 text-yellow-500 p-3 rounded-lg mb-4">
            <ImageIcon className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.shareImagePost.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.shareImagePost.subtitle}
          </p>
        </div>
        
        <Card className="shadow-lg">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
                <Label htmlFor="image-upload" className="font-semibold">{t.shareImagePost.imageLabel}</Label>
                {!imagePreview ? (
                    <div className="relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <UploadCloud className="w-10 h-10 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">{t.shareImagePost.uploadPrompt}</p>
                        <p className="text-xs text-gray-400">{t.shareImagePost.uploadHint}</p>
                        <Input id="image-upload" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" onChange={handleImageChange} />
                    </div>
                ) : (
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border">
                        <Image src={imagePreview} alt="Image preview" fill className="object-contain" />
                        <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 h-8 w-8 rounded-full z-10"
                            onClick={removeImage}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="title" className="font-semibold">{t.shareImagePost.titleLabel}</Label>
                <Input id="title" placeholder={t.shareImagePost.titlePlaceholder} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="content" className="font-semibold">{t.shareImagePost.contentLabel}</Label>
                <Textarea
                    id="content"
                    placeholder={t.shareImagePost.contentPlaceholder}
                    className="min-h-[150px]"
                />
            </div>
            
            <div className="flex justify-end">
              <Button size="lg">{t.shareImagePost.submitButton}</Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
