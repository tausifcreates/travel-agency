import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import TopNav from "../TopNav";

const Header = () => {
  return (
    <>
      <header className="px-6 lg:px-14 h-full w-full mx-auto">
        <TopNav />
        <div
          className={`${styles["header-bg"]} mt-6 bg-gray-500 text-white pt-8 pb-16 rounded-2xl text-center lg:h-[65%]`}
        >
          <h1 className="text-[1.75rem] leading-9 px-6 font-bold lg:mt-36 lg:leading-[4rem] lg:text-5xl lg:px-36">
            Discover the Worlds Wonders with Wander World
          </h1>
          <div className="h-2 lg:h-6" />
          <p className="text-lg leading-6 px-6 lg:text-xl lg:px-32">
            Embark on unforgettable journeys tailored just for you, with
            personalized travel experiences to the most breathtaking
            destinations across the globe.
          </p>
        </div>

        <div className="lg:px-14">
          <div className={styles["search-bar"]}>
            <div className={styles["search-field"]}>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                placeholder="Where are you going?"
              />
            </div>
            <div className={styles["search-field"]}>
              <label htmlFor="checkin">Check In</label>
              <input type="text" id="checkin" placeholder="mm/dd/yyyy" />
            </div>
            <div className={styles["search-field"]}>
              <label htmlFor="checkout">Check Out</label>
              <input type="text" id="checkout" placeholder="mm/dd/yyyy" />
            </div>
            <div className={styles["search-field"]}>
              <label htmlFor="guests">Guests</label>
              <input type="text" id="guests" placeholder="Add guest" />
            </div>
            <div className={styles["search-button"]}>
              <div className="p-2 bg-black cursor-pointer">
                <Image className="mx-auto" src="/search.svg" alt="" width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
