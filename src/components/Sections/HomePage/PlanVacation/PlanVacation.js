import FilterCities from "@/components/shared/FilterCities";
import { AlgeriaMap } from "@/components/shared/Maps/Map";
import { initialCities, initialViewState } from "@/data/data";
import  {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PlanVacation() {

  const [cities, setCities] = useState(initialCities);
  const viewState = useSelector(s => s.viewState);
  const dispatch = useDispatch();

 
  useEffect(() => {
    if (viewState.longitude!== 3.1845359510239177 || viewState.latitude!== 36.720780606450575)
      dispatch({type: 'setViewState', payload: initialViewState});
  }, [])
  

  return (
    <div className="vacation flex flex-col py-20 justify-between items-center gap-8 font-display">
      <div className="flex lg:gap-3 flex-col mx-auto">
        <p className="text-center text-3xl font-semibold">Plan Your Vacation</p>
        <p className="text-center text-base text-gray-500">
          For many people a trip is a headache. Register to be able to jointly{" "}
          <br />
          determine vacation destinations an dates
        </p>
      </div>
      <FilterCities initialCities={initialCities} setCities={setCities} />
      <div className=" flex justify-center items-center h-[550px] md:h-[650px] w-[80%]">
        <AlgeriaMap  cities={cities}  />
      </div>
    </div>
  );
}

export default PlanVacation;
