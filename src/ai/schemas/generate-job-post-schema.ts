/**
 * @fileOverview Defines the data schemas (Zod) and TypeScript types for the Generate Job Post flow.
 *
 * - GenerateJobPostInputSchema - The Zod schema for the input.
 * - GenerateJobPostInput - The TypeScript type for the input.
 * - GenerateJobPostOutputSchema - The Zod schema for the output.
 * - GenerateJobPostOutput - The TypeScript type for the output.
 */

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
