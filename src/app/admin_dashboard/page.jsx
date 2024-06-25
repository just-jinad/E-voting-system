"use client";

import React from 'react';
import Navbar from '../components/homepage/Navbar';

const Page = () => {
  const data = [
    { name: 'Bola Ahmed Tinubu', party: 'APC', votes: '1,023,100', img: '/download.jpeg' },
    { name: 'Nicodemus Philip', party: 'PDP', votes: '3,020,010', img: '/download.png' },
    { name: 'Mike Eka', party: 'AC', votes: '7,002,100', img: '/africancongress.jpeg' },
    { name: 'Tom Cruise', party: 'LABOUR', votes: '3,870,000', img: '/lp.jpeg' },
    { name: 'John Wick', party: 'ACCORD', votes: '10,870,100', img: '/accord.jpeg' },
    { name: 'Jason Statham', party: 'APGA', votes: '2,010', img: '/apga.png' },
  ];

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4 border-2 rounded-xl">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div className="flex flex-wrap mb-2">
          <button className="px-4 py-2 bg-gray-200 mb-2 mr-2">All time</button>
          <button className="px-4 py-2 bg-gray-200 mb-2 mr-2">FDP</button>
          <button className="px-4 py-2 bg-gray-200 mb-2">More filters</button>
        </div>
        <div className="w-full md:w-auto">
          <input type="text" placeholder="Search" className="border p-2 w-full md:w-auto" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4">Candidate</th>
              <th className="py-2 px-4">Party</th>
              <th className="py-2 px-4">Number of Votes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((candidate, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4 flex items-center">
                  <img src={candidate.img} alt={`${candidate.party} logo`} className="h-6 w-6 mr-2" />
                  {candidate.name}
                </td>
                <td className="py-2 px-4">{candidate.party}</td>
                <td className="py-2 px-4">{candidate.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="px-4 py-2 bg-gray-200">Previous</button>
        <span>Page 1 of 10</span>
        <button className="px-4 py-2 bg-gray-200">Next</button>
      </div>
    </div>
    </>
  );
};

export default Page;
