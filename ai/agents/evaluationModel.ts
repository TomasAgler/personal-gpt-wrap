import { SystemMessage } from '@langchain/core/messages';
import { z } from 'zod';

import { model } from '../llm';
import { evaluationTemplate } from '../templates';
import { StateAnnotation } from '../tools';
import { LangGraphRunnableConfig } from '@langchain/langgraph';

const structure = z.object({ evaluation: z.string() });

export const getEvaluationModel = async (
  state: typeof StateAnnotation.State,
  config?: LangGraphRunnableConfig,
) => {
  const systemPrompt = (await evaluationTemplate.invoke(state)).toString();
  const evaluationResponse = await model.invoke(
    [new SystemMessage(systemPrompt)],
    {
      ...config,
      response_format: {
        type: 'json_schema',
        json_schema: {
          name: 'evaluation',
          schema: structure,
          description: 'Stores the evaluation of user answer',
        },
      },
    },
  );
  const parsedResponse = JSON.parse(evaluationResponse.content as string);

  return {
    ...state,
    evaluation: parsedResponse.evaluation,
  };
};
