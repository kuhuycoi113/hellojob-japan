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
import { Check, Clock, Copy, X, LayoutGrid, List, DollarSign, Gem, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Opportunity, Job } from '@/locales/translations';
import { OpportunitiesTable } from './opportunities-table';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';


interface OverviewProps {
    pendingOpportunities: Opportunity[];
    acceptedOpportunities: Job[];
    declinedOpportunities: Opportunity[];
    onAccept: (jobId: string) => void;
    onDecline: (jobId: string) => void;
}

type ViewMode = 'list' | 'gallery';
const ITEMS_PER_PAGE = 6;


const PaginatedOpportunityList = ({ opportunities, onAccept, onDecline, view, t }: { opportunities: (Opportunity | Job)[], onAccept?: (jobId: string) => void, onDecline?: (jobId: string) => void, view: ViewMode, t: any }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(opportunities.length / ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        }
    };

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = opportunities.slice(indexOfFirstItem, indexOfLastItem);
    
    if (opportunities.length === 0) {
        return (
            <div className="text-center py-12 text-muted-foreground">
                <Check className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4">{t.dashboard_employer.your_candidates.tabs.empty}</p>
            </div>
        );
    }
    
    const OpportunityList = () => {
        if (view === 'gallery') {
            return (
                <div className="grid gap-8 md:grid-cols-2">
                    {currentItems.map((opp) => (
                        <Card key={opp.id} className='group hover:shadow-xl transition-all duration-300'>
                            <CardHeader>
                                <Link href={(opp as Opportunity).profileUrl || '#'} className="w-fit">
                                    <CardDescription className="hover:underline">{opp.company}</CardDescription>
                                </Link>
                                <CardTitle>{opp.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="grid gap-2">
                                    <div className="font-semibold">{t.dashboard_partner.details}</div>
                                    <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                        <dt className="text-muted-foreground">{t.dashboard_partner.location}</dt>
                                        <dd>{opp.location}</dd>
                                        <dt className="text-muted-foreground">{t.dashboard_partner.visaType}</dt>
                                        <dd>{(opp as Opportunity).visa || (opp as Job).tags.join(', ')}</dd>
                                        <dt className="text-muted-foreground">{t.dashboard_partner.quantity}</dt>
                                        <dd>{(opp as Opportunity).quantity}</dd>
                                    </dl>
                                </div>
                            {'expires' in opp && (
                                    <div className="flex items-center text-sm text-muted-foreground">
                                    <Clock className="mr-2 h-4 w-4" />
                                    <span>{(opp as Opportunity).expires}</span>
                                </div>
                            )}
                            {onAccept && onDecline && (
                                <div className="flex gap-2">
                                    <Button onClick={() => onAccept(opp.id)} className="w-full bg-green-600 hover:bg-green-700">
                                        <Check className="mr-2 h-4 w-4" />
                                        {t.dashboard_partner.accept}
                                    </Button>
                                    <Button onClick={() => onDecline(opp.id)} variant="outline" className="w-full">
                                        <X className="mr-2 h-4 w-4" />
                                        {t.dashboard_partner.decline}
                                    </Button>
                                </div>
                            )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )
        }

        return (
            <OpportunitiesTable 
                opportunities={currentItems as Opportunity[]} 
                onAccept={onAccept!}
                onDecline={onDecline!}
            />
        )
    }
    
    return (
      <>
        <OpportunityList />
        {totalPages > 1 && (
          <Pagination className="mt-6">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }} aria-disabled={currentPage === 1} />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <PaginationItem key={page}>
                  <PaginationLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange(page); }} isActive={currentPage === page}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }} aria-disabled={currentPage === totalPages} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </>
    );
}

export function Overview({ pendingOpportunities, acceptedOpportunities, declinedOpportunities, onAccept, onDecline }: OverviewProps) {
  const { t } = useLanguage();
  const [view, setView] = useState<ViewMode>('list');
  
  useEffect(() => {
    const savedView = localStorage.getItem('opportunities-view-mode');
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      setView('gallery');
    } else if (savedView === 'gallery') {
      setView('gallery');
    } else {
      setView('list');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('opportunities-view-mode', view);
  }, [view]);

  
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
              <div className="mt-4 space-y-2">
                <Alert className="bg-yellow-50 border-yellow-200 text-yellow-800">
                    <DollarSign className="h-4 w-4 !text-yellow-700" />
                    <AlertTitle className="font-semibold">{t.dashboard_partner.revenue_share.title}</AlertTitle>
                    <AlertDescription>
                      {t.dashboard_partner.revenue_share.description}
                    </AlertDescription>
                </Alert>
                <Alert className="bg-green-50 border-green-200 text-green-900">
                    <Gem className="h-4 w-4 !text-green-700" />
                    <AlertTitle className="font-semibold">{t.dashboard_partner.premium_offer.title}</AlertTitle>
                    <AlertDescription className="flex justify-between items-center">
                      <span>{t.dashboard_partner.premium_offer.description}</span>
                       <Button asChild variant="link" className="p-0 h-auto text-green-800 font-semibold">
                          <Link href="/dashboard/partner/upgrade">
                              {t.dashboard_partner.premium_offer.learn_more}
                              <ArrowRight className="ml-1 h-4 w-4"/>
                          </Link>
                       </Button>
                    </AlertDescription>
                </Alert>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                  <TabsList>
                      <TabsTrigger value="pending">{t.dashboard_partner.newOpportunities.tabs.pending} ({pendingOpportunities.length})</TabsTrigger>
                      <TabsTrigger value="declined">{t.dashboard_partner.newOpportunities.tabs.declined} ({declinedOpportunities.length})</TabsTrigger>
                      <TabsTrigger value="archived">{t.dashboard_partner.newOpportunities.tabs.archived}</TabsTrigger>
                  </TabsList>
                  <div className="ml-auto flex items-center justify-end gap-2">
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
                <PaginatedOpportunityList
                    opportunities={pendingOpportunities}
                    onAccept={onAccept}
                    onDecline={onDecline}
                    view={view}
                    t={t}
                />
              </TabsContent>
               <TabsContent value="declined">
                <PaginatedOpportunityList
                    opportunities={declinedOpportunities}
                    view={view}
                    t={t}
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
