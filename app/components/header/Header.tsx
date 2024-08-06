import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <>
    <header className='px-6 h-full w-full mx-auto'>
      <div className={`${styles['header-bg']} mt-6 bg-gray-500 text-white pt-8 pb-16 rounded-2xl text-center`}>
        <h1 className='text-[1.75rem] leading-9 px-6 font-bold'>Discover the Worlds Wonders with Wander World</h1>
        <div className='h-2'/>
        <p className='text-lg leading-6 px-6'>
          Embark on unforgettable journeys tailored just for you,
          with personalized travel experiences to the most breathtaking 
          destinations across the globe.
        </p>
      </div>
      
      <div className={styles['search-bar']}>
        <div className={styles['search-field']}>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" placeholder="Where are you going?" />
        </div>
        <div className={styles['search-field']}>
            <label htmlFor="checkin">Check In</label>
            <input type="text" id="checkin" placeholder="mm/dd/yyyy" />
        </div>
        <div className={styles['search-field']}>
            <label htmlFor="checkout">Check Out</label>
            <input type="text" id="checkout" placeholder="mm/dd/yyyy" />
        </div>
        <div className={styles['search-field']}>
            <label htmlFor="guests">Guests</label>
            <input type="text" id="guests" placeholder="Add guest" />
        </div>
        <div className={styles['search-button']}>
            <button type="button">&#x1F50D;</button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header