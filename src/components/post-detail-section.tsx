'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/language-context';
import {
  MessageSquare,
  ThumbsUp,
  MessageCircle,
  BookOpen,
  PlayCircle,
  PlusCircle,
} from 'lucide-react';
import Link from 'next/link';
import { FeaturedJobsSidebar } from './featured-jobs-sidebar';

export function PostDetailSection() {
  const { t } = useLanguage();

  const article = t.postDetail.article;
  const comments = t.postDetail.comments;
  const relatedContent = t.postDetail.relatedContent;

  const renderContent = (content: string) => {
    const lines = content.split('\n').filter(p => p.trim() !== '');
    const elements = [];
    let listItems: string[] = [];
  
    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-none space-y-2 my-4">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-3 text-primary">✨</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };
  
    for (const line of lines) {
      if (line.startsWith('<h2>')) {
        flushList();
        elements.push(<h2 key={elements.length} className="text-2xl font-bold my-6">{line.replace(/<h2>/g, '')}</h2>);
      } else if (line.startsWith('<ul>')) {
        flushList(); // Flush previous list if any
      } else if (line.startsWith('<li>')) {
        listItems.push(line.replace(/<li>/g, ''));
      } else if (line.startsWith('</ul>')) {
        flushList();
      } else if (line.includes('<strong>')) {
         flushList();
         const parts = line.split(/<strong>(.*?)<\/strong>/g);
         elements.push(
            <p key={elements.length}>
              {parts.map((part, index) => 
                index % 2 === 1 ? <strong key={index} className="font-bold">{part}</strong> : part
              )}
            </p>
         )
      } else if (line.includes(t.postDetail.article.ctaPhrase)) {
        flushList();
        const parts = line.split(t.postDetail.article.ctaPhrase);
        elements.push(
            <div key={elements.length} className="not-prose">
              <p>{parts[0]}</p>
              <div className="my-6 text-center">
                 <Button asChild variant="secondary" size="default">
                   <Link href="/post-job-ai">
                     <PlusCircle className="mr-2 h-4 w-4" />
                     {t.postDetail.article.ctaButton}
                   </Link>
                 </Button>
              </div>
              <p>{parts[1]}</p>
            </div>
        )
      }
       else {
        flushList();
        elements.push(<p key={elements.length}>{line}</p>);
      }
    }
    flushList(); // flush any remaining list items
    return elements;
  };


  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            <article className="prose lg:prose-xl max-w-none bg-white p-8 sm:p-12 rounded-xl shadow-lg">
              <div className="not-prose">
                <Badge>{article.category}</Badge>
              </div>
              <h1 className="mt-4">{article.title}</h1>
              <div className="not-prose flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span>{article.author}</span>
                <span>&middot;</span>
                <span>{article.readTime}</span>
              </div>
              <div className="relative aspect-video my-8 rounded-lg overflow-hidden">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  fill
                  className="object-cover"
                  data-ai-hint={article.image.hint}
                />
              </div>
              {renderContent(article.content)}
            </article>

            <Card className="shadow-lg" id="comments">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  {t.postDetail.commentSection.title} ({comments.length})
                </CardTitle>
                <CardDescription>
                  {t.postDetail.commentSection.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="comment" className="sr-only">
                      {t.postDetail.commentForm.comment.label}
                    </Label>
                    <Textarea
                      id="comment"
                      placeholder={t.postDetail.commentForm.comment.placeholder}
                      rows={3}
                    />
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
                        <AvatarFallback>
                          {comment.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-gray-800">
                            {comment.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {comment.time}
                          </p>
                        </div>
                        <p className="text-gray-700 mt-1">{comment.text}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-primary">
                            <ThumbsUp className="w-3.5 h-3.5" />
                            {comment.likes} {t.postDetail.commentActions.like}
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary">
                            <MessageCircle className="w-3.5 h-3.5" />
                            {t.postDetail.commentActions.reply}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Column */}
          <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-24">
            <FeaturedJobsSidebar />

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-xl">
                  <BookOpen className="w-5 h-5 text-primary" />
                  {t.postDetail.relatedContent.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedContent.items.map((item, index) => (
                  <Link href="#" key={index}>
                    <div className="group flex items-start gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <div className="relative w-24 h-24 sm:w-32 sm:h-20 shrink-0 rounded-md overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                        {item.type === 'video' && (
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <PlayCircle className="w-8 h-8 text-white/80" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-1">
                          {item.category}
                        </Badge>
                        <h4 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}
