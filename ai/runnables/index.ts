import { MemorySaver, StateGraph } from '@langchain/langgraph';
import { nanoid } from 'nanoid';

import {
  getEvaluationModel,
  getImprovementModel,
  getScoringModel,
} from '../agents';
import { improvementDecider, StateAnnotation } from '../tools';

const checkpointer = new MemorySaver();

const workflow = new StateGraph(StateAnnotation)
  .addNode('evaluationAgent', getEvaluationModel)
  .addNode('scoringAgent', getScoringModel)
  .addNode('improvementAgent', getImprovementModel)
  .addEdge('__start__', 'evaluationAgent')
  .addEdge('evaluationAgent', 'scoringAgent')
  .addConditionalEdges('scoringAgent', improvementDecider)
  .addEdge('improvementAgent', '__end__');

type EvaluationInput = {
  jobPosition: string;
  question: string;
  answer: string;
};

export const evaluateAnswer = async (data: EvaluationInput) => {
  const app = workflow.compile({
    checkpointer,
  });
  const finalState = await app.invoke(data, {
    configurable: {
      thread_id: nanoid(),
    },
  });

  return {
    evaluation: finalState.evaluation,
    score: finalState.score,
    improvementTip: finalState.improvementTip,
  };
};
