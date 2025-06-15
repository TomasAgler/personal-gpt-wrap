import { LayoutWrapper } from '../common/LayoutWrapper';
import { Heading } from '../common/Heading';

export const InterviewPrepErrorPage = () => (
  <LayoutWrapper>
    <Heading title='Interview Prep Detail' />
    <div className='flex flex-col md:flex-row'>
      <p className='text-red-500 text-center mt-8'>
        Interview not found. Please check the interview ID or try again later.
      </p>
    </div>
  </LayoutWrapper>
);
