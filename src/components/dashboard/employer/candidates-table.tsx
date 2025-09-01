// This is a new file.
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
import type { Candidate } from '@/locales/translations';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface CandidatesTableProps {
  candidates: Candidate[];
}

export function CandidatesTable({ candidates }: CandidatesTableProps) {
  const { t, language } = useLanguage();
  const isJapanese = language === 'ja';

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t.dashboard_employer.candidates_table.candidate}</TableHead>
          <TableHead className="hidden md:table-cell">{t.dashboard_employer.candidates_table.visa_specialty}</TableHead>
          <TableHead className="hidden sm:table-cell">{t.dashboard_employer.candidates_table.desired_salary}</TableHead>
          <TableHead className="hidden lg:table-cell">{t.dashboard_employer.candidates_table.date_created}</TableHead>
          <TableHead>
            <span className="sr-only">{t.dashboard_employer.candidates_table.actions}</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {candidates.map((candidate) => (
          <TableRow key={candidate.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src={candidate.avatar} alt={candidate.name_vi} />
                  <AvatarFallback>{candidate.name_vi.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-gray-800">{isJapanese ? candidate.name_ja : candidate.name_vi}</div>
                  <div className="text-sm text-muted-foreground">{candidate.details}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <div>{candidate.visa_type}</div>
              <div className="font-semibold text-gray-700">{candidate.specialty}</div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">{candidate.desired_salary}</TableCell>
            <TableCell className="hidden lg:table-cell">{candidate.created_date}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">{t.dashboard_employer.candidates_table.toggle_menu}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>{t.dashboard_employer.candidates_table.actions}</DropdownMenuLabel>
                  <DropdownMenuItem>{t.dashboard_employer.candidates_table.view_profile}</DropdownMenuItem>
                  <DropdownMenuItem>{t.dashboard_employer.candidates_table.contact_line}</DropdownMenuItem>
                   <DropdownMenuItem>{t.dashboard_employer.candidates_table.save_to_list}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
