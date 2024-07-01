"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/homepage/Navbar";
import Loader from "@/loader/loader";
import Image from "next/image";
const Page = () => {
  const [voteData, setVoteData] = useState([null]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVoteCounts = async () => {
      // const token = JSON.parse(localStorage.getItem("userToken") );
      const token = JSON.parse(localStorage.getItem("userToken")) || null;
      try {
        const response = await axios.get(
          "https://e-voting-system-server.onrender.com/api/parties/parties",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Send the token in the Authorization header
            },
          }
        );
        setVoteData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching vote counts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVoteCounts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 border-2 rounded-xl mt-20">
        {loading ? (
          <div className="text-center">
            <Loader />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full bg-white  text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="py-2 px-4">Candidate</th>
                  <th className="py-2 px-4">Party</th>
                  <th className="py-2 px-4">Number of Votes</th>
                </tr>
              </thead>
              <tbody>
                {voteData &&
                  voteData.map((party, index) => (
                    <tr key={index} className="border-t">
                    
                      <td className="py-2 px-4">{party.candidate}</td>
                      <td className="py-2 px-4">{party.name}</td>
                      <td className="py-2 px-4">{party.votes}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
