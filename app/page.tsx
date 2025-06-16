import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* CTA Card for interview prep */}
      <div className='bg-blue-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-10'>
        <h2 className='text-2xl font-bold text-blue-900 mb-4'>
          Prepare for Your Next Interview
        </h2>
        <p className='text-gray-700 mb-4'>
          Join our interview preparation platform to practice coding questions,
          get feedback, and improve your skills.
        </p>
        <Link
          href='/interview-prep'
          className='inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition-colors'
        >
          Start Preparing Now
        </Link>
      </div>
    </div>
  );
}
