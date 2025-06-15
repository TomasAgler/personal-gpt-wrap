-- CreateTable
CREATE TABLE "InterviewPrep" (
    "id" SERIAL NOT NULL,
    "jobPosition" TEXT NOT NULL,
    "jobRequirements" TEXT NOT NULL,
    "jobResponsibilities" TEXT NOT NULL,
    "evaluation" TEXT,

    CONSTRAINT "InterviewPrep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterviewPrepQuestion" (
    "id" SERIAL NOT NULL,
    "questions" TEXT NOT NULL,
    "answer" TEXT,
    "evaluation" TEXT,
    "interviewPrepId" INTEGER,

    CONSTRAINT "InterviewPrepQuestion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InterviewPrepQuestion" ADD CONSTRAINT "InterviewPrepQuestion_interviewPrepId_fkey" FOREIGN KEY ("interviewPrepId") REFERENCES "InterviewPrep"("id") ON DELETE SET NULL ON UPDATE CASCADE;
