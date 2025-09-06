// This is a new file.
'use server';
/**
 * @fileOverview A tool for fetching real-time currency exchange rates.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const ExchangeRateInputSchema = z.object({
  baseCurrency: z.string().describe('The base currency code (e.g., "JPY").'),
  targetCurrency: z.string().describe('The target currency code (e.g., "VND").'),
});
export type ExchangeRateInput = z.infer<typeof ExchangeRateInputSchema>;

export const ExchangeRateOutputSchema = z.object({
    rate: z.number().describe('The conversion rate from the base currency to the target currency.'),
    lastUpdated: z.string().describe('The UTC timestamp of the last update in ISO format.'),
});
export type ExchangeRateOutput = z.infer<typeof ExchangeRateOutputSchema>;

/**
 * A mock function to simulate calling an external exchange rate API.
 * In a real application, this would fetch data from a service like ExchangeRate-API,
 * Open Exchange Rates, or a bank's public API.
 * @param {string} baseCurrency The base currency (e.g., JPY)
 * @param {string} targetCurrency The target currency (e.g., VND)
 * @returns A promise that resolves to the exchange rate data.
 */
async function fetchFromExchangeApi(baseCurrency: string, targetCurrency: string): Promise<{ rate: number, lastUpdated: string }> {
  console.log(`--- MOCK API CALL: Fetching exchange rate for ${baseCurrency} to ${targetCurrency} ---`);
  
  // These are example rates and are not real-time.
  const MOCK_RATES: Record<string, Record<string, number>> = {
    'JPY': {
      'VND': 169.58, 
    },
    'USD': {
        'VND': 25458.00,
    }
  };

  const rate = MOCK_RATES[baseCurrency]?.[targetCurrency];

  if (!rate) {
    throw new Error(`Mock rate for ${baseCurrency} to ${targetCurrency} not found.`);
  }

  return Promise.resolve({
    rate: rate,
    lastUpdated: new Date().toISOString(),
  });
}


export const getExchangeRate = ai.defineTool(
  {
    name: 'getExchangeRate',
    description: 'Retrieves the current exchange rate between two currencies.',
    inputSchema: ExchangeRateInputSchema,
    outputSchema: ExchangeRateOutputSchema,
  },
  async (input) => {
    const { rate, lastUpdated } = await fetchFromExchangeApi(input.baseCurrency, input.targetCurrency);
    return { rate, lastUpdated };
  }
)
