'use client';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 pr-8">
            <Logo />
            <p className="mt-4 text-muted-foreground">
              {t.footer.about}
            </p>
            <div className="mt-6 flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold font-headline">{t.footer.forEmployers}</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">{t.footer.postJob}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">{t.footer.searchResumes}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">{t.footer.pricing}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">{t.footer.faq}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-headline">{t.footer.aboutHelloJob}</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">{t.footer.aboutUs}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">{t.footer.contact}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">{t.footer.terms}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">{t.footer.privacy}</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
             <h3 className="font-semibold font-headline">{t.footer.newsletter}</h3>
             <p className="mt-4 text-sm text-muted-foreground">{t.footer.newsletterDesc}</p>
             <form className="mt-4 flex gap-2">
                <Input type="email" placeholder={t.footer.emailPlaceholder} className="flex-1" />
                <Button type="submit" variant="secondary">{t.footer.subscribe}</Button>
             </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>{t.footer.copyright.replace('{year}', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
}
