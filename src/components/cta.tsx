'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/language-context';
import { Building, Handshake, Users, ChevronRight } from 'lucide-react';

export function Cta() {
  const { t } = useLanguage();

  const userRoles = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: t.userRoles.hiringCompany.title,
      description: t.userRoles.hiringCompany.description,
      href: "/post-job-ai",
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      title: t.userRoles.supportOrg.title,
      description: t.userRoles.supportOrg.description,
      href: "/post-job-ai",
    },
    {
      icon: <Handshake className="h-8 w-8 text-green-500" />,
      title: t.userRoles.union.title,
      description: t.userRoles.union.description,
      href: "/post-job-ai",
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: t.userRoles.sendingCompany.title,
      description: t.userRoles.sendingCompany.description,
      href: "/post-job-ai",
    },
  ];

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
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className='bg-accent text-accent-foreground hover:bg-accent/90'>
                {t.cta.postJob}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t.userRoles.title}</DialogTitle>
                <DialogDescription className="text-center">
                  {t.userRoles.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                {userRoles.map((role) => (
                  <Link href={role.href} key={role.title}>
                    <Card className="p-6 text-left hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/5 p-3 rounded-lg">
                          {role.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-base text-gray-800">
                            {role.title}
                          </h3>
                           <p className="text-sm text-muted-foreground mt-1">
                            {role.description}
                          </p>
                        </div>
                      </div>
                       <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </Card>
                  </Link>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
            {t.cta.contactUs}
          </Button>
        </div>
      </div>
    </section>
  );
}
