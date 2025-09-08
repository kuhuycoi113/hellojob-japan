
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/language-context';
import { opportunities as initialOpportunities, type Opportunity } from '@/data/opportunities';
import { CheckCircle, XCircle, List, LayoutGrid, MoreHorizontal, HandCoins, FileText } from 'lucide-react';
import { Badge } from './ui/badge';
import type { MockJob } from '@/data/mock-jobs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';

export function PartnershipOpportunities() {
    const { t, language } = useLanguage();
    const t_opp = t.partnershipOpportunities;
    const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
    
    useEffect(() => {
        // This ensures the timer starts on the client side, avoiding hydration issues.
        setOpportunities(initialOpportunities);
    }, []);

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
            <span className="font-mono text-sm font-semibold text-destructive">
                {padWithZero(timeLeft.minutes)}:{padWithZero(timeLeft.seconds)}
            </span>
        );
    };
    
    const handleDecline = (id: string) => {
        setOpportunities(prev => prev.filter(opp => opp.id !== id));
    };

    const handleAccept = (opportunity: Opportunity) => {
        // 1. Remove from current list
        handleDecline(opportunity.id);

        // 2. Convert opportunity to a job
        const newJob: MockJob = {
            ...opportunity,
            id: `JOB-${Date.now()}`, // Create a new unique ID
            status: 'Searching'
        };

        // 3. Add to localStorage
        try {
            const existingJobsRaw = localStorage.getItem('postedJobs');
            const existingJobs = existingJobsRaw ? JSON.parse(existingJobsRaw) : [];
            const updatedJobs = [newJob, ...existingJobs];
            localStorage.setItem('postedJobs', JSON.stringify(updatedJobs));
            
            // 4. Dispatch event to notify jobs-list to update
            const event = new CustomEvent('jobsUpdated', { detail: { jobId: newJob.id } });
            window.dispatchEvent(event);

        } catch (error) {
            console.error("Failed to save job to localStorage", error);
        }
    };


    if (opportunities.length === 0) {
        return null; // Don't render the component if there are no opportunities
    }

    const OpportunitiesGridView = () => (
        <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-4">
                {opportunities.map((opp) => (
                    <CarouselItem key={opp.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="shadow-lg border-2 border-primary/50 bg-blue-50/30 h-full flex flex-col">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-lg font-bold">{opp.title[language]}</CardTitle>
                                            <CardDescription>{t_opp.from.replace('{company}', opp.company[language])}</CardDescription>
                                        </div>
                                        <Badge variant="secondary" className="bg-primary/20 text-primary-foreground">{opp.visaType[language]}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3 text-sm flex-grow">
                                    <div className="flex items-center justify-between p-2 bg-background rounded-md">
                                        <span className="text-muted-foreground">{t_opp.expiresIn}</span>
                                        <CountdownTimer expiryTimestamp={new Date(opp.expires).getTime()} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2"><FileText className="w-4 h-4 text-muted-foreground" /> {t_opp.requirements}</h4>
                                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                            {opp.requirements.map((req, i) => <li key={i}>{req[language]}</li>)}
                                        </ul>
                                    </div>
                                    <Separator />
                                     <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2"><HandCoins className="w-4 h-4 text-muted-foreground" /> {t_opp.fees}</h4>
                                        <div className="space-y-1">
                                            <div className="flex justify-between items-baseline">
                                                <span className="text-muted-foreground">{t_opp.referralFee}:</span>
                                                <span className="font-bold text-lg text-primary">{opp.referralFee[language]}</span>
                                            </div>
                                            {opp.visaType.en !== 'Engineer' && (
                                              <div className="flex justify-between items-baseline">
                                                  <span className="text-muted-foreground">{t_opp.managementFee}:</span>
                                                  <span className="font-medium text-foreground">{opp.managementFee[language]}</span>
                                              </div>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                                    <CardFooter className="flex gap-2">
                                    <Button className="w-full" variant="outline" onClick={() => handleDecline(opp.id)}>
                                        <XCircle className="mr-2 h-4 w-4"/>
                                        {t_opp.decline}
                                    </Button>
                                    <Button className="w-full" onClick={() => handleAccept(opp)}>
                                        <CheckCircle className="mr-2 h-4 w-4"/>
                                        {t_opp.accept}
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4"/>
            <CarouselNext className="hidden sm:flex -right-4"/>
        </Carousel>
    );

    const OpportunitiesListView = () => (
        <Card>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>{t_opp.table.opportunity}</TableHead>
                        <TableHead className="hidden lg:table-cell">{t_opp.table.company}</TableHead>
                        <TableHead className="hidden md:table-cell">{t_opp.table.fees}</TableHead>
                        <TableHead className="text-right">{t_opp.table.expires}</TableHead>
                        <TableHead><span className="sr-only">{t_opp.table.actions}</span></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {opportunities.map((opp) => (
                        <TableRow key={opp.id}>
                            <TableCell>
                                <div className="font-medium font-headline">{opp.title[language]}</div>
                                <Badge variant="secondary" className="bg-primary/20 text-primary-foreground font-normal mt-1">{opp.visaType[language]}</Badge>
                            </TableCell>
                             <TableCell className="hidden lg:table-cell">{opp.company[language]}</TableCell>
                            <TableCell className="hidden md:table-cell text-xs">
                                <div>
                                    <span>{t_opp.referralFee}:</span>
                                    <span className="font-semibold text-primary ml-1">{opp.referralFee[language]}</span>
                                </div>
                                {opp.visaType.en !== 'Engineer' && (
                                  <div>
                                      <span>{t_opp.managementFee}:</span>
                                      <span className="font-medium ml-1">{opp.managementFee[language]}</span>
                                  </div>
                                )}
                            </TableCell>
                            <TableCell className="text-right">
                                <CountdownTimer expiryTimestamp={new Date(opp.expires).getTime()} />
                            </TableCell>
                            <TableCell className="text-right">
                               <div className="flex gap-2 justify-end">
                                    <Button size="sm" variant="outline" onClick={() => handleDecline(opp.id)}>
                                        <XCircle className="mr-2 h-4 w-4"/>
                                        {t_opp.decline}
                                    </Button>
                                    <Button size="sm" onClick={() => handleAccept(opp)}>
                                        <CheckCircle className="mr-2 h-4 w-4"/>
                                        {t_opp.accept}
                                    </Button>
                               </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )


    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold font-headline">{t_opp.title} ({opportunities.length})</h2>
                <div className="flex items-center gap-2">
                    <Button
                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                    >
                    <List className="h-5 w-5" />
                    </Button>
                    <Button
                    variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                    >
                    <LayoutGrid className="h-5 w-5" />
                    </Button>
                </div>
            </div>
            
            {viewMode === 'grid' ? <OpportunitiesGridView /> : <OpportunitiesListView />}
        </div>
    );
}
