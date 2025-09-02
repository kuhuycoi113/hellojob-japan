'use server';

/**
 * @fileOverview Translates a company profile to a specified language.
 *
 * - translateProfile - A function that translates a profile object.
 */

import { ai } from '@/ai/genkit';
import {
    TranslateProfileInputSchema,
    TranslateProfileOutputSchema,
    TranslateProfileInput,
    TranslateProfileOutput
} from '@/ai/schemas/translate-profile-schema';

export async function translateProfile(input: TranslateProfileInput): Promise<TranslateProfileOutput> {
  const prompt = ai.definePrompt({
    name: 'translateProfilePrompt',
    input: { schema: TranslateProfileInputSchema },
    output: { schema: TranslateProfileOutputSchema },
    prompt: `You are an expert translator specializing in business and recruitment content for the Japanese and Vietnamese markets.
Your task is to translate the following company profile into the target language: {{{targetLanguage}}}.

Translate every field accurately, maintaining a professional and natural tone. Pay close attention to business-specific terminology.

**Profile to Translate:**

**Company Name:** {{{profile.companyName}}}
**Tagline:** {{{profile.tagline}}}
**Location:** {{{profile.location}}}

**Introduction:**
{{{profile.introduction}}}

**History:**
{{#each profile.history}}
- Year: {{{year}}}
  - Event: {{{event}}}
  - Description: {{{description}}}
{{/each}}

**Licenses:**
{{{profile.licenses}}}

**Company Information:**
- Founded: {{{profile.companyInfo.founded}}}
- Size: {{{profile.companyInfo.size}}}
- Phone: {{{profile.companyInfo.phone}}}
- Website: {{{profile.companyInfo.website}}}
- Address: {{{profile.companyInfo.address}}}

**Industry Information:**
- Main Industries: {{#each profile.industryInfo.mainIndustries}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
- Fields of Operation: {{{profile.industryInfo.fields}}}

**Benefits:**
{{{profile.benefits}}}

Return the fully translated profile in the structured format required.
`,
  });

  const translateProfileFlow = ai.defineFlow(
    {
      name: 'translateProfileFlow',
      inputSchema: TranslateProfileInputSchema,
      outputSchema: TranslateProfileOutputSchema,
        flowConfig: {
        retries: 3,
        },
    },
    async (input) => {
      const { output } = await prompt(input);
      return output!;
    }
  );

  return translateProfileFlow(input);
}
