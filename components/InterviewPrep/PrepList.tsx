'use client';
import { InterviewPrep } from '@/database/generated/prisma';
import { useRouter } from 'next/navigation';

export const PrepList = ({
  interviewPreps,
}: {
  interviewPreps: InterviewPrep[];
}) => {
  const router = useRouter();

  return (
    <div className='flex flex-col md:flex-1/3 gap-6'>
      <h2 className='text-2xl font-semibold'>Available Preps</h2>
      <ul>
        {interviewPreps.map((interviewPrep) => (
          <li
            key={interviewPrep.id}
            className='p-4 border border-gray-300 rounded hover:bg-gray-100 cursor-pointer hover:text-zinc-900'
            onClick={() => router.push(`/interview-prep/${interviewPrep.id}`)}
          >
            {interviewPrep.jobPosition}
          </li>
        ))}
      </ul>
    </div>
  );
};
