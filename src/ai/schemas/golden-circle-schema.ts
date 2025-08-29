/**
 * @fileOverview Defines the data schemas (Zod) and TypeScript types for the Golden Circle analysis flow.
 *
 * - GoldenCircleAnalysisInputSchema - The Zod schema for the input.
 * - GoldenCircleAnalysisInput - The TypeScript type for the input.
 * - GoldenCircleAnalysisOutputSchema - The Zod schema for the output.
 * - GoldenCircleAnalysisOutput - The TypeScript type for the output.
 */

import {z} from 'genkit';

export const GoldenCircleAnalysisInputSchema = z.object({
  why: z.string().describe("The company's purpose, cause, or belief."),
  how: z.string().describe("The specific actions the company takes to realize its 'Why'."),
  what: z.string().describe("The products or services the company offers."),
});
export type GoldenCircleAnalysisInput = z.infer<typeof GoldenCircleAnalysisInputSchema>;

export const GoldenCircleAnalysisOutputSchema = z.object({
  analysis: z.string().describe("The AI's analysis and recommendation for the ideal candidate profile."),
});
export type GoldenCircleAnalysisOutput = z.infer<typeof GoldenCircleAnalysisOutputSchema>;
