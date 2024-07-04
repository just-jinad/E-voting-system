"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const isLoggedIn = localStorage.getItem("userToken");

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userDetails");
      localStorage.removeItem("votedParty");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const openLogoutModal = () => {
    setShowLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl text-[#055052]">
              E-ChoiceNG's
            </span>
          </a>
          <button
            onClick={handleToggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:items-center md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:p-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 mt-1 rounded md:p-0 text-gray-700 hover:text-[#055052] transition duration-300"
                  aria-current="page"
                >
                  <Link href="/">Home</Link>
                </a>
              </li>
              <li>
                <Link
                  href="/FAQs"
                  className="block py-2 px-3 mt-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#055052] transition duration-300 md:p-0"
                >
                  FAQs
                </Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#055052] transition duration-300 md:p-0"
                      onClick={openLogoutModal}
                    >
                      {loading ? "Logging out..." : "Log Out"}
                    </a>
                    <p className="block ms-4 py-2 px-3 rounded md:p-1 text-gray-700">
                      Welcome,{" "}
                      {JSON.parse(localStorage.getItem("userDetails")).fullName}
                    </p>
                  </div>
                ) : (
                  <Link href="/registration">
                    <p className="block py-2 px-3 rounded md:p-1 text-white bg-[#055052] hover:bg-[#043e3e] transition duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium">
                      Log In
                    </p>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Confirm Logout</h2>
            <p>Are you sure you want to log out?</p>
            <div className="flex justify-end mt-6">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
                onClick={closeLogoutModal}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => {
                  handleLogout();
                  closeLogoutModal();
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
