import React from 'react'
import Image from 'next/image'

const DestinationCard = () => {
  return (
    <div className='w-fit flex flex-col px-2 py-4 shadow-lg rounded-xl bg-white relative'>
        <Image className='rounded-2xl relative' src='/bali.webp' alt='bali' width={250} height={250}/>
        <div className='absolute right-5 top-6 bg-white rounded-full p-2'>
          <Image className='' src='/fav-filled.svg' alt='fav' width={28} height={28} />
        </div>
        <div className='h-4'></div>
        <div className='flex flex-row justify-between'>
            <h2 className='text-2xl font-bold'>Bali</h2>
            <h2 className='text-2xl font-semibold'>$1200</h2>
        </div>
        <div className='flex flex-row justify-between'>
            <h2 className='text-lg font-normal text-gray-500'>Indonesia</h2>
            <h2 className='text-lg font-normal text-gray-500'>10 people</h2>
        </div>
        <div>
            ⭐⭐⭐⭐⭐
        </div>
    </div>
  )
}

export default DestinationCard