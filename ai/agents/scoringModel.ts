import { SystemMessage } from '@langchain/core/messages';
import { z } from 'zod';

import { model } from '../llm';
import { scoringTemplate } from '../templates';
import { StateAnnotation } from '../tools';
import { LangGraphRunnableConfig } from '@langchain/langgraph';

const structure = z.object({ score: z.number().min(1).max(10) });

export const getScoringModel = async (
  state: typeof StateAnnotation.State,
  config?: LangGraphRunnableConfig,
) => {
  const systemPrompt = (await scoringTemplate.invoke(state)).toString();
  const scoringResponse = await model.invoke(
    [new SystemMessage(systemPrompt)],
    {
      ...config,
      response_format: {
        type: 'json_schema',
        json_schema: {
          name: 'evaluation',
          schema: structure,
          description: 'Stores the numerical scoring of user answer',
        },
      },
    },
  );
  const parsedResponse = JSON.parse(scoringResponse.content as string);

  return {
    ...state,
    score: parsedResponse.score,
  };
};
