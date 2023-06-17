
function EventCard(props) {
  const event = props.event;
  return (
    <div className="flex flex-col w-fit p-7 mx-auto lg:m-0 rounded-lg shadow-xl cursor-pointer">
          <img
                  className="rounded-lg w-[250px] h-[200px] lg:w-[350px]"
                  src={`http://127.0.0.1:8000${event.image}`}
                  alt="eventimg"
            />
          <div className="pt-6 flex flex-col gap-3">
            <p className="text-2xl font-bold text-secondColor">
              {event.name}
            </p>
            <div className="flex flex-row items-center gap-3">
              <p className="text-xl font-medium">Opening: </p>
              <span className="text-xl font-medium">{event.opendate}</span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <p className="text-xl font-medium">Closing: </p>
              <span className="text-xl font-medium">{event.closedate}</span>
            </div>
          </div>
        </div>
  )
}

export default EventCard