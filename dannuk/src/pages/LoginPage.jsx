import React from 'react'
import Navbar from '../components/Navbar'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'

function LoginPage() {
    return (
        <>
            <Navbar />

            <motion.div className='lg:mx-125 flex flex-col lg:mt-25 mt-5 bg-teal-500 p-8 m-5 rounded-3xl text-white'>
                <h1 className='text-4xl text-center'>Welcome back!</h1>

                <form action="" method='POST'>
                    <div className='flex flex-col mx-5'>
                        <label htmlFor="">Phone number:</label>
                        <input name='phone number' id='phone number' title='7XXXXXXXXX' pattern="7\d{9}" type="tel" className='border rounded' maxLength={10} required inputMode='numeric' />
                        <label htmlFor="">Password:</label>
                        <input name='password' id='password' type="password" className='border rounded' />
                        <button type='submit' className='mt-5 border rounded-2xl mx-35 text-white bg-teal-500 p-1 hover:pointer'>Log in</button>
                    </div>
                </form>
            </motion.div>
        </>
    )
}

export default LoginPage