import React from 'react'
import Navbar from '../components/Navbar'

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


                <div className='flex flex-col content-center items-center p-4 flex-1 lg:mt-10 md:mt-10 sm: mt-2'>
                    <h1 className='lg:text-8xl text-7xl text-center'>The <span className='text-teal-500'>one stop</span> for all your <span className='text-teal-500'>needs.</span></h1>
                    <h1 className="lg:text-6xl text-4xl">More suff here.</h1>
                </div>
            </div>

        </>
    )
}

export default Home