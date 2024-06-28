import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='text-center'>
        <Image className='mx-auto' width={400} height={400} src="/icons/image 1 (1).svg" alt="Success Image" />
        <div>
          <p className='text-center mt-4'>
            Vote Cancelled<br />
            Successfully casted your vote
          </p>
          <p className='text-4xl font-semibold'>Bola Ahamed Tinubu</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
