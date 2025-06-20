import Navbar from '../components/Navbar'
import Card from '../components/Card'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import { useNavigate } from 'react-router'


function Home() {
    const navigate = useNavigate()
    return (
        <>
            <div className='min-h-screen flex flex-col justify-between overflow-x-hidden'>
                <Navbar />
                <section className='flex flex-row rounded-2xl p-2 mx-4 md:mx-8 md:p-6'>
                    <div className='flex flex-col p-4 flex-1 ml-3 lg:mt-2 md:mt-19 sm:mt-2'>
                        <div>
                            <h1 className='lg:text-6xl text-6xl mt-2.5 '>The <span className='text-teal-500'>one stop</span> for all your <span className='text-teal-500'>needs.</span></h1>
                            <h1 className="lg:text-4xl text-3xl mt-2.5">More suff here.</h1>
                        </div>
                        <div className='flex gap-x-2 mt-2'>
                            <button className='border w-28 rounded-xl mt-2 click:scale-104 active:scale-98 duration-150'>Explore</button>
                            <button onClick={() => navigate('/register')} className='border w-28 bg-teal-500 p-2 rounded-xl mt-2 click:scale-104 active:scale-98 duration-150'>Get started!</button>
                        </div>
                        <div>
                            <p className='text-3xl lg:mt-45 md:mt-35 mt-28'>Join the most comprehensive business accelerator in Iraq!</p>
                        </div>
                    </div>
                    {/* <div className='border overflow-x-hidden'>
                        <img src="/logo.png" alt="" className='absolute bottom-0 -right-84 z-1 h-svh animate-spin duration-500' style={{ animationDuration: '30s' }} />
                    </div> */}
                    <img src="/logo.png" alt="" className='-right-86  h-140 w-140 animate-spin lg:block lg:relative hidden' style={{ animationDuration: '30s' }} />
                </section>

                {/* Mobile-only cards */}
                <div className='flex flex-col px-2 overflow-x-hidden md:hidden w-full mt-5'>
                    <p className='text-center text-xl'>tap on any of the following cards to know more!</p>
                </div>
                <div className='flex flex-col px-2 overflow-x-hidden md:hidden w-full'>
                    <Card buttonLabel={"Submit your CV!"} icon={"🤝"} imgLink={"/cv.png"} link={"/lol"} title={"Find a Job"} description={"the job you will find, purpose, you will not."} />
                    <Card buttonLabel={"Discover art!"} icon={"🎨"} imgLink={"/art.png"} link={"/lmao"} title={"Arts"} description={"Discover the various art forms of kurdish origins, from poerty to painting, explore or submit your own!"} />
                    <Card buttonLabel={"Donate now!"} icon={"💰"} imgLink={"/donation.png"} link={"/xd"} title={"Donations & Sponsors"} description={"Find startups and businesses you deem fit to recieve your funding!"} />
                    <Card buttonLabel={"Get known!"} icon={"📸"} imgLink={"/getknown.png"} link={"/hahs"} title={"Get Known"} description={"Get the recognition you need for your business, in a quick and cost-effective manner"} />
                </div>

                {/* Statistics board (he liked the one he saw from karencrowd) */}
                <div className='flex md:flex-row flex-col content-center items-center md:mx-10 mx-8 mt-5 p-6 border rounded-2xl bg-teal-500 text-white gap-y-5'>
                    <div className='md:flex md:flex-col flex-1/3 md:items-center justify-center'>
                        <motion.p
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                default: { type: "spring" },
                                ease: "easeIn",
                                duration: 0.3
                            }}
                            className='text-5xl text-center'>
                            69
                        </motion.p>
                        <p>Monthly Customers</p>
                    </div>
                    <div className='md:flex md:flex-col flex-1/3 md:items-center md:border-l-1 md:border-r-1 justify-center'>
                        <motion.p
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                default: { type: "spring" },
                                ease: "easeIn",
                                duration: 0.5
                            }}
                            className='text-5xl text-center'>
                            69
                        </motion.p>
                        <p>Happy customers</p>
                    </div>
                    <div className='md:flex md:flex-col flex-1/3 md:items-center justify-center'>
                        <motion.p
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                default: { type: "spring" },
                                ease: "easeIn",
                                duration: 0.7
                            }}
                            className='text-5xl text-center'>
                            69
                        </motion.p>
                        <p>Success Stories</p>
                    </div>
                </div>

                {/* Breakdown 🕺 of services */}
                <section className='mx-8 border h-screen mt-8'>

                </section>

            </div >
        </>
    )
}

export default Home