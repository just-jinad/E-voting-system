import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='w-full h-screen text-dark'>
      <div className='bg-[#F3F2C] p-10 w-full h-full'>
        <p className='text-[#5CB29D] text-3xl text-dark'>E-ChoiceNG</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 h-full'>
          <div className='flex flex-col justify-center'>
            <p className='text-7xl mb-4 text-dark'>Revolutionize your voting experience now</p>
            <br />
            <br />
            <p className='mb-4 text-dark'>E-ChoiceNG empowers citizens to embrace the digital age, making voting more efficient and engaging than ever before.<Link href="/homepage" className='border hover:border-b-2 border-gray-500'>Know more ←</Link> </p>
            <Link href="/registration"  className='bg-[#055052] w-40 py-2 px-4 rounded-3xl text-white'>Get Started</Link>
          </div>
          <div className='flex justify-center items-center'>
            <Image width={100} className='w-full' height={100} src="/Group 1000001636.svg" alt="Voting illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
