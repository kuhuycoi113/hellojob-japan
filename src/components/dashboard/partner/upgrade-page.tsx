// This is a new file.
'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useLanguage } from '@/contexts/language-context';
import {
  Check,
  X,
  Gem,
  BarChart2,
  TrendingUp,
  LifeBuoy,
  BadgeCheck,
  Star,
} from 'lucide-react';
import Image from 'next/image';

export function UpgradePage() {
  const { t, language } = useLanguage();
  const upgrade = t.upgrade_page;

  const features = [
    {
      feature: upgrade.comparison.features.fee.name,
      basic: upgrade.comparison.features.fee.basic,
      premium: upgrade.comparison.features.fee.premium,
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
    },
    {
      feature: upgrade.comparison.features.badge.name,
      basic: false,
      premium: true,
      icon: <BadgeCheck className="w-5 h-5 text-primary" />,
    },
    {
      feature: upgrade.comparison.features.priority.name,
      basic: upgrade.comparison.features.priority.basic,
      premium: upgrade.comparison.features.priority.premium,
      icon: <Star className="w-5 h-5 text-primary" />,
    },
    {
      feature: upgrade.comparison.features.analytics.name,
      basic: upgrade.comparison.features.analytics.basic,
      premium: upgrade.comparison.features.analytics.premium,
      icon: <BarChart2 className="w-5 h-5 text-primary" />,
    },
    {
      feature: upgrade.comparison.features.support.name,
      basic: upgrade.comparison.features.support.basic,
      premium: upgrade.comparison.features.support.premium,
      icon: <LifeBuoy className="w-5 h-5 text-primary" />,
    },
  ];

  return (
    <div className="bg-blue-50/50">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 p-4 rounded-full mb-4">
            <Gem className="h-10 w-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-headline">
            {upgrade.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
            {upgrade.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          {/* Comparison Table */}
          <Card className="shadow-xl rounded-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-headline">
                {upgrade.comparison.title}
              </CardTitle>
              <CardDescription className="text-base">
                {upgrade.comparison.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40%] text-lg">
                        {upgrade.comparison.headers.feature}
                      </TableHead>
                      <TableHead className="text-center text-lg">
                        {upgrade.comparison.headers.basic}
                      </TableHead>
                      <TableHead className="text-center text-lg font-bold text-primary">
                        {upgrade.comparison.headers.premium}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {features.map((item, index) => (
                      <TableRow key={index} className="text-base">
                        <TableCell className="font-medium flex items-center gap-3">
                            {item.icon} {item.feature}
                        </TableCell>
                        <TableCell className="text-center text-muted-foreground">
                          {typeof item.basic === 'boolean' ? (
                            item.basic ? (
                              <Check className="w-6 h-6 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-red-500 mx-auto" />
                            )
                          ) : (
                            item.basic
                          )}
                        </TableCell>
                        <TableCell className="text-center font-semibold">
                          {typeof item.premium === 'boolean' ? (
                            item.premium ? (
                              <Check className="w-6 h-6 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-primary">{item.premium}</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
             <div className="md:col-span-2">
                 <Image src="https://picsum.photos/600/600?random=premium" alt="Premium Benefits" width={600} height={600} className="rounded-2xl shadow-lg object-cover" data-ai-hint="business growth chart" />
            </div>
            <div className="md:col-span-3">
                 <Card className="shadow-xl rounded-2xl p-8 text-center bg-white">
                    <h3 className="text-2xl font-bold font-headline mb-2">{upgrade.pricing.title}</h3>
                    <p className="text-muted-foreground mb-6">{upgrade.pricing.subtitle}</p>
                    <div className="my-8">
                        <p className="text-5xl font-bold text-primary">{upgrade.pricing.price}</p>
                        <p className="text-muted-foreground">{upgrade.pricing.per_year}</p>
                    </div>
                    <Button size="lg" className="w-full text-lg h-14">
                        <Gem className="mr-2 h-5 w-5"/>
                        {upgrade.pricing.cta}
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4">{upgrade.pricing.note}</p>
                 </Card>
            </div>
          </div>
          

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center font-headline mb-8">
              {upgrade.faq.title}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {upgrade.faq.questions.map((q, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg text-left">{q.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {q.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
