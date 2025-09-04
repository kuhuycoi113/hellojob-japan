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
import { Clock, Star, Briefcase, Sparkles, User, Send, Target, HelpCircle, ShieldCheck, UserCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { translations } from '@/locales/translations';

export function AdvisorProfile({ advisorSlug }: { advisorSlug: string }) {
  const { t, language } = useLanguage();

  const englishAdvisors = translations.en.advisors.advisorsList;
  const currentLangAdvisors = t.advisors.advisorsList;

  const advisorIndex = englishAdvisors.findIndex(
    adv => adv.name.toLowerCase().replace(' ', '-') === advisorSlug
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
    </>
  );
}
