"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Page = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    dob: '',
    address: '',
    governmentID: '',
    email: '',
    phoneNumber: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formValues]);
    console.log([...submittedData, formValues]);
    setFormValues({
      fullName: '',
      dob: '',
      address: '',
      governmentID: '',
      email: '',
      phoneNumber: '',
      userName: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <>
      <div>
        {/* Navbar */}
        <div className='p-5'>
          <p className='text-[#2A9D8F] text-3xl'>E-ChoiceNG</p>
        </div>
        
        {/* Form */}
        <div className='md:w-2/6 p-5 mx-auto mt-20'>
          <p className='font-semibold text-2xl text-center m-3'>Create an account</p>
          
          {/* Form Fields */}
          <form onSubmit={handleSubmit}>
            {[
              { label: 'Full Name', id: 'fullName', type: 'text' },
              { label: 'Date of Birth', id: 'dob', type: 'date' },
              { label: 'Address', id: 'address', type: 'text' },
              { label: 'Government ID', id: 'governmentID', type: 'text' },
              { label: 'E-Mail', id: 'email', type: 'email' },
              { label: 'Phone Number', id: 'phoneNumber', type: 'tel' },
              { label: 'User Name', id: 'userName', type: 'text' },
              { label: 'Password', id: 'password', type: 'password' },
              { label: 'Confirm Password', id: 'confirmPassword', type: 'password' },
            ].map((field, index) => (
              <div key={index} className="relative mt-5">
                <input 
                  type={field.type} 
                  id={field.id} 
                  value={formValues[field.id]} 
                  onChange={handleChange}
                  className="block border-gray-300 border px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded border-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                  placeholder=" " 
                />
                <label 
                  htmlFor={field.id} 
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-[#2A9D8F] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  {field.label}
                </label>
              </div>
            ))}
            <button type="submit" className='bg-[#055052] p-2 mt-6 rounded text-white w-full'>Create Account</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
