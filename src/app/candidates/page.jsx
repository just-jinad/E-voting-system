"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../components/homepage/Navbar";
import Footer from "../components/homepage/Footer";
import Loader from "@/loader/loader";

function Page() {
  const [parties, setParties] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [votedParty, setVotedParty] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userToken"));

    if (!token) {
      console.error("No user token found");
      router.push("/registration");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/api/parties/parties",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
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

  const voteForParty = (partyId) => {
    setVotedParty(partyId);
    // Add your voting logic here
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
          <div className="text-center text-2xl text-red-700">
            {message && <p>{message}</p>}
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 justify-center">
              {parties.map((party) => (
                <div
                  key={party.id}
                  className="card relative grid h-[30rem] w-full max-w-[20rem] flex-col items-center justify-center overflow-hidden bg-clip-border text-center text-gray-700 mx-auto"
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
                  <div className="p-6 bg-white rounded-b-lg">
                    <div className="text-start">
                      <p className="text-xl font-semibold">{party.name}</p>
                      <p className="text-gray-600">{party.description}</p>
                    </div>
                  </div>
                  <button
                    className={`mb-8 px-4 py-2 bg-gray-500 text-white-500  rounded-lg ${
                      votedParty && votedParty !== party.id
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={() => voteForParty(party.id)}
                    disabled={votedParty && votedParty !== party.id}
                  >
                    Vote
                  </button>
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
