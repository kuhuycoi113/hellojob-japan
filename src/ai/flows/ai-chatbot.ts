// This is a new file.
'use server';

/**
 * @fileOverview An AI chatbot flow for providing advice to users.
 *
 * - chatWithBot - A function that takes a user's question and role to get advice.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatbotInputSchema = z.object({
  question: z.string().describe("The user's question."),
  role: z.string().optional().describe('The role of the user (e.g., Hiring Company, Union).'),
  history: z.array(z.object({
      role: z.enum(['user', 'model']),
      content: z.string(),
  })).optional().describe('The conversation history.'),
});
type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

const ChatbotOutputSchema = z.object({
  answer: z.string().describe("The AI's answer to the user's question."),
});
type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

export async function chatWithBot(input: ChatbotInput): Promise<ChatbotOutput> {
  const prompt = ai.definePrompt({
    name: 'chatbotPrompt',
    input: { schema: ChatbotInputSchema },
    output: { schema: ChatbotOutputSchema },
    prompt: `You are a friendly and helpful AI assistant for HelloJob, a platform connecting Japanese companies with Vietnamese workers.
Your role is to provide concise and accurate advice.

The user is a: {{{role}}}. Tailor your answer to their perspective.

Here is the conversation history (if any):
{{#each history}}
- {{role}}: {{{content}}}
{{/each}}

User's latest question: "{{{question}}}"

Provide a direct and helpful answer.`,
  });

  const chatbotFlow = ai.defineFlow(
    {
      name: 'chatbotFlow',
      inputSchema: ChatbotInputSchema,
      outputSchema: ChatbotOutputSchema,
    },
    async (input) => {
      const { output } = await prompt(input);
      return output!;
    }
  );

  return chatbotFlow(input);
}
