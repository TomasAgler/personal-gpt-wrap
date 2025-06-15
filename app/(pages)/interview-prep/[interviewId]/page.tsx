import { InterviewPrepErrorPage } from '@/components/InterviewPrepDetail/InterviewPrepErrorPage';
import { InterviewPrepDetailPage } from '@/components/InterviewPrepDetail/InterviewPrepDetailPage';
import { getInterviewById } from '@/database';

const InterviewPrepDetail = async ({
  params,
}: {
  params: Promise<{ interviewId: string }>;
}) => {
  const { interviewId } = await params;
  const interview = await getInterviewById(parseInt(interviewId));
  if (!interview || !interview.id) {
    return <InterviewPrepErrorPage />;
  }
  return <InterviewPrepDetailPage interview={interview} />;
};

export default InterviewPrepDetail;
