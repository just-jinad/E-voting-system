"use client"
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const SignInPage = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaVerified) {
      console.log('Form submitted:', formValues);
      // Further processing like sending data to server or handling login logic
    } else {
      alert("Please verify that you are not a robot.");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className='p-5'>
        <p className='text-[#2A9D8F] text-3xl'>E-ChoiceNG</p>
      </div>

      {/* Sign-in Form */}
      <div className='md:w-2/6 p-5 mx-auto mt-20'>
        <p className='font-semibold text-2xl text-center m-3'>Sign In</p>
        
        <form onSubmit={handleSubmit}>
          <div className="relative mt-5">
            <input 
              type="email" 
              id="email" 
              value={formValues.email} 
              onChange={handleChange}
              className="block border-gray-300 border px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded border-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " 
            />
            <label 
              htmlFor="email" 
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-[#2A9D8F] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              E-Mail
            </label>
          </div>

          <div className="relative mt-5">
            <input 
              type="password" 
              id="password" 
              value={formValues.password} 
              onChange={handleChange}
              className="block border-gray-300 border px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded border-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " 
            />
            <label 
              htmlFor="password" 
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-[#2A9D8F] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Password
            </label>
          </div>

          <div className="mt-5">
            <ReCAPTCHA
              sitekey="6LfEPeopAAAAAGiEcNXKyY-922faWvqjbcFdo-6j"
              onChange={handleCaptchaChange}
            />
          </div>

          <button type="submit" className='bg-[#055052] p-2 mt-6 rounded text-white w-full'>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
