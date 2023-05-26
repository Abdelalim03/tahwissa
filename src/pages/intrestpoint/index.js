import DestinationCard from '@/components/shared/DestinationCard';
import FilterCities from '@/components/shared/FilterCities';
import { AlgeriaMap } from '@/components/shared/Map';
import Title from '@/components/shared/Title'
import React, { useState } from 'react'

function InterestPoint() {
  const Destinations = [
    {
      id: "1",
      img: "/sections/destinations/bougaa.svg",
      location: "setif, algerie",
      title: "bougaa lafayette",
      cost: "21316",
      time: "3 Days",
    },
    {
      id: "2",
      img: "/sections/destinations/dest1.svg",
      location: "setif, algerie",
      title: "bougaa lafayette",
      cost: "21316",
      time: "3 Days",
    },
    {
      id: "3",
      img: "/sections/destinations/dest2.svg",
      location: "setif, algerie",
      title: "bougaa lafayette",
      cost: "21316",
      time: "3 Days",
    },
    {
      id: "4",
      img: "/sections/destinations/bougaa.svg",
      location: "setif, algerie",
      title: "bougaa lafayette",
      cost: "21316",
      time: "3 Days",
    },
    {
      id: "5",
      img: "/sections/destinations/dest3.svg",
      location: "setif, algerie",
      title: "bougaa lafayette",
      cost: "21316",
      time: "3 Days",
    },
  ];
  const initialCities = [
    {
      x: 3.1845359510239177,
      y: 36.720780606450575,
      city: "bougaa",
      state: "setif",
      themes: ["Histoire"],
      category: "Place",
      description: "",
    },
  ];
  const [cities, setCities] = useState(initialCities);
  return (
    <div className='py-24 flex flex-col gap-10'>
      <Title  first={"Lieux Touristiques"} />
      <FilterCities  initialCities={initialCities} setCities={setCities} />
      <div className='flex flex-col lg:flex-row'>
      <div className="flex flex-wrap  justify-center items-center justify-items-center gap-5">
        {Destinations.map((destination) => {
          return (
            <DestinationCard key={destination.id} destination={destination} />
          );
        })}
      </div>
        <div className='flex justify-center items-center min-h-screen w-full'>
        <AlgeriaMap cities={initialCities} />
        </div>
      </div>
    </div>
  )
}

export default InterestPoint