import { PromptTemplate } from '@langchain/core/prompts';

export const questionsTemplate = PromptTemplate.fromTemplate(
  `
As a hiring manager, you are preparing to interview a candidate for the {jobPosition} position. 
Generate a list of 20 **challenging** interview questions that thoroughly assess the candidate’s skills, experience, and fit for the role. 
Questions should require deep thinking, practical knowledge, and real-world problem-solving ability. 
Include a mix of open-ended, behavioral, and **technically demanding** questions tailored to the position.

Use the following context to guide your question development:
JOB POSITION: {jobPosition}
REQUIREMENTS: {jobRequirements}
RESPONSIBILITIES: {jobResponsibilities}`,
);

export const evaluationTemplate = PromptTemplate.fromTemplate(`
As a hiring manager, you are interviewing a candidate for the {jobPosition} position. 
You have asked the candidate the following question:
"{question}"
The candidate has provided the following answer:
"{answer}"
Generate a short evaluation of the candidate's response, up to 50 words, focusing on their skills, experience, and fit for the role.
`);

export const scoringTemplate = PromptTemplate.fromTemplate(`
As a hiring manager, you are interviewing a candidate for the {jobPosition} position. 
You have evaluated the candidate's response as follows:
"{evaluation}"
Based on this evaluation, assign a score from 1 to 10, where 1 is "poor" and 10 is "excellent" to this particular answer.
`);

export const improvementTemplate = PromptTemplate.fromTemplate(`
As a hiring manager, you are interviewing a candidate for the {jobPosition} position. 
You have asked the candidate the following question:
"{question}"
The candidate has provided the following answer:
"{answer}"
You have evaluated the candidate's response with a score of {score} out of ten and written evaluation as follows:
"{evaluation}"
Generate a list of 3-5 specific, actionable improvement tips to help the candidate enhance their response.
Focus on practical advice that the candidate can implement to improve their performance in future interviews, utilize examples of correct answers to illustrate your points.
`);
