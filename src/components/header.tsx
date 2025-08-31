
'use client';

import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { LayoutGrid, User, Sparkles, ChevronRight, Briefcase, GraduationCap, Star, Brain, Pencil, Compass, Target, BookOpen, MessageSquare } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/locales/translations';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Building, Handshake, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const VietnamFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="18"
    viewBox="0 0 900 600"
  >
    <rect width="900" height="600" fill="#da251d" />
    <path
      d="M450 115.6l81.3 249.4h262.2l-212.1 154.1 81.3 249.4L450 614.4l-212.1 154.1 81.3-249.4-212.1-154.1h262.2z"
      fill="#ff0"
    />
  </svg>
);

const JapanFlag = () => (
    <svg width="24" height="18" viewBox="0 0 900 600">
        <rect width="900" height="600" fill="#fff" stroke="#e7e7e7" strokeWidth="1"/>
        <circle cx="450" cy="300" r="180" fill="#bc002d"/>
    </svg>
);

const EnglishFlag = () => (
    <svg width="24" height="18" viewBox="0 0 60 36">
        <clipPath id="a">
            <path d="M0 0h60v36H0z"/>
        </clipPath>
        <path d="M0 0h60v36H0z" fill="#012169"/>
        <path d="M0 0l60 36m0-36L0 36" stroke="#fff" strokeWidth="6" clipPath="url(#a)"/>
        <path d="M0 0l60 36m0-36L0 36" stroke="#C8102E" strokeWidth="4" clipPath="url(#a)"/>
        <path d="M30 0v36M0 18h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30 0v36M0 18h60" stroke="#C8102E" strokeWidth="6"/>
    </svg>
);

type VisaType = 'intern' | 'skilled' | 'engineer';
type Role = { title: string; description: string; icon: JSX.Element; }

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const [roleDialogOpen, setRoleDialogOpen] = useState(false);
  const [visaDialogOpen, setVisaDialogOpen] = useState(false);
  const [visaSubTypeDialogOpen, setVisaSubTypeDialogOpen] = useState(false);
  const [postMethodDialogOpen, setPostMethodDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedVisaType, setSelectedVisaType] = useState<VisaType | null>(null);
  const [selectedVisaSubType, setSelectedVisaSubType] = useState<{title: string, href: string} | null>(null);


  const languageConfig = {
    vi: { flag: <VietnamFlag />, name: 'Tiếng Việt', short: 'VN' },
    ja: { flag: <JapanFlag />, name: 'Tiếng Nhật', short: 'JP' },
    en: { flag: <EnglishFlag />, name: 'Tiếng Anh', short: 'EN' },
  }

  const navLinks = [
    { href: "/", label: t.header.home },
    { href: "/how-it-works", label: t.header.steps },
    { href: "/recruit-right", label: t.header.recruitRight },
    { href: "/post-job-ai", label: t.header.postJobAI, icon: <Sparkles className="h-4 w-4 text-accent" /> },
    { href: "/elearning", label: t.header.elearning },
    { href: "/handbook", label: t.header.handbook },
    { href: "/about", label: t.header.about },
  ];
  
    const userRoles = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: t.userRoles.hiringCompany.title,
      description: t.userRoles.hiringCompany.description,
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
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: t.userRoles.sendingCompany.title,
      description: t.userRoles.sendingCompany.description,
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: t.userRoles.hakenCompany.title,
      description: t.userRoles.hakenCompany.description,
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: t.userRoles.yuryoShokai.title,
      description: t.userRoles.yuryoShokai.description,
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

  const menuItems = [
    { href: "/post-job-ai", label: t.header.menuItems.postJobAI, icon: <Sparkles /> },
    { href: "/how-it-works", label: t.header.menuItems.howItWorks, icon: <Compass /> },
    { href: "/recruit-right", label: t.header.menuItems.recruitRight, icon: <Target /> },
    { href: "/elearning", label: t.header.menuItems.elearning, icon: <BookOpen /> },
    { href: "/dashboard/employer", label: t.header.menuItems.dashboard, icon: <Briefcase /> },
    { href: "/handbook", label: t.header.menuItems.handbook, icon: <LayoutGrid /> },
    { href: "/about", label: t.header.menuItems.about, icon: <Building /> },
    { href: "/chat", label: t.header.menuItems.chat, icon: <MessageSquare /> },
  ];

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setRoleDialogOpen(false);
    setVisaDialogOpen(true);
  }

  const handleVisaTypeSelect = (type: VisaType) => {
    setSelectedVisaType(type);
    setVisaDialogOpen(false);
    setVisaSubTypeDialogOpen(true);
  }

  const handleVisaSubTypeSelect = (subType: {title: string, href: string}) => {
    setSelectedVisaSubType(subType);
    setVisaSubTypeDialogOpen(false);
    setPostMethodDialogOpen(true);
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

  return (
    <header className="fixed md:sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-medium">
          {navLinks.map(link => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className={cn(
                "transition-colors hover:text-secondary whitespace-nowrap flex items-center gap-2",
                pathname === link.href ? "text-primary font-bold" : "text-foreground/80"
              )}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2"
              >
                {languageConfig[language].flag}
                <span className="hidden md:inline">{languageConfig[language].short}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="flex items-center gap-2" onClick={() => setLanguage('vi')}>
                <VietnamFlag />
                <span>Tiếng Việt</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2" onClick={() => setLanguage('ja')}>
                <JapanFlag />
                <span>Tiếng Nhật</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2" onClick={() => setLanguage('en')}>
                <EnglishFlag />
                <span>Tiếng Anh</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="outline" className="hover:bg-secondary hover:text-secondary-foreground">
               <Link href="/dashboard/employer" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {t.header.myProfile}
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <LayoutGrid className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 p-4">
                  <Link href="/dashboard/employer" className="block hover:bg-accent/50 rounded-lg p-2 -m-2 mb-4 transition-colors">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-base">HelloJob</p>
                            <p className="text-sm text-muted-foreground">{t.header.menuItems.recruiterAccount}</p>
                        </div>
                    </div>
                  </Link>
                  <DropdownMenuSeparator />
                   <div className="grid grid-cols-4 gap-2 mt-4">
                      {menuItems.map((item) => (
                          <DropdownMenuItem key={item.href} asChild className="flex-col h-20 p-2 text-center">
                             <Link href={item.href}>
                              <div className="text-primary mb-1">{item.icon}</div>
                              <span className="text-xs whitespace-normal leading-tight">{item.label}</span>
                            </Link>
                          </DropdownMenuItem>
                      ))}
                  </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
       {/* Dialogs for Post Job Flow */}
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
                {selectedVisaType && visaSubTypes[selectedVisaType].map((subType) => (
                  <div onClick={() => handleVisaSubTypeSelect(subType)} key={subType.title}>
                    <Card className="p-4 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer">
                      <h3 className="font-semibold text-base text-gray-800">
                        {subType.title}
                      </h3>
                    </Card>
                  </div>
                ))}
              </div>
            </DialogContent>
        </Dialog>
        
        <Dialog open={postMethodDialogOpen} onOpenChange={setPostMethodDialogOpen}>
           <DialogContent className="sm:max-w-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t.postMethod.title}</DialogTitle>
                <DialogDescription className="text-center">{t.postMethod.description}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                  <Link href={getAiPostUrl()}>
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
                  </Link>
                   <Link href="/">
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
                  </Link>
              </div>
            </DialogContent>
        </Dialog>
    </header>
  );
}

    