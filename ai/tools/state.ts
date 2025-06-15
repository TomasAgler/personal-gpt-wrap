import { Annotation } from '@langchain/langgraph';

export const StateAnnotation = Annotation.Root({
  jobPosition: Annotation<string>,
  question: Annotation<string>,
  answer: Annotation<string>,
  evaluation: Annotation<string>,
  score: Annotation<number>,
  improvementTip: Annotation<string>,
});
