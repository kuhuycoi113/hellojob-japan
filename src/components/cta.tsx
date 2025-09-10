
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
import { Building, Handshake, Users, ChevronRight, Briefcase, GraduationCap, Star, Brain, Pencil, Sparkles } from 'lucide-react';
import { useState } from 'react';

type VisaType = 'intern' | 'skilled' | 'engineer';
type Role = { title: string; description: string; icon: JSX.Element; }

export function Cta() {
  const { t } = useLanguage();
  const [roleDialogOpen, setRoleDialogOpen] = useState(false);
  const [visaDialogOpen, setVisaDialogOpen] = useState(false);
  const [visaSubTypeDialogOpen, setVisaSubTypeDialogOpen] = useState(false);
  const [postMethodDialogOpen, setPostMethodDialogOpen] = useState(false);
  const [isForContact, setIsForContact] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedVisaType, setSelectedVisaType] = useState<VisaType | null>(null);
  const [selectedVisaSubType, setSelectedVisaSubType] = useState<{title: string, href: string} | null>(null);

  const userRoles: Role[] = [
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
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: t.userRoles.yuryoShokai.title,
      description: t.userRoles.yuryoShokai.description,
    },
    {
      icon: <Building className="h-8 w-8 text-blue-500" />,
      title: t.userRoles.sendingCompany.title,
      description: t.userRoles.sendingCompany.description,
    },
  ];
  
  const visaTypes = [
      {
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        title: t.visaTypes.intern.title,
        description: t.visaTypes.intern.description,
        type: 'intern' as VisaType,
      },
      {
        icon: <Star className="h-8 w-8 text-yellow-500" />,
        title: t.visaTypes.skilled.title,
        description: t.visaTypes.skilled.description,
        type: 'skilled' as VisaType,
      },
      {
        icon: <Briefcase className="h-8 w-8 text-green-500" />,
        title: t.visaTypes.engineer.title,
        description: t.visaTypes.engineer.description,
        type: 'engineer' as VisaType,
      },
  ]

  const visaSubTypes = {
    intern: [
      { title: t.visaSubTypes.intern.threeYear, href: "#"},
      { title: t.visaSubTypes.intern.oneYear, href: "#"},
      { title: t.visaSubTypes.intern.go, href: "#"},
    ],
    skilled: [
      { title: t.visaSubTypes.skilled.japan, href: "#"},
      { title: t.visaSubTypes.skilled.vietnam, href: "#"},
    ],
    engineer: [
      { title: t.visaSubTypes.engineer.japan, href: "#"},
      { title: t.visaSubTypes.engineer.vietnam, href: "#"},
    ],
  };

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    if (!isForContact) {
      setRoleDialogOpen(false);
      setVisaDialogOpen(true);
    }
  }

  const handleVisaTypeSelect = (type: VisaType) => {
    setSelectedVisaType(type);
    setVisaDialogOpen(false);
    setVisaSubTypeDialogOpen(true);
  }

  const handleVisaSubTypeSelect = (subType: {title: string, href: string}) => {
    setSelectedVisaSubType(subType);
    setVisaSubTypeDialogOpen(false);
    // Redirect to the correct page based on selections
    const params = new URLSearchParams();
    if(selectedRole) params.set('role', selectedRole.title);
    if(selectedVisaType) {
        const visa = visaTypes.find(v => v.type === selectedVisaType);
        if(visa) params.set('visaType', visa.title);
    }
    params.set('visaSubType', subType.title);
    // For now, let's assume manual post links to home and AI post to the AI page.
    // This logic can be refined.
    window.location.href = `/post-job-ai?${params.toString()}`;
  }

  const getAiPostUrl = () => {
    const params = new URLSearchParams();
    if(selectedRole) params.set('role', selectedRole.title);
    if(selectedVisaType) {
        const visa = visaTypes.find(v => v.type === selectedVisaType);
        if(visa) params.set('visaType', visa.title);
    }
    if(selectedVisaSubType) params.set('visaSubType', selectedVisaSubType.title);

    return `/post-job-ai?${params.toString()}`;
  }

  const handlePostMethodSelect = () => {
    setPostMethodDialogOpen(false);
    setRoleDialogOpen(true);
  };


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
          <Dialog open={postMethodDialogOpen} onOpenChange={setPostMethodDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className='bg-accent text-accent-foreground hover:bg-accent/90' onClick={() => setIsForContact(false)}>
                {t.cta.postJob}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t.postMethod.title}</DialogTitle>
                <DialogDescription className="text-center">{t.postMethod.description}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                  <div onClick={handlePostMethodSelect}>
                    <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full flex flex-col items-center">
                      <div className="bg-primary/5 p-3 rounded-lg mb-4">
                        <Brain className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-base text-gray-800">
                        {t.postMethod.ai.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t.postMethod.ai.description}
                      </p>
                    </Card>
                  </div>
                  <div onClick={handlePostMethodSelect}>
                    <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full flex flex-col items-center">
                      <div className="bg-primary/5 p-3 rounded-lg mb-4">
                        <Pencil className="h-8 w-8 text-yellow-500" />
                      </div>
                      <h3 className="font-semibold text-base text-gray-800">
                          {t.postMethod.manual.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                          {t.postMethod.manual.description}
                      </p>
                    </Card>
                  </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100" onClick={() => setIsForContact(true)}>
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
                  <Link href={`/chat?role=${encodeURIComponent(role.title)}`} key={role.title}>
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

        <Dialog open={roleDialogOpen} onOpenChange={setRoleDialogOpen}>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t.userRoles.title}</DialogTitle>
                <DialogDescription className="text-center">
                  {t.userRoles.description}
                </DialogDescription>
              </DialogHeader>
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
                          <p className="text-sm text-muted-foreground mt-1">
                            {role.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </Card>
                  </div>
                ))}
              </div>
            </DialogContent>
        </Dialog>

        <Dialog open={visaDialogOpen} onOpenChange={setVisaDialogOpen}>
           <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t.visaTypes.title}</DialogTitle>
                <DialogDescription className="text-center">
                  {t.visaTypes.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                {visaTypes.map((visa) => (
                  <div key={visa.title} onClick={() => handleVisaTypeSelect(visa.type)}>
                    <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full flex flex-col items-center">
                      <div className="bg-primary/5 p-3 rounded-lg mb-4">
                        {visa.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-base text-gray-800">
                          {visa.title}
                        </h3>
                         <p className="text-sm text-muted-foreground mt-1">
                          {visa.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </DialogContent>
        </Dialog>

        <Dialog open={visaSubTypeDialogOpen} onOpenChange={setVisaSubTypeDialogOpen}>
           <DialogContent className="sm:max-w-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t.visaSubTypes.title}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 gap-4 py-4">
                {selectedVisaType && visaSubTypes[selectedVisaType] && visaSubTypes[selectedVisaType].map((subType) => (
                   <Link href={getAiPostUrl() + `&visaSubType=${encodeURIComponent(subType.title)}`} key={subType.title} onClick={() => handleVisaSubTypeSelect(subType)}>
                    <Card className="p-4 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer">
                      <h3 className="font-semibold text-base text-gray-800">
                        {subType.title}
                      </h3>
                    </Card>
                  </Link>
                ))}
              </div>
            </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}
