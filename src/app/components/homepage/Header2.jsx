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
        
       

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {grante.map((item, index) => (
            <div key={index} className='cardDetails text-center p-6 bg-white '>
              <Image className='mx-auto mb-4' width={40} height={40} src={item.icon} alt={item.title} />
              <p className='text-2xl font-semibold mb-2'>{item.title}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div className='m-10'>
            <p className='text-[#53B8BB]'>Get to know us</p>
            <p className='text-3xl'>We’re just getting started</p><br />
            <p>We are a rapidly growing organization, backed by the Federal Government, and we are looking for passionate, dynamic, and talented individuals to join our distributed team across Africa(Nigeria).</p>
            <p>Our philosophy is simple — hire a diverse, passionate team and foster a culture that empowers you to do your best work. Read more about us and join the future of secure, transparent, and efficient elections with E-ChoiceNG.</p>
            <button className='bg-[#055052] p-2 rounded text-white'>Get to Know Us</button>
          </div>
          <div className="flex justify-center items-center">
            <Image className='' width={400} height={400} src="/coat of arms.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header2;
