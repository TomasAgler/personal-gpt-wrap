import { evaluateAnswer } from '@/ai';
import { getInterviewById, updateInterviewQuestion } from '@/database';
import { z } from 'zod';

const InputBodySchema = z.object({
  questionId: z.number().min(1),
  answer: z.string().min(1),
});

export async function POST(
  req: Request,
  { params }: { params: Promise<{ interviewId: string }> },
) {
  const { interviewId } = await params;

  if (!interviewId) {
    return Response.json(
      { error: 'Interview ID is required' },
      { status: 400 },
    );
  }

  try {
    const data = await req.json();
    const parsedRequest = InputBodySchema.safeParse(data);
    if (!parsedRequest.success) {
      return Response.json(
        { error: parsedRequest.error.message },
        { status: 400 },
      );
    }

    const interview = await getInterviewById(parseInt(interviewId));
    const question = interview?.questions.find(
      (q) => q.id === parsedRequest.data?.questionId,
    );
    if (!interview || !question) {
      return Response.json(
        { error: 'Interview or question not found' },
        { status: 404 },
      );
    }

    const evaluation = await evaluateAnswer({
      question: question.question,
      answer: parsedRequest.data?.answer,
      jobPosition: interview.jobPosition,
    });

    const updatedQuestion = {
      ...question,
      answer: parsedRequest.data?.answer,
      ...evaluation,
    };

    await updateInterviewQuestion(updatedQuestion);

    return Response.json(updatedQuestion);
  } catch (error) {
    return Response.json(
      { error: 'Error processing request' + error },
      { status: 400 },
    );
  }
}
