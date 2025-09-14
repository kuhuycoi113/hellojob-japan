

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from '@/components/ui/dialog';
import { DialogFooter } from '@/components/ui/dialog';
import { useState } from 'react';
import { Card, CardDescription, CardTitle } from './ui/card';
import { GraduationCap, Star, Briefcase, Plane, Users, Building, Handshake, BrainCircuit, HardHat, FastForward, UserPlus, ChevronRight, HandCoins, FileText, UserCheck } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useRouter } from 'next/navigation';
import { useRole } from '@/contexts/role-context';
import { useLanguage } from '@/contexts/language-context';
import { ScrollArea } from './ui/scroll-area';


export function Cta() {
  const { t } = useLanguage();
  const t_cta_flow = t.cta_flow;
  const router = useRouter();
  const { setUserRole } = useRole();

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-white">
          {t.cta.title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
          {t.cta.subtitle}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/post-job-ai">{t.cta.postJob}</Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
             <Link href="/chat">{t.cta.contactUs}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
