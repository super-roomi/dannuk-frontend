import React from 'react'
import { Link, Links } from 'react-router'

function Navbar() {
    return (
        <nav className='flex lg:place-content-between md:place-content-between bg-teal-100'>
            <div className='lg:flex lg:gap-10 md:flex md:gap-x-10 items-center justify-center content-center'>
                {/*Logo & Text*/}
                <div className='lg:flex lg:items-center md:flex items-center '>
                    <img src="/logo.png" alt="" className='lg:h-20 lg:w-20 p-0.5 w-24 h-24' />
                    <h1 className='text-teal-500 text-3xl '>Dannuk</h1>
                </div>

                {/*the Links menu is hidden for mobile users, only visible to desktop/ipad users*/}
                <div className='lg:flex md:flex items-center gap-x-10 hidden'>
                    <Link
                        to={{
                            pathname: "/get-known",
                            search: "?query=string",
                            hash: "#hash",
                        }}> Get Known
                    </Link>
                    <Link
                        to={{
                            pathname: "/get-known",
                            search: "?query=string",
                            hash: "#hash",
                        }}> Arts
                    </Link>
                    <Link
                        to={{
                            pathname: "/get-known",
                            search: "?query=string",
                            hash: "#hash",
                        }}> Sponsors & Donations
                    </Link>
                    <Link
                        to={{
                            pathname: "/get-known",
                            search: "?query=string",
                            hash: "#hash",
                        }}> Jobs
                    </Link>
                </div>
            </div>

            {/*Login & Sign up*/}
            <div className='space-x-2 pr-1 lg:flex md:flex items-center gap-x-2 hidden'>
                <button className='underline p-1'>
                    Login
                </button>
            </div>
        </nav>
    )
}

export default Navbar