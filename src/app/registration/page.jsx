import Image from 'next/image'
import Nav from '../components/Nav';

const Page = () => {
  return (
    <>
    <Nav/>
      <div className="flex flex-col lg:flex-row mt-24 justify-center items-center lg:items-start gap-4">
        <div className="mb-10 lg:mb-0">
          <Image
            src="/Figure.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>

        <div className="sectionTwo max-w-lg lg:max-w-full p-5">
          <h4 className="text-xl font-bold text-green-600">Registration Form</h4>

          <form className="flex flex-col gap-4">
            <label className="font-bold text-green-400" htmlFor="fullName">Full Name</label>
            <input id="fullName" className="border p-1 rounded-xl w-full lg:w-96" type="text" />

            <label className="font-bold text-green-400" htmlFor="dob">DOB</label>
            <input id="dob" className="border p-1 rounded-xl w-full lg:w-96" type="text" />

            <label className="font-bold text-green-400" htmlFor="address">Address</label>
            <input id="address" className="border p-1 rounded-xl w-full lg:w-96" type="text" />

            <label className="font-bold text-green-400" htmlFor="govId">Government ID</label>
            <input id="govId" className="border p-1 rounded-xl w-full lg:w-96" type="text" />

            <label className="font-bold text-green-400" htmlFor="email">Email</label>
            <input id="email" className="border p-1 rounded-xl w-full lg:w-96" type="text" />

            <label className="font-bold text-green-400" htmlFor="phone">Phone Number</label>
            <input id="phone" className="border p-1 rounded-xl w-full lg:w-96" type="text" />

            <label className="font-bold text-green-400" htmlFor="username">Username</label>
            <input id="username" className="border p-1 rounded-xl w-full lg:w-96" type="text" />

            <label className="font-bold text-green-400" htmlFor="password">Password</label>
            <input id="password" className="border p-1 rounded-xl w-full lg:w-96" type="password" />

            <label className="font-bold text-green-400" htmlFor="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" className="border p-1 rounded-xl w-full lg:w-96" type="password" />

            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Page;
