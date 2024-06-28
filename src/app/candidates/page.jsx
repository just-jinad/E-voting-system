"use client";
import React, { useEffect, useReducer } from 'react';
import Navbar from '../components/homepage/Navbar';
import Image from 'next/image';
import Footer from '../components/homepage/Footer';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Page = () => {
  const url = "https://e-voting-system-server.onrender.com/api/parties/parties";

  useEffect(() => {
   const token = localStorage.getItem('userToken')
    const fetchData = async () => {
      try {
        console.log(token);
        const response = await axios.get(url,{
            headers: {
        Authorization: `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
const router = useRouter()
  const voteForCandidate =()=>{
    router.push("/candidates/success")

  }

  const candidatesList = [
    
        {
          name: "All Progressives Congress (APC)",
          description: "The ruling party in Nigeria, founded in 2013. It advocates for progressivism, social democracy, and economic populism.",
          candidate: "Bola Ahmed Tinubu",
          image:"/image 15.svg",
          icon:"/party_logo/APC-LOGO-17-4-13.jpg"
        },
        {
          name: "People's Democratic Party (PDP)",
          description: "Established in 1998, the PDP is one of the dominant parties in Nigeria, with a centrist ideology focused on social democracy and liberal policies.",
          candidate: "Atiku Abubakar",
          image:"/Candidates/Atiku_Abubakar-2010_(cropped).jpg",
          icon:"/icons/Logo_of_the_Peoples_Democratic_Party_(Nigeria).png"
        },
        {
          name: "Labour Party (LP)",
          description: "The Labour Party emphasizes social justice, workers' rights, and egalitarianism. It advocates for labor issues and the Nigerian workforce.",
          candidate: "Peter Obi",
          image:"/icons/peter obi.jpeg",
          icon:"/icons/labour party.png"
        },
        {
          name: "All Progressives Grand Alliance (APGA)",
          description: "Founded in 2002, APGA focuses on nationalism, decentralization of power, and restructuring the nation, especially influential in southeastern Nigeria.",
          candidate: "Peter Umeadi",
          image:"",
          icon:"/apga.png"
        },
        {
          name: "Social Democratic Party (SDP)",
          description: "Promotes social democracy and advocates for progressive policies and social welfare programs.",
          candidate: "Adewole Adebayo",
          image:"",
          icon:""
        },
        {
          name: "New Nigeria People's Party (NNPP)",
          description: "Provides an alternative to the established parties, focusing on good governance, transparency, and socio-economic development.",
          candidate: "Rabiu Kwankwaso",
          image:"",
          icon:""
        },
        {
          name: "African Democratic Congress (ADC)",
          description: "Formed in 2006, the ADC advocates for democracy, good governance, and socio-economic development, aiming to address issues like corruption and poverty.",
          candidate: "Kachikwu Dumebi",
          image:"",
          icon:""
        },
        {
          name: "Young Progressive Party (YPP)",
          description: "Established in 2017, the YPP focuses on youth empowerment, good governance, and leveraging technology for economic growth, involving young Nigerians in the political process.",
          candidate: "Malik Ado-Ibrahim",
          image:"/party_logo/APC-LOGO-17-4-13.jpg",
          icon:""
        },
        {
          name: "African Action Congress (AAC)",
          description: "Created in 2018 by Omoyele Sowore, the AAC advocates for social democracy, progressivism, and participatory democracy, with a focus on radical change and activism.",
          candidate: "Omoyele Sowore",
          image:"",
          icon:""
        },
        {
          name: "Action Democratic Party (ADP)",
          description: "Formed in 2017, the ADP champions good governance, transparency, and accountability, aiming to address Nigeria's socio-economic challenges through inclusive policies.",
          candidate: "Sani Yabagi Yusuf",
          image:"",
          icon:""
        }
      
    // {
    //   name: "Tinibu Albubarker",
    //   politicalParty: "apc",
    //   icon: "/africancongress.jpeg",
    //   image: "/image 15 (1).svg",
    //   numberOfVoters: []
    // },
    // {
    //   name: "Bola Ahamed Tinubu",
    //   politicalParty: "African Congress",
    //   icon: "/africancongress.jpeg",
    //   image: "/image 15 (1).svg",
    //   numberOfVoters: []
    // },
    // {
    //   name: "Candidate Name",
    //   politicalParty: "Party Name",
    //   icon: "/africancongress.jpeg",
    //   image: "/image 15 (1).svg",
    //   numberOfVoters: []
    // },
  ];

  return (
    <>
      <div>
        <Navbar />
        <div>
          <div className='text-center m-10'>
            <p className='text-green-200'>Eligible Candidates</p>
            <p className='text-4xl font-semibold'>Candidates</p>
            <p>Vote for the candidates Of your Choice</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidatesList.map((details, index) => (
              <div
                key={index}
                className="card relative grid h-[30rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden bg-clip-border text-center text-gray-700 mx-auto"
              >
                <div className="m-5 rounded-sm absolute inset-0 h-full w-full overflow-hidden bg-transparent">
                  <div className="absolute inset-0 bg-black opacity-100"></div> {/* Black overlay */}
                  <Image
                    src={details.image}
                    alt={`${details.name} image`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className='rounded-lg'
                  />
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <div>
                    <Image className='top-0' width={80} height={80} src={details.icon} alt={`${details.politicalParty} icon`} />
                    <div className="mt-40 mb-6 block font-sans tracking-normal text-white">
                      <div className='text-start'>
                        <p className='text-xl'>{details.candidate}</p>
                        <p>{details.name}</p>
                        <Image onClick={voteForCandidate} width={50} height={50} src="/icons/vote.svg" alt="vote icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page;
