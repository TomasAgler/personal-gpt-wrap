import { SystemMessage } from '@langchain/core/messages';
import { z } from 'zod';

import { InterviewPrepInput } from '@/database';
import { model } from '../llm';
import { questionsTemplate } from '../templates';

const structure = z
  .object({ data: z.array(z.string()) })
  .describe('A list of questions to ask the candidate for the job interview.');

export const getQuestionsModel = async (data: InterviewPrepInput) => {
  const structuredModel = model.withStructuredOutput(structure);
  const systemPrompt = (await questionsTemplate.invoke({ ...data })).toString();

  return (await structuredModel.invoke([new SystemMessage(systemPrompt)])).data;
};
