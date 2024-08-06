import React from 'react'
import Image from 'next/image'
import DestinationCard from './DestinationCard'

const Explore = () => {
  return (
    <div className='px-6 w-full mx-auto'>
        <h1 className='text-3xl px-6 font-bold text-center'>Explore Our Destinations</h1>
        <div className='h-2'/>
        <p className='text-lg px-4 text-center'>
        From the serene beaches of Bali to the vibrant streets of Paris,
         discover a world of possibilities with our carefully curated destinations
        </p>

        <div className='h-12'></div>

        <div className='flex flex-col gap-8 items-center'>
            <DestinationCard />
            <DestinationCard />
            <DestinationCard />
            <DestinationCard />
        </div>

        <div className='h-6'></div>

        <div className='flex flex-row gap-3 w-fit mx-auto items-center'>
          <div className='p-1 bg-white rounded-full'>
            <Image src="/arrow-back.svg" alt="back arrow" width={32} height={32} />
          </div>
          <div className='p-1 bg-black rounded-full'>
            <Image src="/arrow-forward.svg" alt="front arrow" width={32} height={32} />
          </div>
        </div>

        <div className='h-4'></div>
    </div>
  )
}

export default Explore