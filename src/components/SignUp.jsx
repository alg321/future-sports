import React from "react";
import { Link } from "react-router-dom";
import Video1 from '../assets/VideoBanner.mp4'

const SignUp = () => {
    return (
        <div className=' min-h-screen flex flex-col'>
            <video className='object-cover h-full w-full absolute z-[-1]' src={Video1} autoPlay loop muted />
            <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 border-[#ae3a3a]'>
                <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
                    <h1 className='mb-8 text-4xl text-bold text-center text-[#ae3a3a]'>Sign Up</h1>
                    <input type='text' className='block border border-black w-full p-3 rounded mb-4' name='fullname' placeholder='Full Name' />
                    <input type='text' className='block border border-black w-full p-3 rounded mb-4' name='email' placeholder='Email' />
                    <input type='password' className='block border border-black w-full p-3 rounded mb-4' name='password' placeholder='Password' />
                    <input type='password' className='block border border-black w-full p-3 rounded mb-4' name='confirm_password' placeholder='Confirm Password' />
                    <button type='submit' className='w-full text-center py-3 rounded bg-[#ae3a3a] text-white focus:outline-none my-1'>Create Account</button>
                    <div className='text-center text-sm text-grey-dark mt-4'>By signing up, you agree to the <Link to='/Terms' className='no-underline border-b border-grey-dark text-grey-dark'>Terms of Service</Link></div>
                </div>
                <div className='text-[white] mt-6'>Already have an account? <Link to='/SignInPage' className='no-underline border-b border-blue text-blue'>Log In </Link>.</div>
            </div>
        </div>
    )
}

export default SignUp