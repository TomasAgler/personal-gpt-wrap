## Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

To before deploying, you need to create accounts with [Vercel](https://vercel.com), [Supabase](https://supabase.com) and [OpenAI](https://openai.com).

- Register and get API key from OpenAI at [https://platform.openai.com](https://platform.openai.com).
- Create a new project in Supabase and connect it with Prisma to get the database URL [https://supabase.com/docs/guides/database/prisma](https://supabase.com/docs/guides/database/prisma).

You will need to set up the following environment variables in your Vercel project:

- `DATABASE_URL`: The connection string for your database.
- `OPENAI_API_KEY`: Your OpenAI API key.
- `PASSKEY`: A secret login key for your application.
