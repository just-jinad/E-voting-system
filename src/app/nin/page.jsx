"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const url = "http://localhost:5000/api/users/login";

const Page = () => {
  const [nin, setNin] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleInputChange = (e) => {
    setNin(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .post(url, { NIN: nin })
      .then((response) => {
        const token = response.data.token;
        const user = response.data.user;
        console.log(response);
        localStorage.setItem("userToken", JSON.stringify(token));
        localStorage.setItem("userDetails", JSON.stringify(user));
        setMessage("Login successful!"); // Set success message
        setTimeout(() => {
          router.push("/votingpanel"); // Route to /candidates on successful login
        }, 1000); // Delay to show success message
      })
      .catch((err) => {
        console.log(err);
        setMessage(
          "Invalid ID details: " +
            (err.response?.data?.message || "Number must be 11 digits")
        );
      });
  };

  return (
    <>
      <div>
        <div className="p-5">
          <p className="text-[#2A9D8F] text-3xl">E-ChoiceNG</p>
        </div>
        <div className="md:w-2/6 p-5 mx-auto mt-20">
          <div className="text-center">
            <p className="text-4xl">NiN</p>
            <p>Welcome back! Please enter your NiN details.</p>
          </div>
          {/* <br /> */}
          {message && (
            <p
              className={
                message.includes("Login successful!")
                  ? "text-green-500 text-center text-2xl mt-3"
                  : "text-red-500 text-center text-2xl mt-3"
              }
            >
              {message}
            </p>
          )}
          <div>
            <div className="mt-5">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium"
              >
                NIN Number
              </label>
              <input
                type="text"
                placeholder="e.g 11111011110"
                id="large-input"
                className="block w-full p-3 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500"
                value={nin}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="button"
              className="w-full mt-5 focus:outline-none text-white bg-[#004652] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
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
