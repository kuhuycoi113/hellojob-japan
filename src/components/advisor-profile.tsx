// This is a new file.
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
import { useLanguage } from '@/contexts/language-context';
import { Clock, Star, Briefcase, Sparkles, User, Send, Target, HelpCircle, ShieldCheck, UserCircle, Phone } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { translations } from '@/locales/translations';
import { Button } from './ui/button';

const ZaloIcon = () => (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" fill="#0068FF"/>
        <path d="M33.4561 21.6138H29.6211L25.6865 26.6343H29.1797L29.1597 26.6243C30.6553 26.6243 31.8906 27.8596 31.8906 29.3552C31.8906 30.8508 30.6553 32.0862 29.1597 32.0862C27.6641 32.0862 26.4287 30.8508 26.4287 29.3552C26.4287 29.1143 26.4587 28.8834 26.5088 28.6625L20.8877 21.6138H14.5312V23.468H20.2568L20.2768 23.483C20.2718 23.513 20.2718 23.543 20.2718 23.573C20.2718 26.8379 23.1045 29.4395 26.5388 29.4395C26.6793 29.4395 26.8148 29.4295 26.9453 29.4094L26.5839 29.8755L22.0918 35.5312H28.4482L33.4785 29.1846H29.9854L29.9954 29.1946C28.5049 29.1946 27.2695 27.9592 27.2695 26.4636C27.2695 24.9681 28.5049 23.7327 29.9954 23.7327C30.2212 23.7327 30.437 23.7577 30.6477 23.8028L36.2688 16.754H42.625V18.6083H36.9043L36.8843 18.5933C36.8893 18.5633 36.8893 18.5332 36.8893 18.5032C36.8893 15.2383 34.0566 12.6367 30.6223 12.6367C30.4818 12.6367 30.3413 12.6467 30.2109 12.6668L30.5723 12.2007L35.0645 6.54504H28.707L23.6816 12.8917H27.1748L27.1648 12.8817C28.6553 12.8817 29.8906 14.117 29.8906 15.6126C29.8906 17.1082 28.6553 18.3435 27.1648 18.3435C26.939 18.3435 26.7232 18.3185 26.5125 18.2734L26.5325 18.2934L20.8965 21.6138H33.4561Z" fill="white"/>
    </svg>
)

const MessengerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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


export function AdvisorProfile({ advisorSlug }: { advisorSlug: string }) {
  const { t, language } = useLanguage();

  const englishAdvisors = translations.en.advisors.advisorsList;
  const currentLangAdvisors = t.advisors.advisorsList;

  const advisorIndex = englishAdvisors.findIndex(
    adv => adv.name.toLowerCase().replace(/\s+/g, '-') === advisorSlug
  );

  if (advisorIndex === -1) {
    return <div>Advisor not found</div>;
  }

  const advisor = currentLangAdvisors[advisorIndex];
  const advisor_t = t.advisorProfile;

  const systemAdvantages = advisor_t.systemAdvantages;
  const addedValue = advisor_t.addedValue;

  return (
    <>
      <section className="py-16 sm:py-20 bg-blue-50/50">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <div className="inline-block bg-primary/10 text-primary p-3 rounded-lg mb-4">
                    <UserCircle className="h-8 w-8" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
                    {advisor_t.header.title}
                </h1>
                <p className="mt-4 text-lg text-gray-500">
                    {advisor_t.header.subtitle}
                </p>
            </div>
        </div>
    </section>

    <section className="pb-16 sm:pb-24 pt-8 bg-blue-50/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-24">
            <Card className="text-center p-6 shadow-lg">
                <Avatar className="h-32 w-32 border-4 border-white shadow-lg mx-auto">
                    <AvatarImage src={advisor.avatar} alt={advisor.name} />
                    <AvatarFallback>{advisor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardHeader className="p-4">
                    <h1 className="text-2xl font-bold text-gray-800">{advisor.name}</h1>
                    <p className="text-md text-primary font-medium">{advisor.title}</p>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap justify-center gap-2">
                        {advisor.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary" className="bg-green-100 text-green-800">{tag}</Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl">{advisor_t.professionalInfo.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0"/>
                        <div>
                            <p className="font-semibold text-sm">{advisor_t.professionalInfo.experience.label}</p>
                            <p className="text-muted-foreground">{advisor.experience}</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0"/>
                        <div>
                            <p className="font-semibold text-sm">{advisor_t.professionalInfo.mainField.label}</p>
                            <p className="text-muted-foreground">{advisor.mainField}</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0"/>
                        <div>
                            <p className="font-semibold text-sm">{advisor_t.professionalInfo.subField.label}</p>
                            <p className="text-muted-foreground">{advisor.subField}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
                <CardHeader>
                    <CardTitle className="text-xl">{advisor_t.achievements.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-around">
                    <div>
                        <p className="text-4xl font-bold text-primary">{advisor.stats.successfulCandidates}</p>
                        <p className="text-sm text-muted-foreground">{advisor_t.achievements.successfulCandidates}</p>
                    </div>
                     <div>
                        <p className="text-4xl font-bold text-primary">{advisor.stats.managedJobs}</p>
                        <p className="text-sm text-muted-foreground">{advisor_t.achievements.managedJobs}</p>
                    </div>
                </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl">{systemAdvantages.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {systemAdvantages.items.map((item, index) => (
                         <div key={index} className="flex items-start gap-4">
                            <div className="bg-primary/10 text-primary p-3 rounded-full"><Sparkles className="w-6 h-6"/></div>
                            <div>
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl">{addedValue.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {[
                        {...addedValue.items[0], icon: <Target className="w-6 h-6"/>},
                        {...addedValue.items[1], icon: <HelpCircle className="w-6 h-6"/>},
                        {...addedValue.items[2], icon: <ShieldCheck className="w-6 h-6"/>}
                    ].map((item, index) => (
                         <div key={index} className="flex items-start gap-4">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">{item.icon}</div>
                            <div>
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    {/* Floating Contact Button */}
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Button className="h-14 pl-2 pr-6 rounded-full shadow-2xl bg-sky-500 hover:bg-sky-600 text-white text-lg flex items-center gap-3">
            <div className="flex items-center gap-1">
                <span className="bg-white rounded-full p-1.5 h-10 w-10 flex items-center justify-center"><ZaloIcon /></span>
                <span className="bg-white rounded-full p-1.5 h-10 w-10 flex items-center justify-center"><Phone className="w-6 h-6 text-green-500" /></span>
                <span className="bg-white rounded-full p-1.5 h-10 w-10 flex items-center justify-center"><MessengerIcon /></span>
            </div>
            <span>{advisor_t.contactButton}</span>
        </Button>
    </div>
    </>
  );
}
