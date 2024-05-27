import Image from 'next/image'
import React from 'react'

const Header2 = () => {
    grante = [
        {
            icon:"/icons/Icon.svg",
            title:"Super Secure",
            text:"Our top-notch security features ensure your vote remains confidential and tamper-proof."
        },
        {
            icon:"/icons/fluent_accessibility-48-regular.svg",
            title:"highly accessible",
            text:"With a user-friendly interface, never feel left out or confused when voting online!"
        },
        {
            icon:"/icons/menu-2.svg",
            title:"accurate results",
            text:"Our state-of-the-art algorithms deliver the most accurate and reliable vote counts in real-time."
        }
    ]
  return (
    <>
        <div>
            <div>
                <p className='flex text-4xl mx-auto justify-center'>
                    <span>your elections </span>
                    <Image className='mx-5' width={30} height={30} src="/Ellipse 6.svg" alt="" />
                    <span>anywhere </span>
                    <Image className='mx-5' width={30} height={30} src="/Ellipse 6.svg" alt="" />
                    <span>anytime </span>
                </p>
            </div>
            
        </div>
    </>
  )
}

export default Header2