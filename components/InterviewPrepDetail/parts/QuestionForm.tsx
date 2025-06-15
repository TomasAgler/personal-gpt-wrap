'use client';
import { InterviewPrepQuestion } from '@/database/generated/prisma';
import { useEffect, useRef, useState } from 'react';

export const QuestionForm = ({
  question,
  interviewId,
  onSubmit,
}: {
  question: InterviewPrepQuestion;
  interviewId: number;
  onSubmit: (data: InterviewPrepQuestion) => void;
}) => {
  const [answer, setAnswer] = useState(question.answer || '');
  const isLoading = useRef(false);

  const handleQuestionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading.current || !answer.trim()) {
      return;
    }
    isLoading.current = true;
    fetch(`/api/interview-prep/${interviewId}/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        questionId: question.id,
        answer,
      }),
    })
      .then((res) => res.json())
      .then(onSubmit)
      .finally(() => {
        isLoading.current = false;
      });
  };

  useEffect(() => {
    setAnswer(question.answer || '');
  }, [question.answer]);

  return (
    <form onSubmit={handleQuestionSubmit}>
      <textarea
        name='answer'
        rows={10}
        className='w-full p-2 border rounded mb-4 text-zinc-900 bg-white disabled:bg-gray-400'
        placeholder='Your answer...'
        required
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        disabled={!!question?.evaluation}
      ></textarea>
      <button
        type='submit'
        className='px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 cursor:pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-600'
        disabled={isLoading.current || !!question?.evaluation}
      >
        {!!question?.evaluation
          ? 'Evaluation already submitted'
          : isLoading.current
            ? 'Submitting...'
            : 'Submit Answer'}
      </button>
    </form>
  );
};
