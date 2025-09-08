// This is a new file.
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/language-context';
import { opportunities } from '@/data/opportunities';
import { CheckCircle, XCircle, FileText, Timer } from 'lucide-react';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

export function PartnershipOpportunities() {
    const { t, language } = useLanguage();
    const t_opp = t.partnershipOpportunities;

    const CountdownTimer = ({ expiryTimestamp }: { expiryTimestamp: number }) => {
        const calculateTimeLeft = () => {
            const difference = expiryTimestamp - new Date().getTime();
            let timeLeft = { minutes: 0, seconds: 0 };

            if (difference > 0) {
                timeLeft = {
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return timeLeft;
        };

        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

        useEffect(() => {
            const timer = setTimeout(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);

            return () => clearTimeout(timer);
        });
        
        const padWithZero = (num: number) => num.toString().padStart(2, '0');

        return (
            <span className="font-mono text-lg font-semibold text-destructive">
                {padWithZero(timeLeft.minutes)}:{padWithZero(timeLeft.seconds)}
            </span>
        );
    };

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-headline mb-4">{t_opp.title}</h2>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent className="-ml-4">
                    {opportunities.map((opp) => (
                        <CarouselItem key={opp.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="shadow-lg border-2 border-primary/50 bg-blue-50/30">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle className="text-lg font-bold">{opp.title}</CardTitle>
                                                <CardDescription>{t_opp.from.replace('{company}', opp.company)}</CardDescription>
                                            </div>
                                            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground">{opp.visa}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3 text-sm">
                                        <div className="flex items-center justify-between p-2 bg-background rounded-md">
                                            <span className="text-muted-foreground">{t_opp.expiresIn}</span>
                                            <CountdownTimer expiryTimestamp={new Date(opp.expires).getTime()} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">{t_opp.requirements}</h4>
                                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                                {opp.requirements.map((req, i) => <li key={i}>{req}</li>)}
                                            </ul>
                                        </div>
                                    </CardContent>
                                     <CardFooter className="flex gap-2">
                                        <Button className="w-full" variant="outline">
                                            <XCircle className="mr-2 h-4 w-4"/>
                                            {t_opp.decline}
                                        </Button>
                                        <Button className="w-full">
                                            <CheckCircle className="mr-2 h-4 w-4"/>
                                            {t_opp.accept}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4"/>
                <CarouselNext className="-right-4"/>
            </Carousel>
        </div>
    );
}
