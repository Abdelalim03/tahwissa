import Link from "next/link";
import React from "react";

function DestinationCard({ destination }) {
  const { img, title, cost, location, time, id } = destination;
  return (
    <div className="bg-[#F0F0F073] w-72 rounded-2xl p-3 flex flex-col items-start justify-center hover:scale-105 hover:shadow-lg  transition-all duration-300 hover:-translate-y-1">
      <img className="rounded-2xl w-full" src={img} alt="" />
      <div className="ml-5 leading-10">
        <div className="flex">
          <img
            className=" mr-2 "
            src="/sections/destinations/Location.svg"
            alt=""
          />
          <p className="text-[#8F8F8F] inline text-base">{location}</p>
        </div>
        <Link href={`/intrestpoint/${id}`}>
          <h2 className="text-xl">{title}</h2>
        </Link>
        <p className="text-base mb-2 text-[#636363] ">{time}</p>
        <span className="text-base  text-[#42A7C3]">{cost}</span>
      </div>
    </div>
  );
}

export default DestinationCard;
