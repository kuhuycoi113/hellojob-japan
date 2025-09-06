
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { ArrowRight, LayoutGrid, List, PlusCircle } from 'lucide-react';
import { allPartners } from '@/data/partners';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { PartnersTable } from './partners-table';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination';


type ViewMode = 'list' | 'gallery';
const ITEMS_PER_PAGE = 8;

export function YourPartners() {
  const { t, language } = useLanguage();
  const partners = allPartners;
  const isJapanese = language === 'ja';
  const [view, setView] = useState<ViewMode>('list');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const savedView = localStorage.getItem('partners-view-mode') as ViewMode;
    if (savedView) {
      setView(savedView);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('partners-view-mode', view);
  }, [view]);

  const totalPages = Math.ceil(partners.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentPartners = partners.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.dashboard_employer.your_partners.title_full}</CardTitle>
        <CardDescription>{t.dashboard_employer.your_partners.description_full}</CardDescription>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <div className="flex-1">
                {/* Search input can be added here in the future */}
            </div>
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
                <Button size="sm" className="h-8 gap-1 bg-accent text-accent-foreground hover:bg-accent/90">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="whitespace-nowrap">
                    {t.dashboard_employer.your_partners.add_partner}
                    </span>
                </Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        {view === 'gallery' ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentPartners.map((partner, index) => (
                <Card
                    key={index}
                    className="flex flex-col text-center items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                    <div className="relative h-20 w-40 mb-4">
                    <Image
                        src={`https://picsum.photos/300/150?random=${50 + index}`}
                        alt={isJapanese ? partner.name_ja : partner.name}
                        fill
                        className="object-contain"
                        data-ai-hint="company logo"
                    />
                    </div>
                    <CardContent className="flex flex-col flex-grow items-center p-0">
                    <h3 className="font-bold text-lg text-gray-800 flex-grow">{isJapanese ? partner.name_ja : partner.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 mb-4">{isJapanese ? partner.type_ja : partner.type}</p>
                    <Button asChild variant="link" className="p-0 text-sm">
                        <Link href="#">
                            {t.featuredPartners.viewProfile} <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                    </Button>
                    </CardContent>
                </Card>
                ))}
            </div>
        ) : (
            <PartnersTable partners={currentPartners} />
        )}
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
      </CardContent>
    </Card>
  );
}
