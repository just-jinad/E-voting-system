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
        console.error("Error fetching data:", error.response);
        setMessage("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const voteForParty = () => {
    // implement your voteForParty logic here
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
            <Loader /> // Show the loader when data is being fetched
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
              {parties.map((party, index) => (
                <div
                  key={index}
                  className="card relative grid h-[30rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden bg-clip-border text-center text-gray-700 mx-auto"
                >
                  <div className="m-5 rounded-sm absolute inset-0 h-full w-full overflow-hidden bg-transparent">
                    <div className="absolute inset-0 bg-black opacity-100"></div>{" "}
                    {/* Black overlay */}
                    <Image
                      src={party.partyPicture}
                      alt={`${party.partyPicture} image`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="relative p-6 px-6 py-14 md:px-12">
                    <div>
                      <Image
                        className="top-0"
                        width={80}
                        height={80}
                        src={party.partyIcon}
                        alt="partyIcon"
                      />
                      <div className="mt-40 mb-6 block font-sans tracking-normal text-white">
                        <div className="text-start">
                          <p className="text-xl">{party.name}</p>
                          <p>{party.description}</p>
                          <Image
                            onClick={voteForParty}
                            width={50}
                            height={50}
                            src="/icons/vote.svg"
                            alt="vote icon"
                          />
                        </div>
                      </div>
                    </div>
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
