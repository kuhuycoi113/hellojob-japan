'use server';

/**
 * @fileOverview Generates a job posting from a user's description.
 *
 * - generateJobPost - A function that takes a description and returns a structured job posting.
 */

import {ai} from '@/ai/genkit';
import { GenerateJobPostInputSchema, GenerateJobPostOutputSchema, GenerateJobPostInput, GenerateJobPostOutput } from '@/ai/schemas/generate-job-post-schema';

export async function generateJobPost(input: GenerateJobPostInput): Promise<GenerateJobPostOutput> {
  const prompt = ai.definePrompt({
    name: 'generateJobPostPrompt',
    input: {schema: GenerateJobPostInputSchema},
    output: {schema: GenerateJobPostOutputSchema},
    prompt: `You are an expert recruitment copywriter specializing in creating job postings for Japanese companies hiring Vietnamese talent.
Your task is to take a user's raw description and transform it into a complete, professional, and appealing job posting.

The user has pre-selected the following criteria for their recruitment:
- User Role: {{{role}}}
- Visa Type: {{{visaType}}}
- Visa Sub-Type: {{{visaSubType}}}

Use this context to tailor the job posting. For example, if the visa type is "Technical Intern Trainee", the tone and requirements might be different than for an "Engineer".

The output language must be the same as the input language (Vietnamese, Japanese, or English).

Analyze the user's input to extract key information. Make reasonable assumptions for any missing details (e.g., if location is not specified, assume "Japan").

Structure the output clearly with the following sections:
- Job Title
- Company Name (if not provided, use a placeholder like "A Japanese Company")
- Location
- Job Description (make this engaging and comprehensive)
- Key Requirements (as a list)
- Benefits (as a list)

User's Input:
"{{{description}}}"
`,
  });

  const generateJobPostFlow = ai.defineFlow(
    {
      name: 'generateJobPostFlow',
      inputSchema: GenerateJobPostInputSchema,
      outputSchema: GenerateJobPostOutputSchema,
    },
    async input => {
      const {output} = await prompt(input);
      return output!;
    }
  );

  return generateJobPostFlow(input);
}
