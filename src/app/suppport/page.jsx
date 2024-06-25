"use client";
import React from "react";
import Navbar from "../components/homepage/Navbar";
import Footer from "../components/homepage/Footer";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="text-center mt-10 p-4">
        <h6 className="font-bold text-dark text-sm">FAQs</h6>
        <h2 className="font-bold text-dark text-2xl">Ask us anything</h2>
        <p className="text-sm">
          Need something created up? Here are our frequently asked questions
        </p>

        <form class="max-w-md mx-auto mt-10">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="How does evoting work..."
              required
            />
          </div>
        </form>
      </section>

      <section className="bg-blue-50 mt-10 py-5 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:hover:bg-blue-200"
            >
               <Image
              src={'/refresh-ccw.png'}
              alt="icon"
              width={20}
              height={20}
              />
              <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight">
                What are the requirements for winning the presidential election?
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Majority of votes nationwide. At least 25% of votes in
                two-thirds of the states and the FCT.
              </p>
            </a>
          </div>

          <div>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:hover:bg-blue-200"
            >
                <Image
              src={'/Icon (1).png'}
              alt="icon"
              width={20}
              height={20}
              />
              <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight">
                How often are governorship elections held?
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Every four years.
              </p>
            </a>
          </div>

          <div>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:hover:bg-blue-200"
            >
              <Image
              src={'/Icon.png'}
              alt="icon"
              width={20}
              height={20}
              />
              <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight">
                What is the role of INEC?{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Organizes federal and state elections. Maintains voter registers
                and regulates political parties.
              </p>
            </a>
          </div>

          <div>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:hover:bg-blue-200"
            >
               <Image
              src={'/slash.png'}
              alt="icon"
              width={20}
              height={20}
              />
              <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight">
                What are the main election challenges in Nigeria?{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Electoral violence, logistics, fraud. Addressed by security
                measures, logistical improvements, stricter laws.
              </p>
            </a>
          </div>

          <div>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:hover:bg-blue-200"
            >
                 <Image
              src={'/Icon.png'}
              alt="icon"
              width={20}
              height={20}
              />
              <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight">
                How are local government elections conducted?{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                State commissions manage elections. Parties select candidates;
                simple majority voting.
              </p>
            </a>
          </div>

          <div>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:hover:bg-blue-200"
            >
                 <Image
              src={'/Icon.png'}
              alt="icon"
              width={20}
              height={20}
              />
              <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight">
                What measures ensure election credibility?{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Electronic voting, biometric verification, election observers,
                voter education.
              </p>
            </a>
          </div>
        </div>

        <div className="w-full bg-white mt-14 p-5 rounded-xl">
          <h6 className="font-bold">Still got questions?</h6>
          <div className="flex  justify-between ">
            <p>
              Can't find the answers you are looking for? reach out to our team.
            </p>
            <button className="bg-teal-600 font-bold text-white rounded p-3 text-sm">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 mt-10 py-5 px-5 text-center mb-14">
        <h2 className="font-bold text-dark text-2xl mb-3">
          Sign up for our news letter
        </h2>
        <p className="text-sm mb-3">
          Be the first to know about releases and industry news and insights
        </p>

        <form class="flex items-center max-w-lg mx-auto">
          <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <input
              type="text"
              id="voice-search"
              class="b text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
            <button
              type="button"
              class="absolute inset-y-0 end-0 flex items-center pe-3"
            ></button>
          </div>
          <button
            type="submit"
            class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-3">
          We care about your data in our{" "}
          <span className="underline text-start ">Privacy policy</span>
        </p>
      </section>

      <Footer />
    </>
  );
};

export default page;
