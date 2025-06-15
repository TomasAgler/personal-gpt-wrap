'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export const LoginPageError = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Cookies.remove('ai-passkey');
    router.push('/auth/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        className='px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 hover:cursor-pointer'
        type='submit'
      >
        Delete current passkey
      </button>
    </form>
  );
};
