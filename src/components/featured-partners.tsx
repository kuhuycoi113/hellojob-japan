'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FeaturedPartners() {
  const { t } = useLanguage();

  const partners = t.featuredPartners.partners;

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
            const partnerCard = (
              <Card
                className="flex flex-col text-center items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full"
              >
                <div className="relative h-20 w-40 mb-4">
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
                  <Button asChild variant="link" className="p-0 text-sm">
                     <span className="flex items-center">
                        {t.featuredPartners.viewProfile} <ArrowRight className="ml-1 h-3 w-3" />
                     </span>
                  </Button>
                </CardContent>
              </Card>
            );

            if (partner.name === "Công ty cổ phần Nhân lực Vietproud" || partner.name === "Vietproud Manpower JSC" || partner.name === "ベットプラウド人材株式会社") {
                 return (
                    <Link href="/dashboard/partner-profile" key={index} className="group">
                        {partnerCard}
                    </Link>
                 )
            }
            
            return <div key={index}>{partnerCard}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
