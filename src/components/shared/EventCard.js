
function EventCard() {
  return (
    <div className="flex flex-col w-fit p-7 mx-auto lg:m-0 rounded-lg shadow-xl cursor-pointer">
          <img
                  className="rounded-lg w-[250px] h-[200px] lg:w-[350px]"
                  src="/test/test2.jpg"
                  alt="eventimg"
            />
          <div className="pt-6 flex flex-col gap-3">
            <p className="text-2xl font-bold text-secondColor">
              Event Title
            </p>
            <div className="flex flex-row items-center gap-3">
              <p className="text-xl font-medium">Opening: </p>
              <span className="text-xl font-medium">15/02/2023</span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <p className="text-xl font-medium">Closing: </p>
              <span className="text-xl font-medium">17/02/2023</span>
            </div>
          </div>
        </div>
  )
}

export default EventCard