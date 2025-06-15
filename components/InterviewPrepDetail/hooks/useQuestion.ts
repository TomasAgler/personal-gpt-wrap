import { useMemo, useState } from 'react';
import { InterviewPrepDetailProps } from '../InterviewPrepDetailPage';
import { InterviewPrepQuestion } from '@/database/generated/prisma';

export const useQuestion = (
  interview: InterviewPrepDetailProps['interview'],
) => {
  const [interviewData, setInterviewData] = useState({
    ...interview,
    questions: [...interview.questions.sort((a, b) => a.id - b.id)],
  });

  const [currentQuestion, setCurrentQuestion] = useState(
    interview.questions[0],
  );

  const currentIndex = useMemo(() => {
    return interviewData.questions.findIndex(
      (q) => q.id === currentQuestion.id,
    );
  }, [currentQuestion.id, interviewData.questions]);

  const canSetNextQuestion = () => {
    return currentIndex < interviewData.questions.length - 1;
  };

  const setNextQuestion = () => {
    if (canSetNextQuestion()) {
      setCurrentQuestion(interviewData.questions[currentIndex + 1]);
    }
  };

  const canSetPreviousQuestion = () => {
    return currentIndex > 0;
  };

  const setPreviousQuestion = () => {
    if (canSetPreviousQuestion()) {
      setCurrentQuestion(interviewData.questions[currentIndex - 1]);
    }
  };

  const updateCurrentQuestion = (data: InterviewPrepQuestion) => {
    setInterviewData((prev) => {
      const updatedQuestions = prev.questions.map((question) =>
        question.id === data.id ? data : question,
      );
      return { ...prev, questions: updatedQuestions };
    });
    setCurrentQuestion(data);
  };

  return {
    question: currentQuestion,
    canSetNextQuestion,
    setNextQuestion,
    canSetPreviousQuestion,
    setPreviousQuestion,
    updateCurrentQuestion,
  };
};
