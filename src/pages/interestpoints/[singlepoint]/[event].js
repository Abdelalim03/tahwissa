import React, { useEffect, useState } from "react";
import Title from "@/components/shared/Title";
import EventCard from "@/components/shared/EventCard";
import { useRouter } from "next/router";

function events() {
  const router = useRouter();
  const { singlepoint, event } = router.query;
  const [eventdatail, setEvent] = useState({});
  useEffect(() => {
    if (event) {
      const event1 = event.replace('events:', '');
      fetch(`http://127.0.0.1:8000/events/${event1}/?point_of_interest=${singlepoint.replace(/_/g, ' ')}`)
        .then((response) => response.json())
        .then((data) => {
          setEvent(data);
        })
        .catch((err) => console.log(err));
    }
  }, [event]);
  return (
    <div className="py-24  min-h-screen overflow-auto">
      <Title first={"Event Details"} />
      <div className="container mb-5 p-10 w-fit shadow-xl rounded-lg flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col-reverse lg:flex-row gap-10 w-full">
          <EventCard event={eventdatail}/>
          <iframe
            src="https://www.youtube.com/embed/GFgiatqPJ5I"
            className="link rounded-lg flex justify-center items-center bg-slate-400 lg:w-[750px]"
          ></iframe>
        </div>
        <div className="w-full">
          <div
            style={{
              backgroundImage: `url('/background/rochets.jpg')`,
              backgroundSize: "cover",
            }}
            className="flex flex-col w-full px-4 gap-4 py-5 lg:py-10 rounded-lg backdrop-blur-lg"
          >
            <p className="text-white text-xl lg:text-3xl font-bold">
              {" "}
              The Event Description{" "}
            </p>
            <p className="text-white text-lg lg:text-2xl font-semibold">
              {eventdatail.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default events;
