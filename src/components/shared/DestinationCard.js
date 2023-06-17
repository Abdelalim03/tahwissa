import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

function DestinationCard({ destination,map }) {
  const { x, y, img, title, category, wilaya, commune, time, id, count_views } = destination;
  const dispatch = useDispatch();
  return (
    <div onMouseEnter={()=>{
      if (map) 
      // setViewport()
    dispatch({type: 'setViewState', payload: {
      longitude: x,
      latitude: y,
      zoom: 15 ,
      transitionDuration: 1500,
    }});
  }
    
    } className="bg-[#F0F0F073] w-72 rounded-2xl p-3 flex flex-col items-start justify-center hover:scale-105 hover:shadow-lg  transition-all duration-300 hover:-translate-y-1">
      <img className="rounded-2xl w-full" src={img} alt="" />
      <div className="ml-5 w-full pr-8 leading-10">
        <div className="flex">
          <img
            className=" mr-2 "
            src="/sections/destinations/Location.svg"
            alt=""
          />
          <p className="text-[#8F8F8F] inline text-base">{commune+', '+wilaya+', Algérie'}</p>
        </div>
        <Link href={`/interestpoints/${id}`}>
          <h2 className="text-xl">{title}</h2>
        </Link>
        <p className="text-base mb-2 text-[#636363] ">{time}</p>
        <div className="flex items-center w-full justify-between">
          <span className="text-base  text-[#42A7C3]">{category}</span>
          <div className="text-black">
            <span className="mr-1">{count_views}</span>
            <FontAwesomeIcon icon={faEye} size="xl" color="black" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
