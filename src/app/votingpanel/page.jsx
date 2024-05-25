"use client";

import { Accordion } from "flowbite-react";
import React, { useState } from 'react';
import Nav from "../components/Nav";

const Page = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleVote = (candidate) => {
    setSelectedCandidate(candidate);
    alert(`You voted for ${candidate}`);
  };

  return (
    <>
    <Nav/>
      <Accordion collapseAll style={{border:'none'}}>
        <Accordion.Panel className="mb-4 border-gray-200 rounded-lg">
          <Accordion.Title>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-full text-green-500 border-gray-300 focus:ring-green-500"
                />
                <h4>Bola Ahmed Tinubu</h4>
              </div>
              <p className="flex-1 text-center">APC</p>
              <p>🧹</p>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
              dropdowns, modals, navbars, and more.
            </p>
            <button 
              onClick={() => handleVote('Bola Ahmed Tinubu')} 
              className="w-full p-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
            >
              Vote
            </button>
          </Accordion.Content>
          <hr />
          <br />

        </Accordion.Panel>
        <Accordion.Panel className="mb-4 border border-gray-200 rounded-lg">
          <Accordion.Title>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-full text-green-500 border-gray-300 focus:ring-green-500"
                />
                <h4>Peter Obi</h4>
              </div>
              <p className="flex-1 text-center">Labour Party</p>
              <p>🧹</p>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
              has a design equivalent in our Figma file.
            </p>
            <button 
              onClick={() => handleVote('Peter Obi')} 
              className="w-full p-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
            >
              Vote
            </button>
          </Accordion.Content>
        </Accordion.Panel>

        <hr />
          <br />
        <Accordion.Panel className="mb-4 border border-gray-200 rounded-lg">
          <Accordion.Title>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-full text-green-500 border-gray-300 focus:ring-green-500"
                />
                <h4>Rabiu Kwankwaso</h4>
              </div>
              <p className="flex-1 text-center"> New Nigeria Peoples Party,</p>
              <p>🧹</p>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas
              Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            </p>
            <button 
              onClick={() => handleVote('Kwankaso')} 
              className="w-full p-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
            >
              Vote
            </button>
          </Accordion.Content>
        </Accordion.Panel>

        
        <hr />
          <br />
        <Accordion.Panel className="mb-4 border border-gray-200 rounded-lg">
          <Accordion.Title>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-full text-green-500 border-gray-300 focus:ring-green-500"
                />
                <h4> Christopher Imumolen</h4>
              </div>
              <p className="flex-1 text-center"> Accord </p>
              <p>🧹</p>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas
              Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            </p>
            <button 
              onClick={() => handleVote('Kwankaso')} 
              className="w-full p-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
            >
              Vote
            </button>
          </Accordion.Content>
        </Accordion.Panel>

        <hr />
          <br />
        <Accordion.Panel className="mb-4 border border-gray-200 rounded-lg">
          <Accordion.Title>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-full text-green-500 border-gray-300 focus:ring-green-500"
                />
                <h4>Omoyele Sowore</h4>
              </div>
              <p className="flex-1 text-center">African Action Congress </p>
              <p>🧹</p>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas
              Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            </p>
            <button 
              onClick={() => handleVote('Kwankaso')} 
              className="w-full p-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
            >
              Vote
            </button>
          </Accordion.Content>
        </Accordion.Panel>

        <hr />
          <br />
        <Accordion.Panel className="mb-4 border border-gray-200 rounded-lg">
          <Accordion.Title>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-full text-green-500 border-gray-300 focus:ring-green-500"
                />
                <h4>Peter Umeadi</h4>
              </div>
              <p className="flex-1 text-center">. All Progressives Grand Alliance (APGA)</p>
              <p>🧹</p>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas
              Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            </p>
            <button 
              onClick={() => handleVote('Kwankaso')} 
              className="w-full p-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
            >
              Vote
            </button>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>

      {selectedCandidate && (
        <div className="mt-6 text-center">
          <p className="text-xl font-bold">You voted for: {selectedCandidate}</p>
        </div>
      )}
    </>
  );
}

export default Page;
