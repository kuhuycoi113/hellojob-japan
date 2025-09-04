// This is a new file.
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Gem, UserPlus, CreditCard, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

interface UnlockDialog2Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function UnlockDialog2({ open, onOpenChange }: UnlockDialog2Props) {
    const { t } = useLanguage();
    const unlock = t.courseDetail.unlock2;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-bold font-headline">{unlock.title}</DialogTitle>
          <DialogDescription>
            {unlock.description}
          </DialogDescription>
        </DialogHeader>
        <div className="px-6">
            <Tabs defaultValue="direct">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="direct">{unlock.tab1}</TabsTrigger>
                    <TabsTrigger value="other">{unlock.tab2}</TabsTrigger>
                </TabsList>
                <TabsContent value="direct" className="mt-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="cardNumber">{unlock.cardNumber}</Label>
                            <div className="relative">
                                <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
                                <CreditCard className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="expiryDate">{unlock.expiryDate}</Label>
                                <Input id="expiryDate" placeholder="MM/YY" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cvc">{unlock.cvc}</Label>
                                <Input id="cvc" placeholder="123" />
                            </div>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="cardName">{unlock.cardName}</Label>
                            <Input id="cardName" placeholder="NGUYEN VAN A" />
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
        <div className="p-6 bg-muted/50 rounded-b-lg mt-6">
             <Button className="w-full h-12 text-base bg-sky-500 hover:bg-sky-600">
                {unlock.payButton.replace('{amount}', '29.000 VND')}
             </Button>
             <div className="flex items-center justify-center my-4">
                <div className="w-full border-t"></div>
                <span className="mx-4 text-xs uppercase text-muted-foreground">{unlock.or}</span>
                <div className="w-full border-t"></div>
            </div>
            <div className="space-y-3">
                 <Button size="lg" variant="outline" className="w-full border-green-300 bg-green-50 hover:bg-green-100 text-green-800">
                    <Gem className="mr-2 h-5 w-5"/>
                    {unlock.premiumButton}
                </Button>
                 <Button size="lg" variant="outline" className="w-full border-orange-300 bg-orange-50 hover:bg-orange-100 text-orange-800">
                    <UserPlus className="mr-2 h-5 w-5"/>
                    {unlock.referButton}
                </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600"/>
                {unlock.securePayment}
            </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
