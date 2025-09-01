/**
 * @fileOverview Defines the data schemas (Zod) and TypeScript types for the Translate Job Post flow.
 */

import { z } from 'genkit';
import { GenerateJobPostOutputSchema } from './generate-job-post-schema';

export const TranslateJobPostInputSchema = z.object({
  jobPost: GenerateJobPostOutputSchema,
  targetLanguage: z.string().describe("The target language to translate to (e.g., 'Vietnamese', 'Japanese', 'English')."),
});
export type TranslateJobPostInput = z.infer<typeof TranslateJobPostInputSchema>;

// The output is the same as the job post schema
export const TranslateJobPostOutputSchema = GenerateJobPostOutputSchema;
export type TranslateJobPostOutput = z.infer<typeof TranslateJobPostOutputSchema>;
