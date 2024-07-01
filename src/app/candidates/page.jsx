"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/homepage/Navbar";
import Footer from "../components/homepage/Footer";
import { useRouter } from "next/navigation";
import Loader from "@/loader/loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Page() {
  const [parties, setParties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [confirmVote, setConfirmVote] = useState(null); // For vote confirmation modal
  const [message, setMessage] = useState("");
  const [votedParty, setVotedParty] = useState(null);
  const router = useRouter();

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
        toast.success("Voted successfully!", {
          position: "top-center",
        });
        setTimeout(() => {
          router.push("/admin_dashboard");
        }, 2000);
      } else {
        setMessage("Failed to vote. Please try again later.");
        toast.error("Failed to vote. Please try again later.");
      }
    } catch (error) {
      console.error("Error voting:", error.response.data.message);
      setMessage(error.response.data.message);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div>
        <Navbar />
        <div>
          <div className="text-center m-10">
            <p className="text-green-500">Eligible Candidates</p>
            <p className="text-4xl font-semibold">Candidates</p>
            <p>Vote for the candidates of your choice</p>
          </div>
          <div className="text-center text-2xl text-red-700 mb-3 mt-1">
            {message && <p>{message}</p>}
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center px-4">
              {parties.map((party) => (
               <div
               key={party.id}
               className="card relative grid w-full max-w-[20rem] flex flex-col items-center justify-between overflow-hidden bg-clip-border text-center text-black mx-auto shadow-lg rounded-lg"
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
               <div className="p-6 bg-white w-full flex flex-col justify-between items-center flex-grow">
                 <div className="text-start w-full flex-grow">
                   <p className="text-xl font-semibold mt-2 mb-3">{party.candidate}</p>
                   <p className="text-xl font-semibold mt-3 mb-3">{party.name}</p>
                   <p className="text-black">{party.description}</p>
                 </div>
                 <button
                   className={`mt-4 w-full px-4 py-2 rounded-lg ${
                     votedParty === party._id
                       ? "bg-gray-500 text-white cursor-not-allowed"
                       : "bg-green-500 text-white hover:bg-green-600"
                   }`}
                   onClick={() => setConfirmVote(party._id)}
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
          <div className="text-center mt-10">
            <button
              className="bg-green-800 text-white mb-10 px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              onClick={() => router.push("/admin_dashboard")}
            >
              View Votes
            </button>
          </div>
        </div>
      </div>
      {confirmVote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Confirm Your Vote</h2>
            <p>Are you sure you want to vote for this party?</p>
            <div className="flex justify-end mt-6">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
                onClick={() => setConfirmVote(null)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={() => {
                  voteForParty(confirmVote);
                  setConfirmVote(null);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Page;
