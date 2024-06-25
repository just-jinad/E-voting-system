import React from 'react'

const Footer = () => {
  return (
    <>
        <div>
            

<footer className="">
    <div className="w-full   p-4 bg-[#055052] mt-10">
        <div className="sm:items-center">
            <a  className="flex items-center mb-4 sm:mb-0 space-x-3 ">
                <span className="self-center text-2xl text-white">E-ChoiceNG's</span>
            </a>
            <div className='mt-10'>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About Us</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Support's</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Help</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Privacy</a>
                </li>
            </ul>
            </div>
           
        </div>
        <hr className="text-[#7F56D9] bg-[#7F56D9] my-6 " />
        <span className="block text-sm text-gray-500 dark:text-gray-400">© 2024 E-ChoiceNG's. All Rights Reserved.</span>
    </div>
</footer>


        </div>
    </>
  )
}

export default Footer