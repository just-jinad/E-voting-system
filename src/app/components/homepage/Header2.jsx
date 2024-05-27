import Image from 'next/image'
import React from 'react'

const Header2 = () => {
  const grante = [
    {
      icon: "/icons/Icon.svg",
      title: "Super Secure",
      text: "Our top-notch security features ensure your vote remains confidential and tamper-proof."
    },
    {
      icon: "/icons/fluent_accessibility-48-regular.svg",
      title: "Highly Accessible",
      text: "With a user-friendly interface, never feel left out or confused when voting online!"
    },
    {
      icon: "/icons/menu-2.svg",
      title: "Accurate Results",
      text: "Our state-of-the-art algorithms deliver the most accurate and reliable vote counts in real-time."
    }
  ];

  return (
    <>
      <div>
        <div>
          <p className='flex text-4xl mx-auto justify-center'>
            <span>Your elections</span>
            <Image className='mx-5' width={30} height={30} src="/Ellipse 6.svg" alt="" />
            <span>Anywhere</span>
            <Image className='mx-5' width={30} height={30} src="/Ellipse 6.svg" alt="" />
            <span>Anytime</span>
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
          {grante.map((item, index) => (
            <div key={index} className='cardDetails text-center p-6 bg-white'>  
                        <Image className='mx-auto mb-4' width={30} height={30} src={item.icon} alt={item.title} />
              <p className='text-2xl font-semibold mb-2'>{item.title}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header2;
