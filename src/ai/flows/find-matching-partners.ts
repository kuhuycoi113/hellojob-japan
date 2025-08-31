'use server';

/**
 * @fileOverview An AI agent that matches a job posting to the most suitable partners (unions or support organizations).
 *
 * - findMatchingPartners - A function that takes a job post and a list of partners and returns a ranked list of the best matches.
 */

import { ai } from '@/ai/genkit';
import { FindMatchingPartnersInputSchema, FindMatchingPartnersOutputSchema, FindMatchingPartnersInput, FindMatchingPartnersOutput } from '@/ai/schemas/find-matching-partners-schema';

export async function findMatchingPartners(input: FindMatchingPartnersInput): Promise<FindMatchingPartnersOutput> {
  const prompt = ai.definePrompt({
    name: 'findMatchingPartnersPrompt',
    input: { schema: FindMatchingPartnersInputSchema },
    output: { schema: FindMatchingPartnersOutputSchema },
    prompt: `You are an expert AI matchmaking agent for a recruitment platform. Your task is to connect a new job posting with the most suitable support organizations or unions (partners).

Analyze the provided Job Posting and the List of All Available Partners.

**Job Posting Details:**
- Job Title: {{{jobPost.jobTitle}}}
- Location: {{{jobPost.location}}}
- Description: {{{jobPost.jobDescription}}}
- Requirements:
{{#each jobPost.requirements}}
  - {{{this}}}
{{/each}}

**List of All Available Partners:**
{{#each allPartners}}
- Partner ID: {{{id}}}
  - Name: {{{name}}}
  - Type: {{{type}}}
  - Specialties: {{#each specialties}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  - Locations: {{#each locations}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{/each}}

Based on your analysis, identify the top 5 most suitable partners for this job posting.

**Evaluation Criteria:**
1.  **Specialty Alignment:** Does the partner's specialty list match the job's industry (e.g., 'Construction', 'Food Processing')? This is the most important factor.
2.  **Location Match:** Does the partner operate in the job's location (prefecture)? A direct match is best. If no partners match the exact location, consider partners who operate nationwide or in nearby regions.
3.  **Keyword Relevance:** Do the partner's specialties or name align with keywords in the job description and requirements?

For each recommended partner, provide a compatibility score from 0-100 and a brief, compelling reason for the match. Return the list sorted by the compatibility score in descending order.
`,
  });

  const findMatchingPartnersFlow = ai.defineFlow(
    {
      name: 'findMatchingPartnersFlow',
      inputSchema: FindMatchingPartnersInputSchema,
      outputSchema: FindMatchingPartnersOutputSchema,
    },
    async (input) => {
      const { output } = await prompt(input);
      return output!;
    }
  );

  return findMatchingPartnersFlow(input);
}
