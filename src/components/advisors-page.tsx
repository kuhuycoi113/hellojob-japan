
'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/language-context';
import { Users, Phone, Mail } from 'lucide-react';
import Link from 'next/link';


export function AdvisorsPage() {
  const { t } = useLanguage();
  const advisors = t.advisors.advisorsList;

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
          {advisors.map((advisor, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
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
              <CardFooter className="flex flex-col w-full gap-2">
                <Button className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Gọi điện
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Gửi Email
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
