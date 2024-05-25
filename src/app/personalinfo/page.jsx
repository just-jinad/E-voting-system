'use client'
import Image from 'next/image'
import Nav from "../components/Nav";


const Page = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col lg:flex-row mt-24 justify-center items-center lg:items-start">
        <div className="mx-10 mb-10 lg:mb-0">
          <Image
            src="/profile-pic 1 (2).png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <div className="p-3">
            <button className="bg-green-400 text-white font-bold p-2 rounded mt-10 ml-0 lg:ml-6">
              Change profile
            </button>
            <p className="bg-white text-green-400 font-bold mt-4 ml-0 lg:ml-4">
              🖊️ Edit profile
            </p>
          </div>
        </div>

        <div className="sectionTwo max-w-lg lg:max-w-full p-3">
          <h1 className="text-green-400 font-bold">Name</h1>
          <h6>John Doe</h6>

          <h3 className="text-green-400 font-bold mt-5">
            Father's/Mother's name
          </h3>
          <h6>John Doe</h6>

          <div className="flex flex-col lg:flex-row justify-between mt-5">
            <div className="mb-5 lg:mb-0">
              <h3 className="text-green-400 font-bold">Age</h3>
              <h4>19</h4>
            </div>
            <div>
              <h3 className="text-green-400 font-bold">Mobile Number</h3>
              <h6>+234 9063 2194 93</h6>
            </div>
          </div>

          <h3 className="text-green-400 font-bold mt-5">Email</h3>
          <h6>Johndoe@gmail.com</h6>

          <h3 className="text-green-400 font-bold mt-5">Address</h3>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            dolores!
          </h6>

          <div className="flex flex-col lg:flex-row justify-between mt-5">
            <div className="mb-5 lg:mb-0">
              <h3 className="text-green-400 font-bold mt-5">Eligible</h3>
              <h6>True</h6>
            </div>

            <div>
              <h3 className="text-green-400 font-bold mt-5">Verified</h3>
              <h6>True</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
