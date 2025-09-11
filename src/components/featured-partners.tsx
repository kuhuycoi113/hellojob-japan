'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { ArrowRight, MessageSquare, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const LineIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.0001 0H3.00006C1.34319 0 0 1.34314 0 3V21C0 22.6569 1.34319 24 3.00006 24H21.0001C22.6569 24 24.0001 22.6569 24.0001 21V3C24.0001 1.34314 22.6569 0 21.0001 0Z" fill="#06C755"/>
        <path d="M10.3341 17.3333H8.00078V10.8333H10.3341V17.3333Z" fill="white"/>
        <path d="M12.8334 10.8333C12.0417 10.8333 11.5 11.2917 11.5 12.0833V17.3333H9.16669V7.5H11.5V8.5C11.9167 7.83334 12.6667 7.5 13.5 7.5C15.5 7.5 16 9 16 10.5833V17.3333H13.6667V11.5C13.6667 11.0833 13.5 10.8333 12.8334 10.8333Z" fill="white"/>
        <path d="M8.58341 7.16667C7.66675 7.16667 7.00008 7.83334 7.00008 8.75C7.00008 9.66667 7.66675 10.3333 8.58341 10.3333C9.50008 10.3333 10.1667 9.66667 10.1667 8.75C10.1667 7.83334 9.50008 7.16667 8.58341 7.16667Z" fill="white"/>
        <path d="M17.0001 13.5833C17.0001 12.6667 17.6668 12 18.5834 12C19.5001 12 20.1668 12.6667 20.1668 13.5833C20.1668 14.5 19.5001 15.1667 18.5834 15.1667V17.3333H16.1668V16C16.1668 15 17.0001 14.5 17.0001 13.5833Z" fill="white"/>
    </svg>
);

const FacebookMessengerIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 16.0395 3.966 19.467 7.5 21.165V22.5L10.0035 20.628C10.659 20.7495 11.3265 20.8125 12 20.8125" fill="url(#paint0_linear_1_2)"/>
        <path d="M7.788 8.71047L12.333 13.2555L16.212 8.71047L18.468 10.3755L13.788 15.0555L9.243 10.5105L7.002 12.1605L11.667 16.8255L16.212 12.2805L18.468 13.9455L12.003 20.4105L5.523 13.9455L7.788 8.71047Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_1_2" x1="12" y1="1.5" x2="12" y2="22.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00B2FF"/>
        <stop offset="1" stopColor="#006AFF"/>
        </linearGradient>
        </defs>
    </svg>
);

export function FeaturedPartners() {
  const { t } = useLanguage();

  const partners = t.featuredPartners.partners;
  
  const partnerLinks = [
    "/dashboard/partner/global-support",
    "/dashboard/partner/sakura-support",
    "/dashboard/partner/vietnam-link",
    "/dashboard/partner-profile"
  ];

  return (
    <section className="py-16 sm:py-24 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.featuredPartners.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.featuredPartners.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => {
            const partnerLink = partnerLinks[index] || "#";
            const isVietproud = index === 3; // Based on the original data structure

            const partnerCardContent = (
                <>
                    <div className="relative h-20 w-40 mx-auto mb-4">
                    <Image
                        src={`https://picsum.photos/300/150?random=${50 + index}`}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        data-ai-hint="company logo"
                    />
                    </div>
                    <CardContent className="flex flex-col flex-grow items-center p-0">
                        <h3 className="font-bold text-lg text-gray-800 flex-grow">{partner.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1 mb-4">{partner.type}</p>
                         <span className="font-semibold text-primary inline-flex items-center text-sm group-hover:underline">
                            {t.featuredPartners.viewProfile} <ArrowRight className="ml-1 h-3 w-3" />
                        </span>
                    </CardContent>
                </>
            );

            return (
                <Card
                    key={index}
                    className="flex flex-col text-center items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full"
                >
                    <Link href={partnerLink} className="group w-full flex flex-col flex-grow">
                        {partnerCardContent}
                    </Link>
                    {isVietproud && (
                         <div className="border-t w-full mt-4 pt-4 grid grid-cols-5 gap-2">
                             <Button variant="outline" size="icon" className="h-8 w-8"><FacebookMessengerIcon/></Button>
                             <Button variant="outline" size="icon" className="h-8 w-8"><LineIcon/></Button>
                             <Button variant="outline" size="icon" className="h-8 w-8"><MessageSquare className="h-4 w-4"/></Button>
                             <Button variant="outline" size="icon" className="h-8 w-8"><Phone className="h-4 w-4"/></Button>
                             <Button variant="outline" size="icon" className="h-8 w-8"><Mail className="h-4 w-4"/></Button>
                         </div>
                    )}
                </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
