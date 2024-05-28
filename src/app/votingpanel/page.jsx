// "use client";

// import { Accordion } from "flowbite-react";
// import React, { useState } from 'react';
// import Image from 'next/image'
// import Nav from "../components/Nav";

// const Page = () => {
//   const [selectedCandidate, setSelectedCandidate] = useState(null);
//   const [hasVoted, setHasVoted] = useState(false);

//   const handleVote = (candidate) => {
//     setSelectedCandidate(candidate);
//     setHasVoted(true);
//     alert(`You voted for ${candidate}`);
//   };

//   return (
//     <>
//       <Nav />
//       <Accordion collapseAll>
//         <Accordion.Panel className="mb-4 border-gray-200 rounded-lg">
//           <Accordion.Title>
//             <div className="flex items-center justify-between gap-4">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="candidate"
//                   className="w-4 h-4 rounded-full text-green-500 border-gray-300 focus:ring-green-500"
//                   disabled={hasVoted}
//                   onChange={() => setSelectedCandidate('Bola Ahmed Tinubu')}
//                 />
//                 <h4>Bola Ahmed Tinubu</h4>
//               </div>
//               <p className="flex-1 text-center">APC</p>
//               <p>  <Image
//             src="/profile-pic 1 (2).png"
//             className="rounded"
//             width={50}
//             height={50}
//             alt="Picture of the author"
//           />
              
//               </p>
//             </div>
//           </Accordion.Title>
//           <Accordion.Content>
//             <h4>Bola Ahmed Tinubu</h4>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               <strong>Name:</strong> Bola Ahmed Tinubu<br />
//               <strong>Age:</strong> 70<br />
//               <strong>Party:</strong> APC<br />
//               <strong>Manifesto:</strong> I promise to build good roads and provide light for the good people of Nigeria.
//             </p>
//             <button
//               onClick={() => handleVote('Bola Ahmed Tinubu')}
//               className="w-full p-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
//               disabled={hasVoted}
//             >
//               Vote
//             </button>
//           </Accordion.Content>
//         </Accordion.Panel>

//         <Accordion.Panel className="mb-4 border-gray-200 rounded-lg">
//           <Accordion.Title>
//             <div className="flex items-center justify-between gap-4">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="candidate"
//                   className="w-4 h-4 rounded-full text-green-500 border-gray-300 focus:ring-green-500"
//                   disabled={hasVoted}
//                   onChange={() => setSelectedCandidate('Peter Obi')}
//                 />
//                 <h4>Peter Obi</h4>
//               </div>
//               <p className="flex-1 text-center">Labour Party</p>
//               <p> <Image
//             src="/lp.jpeg"
//             className="rounded"
//             width={50}
//             height={50}
//             alt="Picture of the author"
//           /></p>
//             </div>
//           </Accordion.Title>
//           <Accordion.Content>
//             <h4>Peter Obi</h4>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               <strong>Name:</strong> Peter Obi<br />
//               <strong>Age:</strong> 60<br />
//               <strong>Party:</strong> Labour Party<br />
//               <strong>Manifesto:</strong> I promise to improve healthcare and education for the people of Nigeria.
//             </p>
//             <button
//               onClick={() => handleVote('Peter Obi')}
//               className="w-full p-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
//               disabled={hasVoted}
//             >
//               Vote
//             </button>
//           </Accordion.Content>
//         </Accordion.Panel>

//         <Accordion.Panel className="mb-4 border-gray-200 rounded-lg">
//           <Accordion.Title>
//             <div className="flex items-center justify-between gap-4">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="candidate"
//                   className="w-4 h-4 rounded-full text-green-500 border-gray-300 focus:ring-green-500"
//                   disabled={hasVoted}
//                   onChange={() => setSelectedCandidate('Rabiu Kwankwaso')}
//                 />
//                 <h4>Rabiu Kwankwaso</h4>
//               </div>
//               <p className="flex-1 text-center">New Nigeria Peoples Party</p>
//               <p> <Image
//             src="/newnigeria.jpeg"
//             className="rounded"
//             width={50}
//             height={50}
//             alt="Picture of the author"
//           /></p>
//             </div>
//           </Accordion.Title>
//           <Accordion.Content>
//             <h4>Rabiu Kwankwaso</h4>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               <strong>Name:</strong> Rabiu Kwankwaso<br />
//               <strong>Age:</strong> 65<br />
//               <strong>Party:</strong> New Nigeria Peoples Party<br />
//               <strong>Manifesto:</strong> I promise to create more job opportunities and enhance security for all Nigerians.
//             </p>
//             <button
//               onClick={() => handleVote('Rabiu Kwankwaso')}
//               className="w-full p-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
//               disabled={hasVoted}
//             >
//               Vote
//             </button>
//           </Accordion.Content>
//         </Accordion.Panel>

