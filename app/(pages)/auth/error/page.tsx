import { LoginPageError } from '@/components/Auth/LoginPageError';
import { Heading } from '@/components/common/Heading';

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <Heading title='Error Page' />
      <p>Your credentials are incorrect. Please enter correct credentials.</p>
      <LoginPageError />
    </div>
  );
};

export default LoginPage;
