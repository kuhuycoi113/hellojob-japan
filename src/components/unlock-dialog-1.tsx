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
import { CreditCard, Gift, Gem, UserPlus } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

interface UnlockDialog1Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onPayClick: () => void;
}

export function UnlockDialog1({ open, onOpenChange, onPayClick }: UnlockDialog1Props) {
    const { t } = useLanguage();
    const unlock = t.courseDetail.unlock1;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-headline">{unlock.title}</DialogTitle>
          <DialogDescription>
            {unlock.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 pt-4">
            <Button className="w-full h-14 text-base" onClick={onPayClick}>
                <CreditCard className="mr-2 h-5 w-5"/>
                <div>
                  <p>{unlock.payButton}</p>
                  <p className="text-xs font-normal">{unlock.price}</p>
                </div>
            </Button>
             <Button variant="outline" className="w-full h-12 text-base">
                <Gift className="mr-2 h-5 w-5"/>
                {unlock.giftCodeButton}
            </Button>
            <div className="flex items-center justify-center my-2">
                <div className="w-full border-t"></div>
                <span className="mx-4 text-xs uppercase text-muted-foreground">{unlock.or}</span>
                <div className="w-full border-t"></div>
            </div>
             <Button variant="secondary" className="w-full h-12 text-base">
                <Gem className="mr-2 h-5 w-5"/>
                {unlock.premiumButton}
            </Button>
             <Button variant="secondary" className="w-full h-12 text-base">
                <UserPlus className="mr-2 h-5 w-5"/>
                {unlock.referButton}
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
