import { Link } from 'react-router'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-teal-100 p-4 fixed w-full">
            <div className="flex flex-col items-center md:flex-row md:justify-between w-full">
                {/* Logo & Text */}
                <div className='flex gap-x-5'>
                    <div className="flex flex-col items-center md:flex-row md:items-center md:gap-4">
                        <img src="/logo.png" alt="Dannuk Logo" className="w-24 h-24 lg:w-20 lg:h-20 p-0.5" />
                        <h1 className="text-teal-500 text-3xl mt-2 md:mt-0">Dannuk</h1>
                    </div>
                    {/* Links - hidden on mobile */}
                    <div className="hidden md:flex items-center gap-x-10 pt-1">
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
                </div>

                {/* Login - hidden on mobile */}
                <div className="hidden md:flex items-center gap-x-2 mt-4 md:mt-0">
                    <button className="underline p-1">Login</button>
                </div>
                {/* Burgah icon */}
                {/* <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-teal-800">
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div> */}
            </div>

            {/* burgah menu */}
            {/* {menuOpen && (
                <div className="flex flex-col items-center mt-4 gap-4 md:hidden">
                    <Link to="/get-known">Get Known</Link>
                    <Link to="/get-known">Arts</Link>
                    <Link to="/get-known">Sponsors & Donations</Link>
                    <Link to="/get-known">Jobs</Link>
                    <button className="underline">Login</button>
                </div>
            )} */}
        </nav>
    )
}

export default Navbar