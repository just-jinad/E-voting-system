import Image from 'next/image'
import Link from 'next/link';
import Nav from '../components/Nav';

const Page = () => {
  return (
    <>
    <Nav/>
      <div className="flex flex-col lg:flex-row mt-24 justify-center items-center lg:items-start gap-4">
        <div className="mb-10 lg:mb-0">
          <Image
            src="/govote.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>

        <div className="sectionTwo max-w-lg lg:max-w-full p-5">
          <h4 className="text-xl font-bold text-green-600">Login Form</h4>

          <form className="flex flex-col gap-4">

            <label className="font-bold text-green-400" htmlFor="email">Email</label>
            <input id="email" className="border p-1 rounded-xl  w-80" type="text" />

            <label className="font-bold text-green-400" htmlFor="password">Password</label>
            <input id="password" className="border p-1 rounded-xl  w-80" type="password" />
            <Link href={'/'}>
                Forgot password?
            </Link>

            <Link href={'/'}>
                Not a user? Register Now
            </Link>
        
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Page;
