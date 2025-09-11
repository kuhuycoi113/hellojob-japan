

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/language-context';
import { Building, Handshake, Users, ChevronRight, Sparkles, FileText, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Building as BuildingIcon } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

type Role = { title: string; description: string; icon: JSX.Element; }

export function Cta() {
  const { t } = useLanguage();
  const router = useRouter();
  const [mainDialogOpen, setMainDialogOpen] = useState(false);
  const [roleDialogOpen, setRoleDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const userRoles: Role[] = [
    {
      icon: <Building className="h-8 w-8 text-indigo-500" />,
      title: t.userRoles.receivingCompany.title,
      description: t.userRoles.receivingCompany.description,
    },
    {
      icon: <BuildingIcon className="h-8 w-8 text-blue-500" />,
      title: t.userRoles.sendingCompany.title,
      description: t.userRoles.sendingCompany.description,
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      title: t.userRoles.supportOrg.title,
      description: t.userRoles.supportOrg.description,
    },
    {
      icon: <Handshake className="h-8 w-8 text-green-500" />,
      title: t.userRoles.union.title,
      description: t.userRoles.union.description,
    },
    {
      icon: <Building className="h-8 w-8 text-purple-500" />,
      title: t.userRoles.hakenCompany.title,
      description: t.userRoles.hakenCompany.description,
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: t.userRoles.yuryoShokai.title,
      description: t.userRoles.yuryoShokai.description,
    },
  ];

  const handleRoleSelect = (role: Role) => {
    setRoleDialogOpen(false);
    const params = new URLSearchParams();
    params.set('role', role.title);
    router.push(`/post-job-ai?${params.toString()}`);
  }

  const openRoleDialog = () => {
    setMainDialogOpen(false);
    setRoleDialogOpen(true);
  }
  
  const backToMainDialog = () => {
    setRoleDialogOpen(false);
    setMainDialogOpen(true);
  }

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
          <Dialog open={mainDialogOpen} onOpenChange={setMainDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className='bg-accent text-accent-foreground hover:bg-accent/90'>
                {t.cta.postJob}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t.postMethod.title}</DialogTitle>
                <DialogDescription className="text-center">
                  {t.postMethod.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                 <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full flex flex-col items-center justify-center" onClick={openRoleDialog}>
                    <div className="bg-primary/5 p-3 rounded-lg mb-4"><Sparkles className="h-8 w-8 text-primary" /></div>
                    <h3 className="font-semibold text-base text-gray-800">{t.postMethod.ai.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t.postMethod.ai.description}</p>
                </Card>
                 <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full flex flex-col items-center justify-center" onClick={() => { /* TODO */ }}>
                    <div className="bg-primary/5 p-3 rounded-lg mb-4"><FileText className="h-8 w-8 text-primary" /></div>
                    <h3 className="font-semibold text-base text-gray-800">{t.postMethod.manual.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t.postMethod.manual.description}</p>
                </Card>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={roleDialogOpen} onOpenChange={setRoleDialogOpen}>
            <DialogContent className="sm:max-w-3xl max-h-[95vh] flex flex-col">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t.userRoles.title}</DialogTitle>
                <DialogDescription className="text-center">
                  {t.userRoles.description}
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="flex-grow pr-6 -mr-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    {userRoles.map((role) => (
                      <div key={role.title} onClick={() => handleRoleSelect(role)}>
                        <Card className="p-6 text-left hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="bg-primary/5 p-3 rounded-lg">
                              {role.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-base text-gray-800">
                                {role.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1 hidden sm:block">
                                {role.description}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </Card>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              <DialogFooter className="flex-row justify-start border-t pt-4 mt-auto">
                  <Button variant="outline" onClick={backToMainDialog}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t.postDetail.article.backButton || 'Quay lại'}
                  </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                {t.cta.contactUs}
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
                  <Link href={`/chat?role=${encodeURIComponent(role.title)}`} key={role.title} onClick={() => setContactDialogOpen(false)}>
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
        </div>
      </div>
    </section>
  );
}
