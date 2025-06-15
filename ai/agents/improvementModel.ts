import { SystemMessage } from '@langchain/core/messages';
import { z } from 'zod';

import { model } from '../llm';
import { improvementTemplate } from '../templates';
import { StateAnnotation } from '../tools';
import { LangGraphRunnableConfig } from '@langchain/langgraph';

const structure = z.object({ improvementTip: z.string() });

export const getImprovementModel = async (
  state: typeof StateAnnotation.State,
  config?: LangGraphRunnableConfig,
) => {
  const systemPrompt = (await improvementTemplate.invoke(state)).toString();
  const improvementResponse = await model.invoke(
    [new SystemMessage(systemPrompt)],
    {
      ...config,
      response_format: {
        type: 'json_schema',
        json_schema: {
          name: 'evaluation',
          schema: structure,
          description: 'Stores the improvement tips for the user',
        },
      },
    },
  );
  const parsedResponse = JSON.parse(improvementResponse.content as string);

  return {
    ...state,
    improvementTip: parsedResponse.improvementTip,
  };
};
