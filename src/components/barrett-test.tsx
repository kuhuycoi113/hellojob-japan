'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { ArrowLeft, ArrowRight, CheckCircle, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

const TOTAL_STEPS = 5;
const VALUES_TO_SELECT = 10;

export function BarrettTest() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [personalValues, setPersonalValues] = useState<string[]>([]);
  const [currentCultureValues, setCurrentCultureValues] = useState<string[]>([]);
  const [desiredCultureValues, setDesiredCultureValues] = useState<string[]>([]);

  const progress = (step / TOTAL_STEPS) * 100;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));
  const handleStartOver = () => {
    setStep(1);
    setPersonalValues([]);
    setCurrentCultureValues([]);
    setDesiredCultureValues([]);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <InstructionStep title={t.barrettTest.step1Title} content={t.barrettTest.step1Content} />;
      case 2:
        return (
          <ValueSelectionStep
            title={t.barrettTest.step2Title}
            content={t.barrettTest.step2Content}
            allValues={t.barrettTest.values}
            selectedValues={personalValues}
            setSelectedValues={setPersonalValues}
          />
        );
      case 3:
        return (
          <ValueSelectionStep
            title={t.barrettTest.step3Title}
            content={t.barrettTest.step3Content}
            allValues={t.barrettTest.values}
            selectedValues={currentCultureValues}
            setSelectedValues={setCurrentCultureValues}
          />
        );
      case 4:
        return (
          <ValueSelectionStep
            title={t.barrettTest.step4Title}
            content={t.barrettTest.step4Content}
            allValues={t.barrettTest.values}
            selectedValues={desiredCultureValues}
            setSelectedValues={setDesiredCultureValues}
          />
        );
      case 5:
        return (
          <ResultsStep
            title={t.barrettTest.step5Title}
            content={t.barrettTest.step5Content}
            personalValues={personalValues}
            currentCultureValues={currentCultureValues}
            desiredCultureValues={desiredCultureValues}
          />
        );
      default:
        return null;
    }
  };
  
  const isValueSelectionStepValid = () => {
    if (step === 2) return personalValues.length === VALUES_TO_SELECT;
    if (step === 3) return currentCultureValues.length === VALUES_TO_SELECT;
    if (step === 4) return desiredCultureValues.length === VALUES_TO_SELECT;
    return true; // For other steps
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-2xl rounded-2xl overflow-hidden">
          <CardHeader className="p-8 bg-gray-50 border-b">
            <Badge variant="secondary" className="w-fit mb-2">{t.recruitRight.barrett.title}</Badge>
            <CardTitle className="text-3xl font-bold font-headline text-gray-800">{t.barrettTest.title}</CardTitle>
            <CardDescription className="text-lg text-gray-500 pt-1">{t.barrettTest.subtitle}</CardDescription>
            {step < TOTAL_STEPS && (
              <Progress value={progress} className="mt-4" />
            )}
          </CardHeader>
          <CardContent className="p-8">
            {renderStepContent()}
          </CardContent>
           <div className="px-8 py-4 bg-gray-50 border-t flex justify-between items-center">
            {step > 1 && step < TOTAL_STEPS && (
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.barrettTest.back}
              </Button>
            )}
             {step === TOTAL_STEPS && (
              <Button variant="outline" onClick={handleStartOver}>
                <RefreshCw className="mr-2 h-4 w-4" />
                {t.barrettTest.startOver}
              </Button>
            )}
            <div className="flex-grow"></div>
            {step < TOTAL_STEPS -1 && (
              <Button onClick={handleNext} disabled={!isValueSelectionStepValid()}>
                {t.barrettTest.next}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
            {step === TOTAL_STEPS - 1 && (
                <Button onClick={handleNext} disabled={!isValueSelectionStepValid()}>
                    {t.barrettTest.complete}
                    <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}

const InstructionStep = ({ title, content }: { title: string; content: string }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold font-headline text-gray-800 mb-4">{title}</h2>
    <p className="text-muted-foreground text-lg leading-relaxed">{content}</p>
  </div>
);

interface ValueSelectionStepProps {
  title: string;
  content: string;
  allValues: string[];
  selectedValues: string[];
  setSelectedValues: (values: string[]) => void;
}

const ValueSelectionStep = ({ title, content, allValues, selectedValues, setSelectedValues }: ValueSelectionStepProps) => {
  const { t } = useLanguage();

  const toggleValue = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else if (selectedValues.length < VALUES_TO_SELECT) {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const remaining = VALUES_TO_SELECT - selectedValues.length;

  return (
    <div>
      <h2 className="text-2xl font-bold font-headline text-gray-800 mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{content}</p>
      <div className="sticky top-20 bg-white/80 backdrop-blur-sm py-3 z-10 rounded-lg mb-4 text-center border">
        <p className="font-bold text-primary text-lg">
          {t.barrettTest.selectionsRemaining.replace('{count}', remaining.toString())}
        </p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {allValues.map((value) => {
          const isSelected = selectedValues.includes(value);
          return (
            <Button
              key={value}
              variant={isSelected ? 'default' : 'outline'}
              className={cn(
                "transition-all duration-200",
                isSelected ? "shadow-lg scale-105" : "hover:shadow-md"
              )}
              onClick={() => toggleValue(value)}
            >
              {value}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

interface ResultsStepProps {
  title: string;
  content: string;
  personalValues: string[];
  currentCultureValues: string[];
  desiredCultureValues: string[];
}

const ResultsStep = ({ title, content, personalValues, currentCultureValues, desiredCultureValues }: ResultsStepProps) => {
  const { t } = useLanguage();

  return (
    <div>
      <h2 className="text-2xl font-bold font-headline text-gray-800 mb-2">{title}</h2>
      <p className="text-muted-foreground mb-8">{content}</p>
      <div className="grid md:grid-cols-3 gap-8">
        <ValueList title={t.barrettTest.personalValues} values={personalValues} />
        <ValueList title={t.barrettTest.currentCultureValues} values={currentCultureValues} />
        <ValueList title={t.barrettTest.desiredCultureValues} values={desiredCultureValues} />
      </div>
    </div>
  );
};

const ValueList = ({ title, values }: { title: string; values: string[] }) => (
  <Card className="shadow-md">
    <CardHeader>
      <CardTitle className="text-xl text-primary">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {values.map((value) => (
          <li key={value} className="flex items-center">
            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
            <span className="text-gray-700">{value}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
