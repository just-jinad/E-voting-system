"use client";
import Link from 'next/link';
import { useState } from 'react';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='p-5'>
        <p className='text-[#2A9D8F] text-3xl'>E-ChoiceNG</p>
      </div>
      <div className=' md:w-2/6 p-5 mx-auto mt-20'>

    <div className="m-1 relative ">
    <div>
    <p className='text-4xl font-semibold text-center'>Sign in</p>
    </div>
    <br />
    <div>
      <button
        id="hs-dropdown-hover-event"
        type="button"
        className="w-full hs-dropdown-toggle py-3 justify-center px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        onClick={toggleDropdown}
      >
        Identification Method
        <svg
          className={`hs-dropdown-open:rotate-180 size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className={`absolute left-0 top-full ${isOpen ? 'opacity-100' : 'opacity-0 hidden'} transition-[opacity,margin] duration-300 min-w-full  bg-white drop-shadow-md md p-2 `}
        aria-labelledby="hs-dropdown-hover-event"
      >
        <Link
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          href="/nin"
        >
          NiN
        </Link>
        <Link
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:outline-none focus:bg-gray-100 "
          href="/votersid"
        >
          Voters Card Id
        </Link>
       
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Page;
