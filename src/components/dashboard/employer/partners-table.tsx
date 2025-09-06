'use client';

import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { MoreHorizontal } from 'lucide-react';
import type { PartnerProfile } from '@/ai/schemas/find-matching-partners-schema';

interface PartnersTableProps {
  partners: PartnerProfile[];
}

export function PartnersTable({ partners }: PartnersTableProps) {
  const { t, language } = useLanguage();
  const isJapanese = language === 'ja';

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t.dashboard_employer.your_partners.table.partner_name}</TableHead>
          <TableHead className="hidden sm:table-cell">{t.dashboard_employer.your_partners.table.type}</TableHead>
          <TableHead className="hidden md:table-cell">{t.dashboard_employer.your_partners.table.specialties}</TableHead>
          <TableHead className="hidden lg:table-cell">{t.dashboard_employer.your_partners.table.locations}</TableHead>
          <TableHead>
            <span className="sr-only">{t.dashboard_employer.your_partners.table.actions}</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {partners.map((partner) => (
          <TableRow key={partner.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-3">
                 <Image
                    src={`https://picsum.photos/100/50?random=${partner.id}`}
                    alt={isJapanese ? partner.name_ja : partner.name}
                    width={60}
                    height={30}
                    className="object-contain rounded-sm hidden sm:block"
                    data-ai-hint="company logo"
                />
                <div>
                    <div className="font-medium">{isJapanese ? partner.name_ja : partner.name}</div>
                    <div className="text-sm text-muted-foreground sm:hidden">
                        {isJapanese ? partner.type_ja : partner.type}
                    </div>
                </div>
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">{isJapanese ? partner.type_ja : partner.type}</TableCell>
            <TableCell className="hidden md:table-cell">
                <div className="flex flex-wrap gap-1">
                    {(isJapanese ? partner.specialties_ja : partner.specialties).slice(0, 2).map(spec => (
                        <Badge key={spec} variant="outline">{spec}</Badge>
                    ))}
                    {(isJapanese ? partner.specialties_ja : partner.specialties).length > 2 && (
                        <Badge variant="secondary">+{ (isJapanese ? partner.specialties_ja : partner.specialties).length - 2}</Badge>
                    )}
                </div>
            </TableCell>
            <TableCell className="hidden lg:table-cell">
                {(partner.locations).slice(0, 2).join(', ')}
                {partner.locations.length > 2 && '...'}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">{t.dashboard_employer.your_partners.table.toggle_menu}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>{t.dashboard_employer.your_partners.table.actions}</DropdownMenuLabel>
                  <DropdownMenuItem>{t.dashboard_employer.your_partners.table.view_details}</DropdownMenuItem>
                  <DropdownMenuItem>{t.dashboard_employer.your_partners.table.send_message}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
