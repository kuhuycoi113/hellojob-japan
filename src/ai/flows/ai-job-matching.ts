'use server';

/**
 * @fileOverview Matches job listings to a candidate's resume.
 *
 * - matchJobsToResume - A function that matches job listings to a resume.
 * - MatchJobsToResumeInput - The input type for the matchJobsToResume function.
 * - MatchJobsToResumeOutput - The return type for the matchJobsToResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MatchJobsToResumeInputSchema = z.object({
  resumeDataUri: z
    .string()
    .describe(
      "The candidate's resume, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  jobListings: z
    .array(z.string())
    .describe('A list of job listings to match against the resume.'),
});
export type MatchJobsToResumeInput = z.infer<typeof MatchJobsToResumeInputSchema>;

const MatchJobsToResumeOutputSchema = z.object({
  recommendedJobs: z
    .array(z.string())
    .describe('A list of job listings recommended for the candidate.'),
});
export type MatchJobsToResumeOutput = z.infer<typeof MatchJobsToResumeOutputSchema>;

export async function matchJobsToResume(input: MatchJobsToResumeInput): Promise<MatchJobsToResumeOutput> {
  return matchJobsToResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'matchJobsToResumePrompt',
  input: {schema: MatchJobsToResumeInputSchema},
  output: {schema: MatchJobsToResumeOutputSchema},
  prompt: `You are an AI job matching expert. You will receive a resume and a list of job listings.
Your task is to analyze the resume and determine which job listings are the best fit for the candidate.

Resume:
{{media url=resumeDataUri}}

Job Listings:
{{#each jobListings}}
- {{{this}}}
{{/each}}

Based on the resume and job listings, recommend the best job listings for the candidate.
Only include job listings that are a good fit for the candidate.
Return the job listings in a list.
`,
});

const matchJobsToResumeFlow = ai.defineFlow(
  {
    name: 'matchJobsToResumeFlow',
    inputSchema: MatchJobsToResumeInputSchema,
    outputSchema: MatchJobsToResumeOutputSchema,
    flowConfig: {
      retries: 3,
    },
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
