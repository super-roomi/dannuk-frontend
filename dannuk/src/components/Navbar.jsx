import { useState } from 'react';
import { Link } from 'react-router'
//import { useState } from 'react';
import { useNavigate } from 'react-router'
import { Menu, X } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'motion/react';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className=" p-1 bg-teal-500 w-full">
            <div className="flex flex-col items-center md:flex-row md:justify-between w-full" >

                {/* Logo & Text */}
                <div div className='flex md:gap-x-5'>
                    <div className="flex flex-col items-center md:flex-row md:items-center md:gap-1 flex-1">
                        <img onClick={() => navigate('/')} src="/logo.png" alt="Dannuk Logo" className="w-20 h-21 lg:w-21 lg:h-20 p-0.5 hover:cursor-pointer" />
                        <h1 className="text-white mt-1 text-3xl md:mt-0">Dannuk</h1>
                    </div>

                    {/* Burgah icon */}
                    <div className="md:hidden absolute justify-center right-0 top-13 left-105 ">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-teal-800 transition-all duration-150">
                            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>

                    {/* Links - hidden on mobile */}
                    <div className="hidden md:flex items-center gap-x-10 pt-1 text-white">
                        <Link
                            to={{
                                pathname: "/get-known",
                                search: "?query=string",
                                hash: "#hash",
                            }}>Get Known</Link>
                        <Link
                            to={{
                                pathname: "/get-known",
                                search: "?query=string",
                                hash: "#hash",
                            }}>Arts</Link>
                        <Link
                            to={{
                                pathname: "/get-known",
                                search: "?query=string",
                                hash: "#hash",
                            }}>Sponsors & Donations</Link>
                        <Link
                            to={{
                                pathname: "/get-known",
                                search: "?query=string",
                                hash: "#hash",
                            }}>Jobs</Link>
                    </div>
                </div >

                {/* Login - hidden on mobile */}
                < div className="hidden md:flex items-center gap-x-2 mt-4 md:mt-0 mr-3" >
                    <button onClick={() => navigate('/login')} className="underline p-1 border rounded-full px-4 text-white hover:scale-104 hover:cursor-pointer active:scale-100">Login</button>
                </ div>

            </div >

            {/* burgah menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center mt-4 gap-4 md:hidden text-white"
                    >
                        <Link to="/get-known" className='text-xl mt-3'>About</Link>
                        <Link to="/get-known" className='text-xl'>Contact</Link>
                        <Link to="/login" className='underline mb-5 text-xl'>Login</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    )
}

export default Navbar