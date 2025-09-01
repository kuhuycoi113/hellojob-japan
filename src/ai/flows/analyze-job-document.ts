'use server';

/**
 * @fileOverview Analyzes an uploaded job description document and generates a structured job posting.
 *
 * - analyzeJobDocument - A function that takes a document and context to return a structured job posting.
 */

import {ai} from '@/ai/genkit';
import { GenerateJobPostInputSchema, GenerateJobPostOutputSchema, GenerateJobPostInput, GenerateJobPostOutput } from '@/ai/schemas/generate-job-post-schema';
import { z } from 'genkit';


const AnalyzeJobDocumentInputSchema = GenerateJobPostInputSchema.extend({
    documentDataUri: z
    .string()
    .describe(
      "A document (PDF, image, etc.) of a job description, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});

type AnalyzeJobDocumentInput = z.infer<typeof AnalyzeJobDocumentInputSchema>;


export async function analyzeJobDocument(input: AnalyzeJobDocumentInput): Promise<GenerateJobPostOutput> {
  const prompt = ai.definePrompt({
    name: 'analyzeJobDocumentPrompt',
    input: {schema: AnalyzeJobDocumentInputSchema},
    output: {schema: GenerateJobPostOutputSchema},
    prompt: `You are an expert recruitment copywriter specializing in creating job postings for Japanese companies hiring Vietnamese talent.
Your task is to analyze the provided document (job description) and transform it into a complete, professional, and appealing job posting.

The user has pre-selected the following criteria for their recruitment:
- User Role: {{{role}}}
- Visa Type: {{{visaType}}}
- Visa Sub-Type: {{{visaSubType}}}

Use this context to tailor the job posting. For example, if the visa type is "Technical Intern Trainee", the tone and requirements might be different than for an "Engineer".

The output language must be the same as the input language (Vietnamese, Japanese, or English).

Analyze the user's uploaded document to extract key information. Make reasonable assumptions for any missing details (e.g., if location is not specified, assume "Japan").

Structure the output clearly with the following sections:
- Job Title
- Company Name (if not provided, use a placeholder like "A Japanese Company")
- Location
- Job Description (make this engaging and comprehensive)
- Key Requirements (as a list)
- Benefits (as a list)

Uploaded Document:
{{media url=documentDataUri}}
`,
  });

  const analyzeJobDocumentFlow = ai.defineFlow(
    {
      name: 'analyzeJobDocumentFlow',
      inputSchema: AnalyzeJobDocumentInputSchema,
      outputSchema: GenerateJobPostOutputSchema,
        flowConfig: {
        retries: 3,
        },
    },
    async input => {
      const {output} = await prompt(input);
      return output!;
    }
  );

  return analyzeJobDocumentFlow(input);
}
