'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Video,
  Newspaper,
  BookOpen,
  PlayCircle,
  Send,
  Search,
  Image as ImageIcon,
  Smartphone,
} from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Input } from './ui/input';

export function HandbookSection() {
  const { t } = useLanguage();

  const featuredArticle = {
    category: t.handbook.featured.category,
    title: t.handbook.featured.title,
    description: t.handbook.featured.description,
    link: t.handbook.featured.link,
  };
  
  const newPosts = t.handbook.posts;
  const shortVideos = t.handbook.videos;
  const newsAndArticles = t.handbook.articles;
  const imageStories = t.handbook.imagePosts.stories;
  
  const longVideos = t.handbook.longVideos;


  return (
    <section className="py-16 sm:py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 space-y-12">
        
        {/* Header and Search */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-primary/10 text-primary p-4 rounded-2xl mb-4">
              <BookOpen className="h-10 w-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-headline text-gray-800">
            {t.handbook.pageTitle}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {t.handbook.pageSubtitle}
          </p>
          <div className="mt-8 max-w-xl mx-auto">
              <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                      placeholder={t.handbook.searchPlaceholder}
                      className="pl-12 h-14 text-base rounded-full shadow-inner bg-white" 
                  />
              </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Main Content Column */}
            <main className="lg:col-span-2 space-y-12">

                {/* Featured Article */}
                <Card className="shadow-lg rounded-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                        <Image
                        src="https://picsum.photos/800/600?random=1"
                        alt={featuredArticle.title}
                        fill
                        className="object-cover"
                        data-ai-hint="person thinking question marks"
                        />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                        <Badge
                        variant="secondary"
                        className="bg-accent/20 text-accent-foreground font-semibold w-fit mb-4"
                        >
                        {featuredArticle.category}
                        </Badge>
                        <h2 className="text-3xl font-bold font-headline mb-4 text-gray-800">
                        {featuredArticle.title}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                        {featuredArticle.description}
                        </p>
                        <Button variant="link" className="p-0 self-start" asChild>
                        <Link href="/handbook/post-detail">
                            {featuredArticle.link}{' '}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        </Button>
                    </div>
                    </div>
                </Card>

                {/* New Posts Section */}
                <div>
                    <h3 className="text-2xl font-bold font-headline text-gray-800 mb-6 flex items-center gap-3">
                        <BookOpen className="w-7 h-7 text-primary" />
                        {t.handbook.newPostsTitle}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {newPosts.map((post, index) => (
                             <Card key={index} className="shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col group">
                                <div className="relative w-full aspect-video">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={post.hint}
                                    />
                                     {post.type === 'video' && (
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                            <PlayCircle className="w-12 h-12 text-white/80 transform transition-transform group-hover:scale-110" />
                                        </div>
                                    )}
                                </div>
                                <CardContent className="p-4 flex-grow flex flex-col">
                                <Badge variant="outline" className="mb-2 w-fit">
                                    {post.category}
                                </Badge>
                                <h4 className="font-bold font-headline text-lg text-gray-800 flex-grow group-hover:text-primary transition-colors">
                                    {post.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{post.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            {/* Sidebar Column */}
            <aside className="lg:col-span-1 space-y-12 lg:sticky lg:top-24">
                {/* Short Videos */}
                 <div>
                    <h3 className="text-2xl font-bold font-headline text-gray-800 mb-6 flex items-center gap-3">
                        <Video className="w-7 h-7 text-primary" />
                        {t.handbook.videoTitle}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {shortVideos.map((video, index) => (
                        <Card
                            key={index}
                            className="shadow-md rounded-xl overflow-hidden group hover:shadow-xl transition-shadow"
                        >
                            <div className="relative aspect-[9/16]">
                            <Image
                                src={`https://picsum.photos/400/600?random=${index + 15}`}
                                alt={video.title}
                                fill
                                className="object-cover w-full h-full"
                                data-ai-hint="person speaking presentation"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all flex flex-col justify-between p-2">
                                <PlayCircle className="w-8 h-8 text-white/90 drop-shadow-lg self-start" />
                                <h4 className="font-semibold text-white text-sm leading-tight drop-shadow-md">
                                {video.title}
                                </h4>
                            </div>
                            </div>
                        </Card>
                        ))}
                    </div>
                </div>
                
                 {/* News & Articles */}
                 <div>
                    <h3 className="text-2xl font-bold font-headline text-gray-800 mb-6 flex items-center gap-3">
                        <Newspaper className="w-7 h-7 text-primary" />
                        {t.handbook.newsTitle}
                    </h3>
                    <div className="space-y-4">
                        {newsAndArticles.map((article, index) => (
                        <Link href="/handbook/post-detail" key={index} className="block">
                           <Card className="p-4 hover:bg-gray-50 hover:shadow-md transition-all group">
                                <Badge variant="outline" className="mb-2 group-hover:border-primary group-hover:text-primary transition-colors">{article.category}</Badge>
                                <h4 className="font-semibold text-gray-800 leading-snug group-hover:text-primary transition-colors">{article.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{article.readTime}</p>
                           </Card>
                        </Link>
                        ))}
                    </div>
                </div>

                {/* Image Stories */}
                <div>
                  <h3 className="text-2xl font-bold font-headline text-gray-800 mb-6 flex items-center gap-3">
                    <ImageIcon className="w-7 h-7 text-primary" />
                    {t.handbook.imagePosts.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {imageStories.map((story, index) => (
                      <Card
                        key={index}
                        className="shadow-md rounded-lg overflow-hidden group hover:shadow-xl transition-shadow"
                      >
                        <div className="relative aspect-square">
                          <Image
                            src={story.image}
                            alt={story.title}
                            fill
                            className="object-cover w-full h-full"
                            data-ai-hint={story.hint}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-colors flex flex-col justify-end p-3">
                            <h4 className="font-semibold text-white text-xs leading-tight drop-shadow-md">
                              {story.title}
                            </h4>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
            </aside>
        </div>

        {/* CTA Banner */}
        <Card className="shadow-lg rounded-xl overflow-hidden bg-gradient-to-r from-amber-400 to-orange-500 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                 <div className="p-8 sm:p-12">
                    <h2 className="text-3xl font-bold font-headline mb-2">{t.handbook.shareCTA.title}</h2>
                    <p className="text-white/90">{t.handbook.shareCTA.description}</p>
                </div>
                <div className="p-8 sm:p-12 text-center md:text-right">
                    <Button asChild size="lg" variant="outline" className="bg-white/90 text-orange-500 hover:bg-white text-base">
                        <Link href="/handbook/share-post">
                            <Send className="mr-2 h-5 w-5" />
                            {t.handbook.shareCTA.button}
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>

      </div>
    </section>
  );
}
