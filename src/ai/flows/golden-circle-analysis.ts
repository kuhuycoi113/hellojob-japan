'use server';
/**
 * @fileOverview Analyzes a company's Golden Circle (Why, How, What) to suggest an ideal candidate profile.
 *
 * - analyzeGoldenCircle - A function that provides recruitment advice based on the Golden Circle.
 * - GoldenCircleAnalysisInput - The input type for the analyzeGoldenCircle function.
 * - GoldenCircleAnalysisOutput - The return type for the analyzeGoldenCircle function.
 */

import {ai} from '@/ai/genkit';
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

export async function analyzeGoldenCircle(input: GoldenCircleAnalysisInput): Promise<GoldenCircleAnalysisOutput> {
  return goldenCircleAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'goldenCircleAnalysisPrompt',
  input: {schema: GoldenCircleAnalysisInputSchema},
  output: {schema: GoldenCircleAnalysisOutputSchema},
  prompt: `You are an expert HR consultant specializing in cultural fit and value-based recruitment for Japanese companies hiring foreign talent, particularly from Vietnam.

A client has provided their "Golden Circle" values (Why, How, What). Your task is to analyze these values and provide a concise, actionable conclusion about the ideal candidate profile they should look for.

The output should be in the same language as the input.

Analyze the following company values:
- WHY (Lý do tồn tại): {{{why}}}
- HOW (Cách thức thực hiện): {{{how}}}
- WHAT (Sản phẩm/Dịch vụ): {{{what}}}

Based on this, provide an analysis that describes the key characteristics of an ideal candidate. Focus on:
1.  **Core Values & Beliefs:** What values should the candidate share with the company? (e.g., passion for innovation, community-focused, strong sense of discipline).
2.  **Motivations & Drivers:** What would motivate this type of candidate beyond just a salary? (e.g., desire to make an impact, opportunity for continuous learning, being part of a strong team).
3.  **Work Style & Attitude:** What kind of work style and attitude would thrive in this company's culture? (e.g., proactive and self-starting, meticulous and detail-oriented, collaborative and communicative).

Structure your analysis as a brief report. Be encouraging and insightful.
`,
});

const goldenCircleAnalysisFlow = ai.defineFlow(
  {
    name: 'goldenCircleAnalysisFlow',
    inputSchema: GoldenCircleAnalysisInputSchema,
    outputSchema: GoldenCircleAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
