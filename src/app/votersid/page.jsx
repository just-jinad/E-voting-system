"use client";
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const url = "https://e-voting-system-server.onrender.com/api/users/login";

const Page = () => {
  const [voterId, setVoterId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    setVoterId(e.target.value);
  };

  const handleSubmit = () => {
    axios.post(url, { voterID:voterId })
      .then((response) => {
        console.log(response);
        setErrorMessage(''); // Clear error message on successful response
        setSuccessMessage('Login successful!'); // Set success message
        setTimeout(() => {
          router.push('/votingpanel'); // Route to /candidates on successful login
        }, 1000); // Delay to show success message
      })
      .catch((err) => {
        console.log(err);
        setSuccessMessage(''); // Clear success message on error
        setErrorMessage('Invalid ID details: ' + (err.response?.data?.message || 'Number must be 11 digits'));
      });
  };

  return (
    <>
      <div>
        <div className='p-5'>
          <p className='text-[#2A9D8F] text-3xl'>E-ChoiceNG</p>
        </div>
        <div className='md:w-2/6 p-5 mx-auto mt-20'>
          <div className='text-center'>
            <p className='text-4xl'>Voter’s Id</p>
            <p>Welcome back! Please enter your Voter ID.</p>
          </div>
          <br />
          <div>
            <div className="mb-6">
              <label htmlFor="large-input" className="block mb-2 text-sm font-medium">Voter Id</label>
              <input
                type="text"
                placeholder='e.g 11111011110'
                id="large-input"
                className="block w-full p-3 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500"
                value={voterId}
                onChange={handleInputChange}
              />
              {errorMessage && <p className='text-red-500 pt-2'>{errorMessage}</p>}
              {successMessage && <p className='text-green-500 pt-2'>{successMessage}</p>}
            </div>
            <button
              type="button"
              className="w-full focus:outline-none text-white bg-[#004652] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
              onClick={handleSubmit}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
