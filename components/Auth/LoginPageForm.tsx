'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Cookies from 'js-cookie';

export const LoginPageForm = () => {
  const [passKey, setPassKey] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Cookies.set('ai-passkey', passKey, { expires: 24 * 60 * 60 * 1000 }); // 1 day
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4'>
      <div>
        <input
          className='border border-gray-300 rounded p-2 bg-white text-zinc-900'
          type='text'
          id='passkey'
          name='passkey'
          placeholder='Enter your passkey'
          required
          value={passKey}
          onChange={(e) => setPassKey(e.target.value)}
        />
      </div>
      <button
        className='px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 hover:cursor-pointer'
        type='submit'
      >
        Enter
      </button>
    </form>
  );
};
