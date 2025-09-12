'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { DialogFooter } from '@/components/ui/dialog';
import { useState } from 'react';

export function Cta() {
  const { t } = useLanguage();
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

  const openDialog7 = (caller: string) => {
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
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/post-job-ai">{t.cta.postJob}</Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
             <Link href="/chat">{t.cta.contactUs}</Link>
          </Button>
          <Dialog open={dialog1Open} onOpenChange={setDialog1Open}>
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
                <Button onClick={() => { setDialog1Open(false); setDialog3Open(true); }}>A</Button>
                <Button onClick={() => { setDialog1Open(false); setDialog2Open(true); }}>B</Button>
              </div>
            </DialogContent>
          </Dialog>

           <Dialog open={dialog2Open} onOpenChange={setDialog2Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>ich khong khong 2</DialogTitle>
                </DialogHeader>
                <div className="flex justify-center gap-4 py-4">
                  <Button onClick={() => setDialog2Open(false)}>C</Button>
                  <Button onClick={() => setDialog2Open(false)}>D</Button>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog2Open(false); setDialog1Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

          <Dialog open={dialog3Open} onOpenChange={setDialog3Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>ich khong khong 3</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <Button onClick={() => { setDialog3Open(false); setDialog4Open(true); }}>E</Button>
                  <Button onClick={() => { setDialog3Open(false); setDialog4Open(true); }}>F</Button>
                  <Button onClick={() => { setDialog3Open(false); setDialog4Open(true); }}>G</Button>
                  <Button onClick={() => { setDialog3Open(false); setDialog4Open(true); }}>H</Button>
                  <Button onClick={() => { setDialog3Open(false); setDialog4Open(true); }}>I</Button>
                  <Button onClick={() => { setDialog3Open(false); setDialog4Open(true); }}>J</Button>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog3Open(false); setDialog1Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

          <Dialog open={dialog4Open} onOpenChange={setDialog4Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>ich khong khong 4</DialogTitle>
                </DialogHeader>
                <div className="flex justify-center gap-4 py-4">
                  <Button onClick={() => { setDialog4Open(false); setDialog51Open(true); }}>K</Button>
                  <Button onClick={() => { setDialog4Open(false); setDialog52Open(true); }}>L</Button>
                  <Button onClick={() => { setDialog4Open(false); setDialog53Open(true); }}>M</Button>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog4Open(false); setDialog3Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

           <Dialog open={dialog51Open} onOpenChange={setDialog51Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>ich khong khong 5 1</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <Button onClick={() => { setDialog51Open(false); setDialog61Open(true); }}>K1</Button>
                  <Button onClick={() => { setDialog51Open(false); setDialog61Open(true); }}>K2</Button>
                  <Button onClick={() => { setDialog51Open(false); setDialog61Open(true); }}>K3</Button>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog51Open(false); setDialog4Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>
          
          <Dialog open={dialog61Open} onOpenChange={setDialog61Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>ich khong khong 6 1</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <Button onClick={() => openDialog7('61')}>KK1</Button>
                  <Button onClick={() => openDialog7('61')}>KK2</Button>
                  <Button onClick={() => openDialog7('61')}>KK3</Button>
                  <Button onClick={() => openDialog7('61')}>KK4</Button>
                  <Button onClick={() => openDialog7('61')}>KK5</Button>
                  <Button onClick={() => openDialog7('61')}>KK6</Button>
                  <Button onClick={() => openDialog7('61')}>KK7</Button>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog61Open(false); setDialog51Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

          <Dialog open={dialog52Open} onOpenChange={setDialog52Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>ich khong khong 5 2</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <Button onClick={() => { setDialog52Open(false); setDialog62Open(true); }}>L1</Button>
                  <Button onClick={() => { setDialog52Open(false); setDialog62Open(true); }}>L2</Button>
                  <Button onClick={() => { setDialog52Open(false); setDialog62Open(true); }}>L3</Button>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog52Open(false); setDialog4Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

           <Dialog open={dialog62Open} onOpenChange={setDialog62Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>ich khong khong 6 2</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  {Array.from({ length: 15 }, (_, i) => (
                    <Button key={i} onClick={() => openDialog7('62')}>LL{i + 1}</Button>
                  ))}
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog62Open(false); setDialog52Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

          <Dialog open={dialog53Open} onOpenChange={setDialog53Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>ich khong khong 5 3</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <Button onClick={() => { setDialog53Open(false); setDialog63Open(true); }}>M1</Button>
                  <Button onClick={() => { setDialog53Open(false); setDialog63Open(true); }}>M2</Button>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog53Open(false); setDialog4Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

          <Dialog open={dialog63Open} onOpenChange={setDialog63Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>ich khong khong 6 3</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  {Array.from({ length: 21 }, (_, i) => (
                    <Button key={i} onClick={() => openDialog7('63')}>MM{i + 1}</Button>
                  ))}
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog63Open(false); setDialog53Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>
          
          <Dialog open={dialog7Open} onOpenChange={setDialog7Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>ich khong khong 7</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  {Array.from({ length: 9 }, (_, i) => (
                    <Button key={i} onClick={() => setDialog7Open(false)}>N{i + 1}</Button>
                  ))}
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={backFromDialog7}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

        </div>
      </div>
    </section>
  );
}
