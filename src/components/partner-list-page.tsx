// This is a new file.
'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { mockPartners } from '@/data/mock-partners';
import type { MockPartner } from '@/data/mock-partners';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Handshake, Search } from 'lucide-react';
import Link from 'next/link';

export function PartnerListPage() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const partnerTypes = useMemo(() => {
    const types = new Map<string, string>();
    mockPartners.forEach(p => {
      types.set(p.type.en.replace(/\s+/g, '-').toLowerCase(), p.type[language]);
    });
    return Array.from(types.entries());
  }, [language]);


  const locations = useMemo(() => {
    const allLocations = new Set<string>();
    mockPartners.forEach(partner => {
        partner.locations.forEach(loc => allLocations.add(loc[language]));
    });
    return ['all', ...Array.from(allLocations).sort()];
  }, [language]);

  const filteredPartners = useMemo(() => {
    return mockPartners.filter(partner => {
      const name = partner.name[language].toLowerCase();
      const type = partner.type.en.replace(/\s+/g, '-').toLowerCase();

      const matchesSearch = name.includes(searchTerm.toLowerCase());
      const matchesType = typeFilter === 'all' || type === typeFilter;
      const matchesLocation = locationFilter === 'all' || partner.locations.some(l => l[language] === locationFilter);
      
      return matchesSearch && matchesType && matchesLocation;
    });
  }, [searchTerm, typeFilter, locationFilter, language]);

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block bg-primary/10 text-primary p-3 rounded-lg mb-4">
            <Handshake className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.header.menuItems.partnerList}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {t.featuredPartners.subtitle}
          </p>
        </div>

        <Card className="p-4 mb-8 sticky top-16 z-30 shadow-md bg-background/80 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div className="lg:col-span-2">
                    <label htmlFor="search-partner" className="text-sm font-medium text-muted-foreground">
                        {t.hero.searchCandidates}
                    </label>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                            id="search-partner"
                            placeholder={t.partnerListPage.searchPlaceholder}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 h-11"
                        />
                    </div>
                </div>
                <div>
                     <label htmlFor="type-filter" className="text-sm font-medium text-muted-foreground">
                        {t.partnerListPage.partnerType}
                    </label>
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                        <SelectTrigger id="type-filter" className="h-11">
                            <SelectValue placeholder="All types" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">{t.partnerListPage.allTypes}</SelectItem>
                            {partnerTypes.map(([key, name]) => (
                                <SelectItem key={key} value={key}>{name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div>
                     <label htmlFor="location-filter" className="text-sm font-medium text-muted-foreground">
                        {t.hero.location}
                    </label>
                    <Select value={locationFilter} onValueChange={setLocationFilter}>
                        <SelectTrigger id="location-filter" className="h-11">
                            <SelectValue placeholder="All locations" />
                        </SelectTrigger>
                        <SelectContent>
                            {locations.map(loc => (
                                <SelectItem key={loc} value={loc}>
                                    {loc === 'all' ? t.hero.allJapan : loc}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPartners.map(partner => (
            <Card key={partner.id} className="flex flex-col text-center items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg font-semibold text-gray-800">{partner.name[language]}</CardTitle>
                    <p className="text-sm text-primary font-medium">{partner.type[language]}</p>
                </CardHeader>
                <CardContent className="flex-grow w-full">
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">{t.partnerListPage.mainIndustries}</p>
                    <div className="flex flex-wrap justify-center gap-1.5">
                        {partner.specialties.slice(0, 3).map(skill => (
                            <Badge key={skill[language]} variant="secondary">{skill[language]}</Badge>
                        ))}
                         {partner.specialties.length > 3 && <Badge variant="outline">+{partner.specialties.length - 3}</Badge>}
                    </div>
                </CardContent>
                 <CardFooter className="p-0 mt-4 w-full">
                    <Button asChild className="w-full">
                        <Link href="#">{t.common.viewProfile}</Link>
                    </Button>
                </CardFooter>
            </Card>
          ))}
        </div>
        {filteredPartners.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
                <p>{t.partnerListPage.noResults}</p>
            </div>
        )}
      </div>
    </div>
  );
}
