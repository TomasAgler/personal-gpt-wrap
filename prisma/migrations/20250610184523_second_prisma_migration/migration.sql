/*
  Warnings:

  - You are about to drop the column `questions` on the `InterviewPrepQuestion` table. All the data in the column will be lost.
  - Added the required column `question` to the `InterviewPrepQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InterviewPrepQuestion" DROP COLUMN "questions",
ADD COLUMN     "question" TEXT NOT NULL;
