import DestinationCard from '@/components/shared/DestinationCard';
import FilterCities from '@/components/shared/FilterCities';
import { AlgeriaMap } from '@/components/shared/Maps/Map';
import Title from '@/components/shared/Title'
import { initialCities, initialViewState } from '@/data/data';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function InterestPoint() {
   
  const [cities, setCities] = useState(initialCities);
  const viewState = useSelector(s => s.viewState);
  const dispatch = useDispatch();

 
  useEffect(() => {
    if (viewState.longitude!== 3.1845359510239177 || viewState.latitude!== 36.720780606450575)
      dispatch({type: 'setViewState', payload: initialViewState});
  }, []);

  return (
    <div className='py-24 flex flex-col gap-10'>
      <Title  first={"Lieux Touristiques"} />
      <FilterCities  initialCities={initialCities} setCities={setCities} />
      <div className='flex flex-col lg:flex-row'>
      <div className="flex flex-wrap  w-full justify-center items-center justify-items-center gap-5">
        {cities.map((destination) => {
          return (
            <DestinationCard map={true}   key={destination.id} destination={destination} />
          );
        })}
      </div>
        <div className='flex justify-center items-center min-h-screen w-full'>
        <AlgeriaMap  cities={cities} />
        </div>
      </div>
    </div>
  )
}

export default InterestPoint