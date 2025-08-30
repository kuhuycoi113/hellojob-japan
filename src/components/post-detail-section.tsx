'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/language-context';
import { MessageSquare } from 'lucide-react';

export function PostDetailSection() {
  const { t } = useLanguage();
  
  const article = t.postDetail.article;
  const comments = t.postDetail.comments;

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <article className="prose lg:prose-xl max-w-none bg-white p-8 sm:p-12 rounded-xl shadow-lg">
          <Badge>{article.category}</Badge>
          <h1 className="mt-4">{article.title}</h1>
          <p className="lead">{article.excerpt}</p>
          <div className="relative aspect-video my-8 rounded-lg overflow-hidden">
            <Image
              src={article.image.src}
              alt={article.image.alt}
              fill
              className="object-cover"
              data-ai-hint={article.image.hint}
            />
          </div>
          <p>{article.content.p1}</p>
          <p>{article.content.p2}</p>
          <blockquote>{article.content.quote}</blockquote>
          <p>{article.content.p3}</p>
        </article>

        <Card className="mt-12 shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    {t.postDetail.commentSection.title}
                </CardTitle>
                 <CardDescription>
                    {t.postDetail.commentSection.subtitle}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                         <div className="space-y-1.5">
                            <Label htmlFor="name">{t.postDetail.commentForm.name.label}</Label>
                            <Input id="name" placeholder={t.postDetail.commentForm.name.placeholder} />
                        </div>
                         <div className="space-y-1.5">
                            <Label htmlFor="email">{t.postDetail.commentForm.email.label}</Label>
                            <Input id="email" type="email" placeholder={t.postDetail.commentForm.email.placeholder} />
                        </div>
                    </div>
                     <div className="space-y-1.5">
                        <Label htmlFor="comment">{t.postDetail.commentForm.comment.label}</Label>
                        <Textarea id="comment" placeholder={t.postDetail.commentForm.comment.placeholder} rows={4} />
                    </div>
                    <div className="flex justify-end">
                        <Button>{t.postDetail.commentForm.submit}</Button>
                    </div>
                </div>

                <div className="mt-8 space-y-6">
                    {comments.map((comment, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <Avatar>
                                <AvatarImage src={comment.avatar} />
                                <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-gray-800">{comment.name}</p>
                                    <p className="text-xs text-muted-foreground">{comment.time}</p>
                                </div>
                                <p className="text-gray-700 mt-1">{comment.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
