import React from 'react'
import {HashLink} from 'react-router-hash-link'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaTiktok,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full mx-auto py-10 px-4 grid lg:grid-cols-3  gap 8 text-[#ae3a3a] bg-white'>
            <div>
                <h1 className='w-full text-3xl font-bold'>Future Sports</h1>
                <p className='py-4 '>Elevate Your Fitness Journey, Ignite Your Potential - Future Sports Gym: Where Passion Meets Performance. Unleash Your Strength, Transform Your Future!</p>
                <div className='flex justify-between md:w-[50%] my-6'>
                    <a href='https://www.instagram.com/'><FaInstagram size={30} /></a>
                    <a href='https://www.facebook.com/'><FaFacebookSquare size={30}/></a>
                    <a href='https://www.twitter.com/'><FaTwitter size={30}/></a>
                    <a href='https://www.tiktok.com/'><FaTiktok size={30}/></a>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-end px-4 mt-4'>
                <div>
                    <h6 className='font-medium'>Links</h6>
                    <ul>
                        <li className='py-2 text-sm'><HashLink smooth to='/future-sports/#section3'>Contact Us</HashLink></li>
                        <a className='text-sm' href='https://maps.app.goo.gl/gsGbXEDeSN6yU76WA'>Location</a>
                        <li className='py-2 text-sm'><HashLink smooth to='/SignInPage/#section2'>Login</HashLink></li>
                        <li className='py-2 text-sm'><HashLink smooth to='/Terms/#section2'>Terms & Conditions</HashLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer