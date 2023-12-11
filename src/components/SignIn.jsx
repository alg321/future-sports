import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Video1 from '../assets/VideoBanner.mp4'

const SignIn = () => {
    return (
        <div className=' min-h-screen flex flex-col'>
            <video className='object-cover h-full w-full absolute z-[-1]' src={Video1} autoPlay loop muted />
            <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
                <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
                    <h1 className='mb-8 text-4xl text-bold text-center text-[#ae3a3a]'>SIGN IN</h1>
                    <input type='text' className='block border border-black w-full p-3 rounded mb-4' name='email' placeholder='Email' />
                    <input type='password' className='block border border-black w-full p-3 rounded mb-4' name='password' placeholder='Password' />
                    <button type='submit' className='w-full text-center py-3 rounded bg-[#ae3a3a] text-white hover:bg-green-dark focus:outline-none my-1'>SIGN IN NOW</button>
                    <div className='text-center text-sm text-grey-dark mt-4'>By signing in, you agree to the <Link to='/Terms' className='no-underline border-b border-grey-dark text-grey-dark'>Terms of Service</Link></div>
                </div>
                <div className='text-white mt-6'>Don't have an account? <HashLink smooth to='/JoinNow/#section2' className='no-underline border-b border-blue text-blue'>Sign Up Today </HashLink>.</div>
            </div>
        </div>
    )
}

export default SignIn