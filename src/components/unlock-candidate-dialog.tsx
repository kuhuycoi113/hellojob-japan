// This is a new file.
'use client';

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
import { useLanguage } from '@/contexts/language-context';
import { CreditCard, Diamond, ShieldCheck, UserPlus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';

export function UnlockCandidateDialog({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage();
  const t_unlock = t.unlockCandidates;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 h-[85vh] flex flex-col">
         <ScrollArea className="flex-grow">
            <div className="p-6">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-headline">{t_unlock.title}</DialogTitle>
                    <DialogDescription>{t_unlock.description}</DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="direct" className="mt-6">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="direct">{t_unlock.payment.direct}</TabsTrigger>
                        <TabsTrigger value="gateway" disabled>{t_unlock.payment.gateway}</TabsTrigger>
                    </TabsList>
                    <TabsContent value="direct" className="mt-4">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="card-number">{t_unlock.payment.cardNumber}</Label>
                                <div className="relative">
                                    <Input id="card-number" placeholder="0000 0000 0000 0000" />
                                    <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="expiry-date">{t_unlock.payment.expiryDate}</Label>
                                    <Input id="expiry-date" placeholder="MM/YY" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cvc">{t_unlock.payment.cvc}</Label>
                                    <Input id="cvc" placeholder="123" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="card-name">{t_unlock.payment.cardName}</Label>
                                <Input id="card-name" placeholder="NGUYEN VAN A" />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </ScrollArea>

        <div className="bg-muted/50 p-6 space-y-4 border-t mt-auto">
          <Button className="w-full h-12 text-base" size="lg">
            {t_unlock.payment.payButton.replace('{amount}', '990')}
          </Button>

          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-muted/50 px-2 text-muted-foreground">{t_unlock.or}</span>
          </div>

          <Button variant="outline" className="w-full h-12 text-base bg-green-50 border-green-200 text-green-800 hover:bg-green-100 hover:text-green-900" size="lg">
            <Diamond className="mr-2 h-5 w-5" />
            {t_unlock.premiumButton}
          </Button>
          <Button variant="outline" className="w-full h-12 text-base bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100 hover:text-orange-900" size="lg">
            <UserPlus className="mr-2 h-5 w-5" />
            {t_unlock.referButton}
          </Button>
          
           <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                {t_unlock.payment.secure}
            </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
