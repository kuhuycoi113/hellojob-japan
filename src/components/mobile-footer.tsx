'use client';

import Link from 'next/link';
import { Home, Sparkles, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/language-context';
import { cn } from '@/lib/utils';
import { MobileMenuSheet } from './mobile-menu-sheet';

export function MobileFooter() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { href: '/', label: t.mobile_footer.home, icon: <Home /> },
    { href: '/post-job-ai', label: t.mobile_footer.postJobAI, icon: <Sparkles /> },
    { href: '/dashboard', label: t.mobile_footer.dashboard, icon: <User /> },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm md:hidden">
      <nav className="flex h-16 items-center justify-around">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center gap-1 text-xs text-muted-foreground transition-colors',
              pathname === item.href ? 'text-primary font-semibold' : 'hover:text-primary'
            )}
          >
            <div className="flex h-7 w-7 items-center justify-center">{item.icon}</div>
            <span>{item.label}</span>
          </Link>
        ))}
        <MobileMenuSheet />
      </nav>
    </footer>
  );
}
