'use server';

import { config } from 'dotenv';
config();

import '@/ai/flows/ai-job-matching.ts';
import '@/ai/flows/golden-circle-analysis.ts';
import '@/ai/flows/generate-job-post.ts';
import '@/ai/flows/analyze-job-document.ts';
