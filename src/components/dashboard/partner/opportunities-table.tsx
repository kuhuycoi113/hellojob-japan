// This is a new file.
'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { Check, X, Clock } from 'lucide-react';
import type { Opportunity } from '@/locales/translations';
import Link from 'next/link';

interface OpportunitiesTableProps {
  opportunities: Opportunity[];
  onAccept: (jobId: string) => void;
  onDecline: (jobId: string) => void;
  declinedJobs: Set<string>;
}

export function OpportunitiesTable({ opportunities, onAccept, onDecline, declinedJobs }: OpportunitiesTableProps) {
  const { t } = useLanguage();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t.dashboard_partner.newOpportunities.table.jobTitle}</TableHead>
          <TableHead className="hidden md:table-cell">{t.dashboard_partner.newOpportunities.table.location}</TableHead>
          <TableHead className="hidden sm:table-cell">{t.dashboard_partner.newOpportunities.table.quantity}</TableHead>
          <TableHead className="hidden lg:table-cell">{t.dashboard_partner.newOpportunities.table.expires}</TableHead>
          <TableHead className="text-right">{t.dashboard_partner.newOpportunities.table.actions}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {opportunities.map((opp) => (
          <TableRow key={opp.id} className={`transition-opacity duration-300 ${declinedJobs.has(opp.id) ? 'opacity-0' : 'opacity-100'}`}>
            <TableCell>
              <Link href={`/dashboard/jobs/${opp.id}`} className="hover:underline">
                <div className="font-medium text-gray-800">{opp.title}</div>
                <div className="text-sm text-muted-foreground">{opp.company}</div>
              </Link>
            </TableCell>
            <TableCell className="hidden md:table-cell">{opp.location}</TableCell>
            <TableCell className="hidden sm:table-cell">{opp.quantity}</TableCell>
            <TableCell className="hidden lg:table-cell">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{opp.expires}</span>
                </div>
            </TableCell>
            <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                    <Button onClick={() => onDecline(opp.id)} variant="outline" size="sm">
                        <X className="mr-2 h-4 w-4" />
                        {t.dashboard_partner.decline}
                    </Button>
                    <Button onClick={() => onAccept(opp.id)} size="sm" className="bg-green-600 hover:bg-green-700">
                        <Check className="mr-2 h-4 w-4" />
                        {t.dashboard_partner.accept}
                    </Button>
                </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
