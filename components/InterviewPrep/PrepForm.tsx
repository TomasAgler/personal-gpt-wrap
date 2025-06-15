'use client';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

export const PrepForm = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    jobPosition: '',
    jobRequirements: '',
    jobResponsibilities: '',
  });
  const isPending = useRef(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    isPending.current = true;
    fetch('/api/interview-prep', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((data) => {
        router.push(`/interview-prep/${data}`);
      })
      .catch((error) => {
        setError(['Failed to create interview prep:', error].join(' '));
      })
      .finally(() => {
        isPending.current = false;
      });
  };

  return (
    <div className='flex flex-col md:flex-2/3 gap-6'>
      <h2 className='text-2xl font-semibold'>Create new interview prep</h2>
      <form
        className='flex flex-col gap-4 w-2xl max-w-2xl'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          autoComplete='new-off'
          name='jobPosition'
          placeholder='Job Position'
          className='flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          disabled={isPending.current}
          value={formState.jobPosition}
          onChange={(e) =>
            setFormState({ ...formState, jobPosition: e.target.value })
          }
        />
        <textarea
          name='jobRequirements'
          placeholder='Job Requirements'
          className='flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows={4}
          disabled={isPending.current}
          value={formState.jobRequirements}
          onChange={(e) =>
            setFormState({ ...formState, jobRequirements: e.target.value })
          }
        />
        <textarea
          name='jobResponsibilities'
          placeholder='Job Responsibilities'
          className='flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows={4}
          disabled={isPending.current}
          value={formState.jobResponsibilities}
          onChange={(e) =>
            setFormState({ ...formState, jobResponsibilities: e.target.value })
          }
        />
        <button
          type='submit'
          className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 hover:cursor-pointer'
          disabled={isPending.current}
        >
          {isPending ? 'Loading...' : 'Send'}
        </button>
        {error && <div className='text-red-500 mt-2'>{error}</div>}
      </form>
    </div>
  );
};
