import {
  InterviewPrep,
  InterviewPrepQuestion,
} from '@/database/generated/prisma';
import { LayoutWrapper } from '../common/LayoutWrapper';
import { Heading } from '../common/Heading';
import { InterviewInfo } from './parts/InterviewInfo';
import { QuestionDetail } from './parts/QuestionDetail';

export type InterviewPrepDetailProps = {
  interview: InterviewPrep & { questions: InterviewPrepQuestion[] };
};

export const InterviewPrepDetailPage = ({
  interview,
}: {
  interview: InterviewPrep & { questions: InterviewPrepQuestion[] };
}) => (
  <LayoutWrapper>
    <Heading title='Interview Prep Detail' />
    <div className='flex flex-col md:flex-row gap-10'>
      <InterviewInfo interview={interview} />
      <QuestionDetail interview={interview} />
    </div>
  </LayoutWrapper>
);
