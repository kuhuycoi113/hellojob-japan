/**
 * @fileOverview Defines the data schemas (Zod) and TypeScript types for the Translate Profile flow.
 */

import { z } from 'genkit';

export const ProfileHistoryItemSchema = z.object({
  year: z.string(),
  event: z.string(),
  description: z.string(),
});

export const ProfileCompanyInfoSchema = z.object({
  founded: z.string(),
  size: z.string(),
  phone: z.string(),
  website: z.string(),
  address: z.string(),
});

export const ProfileIndustryInfoSchema = z.object({
    mainIndustries: z.array(z.string()),
    fields: z.string(),
});


export const ProfileDataSchema = z.object({
    companyName: z.string().describe("The name of the company."),
    tagline: z.string().describe("The company's slogan or tagline."),
    location: z.string().describe("The company's primary location (e.g., 'Hanoi, Vietnam')."),
    introduction: z.string().describe("A detailed introduction to the company."),
    history: z.array(ProfileHistoryItemSchema).describe("The company's history and milestones."),
    licenses: z.string().describe("A list of licenses and certifications, separated by newlines."),
    companyInfo: ProfileCompanyInfoSchema.describe("Basic factual information about the company."),
    industryInfo: ProfileIndustryInfoSchema.describe("Information about the company's industry focus."),
    benefits: z.string().describe("A list of employee benefits, separated by newlines."),
});
export type ProfileData = z.infer<typeof ProfileDataSchema>;


export const TranslateProfileInputSchema = z.object({
  profile: ProfileDataSchema,
  targetLanguage: z.string().describe("The target language to translate to (e.g., 'Vietnamese', 'Japanese', 'English')."),
});
export type TranslateProfileInput = z.infer<typeof TranslateProfileInputSchema>;

// The output is the same as the profile data schema
export const TranslateProfileOutputSchema = ProfileDataSchema;
export type TranslateProfileOutput = z.infer<typeof TranslateProfileOutputSchema>;
