import { InterviewPrepQuestion, PrismaClient } from './generated/prisma';
import { InterviewPrepInput } from './model';

const prisma = new PrismaClient();

const disconnect = async () => {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

const connect = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

export const createInterview = async (
  data: InterviewPrepInput,
  questions: string[],
) => {
  await connect();
  const result = await prisma.interviewPrep.create({
    data: {
      ...data,

      questions: {
        create: questions.map((question) => ({
          question,
          answer: null,
          evaluation: null,
        })),
      },

      evaluation: null,
    },
  });
  await disconnect();
  return result.id;
};

export const getInterviewById = async (id: number) => {
  await connect();
  const result = await prisma.interviewPrep.findUnique({
    where: {
      id,
    },
    include: {
      questions: true,
    },
  });
  await disconnect();
  return result;
};

export const updateInterviewQuestion = async (data: InterviewPrepQuestion) => {
  await connect();
  const result = await prisma.interviewPrepQuestion.update({
    where: {
      id: data.id,
    },
    data: {
      answer: data.answer,
      evaluation: data.evaluation,
      score: data.score,
      improvementTip: data.improvementTip,
    },
  });
  await disconnect();
  return result;
};

export const getAllInterviews = async () => {
  await connect();
  const result = await prisma.interviewPrep.findMany({
    include: {
      questions: false,
    },
  });
  await disconnect();
  return result;
};

export const deleteInterview = async (id: number) => {
  await connect();
  await prisma.interviewPrepQuestion.deleteMany({
    where: {
      interviewPrepId: id,
    },
  });
  await prisma.interviewPrep.delete({
    where: {
      id,
    },
  });
  await disconnect();
};
