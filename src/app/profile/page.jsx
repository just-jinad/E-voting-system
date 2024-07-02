"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [userDetails, setUserDetails] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    console.log(user);
    if (user) {
      setUserDetails(user);
    } else {
      router.push("/registration"); 
    }
  }, [router]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Full Name</h2>
          <p className="text-gray-700">{userDetails.fullName}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">NIN</h2>
          <p className="text-gray-700">{userDetails.NIN}</p>
          <p className="text-gray-700">{userDetails.dateOfBirth}</p>
          <p className="text-gray-700">{userDetails.maritalStatus}</p>
          <p className="text-gray-700">{userDetails.gender}</p>
          <p className="text-gray-700">{userDetails.contactInfo}</p>
        </div>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default Page;
