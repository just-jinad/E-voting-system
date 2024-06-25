import React from 'react';
import Navbar from '../components/homepage/Navbar';
import Image from 'next/image';
import { FooterTitle } from 'flowbite';
import Footer from '../components/homepage/Footer';

const Page = () => {
    const candidatesList = [
        {
            name: "Tinibu Albubarker",
            politicalParty: "apc",
            icon: "/africancongress.jpeg",
            image: "/image 15 (1).svg",
            numberOfVoters: []
        },
        {
            name: "Bola Ahamed Tinubu",
            politicalParty: "African Congress",
            icon: "/africancongress.jpeg",
            image: "/image 15 (1).svg",
            numberOfVoters: []
        },
        {
            name: "Candidate Name",
            politicalParty: "Party Name",
            icon: "/africancongress.jpeg",
            image: "/image 15 (1).svg",
            numberOfVoters: []
        },
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
                                        alt=""
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                        className='rounded-lg'
                                    />
                                </div>

                                <div className="relative p-6 px-6 py-14 md:px-12">
                                    <div>
                                        <Image className='top-0' width={80} height={80} src={details.icon} alt="" />
                                        <div className="mt-40 mb-6 block font-sans tracking-normal text-white">
                                            <div className='text-start'>
                                                <p className='text-xl'>{details.name}</p>
                                                <p>President Federal Republic Of Nigeria</p>
                                                <Image width={50} height={50} src="/icons/vote.svg" alt="" />
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
