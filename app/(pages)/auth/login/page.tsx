import { LoginPageForm } from '@/components/Auth/LoginPageForm';
import { Heading } from '@/components/common/Heading';

const LoginPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ redirectUri?: string }>;
}) => {
  const { redirectUri } = await searchParams;
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <Heading title='Login Page' />
      <p>Please enter your credentials to log in.</p>
      <LoginPageForm redirect={redirectUri} />
    </div>
  );
};

export default LoginPage;
