import React from 'react'
import Navbar from '../components/Navbar'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'

function RegisterPage() {
    return (
        <div>
            <Navbar />
            {/* TODO:
                - Password Validation (minimum characters and re-password)    
           */}

            <div className='flex justify-center items-center min-h-screen'>
                <motion.div className='flex justify-center flex-col bg-teal-500 p-8 rounded-3xl text-white min-w-150 max-w-210'>
                    <h1 className='text-4xl text-center'>Register</h1>
                    <form action="" method='POST' className='mt-4'>
                        <div className='flex flex-col mx-5 gap-y-0.5'>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id='name' className='border rounded' required />
                            <label htmlFor="">Phone number:</label>
                            <input name='phone number' id='phone number' title='7XXXXXXXXX' pattern="7\d{9}" type="tel" className='border rounded' maxLength={10} required inputMode='numeric' />
                            <label htmlFor="">Password:</label>
                            <input name='password' id='password' type="password" className='border rounded' required />
                            <label htmlFor="">Confirm Password:</label>
                            <input type="password" id='re-password' className='border rounded' required />
                            <label htmlFor="gender-selection">Gender:</label>
                            <select name="gender-selection" id="gender" className='border rounded ' required >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <div className='flex justify-center w-full'>
                                <button type='submit' className='mt-5 border rounded-2xl  text-white bg-teal-500 p-1 hover:cursor-pointer hover:scale-104 active:scale-100 transition-all min-w-30 max-w-40'>Register</button>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default RegisterPage