
'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/language-context';
import { Compass, Target, BookOpen, LayoutGrid, Building, Sparkles, Plus, FileText, Handshake, MessageSquare, AlertCircle, Menu } from 'lucide-react';
import { Logo } from './logo';
import Link from 'next/link';
import { Separator } from './ui/separator';

export function MobileMenuSheet() {
  const { t } = useLanguage();

  const menuItems = [
    { href: "/how-it-works", label: t.header.menuItems.howItWorks, icon: <Compass /> },
    { href: "/recruit-right", label: t.header.menuItems.recruitRight, icon: <Target /> },
    { href: "/elearning", label: t.header.menuItems.elearning, icon: <BookOpen /> },
    { href: "/handbook", label: t.header.menuItems.handbook, icon: <LayoutGrid /> },
    { href: "/about", label: t.header.menuItems.about, icon: <Building /> },
    { href: "/post-job-ai", label: t.header.menuItems.postJobAI, icon: <Sparkles /> },
    { href: "/post-job-ai", label: t.mobile_menu_sheet.postJob, icon: <Plus /> },
    { href: "/dashboard/employer/jobs", label: t.mobile_menu_sheet.dataReport, icon: <FileText /> },
    { href: "/dashboard/employer/partners", label: t.mobile_menu_sheet.partners, icon: <Handshake /> },
    { href: "/chat", label: t.header.menuItems.chat, icon: <MessageSquare /> },
    { href: "#", label: t.mobile_menu_sheet.feedback, icon: <AlertCircle /> },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex flex-col items-center justify-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary">
            <div className="flex h-7 w-7 items-center justify-center"><Menu /></div>
            <span>{t.mobile_footer.menu}</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 flex flex-col w-full max-w-sm">
        <SheetHeader className="p-4 flex flex-row items-center justify-between border-b">
          <SheetTitle><Logo /></SheetTitle>
        </SheetHeader>
        
        <div className="flex-grow overflow-y-auto px-4 pb-4 pt-4">
            <Card className="flex items-center gap-4 p-4 mb-4">
                <Avatar className="h-12 w-12">
                    <AvatarImage src="https://i.pravatar.cc/150?u=recruiter" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">{t.mobile_menu_sheet.hello} HelloJob</p>
                    <p className="text-sm text-muted-foreground">{t.header.menuItems.recruiterAccount}</p>
                </div>
            </Card>

            <Button variant="outline" className="w-full mb-6" asChild>
                <Link href="/dashboard/employer">{t.mobile_menu_sheet.myProfile}</Link>
            </Button>
            
            <Separator className="mb-6"/>

            <div className="grid grid-cols-4 gap-4 text-center">
                {menuItems.map((item) => (
                    <Link href={item.href} key={item.label} className="flex flex-col items-center gap-2 text-xs font-medium text-gray-700">
                        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                          {item.icon}
                        </div>
                        <span className="leading-tight">{item.label}</span>
                    </Link>
                ))}
            </div>
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
