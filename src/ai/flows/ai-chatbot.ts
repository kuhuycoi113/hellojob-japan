'use server';

/**
 * @fileOverview An AI chatbot flow that acts as a triage agent for user inquiries.
 *
 * - chatWithBot - A function that handles the chat process, deciding whether to answer directly or notify a human advisor.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { getExchangeRate } from '@/ai/tools/exchange-rate-tool';

// Mock function to simulate calling an external CRM API
async function notifyCRM(payload: { conversation: any; reason: string }) {
  console.log('--- NOTIFYING HELLOJOB CRM ---');
  console.log('Reason for escalation:', payload.reason);
  console.log('Conversation history:', JSON.stringify(payload.conversation, null, 2));
  // In a real application, this would be an API call, e.g.,
  // await fetch('https://api.hellojob.com/crm/notify', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // });
  return { success: true, messageId: `crm-ticket-${Date.now()}` };
}

const notifyHumanAdvisor = ai.defineTool(
    {
        name: 'notifyHumanAdvisor',
        description: 'Use this tool when a user asks a complex, detailed, or strategic question that requires human expertise. This includes questions about specific candidate recommendations, recruitment strategies, legal advice, or any issue needing a real person to solve. Do not use for simple informational questions.',
        inputSchema: z.object({
            reason: z.string().describe('A brief reason why human intervention is needed.'),
        }),
        outputSchema: z.object({
            messageId: z.string().describe('The ticket or message ID from the CRM system.'),
        }),
    },
    async (input, context) => {
        const result = await notifyCRM({ conversation: context.history, reason: input.reason });
        return { messageId: result.messageId };
    }
);


const ChatbotInputSchema = z.object({
  question: z.string().describe("The user's question."),
  userRole: z.string().optional().describe('The role of the user (e.g., Hiring Company, Union).'),
  advisorName: z.string().optional().describe('The name of the virtual advisor persona handling the chat.'),
  history: z.array(z.object({
      role: z.enum(['user', 'model', 'tool']),
      content: z.array(z.object({
        text: z.string().optional(),
        toolRequest: z.any().optional(),
        toolResponse: z.any().optional(),
      })),
  })).optional().describe('The conversation history.'),
});
type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

const ChatbotOutputSchema = z.object({
  answer: z.string().describe("The AI's answer to the user's question."),
});
type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;


const prompt = ai.definePrompt({
    name: 'chatbotPrompt',
    tools: [notifyHumanAdvisor, getExchangeRate],
    system: `You are an AI assistant for HelloJob, a platform connecting Japanese companies with Vietnamese workers.
Your name is HelloJob AI, and you are a friendly and helpful assistant.
Your primary role is to be a triage agent.
1. For simple, factual questions (e.g., "Do you have construction candidates?", "What is a Specified Skilled Worker visa?"), provide a concise and helpful answer.
2. For questions involving currency conversion (e.g., "How much is 180,000 JPY in VND?", "What is 20 man yen in Vietnamese dong?"), you MUST use the 'getExchangeRate' tool to get the latest rate and provide the calculated answer. 1 man = 10,000.
3. For complex, detailed, or strategic questions that require human expertise (e.g., "Can you find me 5 candidates for...", "Advise me on my hiring strategy", "Is this contract legal?"), you MUST use the 'notifyHumanAdvisor' tool.
4. After using the 'notifyHumanAdvisor' tool, you MUST inform the user that a human advisor has been notified and will contact them shortly. Do not attempt to answer the complex question yourself.

The user is a: {{{userRole}}}. Tailor your response to their perspective.`,
});


export async function chatWithBot(input: ChatbotInput): Promise<ChatbotOutput> {
  const { history, ...rest } = input;
  const llmResponse = await ai.generate({
    prompt: input.question,
    model: prompt,
    history: history as any, // Cast to any to match Genkit's expected history type
    context: rest,
  });

  const choice = llmResponse.choices[0];
  
  if (choice.toolRequest) {
    const toolResponse = await choice.toolRequest.call();
    const finalAnswer = await ai.generate({
        prompt: {
            text: input.question,
            history: [
                ...history as any[],
                { role: 'model', content: [{ toolRequest: choice.toolRequest }] },
                { role: 'tool', content: [{ toolResponse }] },
            ]
        },
        model: prompt,
        context: rest,
    });
    return { answer: finalAnswer.text! };
  }

  return { answer: choice.text! };
}
