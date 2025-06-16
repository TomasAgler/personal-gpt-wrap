import { Heading } from '@/components/common/Heading';
import { PrepForm } from '@/components/InterviewPrep/PrepForm';
import { PrepList } from '@/components/InterviewPrep/PrepList';
import { getAllInterviews } from '@/database';

export const dynamic = 'force-dynamic';

const InterviewPrep = async () => {
  const interviewPreps = await getAllInterviews();

  return (
    <>
      <Heading title='Interview Prep' />
      <div className='flex flex-col md:flex-row gap-10'>
        <PrepList interviewPreps={interviewPreps} />
        <PrepForm />
      </div>
    </>
  );
};

export default InterviewPrep;
