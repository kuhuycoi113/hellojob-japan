'use server';
/**
 * @fileOverview Analyzes a company's Golden Circle (Why, How, What) to suggest an ideal candidate profile.
 *
 * - analyzeGoldenCircle - A function that provides recruitment advice based on the Golden Circle.
 */
import {ai} from '@/ai/genkit';
import { GoldenCircleAnalysisInputSchema, GoldenCircleAnalysisOutputSchema, GoldenCircleAnalysisInput, GoldenCircleAnalysisOutput } from '@/ai/schemas/golden-circle-schema';

export async function analyzeGoldenCircle(input: GoldenCircleAnalysisInput): Promise<GoldenCircleAnalysisOutput> {
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
        flowConfig: {
        retries: 3,
        },
    },
    async input => {
      const {output} = await prompt(input);
      return output!;
    }
  );

  return goldenCircleAnalysisFlow(input);
}
