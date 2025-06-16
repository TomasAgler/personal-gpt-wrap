import { LoginPageError } from '@/components/Auth/LoginPageError';
import { Heading } from '@/components/common/Heading';

const LoginErrorPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ redirectUri?: string }>;
}) => {
  const { redirectUri } = await searchParams;
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <Heading title='Error Page' />
      <p>Your credentials are incorrect. Please enter correct credentials.</p>
      <LoginPageError redirect={redirectUri} />
    </div>
  );
};

export default LoginErrorPage;
