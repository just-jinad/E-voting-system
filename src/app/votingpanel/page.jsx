"use client";

import { useState } from "react";
import Navbar from "../components/homepage/Navbar";
import Footer from "../components/homepage/Footer";

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
                <div className=" mr-12 ml-12 "> 
                <div className="mb-5 mt-20">
                <h3 className="font-bold text-xl text-start">Available Elections</h3>
                <p className="text-sm text-start">This are Currently the Lists of Available Elections</p>
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
                                    <p className="text-sm mt-2 text-teal-500">Presidential Election</p>
                                    <p className="text-sm mt-2 text-teal-500">Vote</p>
                                </div>          
                                <svg
                                    className={`w-3 h-3 transform ${openAccordion === 1 ? 'rotate-180' : ''} shrink-0`}
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
                            className={`${openAccordion === 1 ? '' : 'hidden'}`}
                            aria-labelledby="accordion-flush-heading-1"
                        >
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Flowbite is an open-source library of interactive components
                                    built on top of Tailwind CSS including buttons, dropdowns,
                                    modals, navbars, and more.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Check out this guide to learn how to{" "}
                                    <a
                                        href="/docs/getting-started/introduction/"
                                        className="text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        get started
                                    </a>{" "}
                                    and start developing websites even faster with components on
                                    top of Tailwind CSS.
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
                                <span>Is there a Figma file available?</span>
                                <svg
                                    className={`w-3 h-3 transform ${openAccordion === 2 ? 'rotate-180' : ''} shrink-0`}
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
                            className={`${openAccordion === 2 ? '' : 'hidden'}`}
                            aria-labelledby="accordion-flush-heading-2"
                        >
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Flowbite is first conceptualized and designed using the Figma
                                    software so everything you see in the library has a design
                                    equivalent in our Figma file.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Check out the{" "}
                                    <a
                                        href="https://flowbite.com/figma/"
                                        className="text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Figma design system
                                    </a>{" "}
                                    based on the utility classes from Tailwind CSS and components
                                    from Flowbite.
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
                                <span>What are the differences between Flowbite and Tailwind UI?</span>
                                <svg
                                    className={`w-3 h-3 transform ${openAccordion === 3 ? 'rotate-180' : ''} shrink-0`}
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
                            className={`${openAccordion === 3 ? '' : 'hidden'}`}
                            aria-labelledby="accordion-flush-heading-3"
                        >
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    The main difference is that the core components from Flowbite
                                    are open source under the MIT license, whereas Tailwind UI is
                                    a paid product. Another difference is that Flowbite relies on
                                    smaller and standalone components, whereas Tailwind UI offers
                                    sections of pages.
                                </p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    However, we actually recommend using both Flowbite, Flowbite
                                    Pro, and even Tailwind UI as there is no technical reason
                                    stopping you from using the best of two worlds.
                                </p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Learn more about these technologies:
                                </p>
                                <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                    <li>
                                        <a
                                            href="https://flowbite.com/pro/"
                                            className="text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Flowbite Pro
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://tailwindui.com/"
                                            rel="nofollow"
                                            className="text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Tailwind UI
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>     
           
            </div>

            <Footer/>
        </>
    );
};

export default Page;
