import React from 'react'
import Navbar from '../components/Navbar'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import { Link } from 'react-router'

function LoginPage() {
    return (
        <>
            <Navbar />

            {/* TODO: Fix phone validation (pattern)*/}

            <div className='flex justify-center items-center min-h-screen border'>
                <motion.div className='flex justify-center flex-col bg-teal-500 p-8 rounded-3xl text-white md:min-w-150 md:max-w-210 h-110 w-92'>
                    <h1 className='text-4xl text-center'>Welcome back!</h1>
                    <form action="" method='POST'>
                        <div className='flex flex-col mx-5 gap-y-0.5'>
                            <label htmlFor="" className='mt-4'>Phone number:</label>
                            <input name='phone number' id='phone number' title='7XXXXXXXXX' pattern="7\d{9}" type="tel" className='border rounded' maxLength={10} required inputMode='numeric' />
                            <label htmlFor="">Password:</label>
                            <input name='password' id='password' type="password" className='border rounded' />
                            <div className='flex flex-col items-center w-full'>
                                <button type='submit' className='mt-5 border rounded-2xl  text-white bg-teal-500 p-1 hover:cursor-pointer hover:scale-104 active:scale-100 transition-all min-w-30 max-w-40'>Login</button>
                                <Link to={'/register'} className='underline mt-2'>No Account?</Link>
                                <Link to={'/'} className='underline mt-2'>Forgot Password?</Link>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </>
    )
}

export default LoginPage