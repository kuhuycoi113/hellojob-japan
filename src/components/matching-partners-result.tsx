/**
 * @fileoverview Component to display the results of the AI partner matching.
 */
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LoaderCircle, Send, Users, Check, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import type { PartnerProfile, FindMatchingPartnersOutput } from '@/ai/schemas/find-matching-partners-schema';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';


interface MatchingPartnersResultProps {
  state: 'loading_partners' | 'partners_completed';
  partners: PartnerProfile[];
  matchingResult: FindMatchingPartnersOutput | null;
}

export function MatchingPartnersResult({ state, partners, matchingResult }: MatchingPartnersResultProps) {
  const { t } = useLanguage();
  const [selectedPartners, setSelectedPartners] = useState<Set<string>>(new Set());

  const handlePartnerSelect = (partnerId: string) => {
    const newSelection = new Set(selectedPartners);
    if (newSelection.has(partnerId)) {
      newSelection.delete(partnerId);
    } else {
      newSelection.add(partnerId);
    }
    setSelectedPartners(newSelection);
  };
  
  const getPartnerDetails = (partnerId: string) => {
    return partners.find(p => p.id === partnerId);
  }

  return (
    <Card className="shadow-lg animate-in fade-in-50">
      <CardHeader>
        <CardTitle>{t.ai_job_post_form.partner_matching.title}</CardTitle>
        <CardDescription>{t.ai_job_post_form.partner_matching.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {state === 'loading_partners' && (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
            <LoaderCircle className="h-12 w-12 animate-spin text-primary mb-4" />
            <p className="text-lg">{t.ai_job_post_form.partner_matching.loading}</p>
          </div>
        )}
        {state === 'partners_completed' && matchingResult && (
          <div className="space-y-4">
             <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Check className="w-4 h-4 mr-2 text-green-500"/>
                <span>{`AI đã tìm thấy ${matchingResult.recommendedPartners.length} đối tác phù hợp nhất.`}</span>
            </div>
            <div className="space-y-4">
              {matchingResult.recommendedPartners.map((matchedPartner) => {
                const partnerDetails = getPartnerDetails(matchedPartner.partnerId);
                if (!partnerDetails) return null;

                const isSelected = selectedPartners.has(matchedPartner.partnerId);

                return (
                  <Card key={matchedPartner.partnerId} className={`p-4 transition-all ${isSelected ? 'bg-blue-50 border-primary' : ''}`}>
                    <div className="flex items-start gap-4">
                        <Checkbox 
                            id={matchedPartner.partnerId}
                            checked={isSelected}
                            onCheckedChange={() => handlePartnerSelect(matchedPartner.partnerId)}
                            className="mt-1 h-5 w-5"
                        />
                       <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <label htmlFor={matchedPartner.partnerId} className="font-bold text-gray-800 cursor-pointer">{partnerDetails.name}</label>
                                    <p className="text-sm text-muted-foreground">{partnerDetails.type}</p>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-lg text-primary">{matchedPartner.compatibilityScore}%</div>
                                    <p className="text-xs text-muted-foreground">{t.ai_job_post_form.partner_matching.score}</p>
                                </div>
                            </div>

                            <Progress value={matchedPartner.compatibilityScore} className="h-2 mb-3" />
                            
                            <p className="text-sm text-gray-700 mb-3"><strong className="font-semibold">Lý do:</strong> {matchedPartner.reason}</p>
                            
                            <div className="flex flex-wrap gap-2">
                                {partnerDetails.specialties.map(spec => <Badge key={spec} variant="secondary">{spec}</Badge>)}
                            </div>
                       </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
      {state === 'partners_completed' && (
        <CardFooter className="flex justify-end">
          <Button size="lg" disabled={selectedPartners.size === 0}>
            <Send className="mr-2 h-4 w-4" />
            {t.ai_job_post_form.sendRequestsButton} ({selectedPartners.size})
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
