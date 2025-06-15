import { ChildrenFC } from '@/types/common';

export const LayoutWrapper: ChildrenFC = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen lg:w-7xl lg:mx-auto'>
      <main className='flex-1 p-4 md:p-8'>{children}</main>
    </div>
  );
};
