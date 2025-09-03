'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { Check, Clock, Copy, X, LayoutGrid, List } from 'lucide-react';
import Link from 'next/link';
import type { Opportunity } from '@/locales/translations';
import { OpportunitiesTable } from './opportunities-table';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


interface OverviewProps {
    pendingOpportunities: Opportunity[];
    declinedOpportunities: Opportunity[];
    onAccept: (jobId: string) => void;
    onDecline: (jobId: string) => void;
}

type ViewMode = 'list' | 'gallery';


const OpportunityList = ({ opportunities, onAccept, onDecline, declinedJobs, view }: { opportunities: Opportunity[], onAccept: (jobId: string) => void, onDecline: (jobId: string) => void, declinedJobs: Set<string>, view: ViewMode }) => {
    const { t } = useLanguage();
    
    const handleDecline = (jobId: string) => {
        onDecline(jobId);
    };

    if (opportunities.length === 0) {
        return (
            <div className="text-center py-12 text-muted-foreground">
                <Check className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4">{t.dashboard_employer.your_candidates.tabs.empty}</p>
            </div>
        );
    }
    
    if (view === 'gallery') {
        return (
            <div className="grid gap-8 md:grid-cols-2">
                {opportunities.map((opp) => (
                    <Card key={opp.id} className={`group hover:shadow-xl transition-all duration-300 ${declinedJobs.has(opp.id) ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                        <CardHeader>
                            <CardTitle>{opp.title}</CardTitle>
                            <Link href={opp.profileUrl || '#'} className="w-fit">
                                <CardDescription className="hover:underline">{opp.company}</CardDescription>
                            </Link>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid gap-2">
                                <div className="font-semibold">{t.dashboard_partner.details}</div>
                                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                    <dt className="text-muted-foreground">{t.dashboard_partner.location}</dt>
                                    <dd>{opp.location}</dd>
                                    <dt className="text-muted-foreground">{t.dashboard_partner.visaType}</dt>
                                    <dd>{opp.visa}</dd>
                                    <dt className="text-muted-foreground">{t.dashboard_partner.quantity}</dt>
                                    <dd>{opp.quantity}</dd>
                                </dl>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="mr-2 h-4 w-4" />
                                <span>{opp.expires}</span>
                            </div>
                            <div className="flex gap-2">
                                 <Button onClick={() => onAccept(opp.id)} className="w-full bg-green-600 hover:bg-green-700">
                                    <Check className="mr-2 h-4 w-4" />
                                    {t.dashboard_partner.accept}
                                </Button>
                                <Button onClick={() => handleDecline(opp.id)} variant="outline" className="w-full">
                                    <X className="mr-2 h-4 w-4" />
                                    {t.dashboard_partner.decline}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )
    }

    return (
        <OpportunitiesTable 
            opportunities={opportunities} 
            onAccept={onAccept}
            onDecline={handleDecline}
            declinedJobs={declinedJobs}
        />
    )
}

export function Overview({ pendingOpportunities, declinedOpportunities, onAccept, onDecline }: OverviewProps) {
  const { t } = useLanguage();
  const [view, setView] = useState<ViewMode>('gallery');
  const [declinedJobs, setDeclinedJobs] = useState<Set<string>>(new Set());

  useEffect(() => {
    const savedView = localStorage.getItem('opportunities-view-mode') as ViewMode;
    if (savedView) {
      setView(savedView);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('opportunities-view-mode', view);
  }, [view]);

  const handleDecline = (jobId: string) => {
    setDeclinedJobs(prev => new Set(prev).add(jobId));
    setTimeout(() => {
        onDecline(jobId);
        setDeclinedJobs(prev => {
            const newSet = new Set(prev);
            newSet.delete(jobId);
            return newSet;
        });
    }, 300);
  };
  
  const hasOpportunities = pendingOpportunities.length > 0 || declinedOpportunities.length > 0;
  
  if (!hasOpportunities) {
     return (
       <Card>
        <CardHeader>
          <CardTitle>{t.dashboard_partner.newOpportunities.title}</CardTitle>
          <CardDescription>{t.dashboard_partner.newOpportunities.all_accepted}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
             <Check className="mx-auto h-12 w-12 text-green-500" />
             <p className="mt-4">{t.dashboard_partner.newOpportunities.all_accepted_description}</p>
          </div>
        </CardContent>
      </Card>
     )
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="pending">
        <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <CardTitle>{t.dashboard_partner.newOpportunities.title}</CardTitle>
                  <CardDescription>{t.dashboard_partner.newOpportunities.description}</CardDescription>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <TabsList className="w-full sm:w-auto overflow-x-auto justify-start">
                      <TabsTrigger value="pending">{t.dashboard_partner.newOpportunities.tabs.pending} ({pendingOpportunities.length})</TabsTrigger>
                      <TabsTrigger value="declined">{t.dashboard_partner.newOpportunities.tabs.declined} ({declinedOpportunities.length})</TabsTrigger>
                      <TabsTrigger value="archived">{t.dashboard_partner.newOpportunities.tabs.archived}</TabsTrigger>
                  </TabsList>
                  <div className="ml-auto flex w-full sm:w-auto items-center justify-end gap-2">
                    <div className="flex items-center gap-1 rounded-md bg-muted p-1">
                      <Button
                        variant={view === 'gallery' ? 'default' : 'ghost'}
                        size="icon"
                        className={cn("h-7 w-7", view === 'gallery' && "shadow-sm bg-background text-foreground")}
                        onClick={() => setView('gallery')}
                      >
                        <LayoutGrid className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={view === 'list' ? 'default' : 'ghost'}
                        size="icon"
                        className={cn("h-7 w-7", view === 'list' && "shadow-sm bg-background text-foreground")}
                        onClick={() => setView('list')}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <TabsContent value="pending">
                <OpportunityList
                    opportunities={pendingOpportunities}
                    onAccept={onAccept}
                    onDecline={handleDecline}
                    declinedJobs={declinedJobs}
                    view={view}
                />
              </TabsContent>
               <TabsContent value="declined">
                <OpportunityList
                    opportunities={declinedOpportunities}
                    onAccept={onAccept}
                    onDecline={() => {}}
                    declinedJobs={declinedJobs}
                    view={view}
                />
               </TabsContent>
                <TabsContent value="archived" className="mt-4 text-center text-muted-foreground py-12">
                  <p>{t.dashboard_employer.your_candidates.tabs.empty}</p>
                </TabsContent>
            </CardContent>
          </Card>
      </Tabs>
    </div>
  );
}
