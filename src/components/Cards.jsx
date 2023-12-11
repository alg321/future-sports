import React from 'react'
import Basic from '../assets/image-4.jpg'
import Gold from '../assets/image-5.jpg'
import Platinum from '../assets/image-7.jpg'
import { HashLink } from 'react-router-hash-link'

const Cards =() => {
    return (
        <div className='w-full py-[6rem] px-4 bg-black'>
           <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg bg-white hover:scale-105 duration-300'>
                <img className='w-40 mx-auto mt-[2rem] rounded-md bg-white' src={Basic} alt="/"/>
                <h2 className='text-3xl text-center text-[#b33737] font-bold py-5'>Basic</h2>
                <p className='text-black text-center text-bold text-3xl'>$10.95 p/w</p>
                    <div className='text-center font-medium'>
                      <p className='text-black py-2 border-b mx-8 mt-4'>24hr Access</p>
                      <p className='text-black py-2 border-b mx-8'>Group Fitness Classes</p>  
                    </div>
                    <HashLink smooth to='/JoinNow/#section2' className='bg-[#b33737] w-[200px] text-center rounded-md font-medium my-6  md:mx-0 px-6 py-3 text-white'>Sign Up</HashLink>
            </div>
            <div className='w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg bg-white hover:scale-105 duration-300'>
                <img className='w-40 mx-auto mt-[2rem] rounded-md bg-white' src={Gold} alt="/"/>
                <h2 className='text-3xl text-center text-[#b33737] font-bold py-5'>Gold</h2>
                <p className='text-black text-center text-bold text-3xl'>$15.95 p/w</p>
                    <div className='text-center font-medium'>
                      <p className='text-black py-2 border-b mx-8 mt-4'>Basic+</p>
                      <p className='text-black py-2 border-b mx-8'>Outdoor 50m Pool</p>
                      <p>2 x Personal Training Sessions</p>  
                    </div>
                    <HashLink smooth to='/JoinNow/#section2' className='bg-[#b33737] w-[200px] text-center rounded-md font-medium my-6  md:mx-0 px-6 py-3 text-white'>Sign Up</HashLink>
            </div>
            <div className='w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg bg-white hover:scale-105 duration-300'>
                <img className='w-40 mx-auto mt-[2rem] rounded-md bg-white' src={Platinum} alt="/"/>
                <h2 className='text-3xl text-center text-[#b33737] font-bold py-5'>Platinum</h2>
                <p className='text-black text-center text-bold text-3xl'>$20.95 p/w</p>
                    <div className='text-center font-medium'>
                      <p className='text-black py-2 border-b mx-8 mt-4'>Gold+</p>
                      <p className='text-black py-2 border-b mx-8'>Sauna & Steam Room Access</p>  
                      <p>Access to All Clubs Across the Country </p>
                    </div>
                    <HashLink smooth to='/JoinNow/#section2' className='bg-[#b33737] w-[200px] text-center rounded-md font-medium my-6  md:mx-0 px-6 py-3 text-white'>Sign Up</HashLink>
            </div>
           </div> 
        </div>
    )
}

export default Cards