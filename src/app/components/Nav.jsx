"use client";

import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-green-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              E-voting
            </span>
          </a>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">

              <Link  class="text-sm  text-gray-500 dark:text-white hover:underline" href="/registration">
            Sign up
              </Link>
          
        
              <Link href="/login"  class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
              Login
              </Link>
          
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-green-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  className="text-gray-900 dark:text-white hover:underline"
                  href="/personalinfo"
                >
                  Personal Info
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-900 dark:text-white hover:underline"
                  href="/election"
                >
                  Elections
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
              href="/votingpanel" 
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  <button className="w-full md:w-10 p-1 bg-green-400 rounded">
                   
                    Vote
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
