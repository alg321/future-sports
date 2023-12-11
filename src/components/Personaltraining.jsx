import React from 'react';
import Photo from  '../assets/image-1.jpg'
import { HashLink } from 'react-router-hash-link';

const Personaltraining = () => {
    return (
        <div className='w-full bg-white py-16'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img  className='w-[400px] mx auto my-4'src={Photo} alt="/" />
                <div className='flex flex-col justify-center'>
                <p1 className='text-[#ae3a3a] font-bold'>Get Shredded Today</p1>
                <h1 className='md:text-3xl sm:text-2xl text-1xl font-bold py-2 text-[#b33737]'>CLASS SCHEDULE</h1>
                <p1>Discover the perfect harmony of fitness and convenience with our flexible class schedule tailored to suit your active lifestyle.</p1>
                <HashLink smooth to='/ClassTimetable/#section2' className='bg-[#b33737] text-center w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Class Times</HashLink>
                </div>
            </div>
        </div>
    )
}

export default Personaltraining