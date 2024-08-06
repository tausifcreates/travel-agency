import React from 'react'
import Image from 'next/image'

const TopNav = () => {
  return (
    <div>
        <div className='flex flex-row justify-between mb-2 mt-2 mx-3'>
            <div className='lg:hidden'>
                <Image src={`/hamburger.svg`} alt='hamburger' width='32' height='32' />
            </div>
            <div className='text-xl font-semibold lg:font-bold'>
                Wander World
            </div>
            <div className='flex flex-row gap-6'>
                <a className='hidden lg:block lg:font-semibold' href="#">Log In</a>
                <a className=' bg-black px-3 text-white lg:font-normal' href="#">Sign In</a>
            </div>
        </div>
        <div className='bg-black h-[0.1rem]'></div>
        <div className='h-[1rem]'></div>
        <div className='hidden lg:flex flex-row gap-8 w-full justify-center'>
            <div className='top-menu-item'>
                Home
            </div>

            <div className='top-menu-item'>
                About Us
            </div>

            <div className='top-menu-item'>
                Destinations
            </div>

            <div className='top-menu-item'>
                Services
            </div>

            <div className='top-menu-item'>
                Testimonials
            </div>

            <div className='top-menu-item'>
                Blog
            </div>

            <div className='top-menu-item'>
                Contact
            </div>
        </div>
    </div>
  )
}

export default TopNav

