import React from 'react'
import Video1 from '../assets/VideoBanner.mp4'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
      <div className='w-full h-[90vh] top-[90px]'>
        <video className='object-cover h-full w-full absolute z-[-1]' src={Video1} autoPlay loop muted />
        <div className='w-full h-[90%] flex flex-col justify-center items-left pl-[8%] text-white'>
           <h1 className='text-5xl text-bold'><span className='text-[#ae3a3a]'>FUTURE</span> SPORTS</h1> 
           <h1 className='text-xl pt-2 pb-4'>Unleash Your Potential, Shape Tomorrow</h1>
            <div>
            <Link to='/JoinNow' className='bg-[#ae3a3a] text-white rounded-md py-2 px-3 text-xl'> Join Now</Link>
            </div>
        </div>
      </div>
    )
}

export default Banner