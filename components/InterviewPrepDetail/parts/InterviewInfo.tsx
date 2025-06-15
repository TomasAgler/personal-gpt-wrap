import { InterviewPrep } from '@/database/generated/prisma';

export const InterviewInfo = ({ interview }: { interview: InterviewPrep }) => (
  <div className='flex flex-col md:flex-1/2 gap-6'>
    <h2 className='text-2xl font-semibold'>
      Position: {interview.jobPosition}
    </h2>
    <p>
      <strong>Requirements:</strong> {interview.jobRequirements}
    </p>
    <p>
      <strong>Responsibilities:</strong> {interview.jobResponsibilities}
    </p>
  </div>
);
