import { InterviewPrep } from './generated/prisma';

export type InterviewPrepInput = Pick<
  InterviewPrep,
  'jobPosition' | 'jobResponsibilities' | 'jobRequirements'
>;
