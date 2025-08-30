'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Video, Newspaper, BookOpen, PlayCircle, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function HandbookSection() {
    const { t } = useLanguage();

    const featuredArticle = {
        category: t.handbook.featured.category,
        title: t.handbook.featured.title,
        description: t.handbook.featured.description,
        link: t.handbook.featured.link,
    };

    const shortVideos = [
        t.handbook.videos[0],
        t.handbook.videos[1],
        t.handbook.videos[2],
    ];

    const newPosts = [
        {
            image: "https://picsum.photos/1200/600?random=3",
            category: t.handbook.posts[0].category,
            title: t.handbook.posts[0].title,
            hint: 'business meeting',
        },
        {
            image: "https://picsum.photos/1200/600?random=4",
            category: t.handbook.posts[1].category,
            title: t.handbook.posts[1].title,
            hint: 'team collaboration',
        },
        {
            image: "https://picsum.photos/1200/600?random=7",
            category: t.handbook.posts[2].category,
            title: t.handbook.posts[2].title,
            hint: 'legal document',
        },
        {
            image: "https://picsum.photos/1200/600?random=8",
            category: t.handbook.posts[3].category,
            title: t.handbook.posts[3].title,
            hint: 'city life japan',
        },
    ];

    const newsAndArticles = t.handbook.articles;

  return (
    <section className="py-16 sm:py-24 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Article */}
            <Card className="shadow-lg rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                        <Image src="https://picsum.photos/1200/600?random=1" alt={featuredArticle.title} fill className="object-cover" data-ai-hint="legal document handshake" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                        <Badge variant="secondary" className="bg-accent/20 text-accent-foreground font-semibold w-fit mb-4">{featuredArticle.category}</Badge>
                        <h2 className="text-2xl font-bold font-headline mb-4 text-gray-800">{featuredArticle.title}</h2>
                        <p className="text-muted-foreground mb-6">{featuredArticle.description}</p>
                        <Button variant="link" className="p-0 self-start">
                            {featuredArticle.link} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>

            {/* New Posts */}
            <div>
              <h3 className="text-2xl font-bold font-headline text-gray-800 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                {t.handbook.newPostsTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newPosts.map((post, index) => (
                  <Card key={index} className="shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-w-16 aspect-h-9">
                        <Image src={post.image} alt={post.title} width={600} height={338} className="object-cover" data-ai-hint={post.hint} />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-2">{post.category}</Badge>
                      <h4 className="font-bold font-headline text-lg text-gray-800">{post.title}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Short Videos */}
            <div>
              <h3 className="text-2xl font-bold font-headline text-gray-800 mb-6 flex items-center gap-2">
                <Video className="w-6 h-6 text-primary" />
                {t.handbook.videoTitle}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {shortVideos.map((video, index) => (
                  <Card key={index} className="shadow-md rounded-xl overflow-hidden group hover:shadow-xl transition-shadow">
                    <div className="relative aspect-[9/16]">
                      <Image 
                        src={`https://picsum.photos/225/400?random=${index + 15}`} 
                        alt={video.title} 
                        fill
                        className="object-cover w-full h-full"
                        data-ai-hint="person speaking presentation"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex flex-col justify-end p-2">
                        <PlayCircle className="w-8 h-8 text-white/90 drop-shadow-lg mb-2" />
                        <h4 className="font-semibold text-white text-xs leading-tight drop-shadow-md">{video.title}</h4>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* News & Articles */}
            <div>
              <h3 className="text-2xl font-bold font-headline text-gray-800 mb-6 flex items-center gap-2">
                <Newspaper className="w-6 h-6 text-primary" />
                {t.handbook.newsTitle}
              </h3>
              <div className="space-y-4">
                {newsAndArticles.map((article, index) => (
                    <Card key={index} className="p-4 shadow-sm rounded-lg hover:bg-white transition-colors">
                        <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                        <h4 className="font-semibold text-gray-800 leading-snug">{article.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{article.readTime}</p>
                    </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
            <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                {t.handbook.shareContentButton} <Send className="ml-2 h-5 w-5" />
            </Button>
        </div>
      </div>
    </section>
  );
}
