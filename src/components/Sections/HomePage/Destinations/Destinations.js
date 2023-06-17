import DestinationCard from "@/components/shared/DestinationCard";
import { initialCities } from "@/data/data";
import Link from "next/link";

function Destinations() {
  return (
    <div className="container flex flex-col gap-5  font-display py-20">
      <div className="flex justify-between px-8 items-center">
        <div className="flex flex-col gap-5">
          <h2 className="title">Popular Destinations</h2>
          <p className="desc">
            Vacations to make your experience enjoyable in Indonesia!
          </p>
        </div>
        <Link href="/interestpoints" className="text-base text-mainColor">
          Show all
        </Link>
      </div>
      <div className="grid  justify-center justify-items-center   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {initialCities.map((destination) => {
          return (
            <DestinationCard key={destination.id} destination={destination} />
          );
        })}
      </div>
    </div>
  );
}

export default Destinations;
