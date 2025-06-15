import { getQuestionsModel } from '@/ai/agents';
import { createInterview, getAllInterviews } from '@/database';
import { z } from 'zod';

const InputBodySchema = z.object({
  jobPosition: z.string().min(1),
  jobRequirements: z.string().min(1),
  jobResponsibilities: z.string().min(1),
});

type InputBodyType = z.infer<typeof InputBodySchema>;

export async function POST(req: Request) {
  const request: InputBodyType = await req.json();
  const parsedResult = InputBodySchema.safeParse(request);

  if (!parsedResult.success) {
    return Response.json(
      { data: null, error: parsedResult?.error },
      { status: 500 },
    );
  }

  const questions = await getQuestionsModel(parsedResult.data);

  const id = await createInterview(parsedResult.data, questions);

  return Response.json({ data: JSON.stringify(id) });
}

export async function GET() {
  try {
    const data = await getAllInterviews();

    return Response.json({ data });
  } catch (error) {
    return Response.json(
      { error: `Error fetching interviews, ${String(error)}` },
      { status: 500 },
    );
  }
}
