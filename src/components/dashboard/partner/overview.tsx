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
import { cn } from '@/lib/utils';
import { OpportunitiesTable } from './opportunities-table';

interface OverviewProps {
  opportunities: Opportunity[];
  onAccept: (jobId: string) => void;
  onDecline: (jobId: string) => void;
}

type ViewMode = 'list' | 'gallery';


export function Overview({ opportunities, onAccept, onDecline }: OverviewProps) {
  const { t } = useLanguage();
  const [declinedJobs, setDeclinedJobs] = useState<Set<string>>(new Set());
  const [view, setView] = useState<ViewMode>('gallery');

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
    // Gives time for the fade-out animation
    setTimeout(() => onDecline(jobId), 300);
  }

  if (opportunities.length === 0) {
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
       <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
              <div>
                <CardTitle>{t.dashboard_partner.newOpportunities.title}</CardTitle>
                <CardDescription>{t.dashboard_partner.newOpportunities.description}</CardDescription>
              </div>
               <div className="flex items-center gap-1 rounded-md bg-muted p-1">
                 <Button
                    variant={view === 'gallery' ? 'default' : 'ghost'}
                    size="icon"
                    className={cn("h-8 w-8", view === 'gallery' && "shadow-sm bg-background text-foreground")}
                    onClick={() => setView('gallery')}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={view === 'list' ? 'default' : 'ghost'}
                    size="icon"
                     className={cn("h-8 w-8", view === 'list' && "shadow-sm bg-background text-foreground")}
                    onClick={() => setView('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
               </div>
          </div>
        </CardHeader>
        <CardContent>
          {view === 'gallery' ? (
            <div className="grid gap-8 md:grid-cols-2">
              {opportunities.map((opp) => (
                  <Card 
                    key={opp.id} 
                    className={`group hover:shadow-xl transition-all duration-300 ${declinedJobs.has(opp.id) ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                  >
                      <CardHeader>
                          <Link href={`/dashboard/jobs/${opp.id}`}>
                             <CardTitle className="hover:text-primary transition-colors">{opp.title}</CardTitle>
                          </Link>
                           <Link href={opp.profileUrl || '#'}>
                              <CardDescription className="hover:underline">{opp.company}</CardDescription>
                           </Link>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                          <Link href={`/dashboard/jobs/${opp.id}`} className="block hover:bg-gray-50/50 p-4 rounded-lg -m-4">
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
                              <div className="flex items-center text-sm text-muted-foreground mt-4">
                                  <Clock className="mr-2 h-4 w-4" />
                                  <span>{opp.expires}</span>
                              </div>
                          </Link>
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
          ) : (
             <OpportunitiesTable 
                opportunities={opportunities} 
                onAccept={onAccept} 
                onDecline={handleDecline} 
                declinedJobs={declinedJobs}
             />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
