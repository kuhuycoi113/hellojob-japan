'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { Check, Clock, Copy, X } from 'lucide-react';
import Link from 'next/link';

export function Overview() {
  const { t } = useLanguage();
  const [opportunities, setOpportunities] = useState(t.dashboard_partner.newOpportunities.opportunities);

  const handleDecline = (index: number) => {
    setOpportunities(prev => prev.filter((_, i) => i !== index));
  }
  
  if (opportunities.length === 0) {
     return (
       <Card>
        <CardHeader>
          <CardTitle>{t.dashboard_partner.newOpportunities.title}</CardTitle>
          <CardDescription>{t.dashboard_partner.newOpportunities.all_accepted}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
             <Check className="mx-auto h-12 w-12 text-green-500" />
             <p className="mt-4">{t.dashboard_partner.newOpportunities.all_accepted_description}</p>
          </div>
        </CardContent>
      </Card>
     )
  }

  return (
    <div className="space-y-8">
       <Card>
        <CardHeader>
          <CardTitle>{t.dashboard_partner.newOpportunities.title}</CardTitle>
          <CardDescription>{t.dashboard_partner.newOpportunities.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            {opportunities.map((opp, index) => (
                <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle>{opp.title}</CardTitle>
                        <Link href={opp.profileUrl || '#'} className="w-fit">
                            <CardDescription className="hover:underline">{opp.company}</CardDescription>
                        </Link>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <div className="font-semibold">{t.dashboard_partner.details}</div>
                            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                <dt className="text-muted-foreground">{t.dashboard_partner.location}</dt>
                                <dd>{opp.location}</dd>
                                <dt className="text-muted-foreground">{t.dashboard_partner.visaType}</dt>
                                <dd>{opp.visa}</dd>
                                <dt className="text-muted-foreground">{t.dashboard_partner.quantity}</dt>
                                <dd>{opp.quantity}</dd>
                            </dl>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-2 h-4 w-4" />
                            <span>{opp.expires}</span>
                        </div>
                         <div className="flex gap-2">
                            <Button className="w-full bg-green-600 hover:bg-green-700">
                                <Check className="mr-2 h-4 w-4" />
                                {t.dashboard_partner.accept}
                            </Button>
                             <Button onClick={() => handleDecline(index)} variant="outline" className="w-full">
                                <X className="mr-2 h-4 w-4" />
                                {t.dashboard_partner.decline}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
