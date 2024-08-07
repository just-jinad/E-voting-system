"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/loader/loader"; // Import the Loader component
import { toast } from "react-toastify";

// const url = "http://localhost:5000/api/users/login";
const url = "https://e-voting-system-server.onrender.com/api/users/login";

const Page = () => {
  const [nin, setNin] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const router = useRouter();

  const handleInputChange = (e) => {
    setNin(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(url, { NIN: nin })
      .then((response) => {
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem("userToken", JSON.stringify(token));
        localStorage.setItem("userDetails", JSON.stringify(user));
        toast.success("ID confirmed successfully", {
          position:'top-center',
          hideProgressBar: false,
        })
        // setMessage("Login successful!"); // Set success message
        setLoading(false); // Hide loader
        setTimeout(() => {
          router.push("/votingpanel"); // Route to /candidates on successful login
        }, 3000); // Delay to show success message
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); 
        toast.error( "Invalid ID details ", {
            position:'top-center',
            
          })
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
          <p className="text-[#055052] text-3xl">E-ChoiceNG</p>
        </div>
        <div className="md:w-2/6 p-5 mx-auto mt-20">
          <div className="text-center">
            <p className="text-4xl">NIN</p>
            <p> Please enter your NIN details.</p>
          </div>
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
          {loading && <Loader />} {/* Show loader if loading */}
          <div>
            <div className="mt-5">
              {/* <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium"
              >
                NIN Number
              </label> */}
              <input
                type="text"
                placeholder="e.g 11111011110"
                id="large-input"
                className="block w-full p-3 border border-gray-300 rounded-lg text-base "
                value={nin}
                onChange={handleInputChange}
                disabled={loading} // Disable input when loading
              />
            </div>
            <button
              type="button"
              className="w-full mt-5 focus:outline-none text-white bg-[#004652] hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
              onClick={handleSubmit}
              disabled={loading} // Disable button when loading
            >
              Confirm NIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
