import { StateAnnotation } from './state';

export const improvementDecider = (state: typeof StateAnnotation.State) => {
  console.log(state);
  if (state.score < 8) {
    return 'improvementAgent';
  }
  return '__end__';
};
