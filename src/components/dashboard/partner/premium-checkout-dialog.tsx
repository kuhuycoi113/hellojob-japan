// This is a new file.
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

interface PremiumCheckoutDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function PremiumCheckoutDialog({ open, onOpenChange }: PremiumCheckoutDialogProps) {
    const { t } = useLanguage();
    const checkout = t.upgrade_page.checkout;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-headline">{checkout.title}</DialogTitle>
          <DialogDescription>
            {checkout.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="cardNumber">{checkout.cardNumber}</Label>
                <div className="relative">
                    <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
                    <CreditCard className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="expiryDate">{checkout.expiryDate}</Label>
                    <Input id="expiryDate" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="cvc">{checkout.cvc}</Label>
                    <Input id="cvc" placeholder="123" />
                </div>
            </div>
                <div className="space-y-2">
                <Label htmlFor="cardName">{checkout.cardName}</Label>
                <Input id="cardName" placeholder="NGUYEN VAN A" />
            </div>
        </div>
        <div className="mt-4">
             <Button className="w-full h-12 text-base">
                {checkout.payButton.replace('{amount}', t.upgrade_page.pricing.price + ' ' + t.upgrade_page.pricing.per_month_unit)}
             </Button>
            <p className="mt-2 text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600"/>
                {checkout.securePayment}
            </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
