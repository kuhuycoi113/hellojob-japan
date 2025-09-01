'use server';

/**
 * @fileOverview Translates a job posting to a specified language.
 *
 * - translateJobPost - A function that translates a job post object.
 */

import { ai } from '@/ai/genkit';
import { TranslateJobPostInputSchema, TranslateJobPostOutputSchema, TranslateJobPostInput, TranslateJobPostOutput } from '@/ai/schemas/translate-job-post-schema';

export async function translateJobPost(input: TranslateJobPostInput): Promise<TranslateJobPostOutput> {
  const prompt = ai.definePrompt({
    name: 'translateJobPostPrompt',
    input: { schema: TranslateJobPostInputSchema },
    output: { schema: TranslateJobPostOutputSchema },
    prompt: `You are an expert translator specializing in recruitment and HR content.
Your task is to translate the following job posting into the target language: {{{targetLanguage}}}.

Translate every field accurately, maintaining the professional tone and nuances of a job advertisement.

**Job Posting to Translate:**
- Job Title: {{{jobPost.jobTitle}}}
- Company Name: {{{jobPost.companyName}}}
- Location: {{{jobPost.location}}}
- Job Description: {{{jobPost.jobDescription}}}
- Key Requirements:
{{#each jobPost.requirements}}
  - {{{this}}}
{{/each}}
- Benefits:
{{#each jobPost.benefits}}
  - {{{this}}}
{{/each}}

Return the fully translated job posting in the structured format required.
`,
  });

  const translateJobPostFlow = ai.defineFlow(
    {
      name: 'translateJobPostFlow',
      inputSchema: TranslateJobPostInputSchema,
      outputSchema: TranslateJobPostOutputSchema,
        flowConfig: {
        retries: 3,
        },
    },
    async (input) => {
      const { output } = await prompt(input);
      return output!;
    }
  );

  return translateJobPostFlow(input);
}
