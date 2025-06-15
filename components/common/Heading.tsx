export const Heading = ({ title }: { title: string }) => {
  return (
    <div className='flex justify-center pb-16'>
      <h1 className='text-3xl font-bold'>{title}</h1>
    </div>
  );
};
