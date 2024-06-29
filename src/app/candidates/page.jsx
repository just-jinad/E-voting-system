"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/homepage/Navbar";
import Footer from "../components/homepage/Footer";
import { useRouter } from "next/navigation";
import Loader from "@/loader/loader";

function Page() {
  const [parties, setParties] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [votedParty, setVotedParty] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const savedVotedParty = localStorage.getItem("votedParty");

    if (!token) {
      console.error("No user token found");
      router.push("/registration");
      return;
    }

    if (savedVotedParty) {
      setVotedParty(savedVotedParty);
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://e-voting-system-server.onrender.com/api/parties/parties",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data && response.data.length > 0) {
          setParties(response.data);
        } else {
          setMessage("No Party data available");
        }
      } catch (error) {
        console.log(error);
        console.error("Error fetching data:", error.response);
        setMessage("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const voteForParty = async (partyId) => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const username = JSON.parse(localStorage.getItem("userDetails"));
    console.log(username.fullName);

    try {
      const response = await axios.post(
        "https://e-voting-system-server.onrender.com/api/parties/vote",
        {
          partyId: partyId,
          fullName: username.fullName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setVotedParty(partyId);
        localStorage.setItem("votedParty", partyId);
        setTimeout(() => {
          router.push("/admin_dashboard");
        }, 2000);
      } else {
        setMessage("Failed to vote. Please try again later.");
      }
    } catch (error) {
      console.error("Error voting:", error.response.data.message);
      setMessage(error.response.data.message);
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div>
          <div className="text-center m-10">
            <p className="text-green-200">Eligible Candidates</p>
            <p className="text-4xl font-semibold">Candidates</p>
            <p>Vote for the candidates Of your Choice</p>
          </div>
          <div className="text-center text-2xl text-red-700 mb-3 mt-1">
            {message && <p>{message}</p>}
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
              {parties.map((party) => (
                <div
                  key={party.id}
                  className="card relative grid h-[35rem] w-full max-w-[20rem] flex-col items-center justify-between overflow-hidden bg-clip-border text-center text-gray-700 mx-auto"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-transparent">
                    <Image
                      src={party.partyPicture}
                      alt={`${party.partyPicture} image`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6 bg-white w-full flex flex-col items-center">
                    <div className="text-start w-full">
                      <p className="text-xl font-semibold mt-2 mb-3">
                        {party.candidate}
                      </p>
                      <p className="text-xl font-semibold mt-3 mb-3">
                        {party.name}
                      </p>
                      <p className="text-gray-600">{party.description}</p>
                    </div>
                    <button
                      className={`mt-4 w-full px-4 py-2 rounded-lg ${
                        votedParty === party._id
                          ? "bg-gray-500 text-white cursor-not-allowed"
                          : "bg-green-500 text-white"
                      }`}
                      onClick={() => voteForParty(party._id)}
                      disabled={votedParty !== null}
                    >
                      {votedParty === party._id
                        ? "Voted for this party"
                        : votedParty
                        ? "Already voted"
                        : "Vote"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
