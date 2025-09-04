
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
              <Link href={`/advisors/${advisorSlug}`} key={index} className="group">
                <Card className="flex flex-col text-center items-center p-6 rounded-xl shadow-lg h-full group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300">
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
                    <Button className="w-full">
                        {t.advisorProfile.contactButton}
                        <Phone className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
