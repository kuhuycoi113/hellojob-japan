'use client';

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
  const opportunities = t.dashboard_partner.newOpportunities.opportunities;

  return (
    <div className="space-y-8">
       <Card>
        <CardHeader>
          <CardTitle>{t.dashboard_partner.newOpportunities.title}</CardTitle>
          <CardDescription>{t.dashboard_partner.newOpportunities.description}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-2">
            {opportunities.map((opp, index) => (
                <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <Link href={`/dashboard/jobs/${opp.id}`}>
                           <CardTitle className="hover:text-primary transition-colors">{opp.title}</CardTitle>
                        </Link>
                        <CardDescription>{opp.company}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <Link href={`/dashboard/jobs/${opp.id}`} className="block hover:bg-gray-50/50 p-4 rounded-lg -m-4">
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
                            <div className="flex items-center text-sm text-muted-foreground mt-4">
                                <Clock className="mr-2 h-4 w-4" />
                                <span>{opp.expires}</span>
                            </div>
                        </Link>
                        <div className="flex gap-2">
                            <Button className="w-full bg-green-600 hover:bg-green-700">
                                <Check className="mr-2 h-4 w-4" />
                                {t.dashboard_partner.accept}
                            </Button>
                             <Button variant="outline" className="w-full">
                                <X className="mr-2 h-4 w-4" />
                                {t.dashboard_partner.decline}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
