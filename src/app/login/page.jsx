"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import axios from "axios";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    // Basic validation
    const emailOrPhoneRegex = /^(?:\d{10}|\S+@\S+\.\S+)$/; // Simple regex for email or 10-digit phone number
    if (!emailOrPhoneRegex.test(email)) {
      setError("Please enter a valid email or phone number");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      const response = await axios.post(
        "https://e-voting-system-server.onrender.com/api/users/login",
        { email, password },
        { headers: { "Content-Type": "appli cation/json" } }
      );

      const data = response.data;
      console.log(response);
    
      if (data.success) {
    
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "An error occurred during login");
    }
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col lg:flex-row mt-24 justify-center lg:items-start gap-4">
        <div className="mb-10 mt-5 hidden md:flex lg:mb-0">
          <Image
            src="/login 1.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>

        <div className="sectionTwo max-w-lg lg:max-w-full p-5">
          {/* <h4 className="text-xl font-bold text-green-600 text-center mb-3">Login</h4> */}

          {error && <div className="text-red-500 mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="font-bold text-green-400" htmlFor="emailOrPhone">
              Email or Phone
            </label>
            <input
              id="emailOrPhone"
              name="emailOrPhone"
              className="border p-2 rounded-xl w-full"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="font-bold text-green-400" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              className="border p-2 rounded-xl w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
              {" "}
              <Link href={"/"} className="text-green-500 hover:underline">
                Forgot password?
              </Link>
              <Link
                href={"/registration"}
                className="text-green-500 hover:underline"
              >
                Not a user? Register Now
              </Link>
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;