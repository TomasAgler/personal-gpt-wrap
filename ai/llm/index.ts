import { ChatOpenAI } from '@langchain/openai';

export const model = new ChatOpenAI({
  model: 'gpt-4.1-nano',
  verbose: true,
});
