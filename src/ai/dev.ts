'use server';

import { config } from 'dotenv';
config();

import '@/ai/flows/ai-job-matching.ts';
import '@/ai/flows/golden-circle-analysis.ts';
import '@/ai/flows/generate-job-post.ts';
import '@/ai/flows/analyze-job-document.ts';
import '@/ai/flows/translate-job-post.ts';
import '@/ai/flows/translate-profile.ts';
import '@/ai/flows/ai-chatbot.ts';
import '@/ai/tools/exchange-rate-tool.ts';
