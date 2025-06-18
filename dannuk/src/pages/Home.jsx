import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { HandshakeIcon } from 'lucide-react'

function Home() {
    return (
        <>
            <div className='min-h-screen flex flex-col'>
                <Navbar />

                {/* spinny logo woooo */}
                {/* <div className='relative overflow-hidden h-svh'>
                    <div className='absolute -right-64 -bottom-100 lg:-right-86 lg:bottom-0 h-svh z-0'>
                        <img src="/logo.png" alt="" className='md:h-svh animate-spin duration-500 ' style={{ animationDuration: '30s' }} />
                    </div>
                </div> */}


                <div className='flex flex-row border rounded-2xl bg-amber-50 m-10 p-10'>
                    <div className='flex flex-col p-4 flex-1 ml-3 lg:mt-10 md:mt-19 sm:mt-2'>
                        <h1 className='lg:text-6xl text-6xl mt-1.5'>The <span className='text-teal-500'>one stop</span> for all your <span className='text-teal-500'>needs.</span></h1>
                        <h1 className="lg:text-4xl text-4xl mt-1.5">More suff here.</h1>
                        <div className='flex gap-x-2'>
                            <button className='border w-28 rounded-xl mt-2 click:scale-104 active:scale-98 duration-150'>Explore</button>
                            <button className='border w-28 bg-teal-500 p-2 rounded-xl mt-2 click:scale-104 active:scale-98 duration-150'>Get started!</button>
                        </div>
                    </div>
                    {/* <div className='border overflow-x-hidden'>
                        <img src="/logo.png" alt="" className='absolute bottom-0 -right-84 z-1 h-svh animate-spin duration-500' style={{ animationDuration: '30s' }} />
                    </div> */}
                </div>
                <div className='flex flex-col p-2 overflow-x-hidden md:hidden w-full'>
                    <Card buttonLabel={"Submit your CV!"} icon={"🤝"} imgLink={"/cv.png"} title={"Find a Job"} description={"the job you will find, purpose, you will not."} />
                    <Card buttonLabel={"Discover art"} icon={"🎨"} imgLink={"/art.png"} title={"Arts"} description={"Discover the various art forms of kurdish origins, from poerty to painting, explore or submit your own!"} />
                    <Card buttonLabel={"Donate now!"} icon={"💰"} imgLink={"/donation.png"} title={"Donations & Sponsors"} description={"Find startups and businesses you deem fit to recieve your funding!"} />
                </div>
            </div>
        </>
    )
}

export default Home