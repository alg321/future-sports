import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Contactform = () => {
    return (
        <div id='section3' className='max-w-[1240px] mx-auto grid grid-flow-row-dense py-14 lg:grid-cols-2'>
            <div className='lg:col-span-1 my-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#b33737]'>Want To Find Out More?</h1>
                <p className='py-4 text-white text-xl'>We'll Send You Some Info</p>
            </div> 
            <div className='max-w-[1240px] mx-auto lg:grid-cols-2'>
                <div className='lg:col-span-2 flex-col sm:flex-row items-center w-full justify-end'>
                    <div className='flex items-center mb-5'>
                        <input className='p-3 flex w-[300px] rounded-md text-black' type='email' placeholder='Enter Email' />
                        <HashLink smooth to='/Submission/#section2' className='flex bg-[#b33737] w-[180px] rounded-md font-medium ml-3 px-6 py-3 text-white text-center'>Get In Touch</HashLink>
                    </div>
                    <input className='w-[500px] h-[150px] align-text-top rounded-md  text-black' type='text' placeholder='How Can We Help?' />
                </div>
            </div>
        </div>
    )
}

export default Contactform