//         <Accordion.Panel className="mb-4 border-gray-200 rounded-lg">
//           <Accordion.Title>
//             <div className="flex items-center justify-between gap-4">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="candidate"
//                   className="w-4 h-4 rounded-full text-green-500 border-gray-300 focus:ring-green-500"
//                   disabled={hasVoted}
//                   onChange={() => setSelectedCandidate('Christopher Imumolen')}
//                 />
//                 <h4>Christopher Imumolen</h4>
//               </div>
//               <p className="flex-1 text-center">Accord</p>
//               <p> <Image
//             src="/accord.jpeg"
//             className="rounded"
//             width={50}
//             height={50}
//             alt="Picture of the author"
//           /></p>
//             </div>
//           </Accordion.Title>
//           <Accordion.Content>
//             <h4>Christopher Imumolen</h4>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               <strong>Name:</strong> Christopher Imumolen<br />
//               <strong>Age:</strong> 45<br />
//               <strong>Party:</strong> Accord<br />
//               <strong>Manifesto:</strong> I promise to improve the infrastructure and digital economy of Nigeria.
//             </p>
//             <button
//               onClick={() => handleVote('Christopher Imumolen')}
//               className="w-full p-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
//               disabled={hasVoted}
//             >
//               Vote
//             </button>
//           </Accordion.Content>
//         </Accordion.Panel>

//         <Accordion.Panel className="mb-4 border-gray-200 rounded-lg">
//           <Accordion.Title>
//             <div className="flex items-center justify-between gap-4">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="candidate"
//                   className="w-4 h-4 rounded-full text-green-500 border-gray-300 focus:ring-green-500"
//                   disabled={hasVoted}
//                   onChange={() => setSelectedCandidate('Omoyele Sowore')}
//                 />
//                 <h4>Omoyele Sowore</h4>
//               </div>
//               <p className="flex-1 text-center">African Action Congress</p>
//               <p> <Image
//             src="/africancongress.jpeg"
//             className="rounded"
//             width={50}
//             height={50}
//             alt="Picture of the author"
//           /></p>
//             </div>
//           </Accordion.Title>
//           <Accordion.Content>
//             <h4>Omoyele Sowore</h4>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               <strong>Name:</strong> Omoyele Sowore<br />
//               <strong>Age:</strong> 50<br />
//               <strong>Party:</strong> African Action Congress<br />
//               <strong>Manifesto:</strong> I promise to ensure free and fair elections and fight corruption.
//             </p>
//             <button
//               onClick={() => handleVote('Omoyele Sowore')}
//               className="w-full p-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
//               disabled={hasVoted}
//             >
//               Vote
//             </button>
//           </Accordion.Content>
//         </Accordion.Panel>

//         <Accordion.Panel className="mb-4 border-gray-200 rounded-lg">
//           <Accordion.Title>
//             <div className="flex items-center justify-between gap-4">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="candidate"
//                   className="w-4 h-4 rounded-full text-green-500 border-gray-300 focus:ring-green-500"
//                   disabled={hasVoted}
//                   onChange={() => setSelectedCandidate('Peter Umeadi')}
//                 />
//                 <h4>Peter Umeadi</h4>
//               </div>
//               <p className="flex-1 text-center">All Progressives Grand Alliance (APGA)</p>
//               <p> <Image
//             src="/apga.png"
//             className="rounded"
//             width={50}
//             height={50}
//             alt="Picture of the author"
//           /></p>
//             </div>
//           </Accordion.Title>
//           <Accordion.Content>
//             <h4>Peter Umeadi</h4>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               <strong>Name:</strong> Peter Umeadi<br />
//               <strong>Age:</strong> 55<br />
//               <strong>Party:</strong> All Progressives Grand Alliance (APGA)<br />
//               <strong>Manifesto:</strong> I promise to provide universal healthcare and education for all Nigerians.
//             </p>
//             <button
//               onClick={() => handleVote('Peter Umeadi')}
//               className="w-full p-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
//               disabled={hasVoted}
//             >
//               Vote
//             </button>
//           </Accordion.Content>
//         </Accordion.Panel>
//       </Accordion>

//       {selectedCandidate && (
//         <div className="mt-6 text-center">
//           <p className="text-xl font-bold">You voted for: {selectedCandidate}</p>
//         </div>
//       )}
//     </>
//   );
// }

// export default Page;
