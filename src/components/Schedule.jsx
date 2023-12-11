import React from 'react';
import Photo from  '../assets/image-2.jpg'

import { HashLink } from 'react-router-hash-link';

const Schedule = () => {
    return (
        <div className='w-full bg-white py-16'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img  className='w-[500px] mx auto my-4'src={Photo} alt="/" />
                <div className='flex flex-col justify-center'>
                <p1 className='text-[#ae3a3a] font-bold'>Catch a Class Today!</p1>
                <h1 className='md:text-3xl sm:text-2xl text-1xl font-bold py-2 text-[#b33737]'>CHECK OUT OUR CLASSES</h1>
                <p1>Empower your journey to a healthier you with our diverse range of invigorating classes designed for every fitness level.</p1>
                <HashLink smooth to='/Classes/#section2' className='bg-[#b33737] w-[200px] text-center rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Show Me</HashLink>
                </div>
            </div>
        </div>
    )
}

export default Schedule