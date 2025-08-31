/**
 * @fileOverview Defines the data schemas (Zod) and TypeScript types for the Find Matching Partners flow.
 */

import { z } from 'genkit';
import { GenerateJobPostOutputSchema } from './generate-job-post-schema';

export const PartnerProfileSchema = z.object({
  id: z.string().describe('A unique identifier for the partner.'),
  name: z.string().describe("The name of the partner organization (e.g., 'Global Support Union')."),
  name_ja: z.string().describe("The Japanese name of the partner organization."),
  type: z.string().describe("The type of partner (e.g., 'Cooperative Union', 'Supporting Organization')."),
  type_ja: z.string().describe("The Japanese type of the partner."),
  specialties: z.array(z.string()).describe('A list of industries or job types the partner specializes in (e.g., ["Construction", "Manufacturing", "Caregiving"]).'),
  specialties_ja: z.array(z.string()).describe('A list of Japanese industries or job types the partner specializes in.'),
  locations: z.array(z.string()).describe('A list of prefectures or regions the partner operates in (e.g., ["Tokyo", "Osaka", "Aichi"]).'),
});
export type PartnerProfile = z.infer<typeof PartnerProfileSchema>;

export const FindMatchingPartnersInputSchema = z.object({
  jobPost: GenerateJobPostOutputSchema.describe('The generated job posting to be matched.'),
  allPartners: z.array(PartnerProfileSchema).describe('A list of all available partners in the system.'),
  language: z.string().describe("The user's current language code (e.g., 'vi', 'en', 'ja')."),
});
export type FindMatchingPartnersInput = z.infer<typeof FindMatchingPartnersInputSchema>;

export const MatchedPartnerSchema = z.object({
    partnerId: z.string().describe('The ID of the matched partner.'),
    reason: z.string().describe("A brief explanation of why this partner is a good match for the job posting."),
    compatibilityScore: z.number().min(0).max(100).describe("A score from 0 to 100 indicating the compatibility of the partner with the job posting."),
})
export type MatchedPartner = z.infer<typeof MatchedPartnerSchema>;


export const FindMatchingPartnersOutputSchema = z.object({
  recommendedPartners: z.array(MatchedPartnerSchema).describe('A list of recommended partners, sorted from most to least compatible.'),
});
export type FindMatchingPartnersOutput = z.infer<typeof FindMatchingPartnersOutputSchema>;
