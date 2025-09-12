'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { DialogFooter } from '@/components/ui/dialog';

export function Cta() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-white">
          {t.cta.title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
          {t.cta.subtitle}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            {t.cta.postJob}
          </Button>

          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
            {t.cta.contactUs}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline">
                Test
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>ich khong khong 1</DialogTitle>
              </DialogHeader>
              <div className="flex justify-center gap-4 py-4">
                <Button>A</Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>B</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>ich khong khong 2</DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-center gap-4 py-4">
                      <Button>C</Button>
                      <Button>D</Button>
                    </div>
                     <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Quay lại</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
