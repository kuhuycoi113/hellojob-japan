

'use client';

import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { LayoutGrid, User, Sparkles, ChevronRight, Compass, Building, Users as UsersIcon, MessageSquare, PlusCircle, AlertCircle, Settings, Diamond, LogIn, FileText, ArrowLeft, Handshake } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
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
  const { userRole } = useRole();
  const { toggleChat } = useChat();
  const pathname = usePathname();
  const router = useRouter();

  const [mainDialogOpen, setMainDialogOpen] = useState(false);
  const [roleDialogOpen, setRoleDialogOpen] = useState(false);

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
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: t.userRoles.yuryoShokai.title,
      description: t.userRoles.yuryoShokai.description,
    },
    {
      icon: <Building className="h-8 w-8 text-purple-500" />,
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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">{t.header.postJob}</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-headline text-center">{t.postMethod.title}</DialogTitle>
                  <DialogDescription className="text-center">{t.postMethod.description}</DialogDescription>
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
            <Dialog open={mainDialogOpen} onOpenChange={setMainDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Tạo</Button>
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
                        <Card className="p-4 sm:p-6 text-left hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-4">
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

            <Dialog>
              <DialogTrigger asChild>
                  <Button variant="secondary">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      {t.header.postJob}
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
  );
}
