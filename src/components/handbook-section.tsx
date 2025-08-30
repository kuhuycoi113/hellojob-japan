'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
  FileText,
  Image as ImageIcon,
  Smartphone,
  Compass,
} from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function HandbookSection() {
  const { t } = useLanguage();

  const featuredArticle = {
    category: t.handbook.featured.category,
    title: t.handbook.featured.title,
    description: t.handbook.featured.description,
    link: t.handbook.featured.link,
  };

  const shortVideos = t.handbook.videos;
  const newPosts = t.handbook.posts;
  const longVideos = t.handbook.longVideos;
  const newsAndArticles = t.handbook.articles;
  const imageStories = t.handbook.imagePosts.stories;

  const shareOptions = [
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: t.handbook.shareOptions.text,
      description: t.handbook.shareOptions.textDesc,
      href: "/handbook/share-post",
    },
    {
      icon: <ImageIcon className="w-10 h-10 text-yellow-500" />,
      title: t.handbook.shareOptions.image,
      description: t.handbook.shareOptions.imageDesc,
      href: "/handbook/share-image-post",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-green-500" />,
      title: t.handbook.shareOptions.shortVideo,
      description: t.handbook.shareOptions.shortVideoDesc,
      href: '/handbook/share-short-video',
    },
    {
      icon: <Video className="w-10 h-10 text-red-500" />,
      title: t.handbook.shareOptions.longVideo,
      description: t.handbook.shareOptions.longVideoDesc,
      href: '/handbook/share-long-video',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 space-y-16">
        
        {/* Featured Article */}
        <Card className="shadow-lg rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
                <Image
                src="https://picsum.photos/1200/600?random=1"
                alt={featuredArticle.title}
                fill
                className="object-cover"
                data-ai-hint="legal document handshake"
                />
            </div>
            <div className="p-8 flex flex-col justify-center">
                <Badge
                variant="secondary"
                className="bg-accent/20 text-accent-foreground font-semibold w-fit mb-4"
                >
                {featuredArticle.category}
                </Badge>
                <h2 className="text-2xl font-bold font-headline mb-4 text-gray-800">
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

        {/* Unified Content Section */}
        <div>
            <h3 className="text-3xl font-bold font-headline text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
                <Compass className="w-8 h-8 text-primary" />
                Khám phá nội dung
            </h3>
            
            {/* New Posts */}
            <div className="mb-12">
                <h4 className="text-2xl font-bold font-headline text-gray-800 mb-6 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    {t.handbook.newPostsTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {newPosts.map((post, index) => (
                        <Link href="/handbook/post-detail" key={index}>
                        <Card
                            className="shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col"
                        >
                            <div className="relative w-full aspect-w-16 aspect-h-9">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                data-ai-hint={post.hint}
                            />
                            </div>
                            <CardContent className="p-4 flex-grow flex flex-col">
                            <Badge variant="outline" className="mb-2 w-fit">
                                {post.category}
                            </Badge>
                            <h4 className="font-bold font-headline text-base text-gray-800 flex-grow">
                                {post.title}
                            </h4>
                            </CardContent>
                        </Card>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mb-12">
              <h4 className="text-2xl font-bold font-headline text-gray-800 mb-6 flex items-center gap-2">
                <ImageIcon className="w-6 h-6 text-primary" />
                {t.handbook.imagePosts.title}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {imageStories.map((story, index) => (
                  <Card
                    key={index}
                    className="shadow-md rounded-xl overflow-hidden group hover:shadow-xl transition-shadow"
                  >
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover w-full h-full"
                        data-ai-hint={story.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-colors flex flex-col justify-end p-3">
                        <h4 className="font-semibold text-white text-sm leading-tight drop-shadow-md">
                          {story.title}
                        </h4>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-12">
                <h4 className="text-2xl font-bold font-headline text-gray-800 mb-6 flex items-center gap-2">
                    <Video className="w-6 h-6 text-primary" />
                    {t.handbook.videoTitle}
                </h4>
                 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {shortVideos.map((video, index) => (
                    <Card
                        key={index}
                        className="shadow-md rounded-xl overflow-hidden group hover:shadow-xl transition-shadow"
                    >
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
                            <h4 className="font-semibold text-white text-xs leading-tight drop-shadow-md">
                            {video.title}
                            </h4>
                        </div>
                        </div>
                    </Card>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Long Videos */}
              <div>
                  <h3 className="text-2xl font-bold font-headline text-gray-800 mb-6 flex items-center gap-2">
                    <Video className="w-6 h-6 text-primary" />
                    {t.handbook.longVideoTitle}
                  </h3>
                  <div className="grid grid-cols-1 gap-8">
                    {longVideos.map((video, index) => (
                      <Card
                      key={index}
                      className="overflow-hidden shadow-md rounded-xl group cursor-pointer hover:shadow-xl transition-shadow flex flex-col sm:flex-row"
                      >
                      <div className="relative w-full sm:w-2/5 aspect-video">
                          <Image
                          src={`https://picsum.photos/600/338?random=${30 + index}`}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint="person talking presentation"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <PlayCircle className="w-12 h-12 text-white/80 transform transition-transform group-hover:scale-110" />
                          </div>
                      </div>
                      <CardContent className="p-4 sm:p-6 sm:w-3/5 flex flex-col">
                          <Badge variant="secondary" className="mb-2 w-fit">
                          {video.category}
                          </Badge>
                          <h3 className="font-semibold text-gray-800 leading-snug text-lg flex-grow">
                          {video.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2">
                          {video.duration}
                          </p>
                      </CardContent>
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
                      <Link href="/handbook/post-detail" key={index}>
                          <Card
                          className="p-4 shadow-sm rounded-lg hover:bg-white transition-colors h-full flex justify-between items-center"
                          >
                          <div>
                            <Badge variant="secondary" className="mb-2">
                                {article.category}
                            </Badge>
                            <h4 className="font-semibold text-gray-800 leading-snug">
                                {article.title}
                            </h4>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground ml-4" />
                          </Card>
                      </Link>
                      ))}
                  </div>
              </div>
            </div>
        </div>


        <div className="mt-16 text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1"
              >
                {t.handbook.shareContentButton}{' '}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">
                  {t.handbook.shareOptions.title}
                </DialogTitle>
                <DialogDescription className="text-center">
                  {t.handbook.shareOptions.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                {shareOptions.map((option) => (
                   <Link href={option.href} key={option.title} passHref>
                    <Card
                      className="p-6 flex flex-col items-center justify-center text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full"
                    >
                      <div className="mb-4">{option.icon}</div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {option.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {option.description}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
