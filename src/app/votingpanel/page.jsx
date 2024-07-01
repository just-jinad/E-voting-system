"use client";

import { useState } from "react";
import Navbar from "../components/homepage/Navbar";
import Footer from "../components/homepage/Footer";
import Link from "next/link";

const Page = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <>
      <Navbar />
      <div className=" mr-12 ml-12 h-screen">
        <div className="mb-5 mt-20">
          <h3 className="font-bold text-xl text-start text-black">
            Available Elections
          </h3>
          <p className="text-sm text-black text-start">
            This are Currently the Lists of Available Elections
          </p>
        </div>

        <div className=" ">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400 md:w-80 lg:w-full"
          >
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                aria-expanded={openAccordion === 1}
                onClick={() => toggleAccordion(1)}
                aria-controls="accordion-flush-body-1"
              >
                <div className="flex justify-between gap-3">
                  <p className="text-2xl ">Current Election</p>
                  <p className="text-sm mt-2 text-teal-500">
                    Presidential Election
                  </p>
                  <Link href={"/candidates"}>
                    <p className="text-sm mt-2 text-teal-500">Vote</p>
                  </Link>
                </div>
                <svg
                  className={`w-3 h-3 transform ${
                    openAccordion === 1 ? "rotate-180" : ""
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              className={`${openAccordion === 1 ? "" : "hidden"}`}
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The presidential election in Nigeria determines the President
                  of the country, who serves as both the head of state and the
                  head of government. The President is elected for a four-year
                  term and can serve a maximum of two terms
                </p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                aria-expanded={openAccordion === 2}
                onClick={() => toggleAccordion(2)}
                aria-controls="accordion-flush-body-2"
              >
                <span>
                  {" "}
                  <div className="flex justify-between gap-3">
                    <p className="text-xl ">Upcoming Election</p>
                    <p className="text-sm mt-2 text-yellow-600">Governorship</p>
                  </div>{" "}
                </span>
                <svg
                  className={`w-3 h-3 transform ${
                    openAccordion === 2 ? "rotate-180" : ""
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-2"
              className={`${openAccordion === 2 ? "" : "hidden"}`}
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Governorship elections are held in each of Nigeria's 36 states
                  to elect the governor, who serves as the head of the state's
                  executive branch. Governors are also elected for four-year
                  terms and can serve a maximum of two terms.
                </p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                aria-expanded={openAccordion === 3}
                onClick={() => toggleAccordion(3)}
                aria-controls="accordion-flush-body-3"
              >
                <span>
                  {" "}
                  <div className="flex justify-between gap-3">
                    <p className="text-xl ">Upcoming Election</p>
                    <p className="text-sm mt-2 text-yellow-600">
                      Local Government
                    </p>
                  </div>{" "}
                </span>
                <svg
                  className={`w-3 h-3 transform ${
                    openAccordion === 3 ? "rotate-180" : ""
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-3"
              className={`${openAccordion === 3 ? "" : "hidden"}`}
              aria-labelledby="accordion-flush-heading-3"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Local government elections are held to elect officials at the
                  local government area (LGA) level. Nigeria is divided into 774
                  LGAs, each governed by a local council. These elections
                  determine the chairman and councilors of the local councils.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
