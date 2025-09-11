'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { useLanguage } from '@/contexts/language-context';
import Link from 'next/link';
import { useState } from 'react';

const GoogleIcon = () => (
    <svg className="h-5 w-5 mr-3" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.223,0-9.657-3.356-11.303-8H6.306C9.656,39.663,16.318,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,34.556,44,29.865,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);

const FacebookIcon = () => (
    <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M12 2.04C6.5 2.04 2.04 6.5 2.04 12C2.04 17.5 6.5 21.96 12 21.96C17.5 21.96 21.96 17.5 21.96 12C21.96 6.5 17.5 2.04 12 2.04ZM14.96 12.88H13.16V18.4H10.36V12.88H8.84V10.36H10.36V8.68C10.36 7.16 11.24 5.6 13.64 5.6H15.52V8.12H14.2C13.88 8.12 13.16 8.36 13.16 9.04V10.36H15.64L14.96 12.88Z" />
    </svg>
);


export function AuthDialog({ children }: { children: React.ReactNode }) {
    const { t } = useLanguage();
    const t_auth = t.authDialog;
    const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-w-4xl p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 sm:p-12">
                     <DialogHeader className="text-left">
                        <DialogTitle className="text-3xl font-bold font-headline">{t_auth.title}</DialogTitle>
                        <DialogDescription>{t_auth.description}</DialogDescription>
                    </DialogHeader>

                    <div className="mt-8 space-y-4">
                        <Button variant="outline" className="w-full h-12 text-base">
                            <GoogleIcon />
                            {t_auth.continueWithGoogle}
                        </Button>
                         <Button variant="outline" className="w-full h-12 text-base">
                            <FacebookIcon />
                            {t_auth.continueWithFacebook}
                        </Button>

                        <div className="flex items-center my-4">
                            <Separator className="flex-1"/>
                            <span className="px-4 text-xs text-muted-foreground uppercase">{t_auth.or}</span>
                            <Separator className="flex-1"/>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-muted-foreground">{t_auth.emailOrPhone}</Label>
                            <Input type="email" id="email" placeholder="email@example.com" className="h-12"/>
                        </div>
                        
                        <Button className="w-full h-12 text-base">{t_auth.signUp}</Button>
                    </div>

                    <div className="mt-6 text-center text-sm">
                        <p className="text-muted-foreground">
                            {t_auth.haveAccount}{' '}
                            <Link href="#" className="font-semibold text-primary hover:underline">
                                {t_auth.logIn}
                            </Link>
                        </p>
                         <p className="mt-8 text-xs text-muted-foreground max-w-xs mx-auto">
                            {t_auth.terms.prefix}{' '}
                            <Link href="#" className="underline hover:text-primary">{t_auth.terms.termsLink}</Link>
                            {' '}{t_auth.terms.and}{' '}
                             <Link href="#" className="underline hover:text-primary">{t_auth.terms.privacyLink}</Link>
                             {' '}{t_auth.terms.suffix}
                        </p>
                    </div>
                </div>
                <div className="hidden md:block relative">
                    <Image
                        src="https://picsum.photos/seed/sso/800/1200"
                        alt="Inspirational image"
                        fill
                        className="object-cover"
                        data-ai-hint="journey path"
                    />
                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-12">
                        <blockquote className="text-white text-3xl font-semibold">
                           "{t_auth.quote.text}"
                           <footer className="text-lg font-normal mt-4">- {t_auth.quote.author}</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </DialogContent>
    </Dialog>
  );
}
