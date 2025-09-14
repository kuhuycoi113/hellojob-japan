

'use client';

import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { LayoutGrid, User, Sparkles, ChevronRight, Compass, Building, Users as UsersIcon, MessageSquare, PlusCircle, AlertCircle, Settings, Diamond, LogIn, FileText, ArrowLeft, Handshake, FastForward, BrainCircuit, HardHat, Plane, UserCheck, HandCoins, Briefcase, UserPlus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Building as BuildingIcon, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useChat } from '@/contexts/chat-context';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { useRole } from '@/contexts/role-context';
import { ScrollArea } from './ui/scroll-area';
import { AuthDialog } from './auth-dialog';
import { Input } from './ui/input';


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

type Role = { title: string; description: string; icon: JSX.Element; }

const RoleSwitcher = ({ inMenu = false }: { inMenu?: boolean }) => {
  const { t } = useLanguage();
  const { userRole, setUserRole } = useRole();

  return (
    <div className={cn(inMenu ? "my-4" : "hidden")}>
      <Label htmlFor="role-switcher-desktop" className="text-xs text-muted-foreground">{t.jobsPage.roleSwitcher.label}</Label>
      <Select value={userRole} onValueChange={(value) => setUserRole(value as any)}>
        <SelectTrigger id="role-switcher-desktop" className="h-10 bg-muted">
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="guest">{t.userRoles.guest.title}</SelectItem>
          <SelectItem value="support_org">{t.userRoles.supportOrg.title}</SelectItem>
          <SelectItem value="union">{t.userRoles.union.title}</SelectItem>
          <SelectItem value="yuryo_shokai">{t.userRoles.yuryoShokai.title}</SelectItem>
          <SelectItem value="sending_company">{t.userRoles.sendingCompany.title}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};


export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { userRole, setUserRole } = useRole();
  const { toggleChat } = useChat();
  const pathname = usePathname();
  const router = useRouter();

  const { t: t_cta_flow } = useLanguage();

  const [dialog1Open, setDialog1Open] = useState(false);
  const [dialog2Open, setDialog2Open] = useState(false);
  const [dialog3Open, setDialog3Open] = useState(false);
  const [dialog4Open, setDialog4Open] = useState(false);
  const [dialog51Open, setDialog51Open] = useState(false);
  const [dialog52Open, setDialog52Open] = useState(false);
  const [dialog53Open, setDialog53Open] = useState(false);
  const [dialog61Open, setDialog61Open] = useState(false);
  const [dialog62Open, setDialog62Open] = useState(false);
  const [dialog63Open, setDialog63Open] = useState(false);
  const [dialog7Open, setDialog7Open] = useState(false);
  const [dialog7Caller, setDialog7Caller] = useState<string | null>(null);
  const [dialog8Open, setDialog8Open] = useState(false);
  const [feeAmount, setFeeAmount] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [dialog9Open, setDialog9Open] = useState(false);
  const [managementFeeAmount, setManagementFeeAmount] = useState('');

  const [currentFlow, setCurrentFlow] = useState<'quick' | 'ai_post' | 'manual_post' | null>(null);
  const [selectedVisa, setSelectedVisa] = useState<{ type: string; subType: string; industry: string; region: string; } | null>(null);

  const openDialog7 = (caller: string, industry: string) => {
    setSelectedVisa(prev => ({ ...prev!, industry }));
    setDialog7Caller(caller);
    if (caller === '61') setDialog61Open(false);
    if (caller === '62') setDialog62Open(false);
    if (caller === '63') setDialog63Open(false);
    setDialog7Open(true);
  };

  const backFromDialog7 = () => {
    setDialog7Open(false);
    if (dialog7Caller === '61') setDialog61Open(true);
    if (dialog7Caller === '62') setDialog62Open(true);
    if (dialog7Caller === '63') setDialog63Open(true);
  };

  const handleFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, '');
    if (!isNaN(Number(rawValue))) {
        const formattedValue = Number(rawValue).toLocaleString('en-US');
        setFeeAmount(formattedValue);
    } else if (rawValue === '') {
        setFeeAmount('');
    }
  };
  
  const handleManagementFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, '');
    if (!isNaN(Number(rawValue))) {
        const formattedValue = Number(rawValue).toLocaleString('en-US');
        setManagementFeeAmount(formattedValue);
    } else if (rawValue === '') {
        setManagementFeeAmount('');
    }
  };

  const handleFinishFlow = () => {
    setDialog8Open(false);
    setDialog9Open(false);

    if (selectedRole?.title === t.userRoles.receivingCompany.title) {
        setUserRole('support_org');
        router.push('/jobs');
    } else if (selectedRole?.title === t.userRoles.supportOrg.title) {
        setUserRole('sending_company');
        router.push('/jobs');
    } else {
        router.push('/jobs');
    }
  };

  const handleRoleSelectAndContinue = (role: Role) => {
    setSelectedRole(role);
    setDialog3Open(false);
    setDialog4Open(true);
  };
  
  const handleRegionSelect = (region: string) => {
    const updatedSelections = { ...selectedVisa!, region };
    setSelectedVisa(updatedSelections);
    setDialog7Open(false);

    const params = new URLSearchParams();
    if (selectedRole) params.set('role', selectedRole.title);
    if (updatedSelections.type) params.set('visaType', updatedSelections.type);
    if (updatedSelections.subType) params.set('visaSubType', updatedSelections.subType);
    if (updatedSelections.industry) params.set('industry', updatedSelections.industry);
    if (updatedSelections.region) params.set('region', updatedSelections.region);

    if (currentFlow === 'quick') {
      setDialog8Open(true);
    } else if (currentFlow === 'ai_post') {
      router.push(`/post-job-ai?${params.toString()}`);
    } else if (currentFlow === 'manual_post') {
      router.push(`/post-job/manual?${params.toString()}`);
    }
  };

  const languageConfig = {
    vi: { flag: <VietnamFlag />, name: 'Tiếng Việt', short: 'VN' },
    ja: { flag: <JapanFlag />, name: 'Tiếng Nhật', short: 'JP' },
    en: { flag: <EnglishFlag />, name: 'Tiếng Anh', short: 'EN' },
  }

  const navLinks = [
    { href: "/", label: t.header.home },
    { href: "/how-it-works", label: t.header.steps },
    { href: "/post-job-ai", label: t.header.postJobAI, icon: <Sparkles className="h-4 w-4 text-accent" /> },
    { href: "/handbook", label: t.header.handbook },
    { href: "/about", label: t.header.about },
  ];
  
  const userRoles: Role[] = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: t.userRoles.receivingCompany.title,
      description: t.userRoles.receivingCompany.description,
    },
    {
      icon: <Plane className="h-8 w-8 text-secondary" />,
      title: t.userRoles.sendingCompany.title,
      description: t.userRoles.sendingCompany.description,
    },
    {
      icon: <UserCheck className="h-8 w-8 text-accent" />,
      title: t.userRoles.supportOrg.title,
      description: t.userRoles.supportOrg.description,
    },
    {
      icon: <Handshake className="h-8 w-8 text-chart-1" />,
      title: t.userRoles.union.title,
      description: t.userRoles.union.description,
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      title: t.userRoles.yuryoShokai.title,
      description: t.userRoles.yuryoShokai.description,
    },
    {
      icon: <Briefcase className="h-8 w-8 text-purple-500" />,
      title: t.userRoles.hakenCompany.title,
      description: t.userRoles.hakenCompany.description,
    },
  ];

  const menuItems = [
    { href: "/post-job-ai", label: t.header.menuItems.postJobAI, icon: <Sparkles /> },
    { href: "/how-it-works", label: t.header.menuItems.howItWorks, icon: <Compass /> },
    { href: "/handbook", label: t.header.menuItems.handbook, icon: <LayoutGrid /> },
    { href: "/about", label: t.header.menuItems.about, icon: <Building /> },
    { href: "/advisors", label: t.header.menuItems.advisors, icon: <UsersIcon /> },
    { href: "/partners", label: t.header.menuItems.partnerList, icon: <Handshake /> },
    { href: "/chat", label: t.header.menuItems.chat, icon: <MessageSquare /> },
    { href: "#", label: t.mobile_menu_sheet.feedback, icon: <AlertCircle /> },
  ];

  const handleRoleSelect = (role: Role) => {
    const params = new URLSearchParams();
    params.set('role', role.title);
    router.push(`/post-job-ai?${params.toString()}`);
  }

  return (
    <>
      <header className="fixed md:sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 justify-center items-center gap-6 text-sm font-medium">
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
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleChat}>
              <MessageSquare className="h-6 w-6" />
            </Button>

            <div className="md:hidden">
              <Button variant="secondary" onClick={() => setDialog1Open(true)}>{t.header.postJob}</Button>
            </div>
            
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
              <Button variant="secondary" onClick={() => setDialog1Open(true)}>
                <PlusCircle className="mr-2 h-4 w-4" />
                {t.header.postJob}
              </Button>

              <Button variant="outline" asChild>
                  <Link href="/jobs" className={cn(pathname === "/jobs" && "text-primary font-bold")}>
                      {t.header.x_function}
                  </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <LayoutGrid className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 p-4">
                    {userRole === 'guest' ? (
                       <Card className="bg-primary/10 text-center p-4">
                          <CardContent className="p-0">
                            <h4 className="font-bold text-base">{t.header.menuItems.guestCta.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1 mb-3">{t.header.menuItems.guestCta.description}</p>
                            <AuthDialog>
                              <Button className="w-full">
                                <LogIn className="mr-2 h-4 w-4" />
                                {t.header.menuItems.guestCta.button}
                              </Button>
                            </AuthDialog>
                          </CardContent>
                       </Card>
                    ) : (
                      <Link href="/dashboard/profile" className="block hover:bg-accent/50 rounded-lg p-2 -m-2 mb-2 transition-colors">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                <AvatarFallback>TVC</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-base">Công ty cổ phần TVC</p>
                                <p className="text-sm text-muted-foreground">{t.header.menuItems.recruiterAccountType.replace('{type}', t.userRoles.sendingCompany.title)}</p>
                            </div>
                        </div>
                      </Link>
                    )}
                    <DropdownMenuSeparator />
                    
                    {userRole !== 'guest' && (
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 my-2">
                        <Diamond className="mr-2 h-4 w-4" />
                        {t.header.menuItems.signUpForPremium}
                      </Button>
                    )}

                    <div className="grid grid-cols-4 gap-2 my-4">
                        {menuItems.map((item) => (
                            <DropdownMenuItem key={item.href} asChild className="flex-col h-20 p-2 text-center">
                              <Link href={item.href}>
                                <div className="text-primary mb-1">{item.icon}</div>
                                <span className="text-xs whitespace-normal leading-tight">{item.label}</span>
                              </Link>
                            </DropdownMenuItem>
                        ))}
                    </div>
                    <DropdownMenuSeparator />
                    <RoleSwitcher inMenu={true} />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
       <Dialog open={dialog1Open} onOpenChange={setDialog1Open}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold font-headline">{t_cta_flow.cta_flow.dialog1_title}</DialogTitle>
            <DialogDescription>{t_cta_flow.cta_flow.dialog1_desc}</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => { setCurrentFlow('quick'); setDialog1Open(false); setDialog3Open(true); }}>
                  <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary"><FastForward className="w-8 h-8"/></div>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800">{t_cta_flow.cta_flow.dialog1_opt1_title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t_cta_flow.cta_flow.dialog1_opt1_desc}</p>
              </Card>
               <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => { setDialog1Open(false); setDialog2Open(true); }}>
                   <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-green-500/10 text-green-500"><FileText className="w-8 h-8"/></div>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800">{t_cta_flow.cta_flow.dialog1_opt2_title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t_cta_flow.cta_flow.dialog1_opt2_desc}</p>
              </Card>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={dialog2Open} onOpenChange={setDialog2Open}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl font-bold font-headline">{t_cta_flow.cta_flow.dialog2_title}</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => { setCurrentFlow('ai_post'); setDialog2Open(false); setDialog3Open(true); }}>
                    <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full bg-primary/10 text-primary"><BrainCircuit className="w-8 h-8"/></div>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">{t_cta_flow.cta_flow.dialog2_opt1_title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t_cta_flow.cta_flow.dialog2_opt1_desc}</p>
                </Card>
                 <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => { setCurrentFlow('manual_post'); setDialog2Open(false); setDialog3Open(true); }}>
                     <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full bg-secondary/10 text-secondary"><FileText className="w-8 h-8"/></div>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">{t_cta_flow.cta_flow.dialog2_opt2_title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t_cta_flow.cta_flow.dialog2_opt2_desc}</p>
                </Card>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => { setDialog2Open(false); setDialog1Open(true); }}>{t_cta_flow.cta_flow.back_button}</Button>
            </DialogFooter>
          </DialogContent>
      </Dialog>

      <Dialog open={dialog3Open} onOpenChange={setDialog3Open}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-headline text-center">{t.userRoles.title}</DialogTitle>
            <DialogDescription className="text-center">
              {t.userRoles.description}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[60vh] sm:h-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 pr-4 sm:pr-0">
              {userRoles.map((role) => (
                <Card key={role.title} className="p-4 sm:p-6 text-left hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full flex items-center gap-4" onClick={() => handleRoleSelectAndContinue(role)}>
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
                </Card>
              ))}
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setDialog3Open(false); setDialog1Open(true); }}>{t_cta_flow.cta_flow.back_button}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={dialog4Open} onOpenChange={setDialog4Open}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-headline text-center">{t.visaTypes.title}</DialogTitle>
            <DialogDescription className="text-center">
              {t.visaTypes.description}
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              <Card
                className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => { setSelectedVisa({ type: t.visaTypes.intern.title, subType: '', industry: '', region: '' }); setDialog4Open(false); setDialog51Open(true); }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <HardHat className="w-8 h-8" />
                  </div>
                </div>
                <CardTitle className="font-semibold text-lg">{t.visaTypes.intern.title}</CardTitle>
                <CardContent className="p-0 mt-2 text-sm text-muted-foreground">{t.visaTypes.intern.description}</CardContent>
              </Card>

              <Card
                className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => { setSelectedVisa({ type: t.visaTypes.skilled.title, subType: '', industry: '', region: '' }); setDialog4Open(false); setDialog52Open(true); }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow-400/10 text-yellow-500 p-3 rounded-full">
                    <UserCheck className="w-8 h-8" />
                  </div>
                </div>
                <CardTitle className="font-semibold text-lg">{t.visaTypes.skilled.title}</CardTitle>
                <CardContent className="p-0 mt-2 text-sm text-muted-foreground">{t.visaTypes.skilled.description}</CardContent>
              </Card>

              <Card
                className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => { setSelectedVisa({ type: t.visaTypes.engineer.title, subType: '', industry: '', region: '' }); setDialog4Open(false); setDialog53Open(true); }}
              >
                 <div className="flex justify-center mb-4">
                  <div className="bg-green-500/10 text-green-500 p-3 rounded-full">
                    <Briefcase className="w-8 h-8" />
                  </div>
                </div>
                <CardTitle className="font-semibold text-lg">{t.visaTypes.engineer.title}</CardTitle>
                <CardContent className="p-0 mt-2 text-sm text-muted-foreground">{t.visaTypes.engineer.description}</CardContent>
              </Card>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setDialog4Open(false); setDialog3Open(true); }}>{t_cta_flow.cta_flow.back_button}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={dialog51Open} onOpenChange={setDialog51Open}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.cta_flow.dialog5_1_title}</DialogTitle>
              <DialogDescription className="text-center">
                {t_cta_flow.cta_flow.dialog5_1_desc}
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                <Card
                  className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center"
                  onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.cta_flow.dialog5_1_opt1_title})); setDialog51Open(false); setDialog61Open(true); }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <HardHat className="w-8 h-8" />
                    </div>
                  </div>
                  <CardTitle className="font-semibold text-base">{t_cta_flow.cta_flow.dialog5_1_opt1_title}</CardTitle>
                  <CardContent className="p-0 mt-2 text-sm text-muted-foreground">{t_cta_flow.cta_flow.dialog5_1_opt1_desc}</CardContent>
                </Card>
                <Card
                  className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center"
                  onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.cta_flow.dialog5_1_opt2_title})); setDialog51Open(false); setDialog61Open(true); }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-accent/10 text-accent p-3 rounded-full">
                      <HardHat className="w-8 h-8" />
                    </div>
                  </div>
                  <CardTitle className="font-semibold text-base">{t_cta_flow.cta_flow.dialog5_1_opt2_title}</CardTitle>
                  <CardContent className="p-0 mt-2 text-sm text-muted-foreground">{t_cta_flow.cta_flow.dialog5_1_opt2_desc}</CardContent>
                </Card>
                <Card
                  className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center"
                  onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.cta_flow.dialog5_1_opt3_title})); setDialog51Open(false); setDialog61Open(true); }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-chart-1/10 text-chart-1 p-3 rounded-full">
                      <HardHat className="w-8 h-8" />
                    </div>
                  </div>
                  <CardTitle className="font-semibold text-base">{t_cta_flow.cta_flow.dialog5_1_opt3_title}</CardTitle>
                  <CardContent className="p-0 mt-2 text-sm text-muted-foreground">{t_cta_flow.cta_flow.dialog5_1_opt3_desc}</CardContent>
                </Card>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => { setDialog51Open(false); setDialog4Open(true); }}>{t_cta_flow.cta_flow.back_button}</Button>
            </DialogFooter>
          </DialogContent>
      </Dialog>
      <Dialog open={dialog61Open} onOpenChange={setDialog61Open}>
          <DialogContent className="sm:max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.cta_flow.dialog6_title}</DialogTitle>
              <DialogDescription className="text-center">
                {t_cta_flow.cta_flow.dialog6_desc}
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-3 gap-4 py-4">
              {t_cta_flow.cta_flow.dialog6_industries_intern.map(industry => (
                <Card key={industry} className="p-4 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => openDialog7('61', industry)}>
                  <h3 className="font-semibold text-base text-gray-800">{industry}</h3>
                </Card>
              ))}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => { setDialog61Open(false); setDialog51Open(true); }}>{t_cta_flow.cta_flow.back_button}</Button>
            </DialogFooter>
          </DialogContent>
      </Dialog>
      <Dialog open={dialog52Open} onOpenChange={setDialog52Open}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.cta_flow.dialog5_2_title}</DialogTitle>
            <DialogDescription className="text-center">
              {t_cta_flow.cta_flow.dialog5_2_desc}
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
            <Card
              className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center"
              onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.cta_flow.dialog5_2_opt1_title})); setDialog52Open(false); setDialog62Open(true); }}
            >
              <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Users className="w-8 h-8" />
                  </div>
              </div>
              <CardTitle className="font-semibold text-base">{t_cta_flow.cta_flow.dialog5_2_opt1_title}</CardTitle>
              <CardContent className="p-0 mt-2 text-sm text-muted-foreground">{t_cta_flow.cta_flow.dialog5_2_opt1_desc}</CardContent>
            </Card>
            <Card
              className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center"
              onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.cta_flow.dialog5_2_opt2_title})); setDialog52Open(false); setDialog62Open(true); }}
            >
               <div className="flex justify-center mb-4">
                  <div className="bg-secondary/10 text-secondary p-3 rounded-full">
                      <Plane className="w-8 h-8" />
                  </div>
              </div>
              <CardTitle className="font-semibold text-base">{t_cta_flow.cta_flow.dialog5_2_opt2_title}</CardTitle>
              <CardContent className="p-0 mt-2 text-sm text-muted-foreground">{t_cta_flow.cta_flow.dialog5_2_opt2_desc}</CardContent>
            </Card>
            <Card
              className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center"
              onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.cta_flow.dialog5_2_opt3_title})); setDialog52Open(false); setDialog62Open(true); }}
            >
               <div className="flex justify-center mb-4">
                  <div className="bg-yellow-500/10 text-yellow-500 p-3 rounded-full">
                      <UserPlus className="w-8 h-8" />
                  </div>
              </div>
              <CardTitle className="font-semibold text-base">{t_cta_flow.cta_flow.dialog5_2_opt3_title}</CardTitle>
              <CardContent className="p-0 mt-2 text-sm text-muted-foreground">{t_cta_flow.cta_flow.dialog5_2_opt3_desc}</CardContent>
            </Card>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setDialog52Open(false); setDialog4Open(true); }}>{t_cta_flow.cta_flow.back_button}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={dialog62Open} onOpenChange={setDialog62Open}>
          <DialogContent className="sm:max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.cta_flow.dialog6_title}</DialogTitle>
              <DialogDescription className="text-center">
                {t_cta_flow.cta_flow.dialog6_desc}
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-3 gap-4 py-4">
              {t_cta_flow.cta_flow.dialog6_industries_skilled.map(industry => (
                <Card key={industry} className="p-4 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => openDialog7('62', industry)}>
                  <h3 className="font-semibold text-base text-gray-800">{industry}</h3>
                </Card>
              ))}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => { setDialog62Open(false); setDialog52Open(true); }}>{t_cta_flow.cta_flow.back_button}</Button>
            </DialogFooter>
          </DialogContent>
      </Dialog>

      <Dialog open={dialog53Open} onOpenChange={setDialog53Open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.cta_flow.dialog5_3_title}</DialogTitle>
            <DialogDescription className="text-center">
              {t_cta_flow.cta_flow.dialog5_3_desc}
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
            <Card
              className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.cta_flow.dialog5_3_opt1_title})); setDialog53Open(false); setDialog63Open(true); }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Users className="w-8 h-8" />
                </div>
              </div>
              <CardTitle className="font-semibold text-base">{t_cta_flow.cta_flow.dialog5_3_opt1_title}</CardTitle>
              <CardContent className="p-0 mt-2 text-sm text-muted-foreground">{t_cta_flow.cta_flow.dialog5_3_opt1_desc}</CardContent>
            </Card>
            <Card
              className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.cta_flow.dialog5_3_opt2_title})); setDialog53Open(false); setDialog63Open(true); }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Plane className="w-8 h-8" />
                </div>
              </div>
              <CardTitle className="font-semibold text-base">{t_cta_flow.cta_flow.dialog5_3_opt2_title}</CardTitle>
              <CardContent className="p-0 mt-2 text-sm text-muted-foreground">{t_cta_flow.cta_flow.dialog5_3_opt2_desc}</CardContent>
            </Card>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setDialog53Open(false);
                setDialog4Open(true);
              }}
            >
              {t_cta_flow.cta_flow.back_button}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={dialog63Open} onOpenChange={setDialog63Open}>
          <DialogContent className="sm:max-w-5xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.cta_flow.dialog6_title}</DialogTitle>
              <DialogDescription className="text-center">
                {t_cta_flow.cta_flow.dialog6_desc}
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[60vh]">
              <div className="grid grid-cols-3 gap-4 py-4 pr-4">
                {t_cta_flow.cta_flow.dialog6_industries_engineer.map(industry => (
                  <Card key={industry} className="p-4 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => openDialog7('63', industry)}>
                    <h3 className="font-semibold text-base text-gray-800">{industry}</h3>
                  </Card>
                ))}
              </div>
            </ScrollArea>
            <DialogFooter>
              <Button variant="outline" onClick={() => { setDialog63Open(false); setDialog53Open(true); }}>{t_cta_flow.cta_flow.back_button}</Button>
            </DialogFooter>
          </DialogContent>
      </Dialog>
      <Dialog open={dialog7Open} onOpenChange={setDialog7Open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.cta_flow.dialog7_title}</DialogTitle>
            <DialogDescription className="text-center">{t_cta_flow.cta_flow.dialog7_desc}</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4 py-4">
              {t_cta_flow.cta_flow.dialog7_regions.map(region => (
                <Card key={region} className="p-4 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => handleRegionSelect(region)}>
                  <h3 className="font-semibold text-base text-gray-800">{region}</h3>
                </Card>
              ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={backFromDialog7}>{t_cta_flow.cta_flow.back_button}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={dialog8Open} onOpenChange={setDialog8Open}>
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center flex items-center justify-center gap-2">
                  <HandCoins className="h-6 w-6 text-primary" />
                  {t_cta_flow.cta_flow.dialog8_title}
                </DialogTitle>
            </DialogHeader>
            <div className="py-4">
                <Label htmlFor="fee">{t_cta_flow.cta_flow.dialog8_label}</Label>
                <div className="relative mt-1">
                    <Input
                        id="fee"
                        value={feeAmount}
                        onChange={handleFeeChange}
                        placeholder={t_cta_flow.cta_flow.dialog8_placeholder}
                        className="pr-12 text-right"
                    />
                    <span className="absolute inset-y-0 right-4 flex items-center text-muted-foreground">
                        JPY
                    </span>
                </div>
            </div>
            <DialogFooter>
                <Button variant="outline" onClick={() => { setDialog8Open(false); setDialog7Open(true); }}>{t_cta_flow.cta_flow.back_button}</Button>
                <Button onClick={() => { setDialog8Open(false); setDialog9Open(true); }}>{t_cta_flow.cta_flow.continue_button}</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={dialog9Open} onOpenChange={setDialog9Open}>
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center flex items-center justify-center gap-2">
                    <HandCoins className="h-6 w-6 text-primary" />
                    {t_cta_flow.cta_flow.dialog9_title}
                </DialogTitle>
            </DialogHeader>
            <div className="py-4">
                <Label htmlFor="management-fee">{t_cta_flow.cta_flow.dialog9_label}</Label>
                <div className="relative mt-1">
                    <Input
                        id="management-fee"
                        value={managementFeeAmount}
                        onChange={handleManagementFeeChange}
                        placeholder={t_cta_flow.cta_flow.dialog9_placeholder}
                        className="pr-12 text-right"
                    />
                    <span className="absolute inset-y-0 right-4 flex items-center text-muted-foreground">
                        JPY
                    </span>
                </div>
            </div>
            <DialogFooter>
                <Button variant="outline" onClick={() => { setDialog9Open(false); setDialog8Open(true); }}>{t_cta_flow.cta_flow.back_button}</Button>
                <Button onClick={handleFinishFlow}>{t_cta_flow.cta_flow.save_button}</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
