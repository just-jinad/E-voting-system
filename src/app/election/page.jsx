import React from "react";
import Nav from "../components/Nav";

const page = () => {
  return (
    <>
      <Nav />
      <div className="mt-24 ml-4 mr-4">
        <h2 className="font-bold text-xl text-green-400">
          Upcoming Elections:
        </h2>
        <div className="flex justify-between bg-slate-200 p-5 rounded ">
          <p className="font-bold text-green-900">Up state election:</p>
          <p>02-04-2024</p>
        </div>

        <h2 className="mt-10 text-xl text-green-400 font-bold">
          Other Elections:
        </h2>
        <div className="flex justify-between mt-3 bg-slate-200 p-3 rounded ">
          <p className="font-bold text-green-900">Presidential Election:</p>
          <p>02-04-2024</p>
        </div>

        <div className="flex justify-between mt-7 bg-slate-200 p-3 rounded ">
          <p className="font-bold text-green-900">
            Governorship/State Election:
          </p>
          <p>02-06-2024</p>
        </div>

        <div className="flex justify-between mt-7 bg-slate-200 p-3 rounded ">
          <p className="font-bold text-green-900">LGA Elections:</p>
          <p>02-08-2024</p>
        </div>

        <div className="flex justify-between mt-7 mb-7 bg-slate-200 p-3 rounded ">
          <p className="font-bold text-green-900">Chancellor Elecctions:</p>
          <p>02-01-2024</p>
        </div>
      </div>
    </>
  );
};

export default page;
