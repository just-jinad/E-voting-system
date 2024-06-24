import React from 'react'

const page = () => {
  return (
    <>
      <div>
      <div className='p-5'>
        <p className='text-[#2A9D8F] text-3xl'>E-ChoiceNG</p>
      </div>
      <div className='md:w-2/6 p-5 mx-auto mt-20'>
      <div className='text-center'>
        <p className='text-4xl'>NiN Id</p>
        <p>Welcome back! Please enter your NiN details.</p>
      </div>
      <br />
        <div>
        <div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium ">NIN Number</label>
    <input type="text" placeholder='e.g 11111011110' id="large-input" class="block w-full p-3 border border-gray-300 rounded-lg  text-base focus:ring-blue-500 focus:border-blue-500 "/>
    <p className='text-red-500 pt-2'>Invalid ID details:
    Number must be 11 digit</p>
</div>
<button type="button" className="w-full focus:outline-none text-white bg-[#004652] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Sign in</button>

        </div>
      </div>
      </div>
    </>
  )
}

export default page