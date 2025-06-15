'use client';

import { InterviewPrepDetailProps } from '../InterviewPrepDetailPage';
import { QuestionButton } from './QuestionButton';
import { QuestionForm } from './QuestionForm';
import { useQuestion } from '../hooks/useQuestion';

export const QuestionDetail = ({ interview }: InterviewPrepDetailProps) => {
  const {
    question,
    canSetNextQuestion,
    canSetPreviousQuestion,
    setNextQuestion,
    setPreviousQuestion,
    updateCurrentQuestion,
  } = useQuestion(interview);

  return (
    <div className='flex flex-col md:flex-1/2 gap-6'>
      <p>
        <strong className='text-xl ml-2'>Question:</strong>
        {question.question}
      </p>
      <div className='flex justify-around'>
        <QuestionButton
          canSetQuestion={canSetPreviousQuestion}
          setQuestion={setPreviousQuestion}
          text='Previous Question'
        />
        <QuestionButton
          canSetQuestion={canSetNextQuestion}
          setQuestion={setNextQuestion}
          text='Next Question'
        />
      </div>
      <QuestionForm
        question={question}
        interviewId={interview.id}
        onSubmit={updateCurrentQuestion}
      />
      {question.evaluation && (
        <p>
          <strong className='text-xl ml-2'>Evaluation:</strong>
          {question.evaluation}
        </p>
      )}
      {question.score && (
        <p>
          <strong className='text-xl ml-2'>Score:</strong>
          <span className='text-blue-400 text-2xl'>{question.score}</span>
        </p>
      )}
      {question.improvementTip && (
        <p>
          <strong className='text-xl ml-2'>Tip for improvement:</strong>
          {question.improvementTip}
        </p>
      )}
    </div>
  );
};
