// This is a new file.
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/language-context';
import { Slider } from './ui/slider';

export function CandidateFilterSidebar() {
  const { t, language } = useLanguage();

  const visaTypes = [
    t.visaTypes.intern.title,
    t.visaTypes.skilled.title,
    t.visaTypes.engineer.title,
  ];

  const industries = [
    t.hero.manufacturing,
    t.hero.construction,
    t.hero.agriculture,
    t.hero.caregiver,
    t.hero.it,
    "Thực phẩm",
    "Dệt may"
  ];
  
  const salaryRanges = [
    "Dưới 15 vạn",
    "15 - 18 vạn",
    "18 - 22 vạn",
    "Trên 22 vạn"
  ];

  return (
    <Card className="shadow-lg sticky top-24">
      <CardHeader>
        <CardTitle>{t.candidateSearch.filters.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" defaultValue={['visa', 'industry', 'salary', 'age']}>
          <AccordionItem value="visa">
            <AccordionTrigger className="font-semibold">{t.candidateSearch.filters.visa.title}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {visaTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id={`visa-${type}`} />
                    <Label htmlFor={`visa-${type}`} className="font-normal">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="industry">
            <AccordionTrigger className="font-semibold">{t.candidateSearch.filters.industry.title}</AccordionTrigger>
            <AccordionContent>
               <div className="space-y-2">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center space-x-2">
                    <Checkbox id={`industry-${industry}`} />
                    <Label htmlFor={`industry-${industry}`} className="font-normal">
                      {industry}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="salary">
            <AccordionTrigger className="font-semibold">{t.candidateSearch.filters.salary.title}</AccordionTrigger>
            <AccordionContent>
                <div className="space-y-2">
                {salaryRanges.map((range) => (
                  <div key={range} className="flex items-center space-x-2">
                    <Checkbox id={`salary-${range}`} />
                    <Label htmlFor={`salary-${range}`} className="font-normal">
                      {range}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="age">
            <AccordionTrigger className="font-semibold">{t.candidateSearch.filters.age.title}</AccordionTrigger>
            <AccordionContent className="px-1">
               <Slider defaultValue={[20, 40]} max={60} step={1} />
               <div className="flex justify-between text-xs text-muted-foreground mt-2">
                   <span>18</span>
                   <span>60</span>
               </div>
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="other">
            <AccordionTrigger className="font-semibold">{t.candidateSearch.filters.other.title}</AccordionTrigger>
            <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tattoo" />
                    <Label htmlFor="tattoo" className="font-normal">
                      {t.candidateSearch.filters.other.tattoo}
                    </Label>
                  </div>
                </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button className="w-full mt-6">{t.candidateSearch.filters.apply}</Button>
      </CardContent>
    </Card>
  );
}
