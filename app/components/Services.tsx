import React from "react";
import Image from "next/image";

type ServiceDetail = {
  name: string;
  description: string;
  imageUrl: string;
};

const serviceDetails: ServiceDetail[] = [
  {
    name: "Personalized Itineraries",
    description:
      "Craft your dream vacation with our personalized itineraries, tailored to your interests and preferences.",
    imageUrl: "/map.png",
  },
  {
    name: "Accommodation Booking",
    description:
      "Find the perfect place to stay with our extensive selection of accommodations, from luxury hotels to cozy bed and breakfasts.",
    imageUrl: "/house.png",
  },
  {
    name: "Flight Reservations",
    description:
      "Book your flights with ease through our comprehensive flight reservation service.\
       We offer competitive prices and flexible options to ensure you get the best deal\
      for your travel dates.",
    imageUrl: "/flight.png",
  },
  {
    name: "Travel Insurance",
    description:
      "Travel with peace of mind knowing you're protected with our travel insurance plans.\
       From medical coverage to trip cancellations.",
    imageUrl: "/insurance.png",
  },
];

const Services = () => {
  return (
    <div className="px-6 w-full mx-auto h-full">
      <div className="h-6"></div>

      <div className="mt-6 text-center">
        <h1 className="text-[1.75rem] lg:text-5xl font-bold px-6">
          Our Exclusive Services
        </h1>
        <div className="h-2"></div>
        <p className="text-lg lg:text-xl lg:w-[48rem] px-6">
          Experience a comprehensive range of travel services designed to cater
          to every aspect of your journey
        </p>
      </div>

      <div className="h-8 lg:h-16"></div>

      <div className="flex flex-col lg:flex-row gap-8">
        {serviceDetails.map((service) => (
          <div
            key={service.name}
            className="flex flex-col items-center rounded-2xl shadow-xl text-center mx-auto px-4 w-[16rem] h-[22rem] bg-white"
          >
            <div className="h-10"></div>
            <Image src={`${service.imageUrl}`} alt="" width={64} height={64} />
            <div className="h-2"></div>
            <h2 className="text-2xl font-bold">{service.name}</h2>
            <div className="h-2"></div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="h-12"></div>

      <div className="w-full">
        <button
          className="bg-black w-[16rem] lg:w-[16rem] py-4 text-white 
          text-xl font-bold text-center block mx-auto"
        >
          View More
        </button>
      </div>

      <div className="h-12"></div>
    </div>
  );
};

export default Services;
