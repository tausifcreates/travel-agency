import React from 'react'
import Image from 'next/image'

const TopNav = () => {
  return (
    <div>
        <div className='flex flex-row justify-between sticky mb-2 mt-2 mx-3'>
            <div className=''>
                <Image src={`/hamburger.svg`} alt='hamburger' width='32' height='32' />
            </div>
            <div className='text-xl font-semibold'>
                Wander World
            </div>
            <div className='flex flex-row'>
                <a className='text-lg bg-black px-3 text-white' href="#">Sign In</a>
                <a className='hidden' href="#">Log In</a>
            </div>
        </div>
        <div className='bg-black h-[0.1rem]'></div>
    </div>
  )
}

export default TopNav

