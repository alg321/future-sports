import React from 'react';
import Photo from '../assets/image-1.jpg';
import { HashLink } from 'react-router-hash-link';

const Personaltraining = () => {
  return (
    <div className='w-full bg-white py-8 md:py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col-reverse md:flex-row'>
        <div className='flex flex-col justify-center text-center md:text-left md:w-1/2'>
          <p1 className='text-[#ae3a3a] font-bold'>Get Shredded Today</p1>
          <h1 className='md:text-3xl sm:text-2xl text-1xl font-bold py-2 text-[#b33737]'>CLASS SCHEDULE</h1>
          <p1>Discover the perfect harmony of fitness and convenience with our flexible class schedule tailored to suit your active lifestyle.</p1>
          <HashLink
            smooth to='/ClassTimetable/#section2' className='bg-[#b33737] text-center w-[200px] rounded-md font-medium my-4 mx-auto md:mx-0 py-3 text-white'>Class Times</HashLink>
        </div>
        <img className='w-full md:w-[400px] mx-auto my-4 md:my-0' src={Photo} alt='/'/>
      </div>
    </div>
  );
};

export default Personaltraining;
