'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import { useLanguage } from '@/contexts/language-context';
import {
  Bell,
  Briefcase,
  Home,
  Users,
  Settings,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';

export function DashboardSidebar() {
  const { t } = useLanguage();
  const { open } = useSidebar();
  const pathname = usePathname();

  const employerNav = [
    {
      href: '/dashboard/employer',
      label: t.dashboard_sidebar.overview,
      icon: <Home />,
    },
    {
      href: '/dashboard/employer/jobs',
      label: t.dashboard_sidebar.jobs,
      icon: <Briefcase />,
      badge: 3,
    },
    {
      href: '/dashboard/employer/candidates',
      label: t.dashboard_sidebar.candidates,
      icon: <Users />,
    },
    {
      href: '/dashboard/employer/partners',
      label: t.dashboard_sidebar.partners,
      icon: <Users />,
    },
  ];

  // This would be dynamically determined by user role
  const isEmployer = pathname.includes('/employer'); 

  const partnerNav = [
    {
      href: '/dashboard/partner',
      label: t.dashboard_sidebar.overview,
      icon: <Home />,
      badge: 2,
    },
    {
      href: '/dashboard/partner/jobs',
      label: t.dashboard_sidebar.assignedJobs,
      icon: <Briefcase />,
    },
     {
      href: '/dashboard/partner/candidates',
      label: t.dashboard_sidebar.myCandidates,
      icon: <Users />,
    },
  ];
  
  const navItems = isEmployer ? employerNav : partnerNav;


  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent className="p-0">
        <div className="flex h-full flex-col">
          <div className="flex-1 p-2">
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <Link href={item.href}>
                    <SidebarMenuButton
                      isActive={pathname === item.href}
                      tooltip={open ? '' : item.label}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                       {item.badge && <Badge className="ml-auto">{item.badge}</Badge>}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </div>

          <div className="p-2">
             <SidebarMenu>
                 <SidebarMenuItem>
                    <SidebarMenuButton>
                        <Settings />
                        <span>{t.dashboard_sidebar.settings}</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton>
                        <LogOut />
                        <span>{t.dashboard_sidebar.logout}</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
