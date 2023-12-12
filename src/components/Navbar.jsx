import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div id='section2'className='flex justify-between items-center h-24 max-w-(1240px) mx-auto px-4 text-white'>
            <Link to='/future-sports' className='w-[400px] text-5xl font-bold text-[#ae3a3a]'>FUTURE SPORTS</Link>
            <div onClick={handleNav} className='block'>
                {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
            </div>
            <div className= {!nav ? 'fixed z-10 left-0 top-0 w-[35%] lg:w-[20%] h-full border-r border-r-gray-900 bg-[#000300] opacity-80 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#ae3a3a] m-4'>FUTURE SPORTS</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='/future-sports'>Home</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                    <Link to='/ClassTimetable'>Class Schedule</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                    <Link to='/SignInPage'>Login</Link>
                    </li>
                    <li className='p-4'>
                    <Link to='/Classes'>Classes</Link>
                    </li>
                    <li className='p-4'>
                    <Link to='/JoinNow'>Sign Up Today</Link>
                    </li>
                </ul> 
            </div>
        </div>
        
    )
}

export default Navbar