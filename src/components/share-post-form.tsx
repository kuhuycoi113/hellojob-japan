'use client';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/contexts/language-context';
import {
  FileText,
  Lightbulb,
  MessageSquareQuote,
  Pencil,
} from 'lucide-react';

export function SharePostForm() {
  const { t } = useLanguage();

  const categories = [
    t.handbook.articles[0].category,
    t.handbook.articles[1].category,
    t.handbook.articles[2].category,
    t.handbook.articles[3].category,
    t.handbook.articles[4].category,
    t.handbook.articles[5].category,
  ];

  const outlinePoints = [
    {
      icon: <MessageSquareQuote className="h-8 w-8 text-primary" />,
      title: t.sharePost.outline1.title,
      description: t.sharePost.outline1.description,
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: t.sharePost.outline2.title,
      description: t.sharePost.outline2.description,
    },
    {
      icon: <Pencil className="h-8 w-8 text-green-500" />,
      title: t.sharePost.outline3.title,
      description: t.sharePost.outline3.description,
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary p-3 rounded-lg mb-4">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.sharePost.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.sharePost.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="category" className="font-semibold">
                      {t.sharePost.categoryLabel}
                    </Label>
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
                  <div>
                    <Label htmlFor="title" className="font-semibold">
                      {t.sharePost.titleLabel}
                    </Label>
                    <Input
                      id="title"
                      placeholder={t.sharePost.titlePlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="content" className="font-semibold">
                    {t.sharePost.contentLabel}
                  </Label>
                  <Textarea
                    id="content"
                    placeholder={t.sharePost.contentPlaceholder}
                    className="min-h-[300px]"
                  />
                </div>
                <div className="flex justify-end">
                  <Button size="lg">{t.sharePost.submitButton}</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 lg:sticky lg:top-24">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>{t.sharePost.outlineTitle}</CardTitle>
                <CardDescription>
                  {t.sharePost.outlineSubtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {outlinePoints.map((point) => (
                  <div key={point.title} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{point.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
