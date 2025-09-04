'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/language-context';
import { Users, Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { translations } from '@/locales/translations';

const ZaloIcon = () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" fill="#0068FF"/>
        <path d="M33.4561 21.6138H29.6211L25.6865 26.6343H29.1797L29.1597 26.6243C30.6553 26.6243 31.8906 27.8596 31.8906 29.3552C31.8906 30.8508 30.6553 32.0862 29.1597 32.0862C27.6641 32.0862 26.4287 30.8508 26.4287 29.3552C26.4287 29.1143 26.4587 28.8834 26.5088 28.6625L20.8877 21.6138H14.5312V23.468H20.2568L20.2768 23.483C20.2718 23.513 20.2718 23.543 20.2718 23.573C20.2718 26.8379 23.1045 29.4395 26.5388 29.4395C26.6793 29.4395 26.8148 29.4295 26.9453 29.4094L26.5839 29.8755L22.0918 35.5312H28.4482L33.4785 29.1846H29.9854L29.9954 29.1946C28.5049 29.1946 27.2695 27.9592 27.2695 26.4636C27.2695 24.9681 28.5049 23.7327 29.9954 23.7327C30.2212 23.7327 30.437 23.7577 30.6477 23.8028L36.2688 16.754H42.625V18.6083H36.9043L36.8843 18.5933C36.8893 18.5633 36.8893 18.5332 36.8893 18.5032C36.8893 15.2383 34.0566 12.6367 30.6223 12.6367C30.4818 12.6367 30.3413 12.6467 30.2109 12.6668L30.5723 12.2007L35.0645 6.54504H28.707L23.6816 12.8917H27.1748L27.1648 12.8817C28.6553 12.8817 29.8906 14.117 29.8906 15.6126C29.8906 17.1082 28.6553 18.3435 27.1648 18.3435C26.939 18.3435 26.7232 18.3185 26.5125 18.2734L26.5325 18.2934L20.8965 21.6138H33.4561Z" fill="white"/>
    </svg>
)

const MessengerIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 16.0395 3.966 19.467 7.5 21.165V22.5L10.0035 20.628C10.659 20.7495 11.3265 20.8125 12 20.8125Z" fill="url(#paint0_linear_1_2)"/>
        <path d="M7.788 8.71047L12.333 13.2555L16.212 8.71047L18.468 10.3755L13.788 15.0555L9.243 10.5105L7.002 12.1605L11.667 16.8255L16.212 12.2805L18.468 13.9455L12.003 20.4105L5.523 13.9455L7.788 8.71047Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_1_2" x1="12" y1="1.5" x2="12" y2="22.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00B2FF"/>
        <stop offset="1" stopColor="#006AFF"/>
        </linearGradient>
        </defs>
    </svg>
)


export function AdvisorsPage() {
  const { t, language } = useLanguage();
  const advisors = t.advisors.advisorsList;
  const englishAdvisors = translations.en.advisors.advisorsList;

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block bg-primary/10 text-primary p-3 rounded-lg mb-4">
            <Users className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.advisors.title}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {t.advisors.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => {
            const advisorSlug = englishAdvisors[index].name.toLowerCase().replace(/\s+/g, '-');
            return (
              <Card key={index} className="group flex flex-col text-center items-center p-6 rounded-xl shadow-lg h-full group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300">
                  <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                    <AvatarImage src={advisor.avatar} alt={advisor.name} />
                    <AvatarFallback>{advisor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardHeader className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">{advisor.name}</h3>
                    <p className="text-sm text-primary font-medium">{advisor.title}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap justify-center gap-2">
                      {advisor.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col w-full gap-2 mt-auto pt-4">
                    <Link href={`/advisors/${advisorSlug}`} className="w-full">
                       <Button className="w-full h-12 pl-2 pr-4 rounded-full shadow-lg bg-sky-500 hover:bg-sky-600 text-white text-base flex items-center gap-2">
                           <div className="flex items-center gap-1">
                                <span className="bg-white rounded-full p-1.5 h-8 w-8 flex items-center justify-center"><ZaloIcon /></span>
                                <span className="bg-white rounded-full p-1.5 h-8 w-8 flex items-center justify-center"><Phone className="w-5 h-5 text-green-500" /></span>
                                <span className="bg-white rounded-full p-1.5 h-8 w-8 flex items-center justify-center"><MessengerIcon /></span>
                            </div>
                            <span>{t.advisorProfile.contactButton}</span>
                        </Button>
                    </Link>
                  </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
