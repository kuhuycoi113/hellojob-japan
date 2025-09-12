

'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/language-context';
import { Compass, Target, BookOpen, LayoutGrid, Building, Sparkles, Plus, FileText, Handshake, MessageSquare, AlertCircle, Users, Diamond, Settings } from 'lucide-react';
import { Logo } from './logo';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { cn } from '@/lib/utils';
import { useRole } from '@/contexts/role-context';

const RoleSwitcher = ({ inMenu = false }: { inMenu?: boolean }) => {
  const { t } = useLanguage();
  const { userRole, setUserRole } = useRole();

  return (
    <div className={cn(inMenu ? "my-4" : "hidden")}>
      <Label htmlFor="role-switcher-mobile" className="text-xs text-muted-foreground">{t.jobsPage.roleSwitcher.label}</Label>
      <Select value={userRole} onValueChange={(value) => setUserRole(value as any)}>
        <SelectTrigger id="role-switcher-mobile" className="h-10 bg-muted">
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="guest">{t.userRoles.guest.title}</SelectItem>
          <SelectItem value="receiving_company">{t.userRoles.receivingCompany.title}</SelectItem>
          <SelectItem value="sending_company">{t.userRoles.sendingCompany.title}</SelectItem>
          <SelectItem value="support_org">{t.userRoles.supportOrg.title}</SelectItem>
          <SelectItem value="union">{t.userRoles.union.title}</SelectItem>
          <SelectItem value="yuryo_shokai">{t.userRoles.yuryoShokai.title}</SelectItem>
          <SelectItem value="haken_company">{t.userRoles.hakenCompany.title}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};


export function MobileMenuSheet() {
  const { t } = useLanguage();


  const menuItems = [
    { href: "/post-job-ai", label: t.header.menuItems.postJobAI, icon: <Sparkles /> },
    { href: "/how-it-works", label: t.header.menuItems.howItWorks, icon: <Compass /> },
    { href: "/handbook", label: t.header.menuItems.handbook, icon: <LayoutGrid /> },
    { href: "/about", label: t.header.menuItems.about, icon: <Building /> },
    { href: "/advisors", label: t.header.advisors, icon: <Users /> },
    { href: "/partners", label: t.header.menuItems.partnerList, icon: <Handshake /> },
    { href: "/chat", label: t.header.menuItems.chat, icon: <MessageSquare /> },
    { href: "#", label: t.mobile_menu_sheet.feedback, icon: <AlertCircle /> },
  ];



  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex flex-col items-center justify-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary">
            <div className="flex h-7 w-7 items-center justify-center"><LayoutGrid /></div>
            <span>{t.mobile_footer.menu}</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 flex flex-col w-full max-w-sm">
        <SheetHeader className="p-4 flex flex-row items-center justify-between border-b">
          <SheetTitle><Logo /></SheetTitle>
           <SheetClose asChild>
            <Button variant="ghost" size="icon">
                <Settings />
            </Button>
           </SheetClose>
        </SheetHeader>
        
        <div className="flex-grow overflow-y-auto px-4 pb-4 pt-4">
            <SheetClose asChild>
              <Link href="/dashboard/profile">
                  <Card className="flex items-center gap-4 p-4 mb-4 hover:bg-accent/50 transition-colors">
                      <Avatar className="h-12 w-12">
                          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                          <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                          <p className="font-semibold">Global Support Union</p>
                          <p className="text-sm text-muted-foreground">{t.header.menuItems.recruiterAccountType.replace('{type}', t.userRoles.union.title)}</p>
                      </div>
                  </Card>
              </Link>
            </SheetClose>
            
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mb-4">
              <Diamond className="mr-2 h-4 w-4" />
              {t.header.menuItems.signUpForPremium}
            </Button>
            
            <Separator className="mb-6"/>

            <div className="grid grid-cols-4 gap-4 text-center">
                {menuItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link href={item.href} className="flex flex-col items-center gap-2 text-xs font-medium text-gray-700">
                        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                          {item.icon}
                        </div>
                        <span className="leading-tight">{item.label}</span>
                    </Link>
                  </SheetClose>
                ))}
            </div>

            <Separator className="my-6"/>

            <RoleSwitcher inMenu={true} />
        </div>
        
        <div className="p-4 border-t">
          <SheetClose asChild>
             <Button variant="outline" className="w-full">{t.mobile_menu_sheet.close}</Button>
          </SheetClose>
        </div>

      </SheetContent>
    </Sheet>
  );
}
