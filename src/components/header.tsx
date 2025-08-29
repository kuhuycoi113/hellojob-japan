'use client';

import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { LayoutGrid, User, Sparkles } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/locales/translations';

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


export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const languageConfig = {
    vi: { flag: <VietnamFlag />, name: 'Tiếng Việt', short: 'VN' },
    ja: { flag: <JapanFlag />, name: 'Tiếng Nhật', short: 'JP' },
    en: { flag: <EnglishFlag />, name: 'Tiếng Anh', short: 'EN' },
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className="text-foreground transition-colors hover:text-primary whitespace-nowrap"
          >
            {t.header.home}
          </Link>
          <Link
            href="#"
            className="text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
          >
            {t.header.steps}
          </Link>
          <Link
            href="#"
            className="text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
          >
            {t.header.recruitRight}
          </Link>
          <Link
            href="#"
            className="text-foreground/80 transition-colors hover:text-primary whitespace-nowrap flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            {t.header.postJobAI}
          </Link>
          <Link
            href="/elearning"
            className="text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
          >
            {t.header.elearning}
          </Link>
          <Link
            href="#"
            className="text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
          >
            {t.header.handbook}
          </Link>
          <Link
            href="#"
            className="text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
          >
            {t.header.about}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2"
              >
                {languageConfig[language].flag}
                <span>{languageConfig[language].short}</span>
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

          <Button variant="outline">
            <Link href="#" className="flex items-center gap-2">
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
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{t.header.menu}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{t.header.dashboard}</DropdownMenuItem>
              <DropdownMenuItem>{t.header.jobPostings}</DropdownMenuItem>
              <DropdownMenuItem>{t.header.candidateProfiles}</DropdownMenuItem>
              <DropdownMenuItem>{t.header.settings}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{t.header.logout}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
