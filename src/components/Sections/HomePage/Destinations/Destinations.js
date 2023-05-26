import DestinationCard from "@/components/shared/DestinationCard";
import Link from "next/link";
import React from "react";

function Destinations() {
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
  
  return (
    <div className="container flex flex-col gap-5  font-display py-20">
      <div className="flex justify-between px-8 items-center">
        <div className="flex flex-col gap-5">
          <h2 className="title">Popular Destinations</h2>
          <p className="desc">
            Vacations to make your experience enjoyable in Indonesia!
          </p>
        </div>
        <Link href="/intrestpoint" className="text-base text-mainColor">Show all</Link>
      </div>
      <div className="grid  justify-center justify-items-center   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Destinations.map((destination) => {
          return (
            <DestinationCard key={destination.id} destination={destination} />
          );
        })}
      </div>
    </div>
  );
}

export default Destinations;
