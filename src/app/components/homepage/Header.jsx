import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded">
                        <div className='p-10 mt-10'>
                            <p className='md:text-6xl text-3xl'>Choose your <span className='bg-[#055052] text-white'>FUTURE</span> <br />Elect your leader </p>
                            <br />
                            <br />
                            <p>From instant results to secure voting, E-ChoiceNG's innovative system redefines the election process for citizens.</p>
                            <br />
                            <br />

                            <br />

                            <p>join the new wave of online voting experience. <br /> Its absolutely cost free.</p>
                        </div>
                    </div>
                    <div className="p-4 rounded">
                        <Image width={100} height={100} className='w-full p-10' src="/Online Voting.svg" alt="" />
                    </div>
                
                </div>
                <div className="absolute top-80 right-0">
                    <Image width={100} height={100} className='w-full p-10' src="/Group 16.svg" alt="" />
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 mt-40 w-4/6 mx-auto">
                <div class="p-4 float-end">
                    <Image width={100} height={100} className='w-80 p-10' src="/Group 1000001635.svg" alt="" />

                </div>
                <div class="bg-white p-4 rounded">

                    <p className='pt-20 float-start'>TIntroducing E-ChoiceNG, an online voting system that ensures secure, transparent, and efficient elections. Say goodbye to outdated, time-consuming methods and embrace the future of voting technology.</p>
                </div>
            </div>

        </>
    )
}

export default Header
