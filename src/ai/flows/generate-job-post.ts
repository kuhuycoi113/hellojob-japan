'use server';

/**
 * @fileOverview Generates a job posting from a user's description.
 *
 * - generateJobPost - A function that takes a description and returns a structured job posting.
 * - GenerateJobPostInput - The input type for the generateJobPost function.
 * - GenerateJobPostOutput - The return type for the generateJobPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const GenerateJobPostInputSchema = z.object({
  description: z
    .string()
    .describe('A description of the job provided by the user. This can be a simple sentence or a list of requirements.'),
});
export type GenerateJobPostInput = z.infer<typeof GenerateJobPostInputSchema>;

export const GenerateJobPostOutputSchema = z.object({
  jobTitle: z.string().describe("The generated job title for the posting."),
  companyName: z.string().describe("The name of the hiring company. If not provided, assume 'A Japanese Company'."),
  location: z.string().describe("The job location. If not provided, assume 'Japan'."),
  jobDescription: z.string().describe("A detailed and engaging description of the job and its responsibilities."),
  requirements: z.array(z.string()).describe("A list of key qualifications and skill requirements for the candidate."),
  benefits: z.array(z.string()).describe("A list of benefits and perks offered with the job."),
});
export type GenerateJobPostOutput = z.infer<typeof GenerateJobPostOutputSchema>;

export async function generateJobPost(input: GenerateJobPostInput): Promise<GenerateJobPostOutput> {
  return generateJobPostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateJobPostPrompt',
  input: {schema: GenerateJobPostInputSchema},
  output: {schema: GenerateJobPostOutputSchema},
  prompt: `You are an expert recruitment copywriter specializing in creating job postings for Japanese companies hiring Vietnamese talent.
Your task is to take a user's raw description and transform it into a complete, professional, and appealing job posting.

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
